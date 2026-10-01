import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Mic,
  Square,
  Pause,
  Play,
  Download,
  RotateCcw,
  Volume2,
  VolumeX,
  Trash2,
  Sliders,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Music,
  Radio,
  Share2,
  Check,
  FileAudio
} from 'lucide-react';
import { encodePcmWav, formatBytes, formatTime, generateFilename } from '../utils/audioEncoder';
import type { Translation } from '../i18n/ui';

interface AudioRecorderProps {
  t: Translation['recorder'];
}

export interface AudioTake {
  id: string;
  takeNumber: number;
  wavBlob: Blob;
  wavUrl: string;
  webmBlob?: Blob;
  webmUrl?: string;
  duration: number;
  sampleRate: number;
  numChannels: number;
  sizeBytes: number;
  timestamp: string;
  peaks: number[];
}

export default function AudioRecorder({ t }: AudioRecorderProps) {
  // Recorder State
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [studioMode, setStudioMode] = useState(true); // default to Studio Pure
  const [visualizerMode, setVisualizerMode] = useState<'waveform' | 'frequency' | 'oscilloscope'>('waveform');
  const [hardwareSampleRate, setHardwareSampleRate] = useState<number | null>(null);
  const [channelsCount, setChannelsCount] = useState<number>(1);
  const [micError, setMicError] = useState<string | null>(null);
  const [isClipping, setIsClipping] = useState(false);
  const [peakDb, setPeakDb] = useState(-Infinity);

  // Takes & Playback State
  const [takes, setTakes] = useState<AudioTake[]>([]);
  const [activeTakeId, setActiveTakeId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(0);
  const [playbackDuration, setPlaybackDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Audio Graph References
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const analyserNodeRef = useRef<AnalyserNode | null>(null);
  const processorNodeRef = useRef<ScriptProcessorNode | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaRecorderChunksRef = useRef<Blob[]>([]);

  // Raw PCM buffers accumulation for WAV export
  const pcmBuffersRef = useRef<{ [channel: number]: Float32Array[] }>({ 0: [] });
  const totalSamplesRef = useRef(0);
  const timerIntervalRef = useRef<number | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const clipTimeoutRef = useRef<number | null>(null);

  // Playback DOM Ref
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      takes.forEach((take) => {
        URL.revokeObjectURL(take.wavUrl);
        if (take.webmUrl) URL.revokeObjectURL(take.webmUrl);
      });
      stopMediaTracks();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const stopMediaTracks = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
  };

  // Start Studio Recording
  const startRecording = async () => {
    setMicError(null);
    setIsClipping(false);
    setPeakDb(-Infinity);

    try {
      // Release any previous tracks
      stopMediaTracks();

      // Audio constraints bypassing browser processing for studio fidelity
      const audioConstraints: MediaTrackConstraints = studioMode
        ? {
            echoCancellation: false,
            autoGainControl: false,
            noiseSuppression: false,
            channelCount: 2,
            sampleRate: { ideal: 48000 },
          }
        : {
            echoCancellation: true,
            autoGainControl: true,
            noiseSuppression: true,
          };

      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: audioConstraints });
      } catch (err) {
        // Fallback to basic audio constraints if strict constraints fail
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      }

      mediaStreamRef.current = stream;

      // Initialize AudioContext
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtxClass();
      audioContextRef.current = ctx;

      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      setHardwareSampleRate(ctx.sampleRate);

      const track = stream.getAudioTracks()[0];
      const settings = track?.getSettings();
      const detectedChannels = settings?.channelCount || 1;
      setChannelsCount(detectedChannels);

      // Create Audio Nodes
      const source = ctx.createMediaStreamSource(stream);
      sourceNodeRef.current = source;

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.8;
      analyserNodeRef.current = analyser;

      source.connect(analyser);

      // Reset PCM Accumulator
      pcmBuffersRef.current = {};
      for (let ch = 0; ch < detectedChannels; ch++) {
        pcmBuffersRef.current[ch] = [];
      }
      totalSamplesRef.current = 0;

      // ScriptProcessor for lossless PCM recording
      const processor = ctx.createScriptProcessor(4096, detectedChannels, detectedChannels);
      processorNodeRef.current = processor;

      processor.onaudioprocess = (e) => {
        if (!isRecordingRef.current || isPausedRef.current) return;

        let maxAmpInFrame = 0;
        for (let ch = 0; ch < detectedChannels; ch++) {
          const inputData = e.inputBuffer.getChannelData(ch);
          const copy = new Float32Array(inputData);
          if (!pcmBuffersRef.current[ch]) pcmBuffersRef.current[ch] = [];
          pcmBuffersRef.current[ch].push(copy);

          for (let i = 0; i < copy.length; i++) {
            const abs = Math.abs(copy[i]);
            if (abs > maxAmpInFrame) maxAmpInFrame = abs;
          }
        }
        totalSamplesRef.current += e.inputBuffer.length;

        const db = maxAmpInFrame > 0 ? 20 * Math.log10(maxAmpInFrame) : -100;
        setPeakDb(Math.max(-60, Math.min(0, Math.round(db))));

        if (maxAmpInFrame >= 0.985) {
          setIsClipping(true);
          if (clipTimeoutRef.current) clearTimeout(clipTimeoutRef.current);
          clipTimeoutRef.current = window.setTimeout(() => setIsClipping(false), 800);
        }
      };

      source.connect(processor);
      const silentGain = ctx.createGain();
      silentGain.gain.value = 0;
      processor.connect(silentGain);
      silentGain.connect(ctx.destination);

      // Optional parallel MediaRecorder
      mediaRecorderChunksRef.current = [];
      try {
        const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
          ? 'audio/webm;codecs=opus'
          : MediaRecorder.isTypeSupported('audio/ogg;codecs=opus')
          ? 'audio/ogg;codecs=opus'
          : '';
        const mr = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
        mr.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            mediaRecorderChunksRef.current.push(event.data);
          }
        };
        mr.start(250);
        mediaRecorderRef.current = mr;
      } catch (mrErr) {}

      setIsRecording(true);
      setIsPaused(false);
      setElapsedTime(0);

      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      const startTime = performance.now();
      timerIntervalRef.current = window.setInterval(() => {
        setElapsedTime((performance.now() - startTime) / 1000);
      }, 50);

      startVisualizerLoop();
    } catch (err: unknown) {
      console.error('Mic access error:', err);
      setMicError(t.micPermissionDenied);
      stopMediaTracks();
    }
  };

  const isRecordingRef = useRef(false);
  const isPausedRef = useRef(false);
  useEffect(() => {
    isRecordingRef.current = isRecording;
    isPausedRef.current = isPaused;
  }, [isRecording, isPaused]);

  const pauseRecording = () => {
    if (!isRecording) return;
    setIsPaused(true);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.pause();
    }
  };

  const resumeRecording = () => {
    if (!isRecording) return;
    setIsPaused(false);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
      mediaRecorderRef.current.resume();
    }
  };

  const stopRecording = async () => {
    if (!isRecording) return;
    setIsProcessing(true);
    setIsRecording(false);
    setIsPaused(false);

    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {}
    }

    if (processorNodeRef.current) {
      processorNodeRef.current.disconnect();
      processorNodeRef.current = null;
    }
    if (sourceNodeRef.current) {
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }

    stopMediaTracks();

    const detectedChannels = channelsCount || 1;
    const sampleRate = hardwareSampleRate || 48000;
    const channelArrays: Float32Array[] = [];

    const totalSamples = totalSamplesRef.current;
    if (totalSamples > 0) {
      for (let ch = 0; ch < detectedChannels; ch++) {
        const fullChannel = new Float32Array(totalSamples);
        let sampleOffset = 0;
        const chunks = pcmBuffersRef.current[ch] || [];
        for (let i = 0; i < chunks.length; i++) {
          fullChannel.set(chunks[i], sampleOffset);
          sampleOffset += chunks[i].length;
        }
        channelArrays.push(fullChannel);
      }
    }

    if (channelArrays.length > 0 && channelArrays[0].length > 0) {
      try {
        const wavBlob = encodePcmWav(channelArrays, sampleRate, 16);
        const wavUrl = URL.createObjectURL(wavBlob);

        let webmBlob: Blob | undefined;
        let webmUrl: string | undefined;
        if (mediaRecorderChunksRef.current.length > 0) {
          webmBlob = new Blob(mediaRecorderChunksRef.current, { type: 'audio/webm' });
          webmUrl = URL.createObjectURL(webmBlob);
        }

        const duration = totalSamples / sampleRate;

        const numPeaks = 64;
        const step = Math.floor(channelArrays[0].length / numPeaks);
        const peaks: number[] = [];
        for (let i = 0; i < numPeaks; i++) {
          let maxVal = 0;
          const start = i * step;
          const end = Math.min(start + step, channelArrays[0].length);
          for (let j = start; j < end; j++) {
            const v = Math.abs(channelArrays[0][j]);
            if (v > maxVal) maxVal = v;
          }
          peaks.push(Math.min(1, maxVal));
        }

        const newTakeNumber = takes.length + 1;
        const newTake: AudioTake = {
          id: `take_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
          takeNumber: newTakeNumber,
          wavBlob,
          wavUrl,
          webmBlob,
          webmUrl,
          duration,
          sampleRate,
          numChannels: detectedChannels,
          sizeBytes: wavBlob.size,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          peaks,
        };

        setTakes((prev) => [newTake, ...prev]);
        setActiveTakeId(newTake.id);
        setPlaybackDuration(duration);
        setPlaybackTime(0);

        if (audioPlayerRef.current) {
          audioPlayerRef.current.src = wavUrl;
        }
      } catch (encErr) {
        console.error('WAV encoding error:', encErr);
      }
    }

    setIsProcessing(false);
    setPeakDb(-Infinity);
  };

  const discardRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setIsPaused(false);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      stopMediaTracks();
      if (processorNodeRef.current) processorNodeRef.current.disconnect();
      if (sourceNodeRef.current) sourceNodeRef.current.disconnect();
    }
    setElapsedTime(0);
    setPeakDb(-Infinity);
    setIsClipping(false);
  };

  // Canvas Visualizer Loop with D8A2A2, FFDCDC, FFF9D6, 8EA66B
  const startVisualizerLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      animFrameRef.current = requestAnimationFrame(render);

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      const analyser = analyserNodeRef.current;
      const active = isRecordingRef.current && !isPausedRef.current && analyser;

      if (!active) {
        // Idle ambient subtle waveform animation using Sage Green & Dusty Rose
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#8EA66B';
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        const time = performance.now() * 0.002;
        for (let x = 0; x < width; x += 2) {
          const y = height / 2 + Math.sin(x * 0.02 + time) * 6 * Math.sin(x * 0.005);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
        return;
      }

      if (visualizerMode === 'waveform' || visualizerMode === 'oscilloscope') {
        const bufferLength = analyser.fftSize;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);

        // Center line
        ctx.strokeStyle = '#2E302B';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();

        // Waveform stroke gradient: Sage Green (#8EA66B) -> Dusty Rose (#D8A2A2) -> Warm Cream (#FFF9D6)
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, '#8EA66B');
        gradient.addColorStop(0.5, '#D8A2A2');
        gradient.addColorStop(1, '#FFF9D6');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.5;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.globalAlpha = 1.0;
        ctx.beginPath();

        const sliceWidth = width / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArray[i] / 128.0;
          const y = (v * height) / 2;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          x += sliceWidth;
        }

        ctx.lineTo(width, height / 2);
        ctx.stroke();
      } else if (visualizerMode === 'frequency') {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        const barCount = Math.min(64, Math.floor(width / 6));
        const barWidth = (width / barCount) - 2;
        const step = Math.floor(bufferLength / barCount);

        for (let i = 0; i < barCount; i++) {
          const value = dataArray[i * step];
          const percent = value / 255;
          const barHeight = Math.max(3, percent * (height - 12));
          const x = i * (barWidth + 2);
          const y = height - barHeight;

          // Frequency bars: Sage Green (#8EA66B) -> Dusty Rose (#D8A2A2) -> Blush (#FFDCDC) on peaks
          const barGrad = ctx.createLinearGradient(0, height, 0, y);
          barGrad.addColorStop(0, '#8EA66B');
          barGrad.addColorStop(0.7, '#D8A2A2');
          barGrad.addColorStop(1, percent > 0.85 ? '#FFDCDC' : '#FFF9D6');

          ctx.fillStyle = barGrad;
          ctx.beginPath();
          ctx.roundRect(x, y, barWidth, barHeight, [2, 2, 0, 0]);
          ctx.fill();
        }
      }

      ctx.restore();
    };

    render();
  }, [visualizerMode]);

  useEffect(() => {
    startVisualizerLoop();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [startVisualizerLoop]);

  // Audio Playback Handling
  const activeTake = takes.find((t) => t.id === activeTakeId) || takes[0];

  const handleSelectTake = (take: AudioTake) => {
    setActiveTakeId(take.id);
    setPlaybackTime(0);
    setPlaybackDuration(take.duration);
    setIsPlaying(false);
    if (audioPlayerRef.current) {
      audioPlayerRef.current.src = take.wavUrl;
      audioPlayerRef.current.currentTime = 0;
    }
  };

  const togglePlayActiveTake = () => {
    const audio = audioPlayerRef.current;
    if (!audio || !activeTake) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (audio.src !== activeTake.wavUrl) {
        audio.src = activeTake.wavUrl;
      }
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => console.error('Playback error:', e));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioPlayerRef.current;
    if (!audio || !activeTake) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    const targetTime = percent * activeTake.duration;
    audio.currentTime = targetTime;
    setPlaybackTime(targetTime);
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    setIsMuted(newVol === 0);
    if (audioPlayerRef.current) {
      audioPlayerRef.current.volume = newVol;
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (audioPlayerRef.current) audioPlayerRef.current.volume = volume || 0.8;
    } else {
      setIsMuted(true);
      if (audioPlayerRef.current) audioPlayerRef.current.volume = 0;
    }
  };

  const triggerDownload = (take: AudioTake, format: 'wav' | 'webm') => {
    const filename = generateFilename(format, take.takeNumber);
    const url = format === 'wav' ? take.wavUrl : (take.webmUrl || take.wavUrl);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDeleteTake = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const take = takes.find((t) => t.id === id);
    if (take) {
      URL.revokeObjectURL(take.wavUrl);
      if (take.webmUrl) URL.revokeObjectURL(take.webmUrl);
    }
    const updated = takes.filter((t) => t.id !== id);
    setTakes(updated);
    if (activeTakeId === id) {
      if (updated.length > 0) {
        handleSelectTake(updated[0]);
      } else {
        setActiveTakeId(null);
        setIsPlaying(false);
        setPlaybackTime(0);
        setPlaybackDuration(0);
        if (audioPlayerRef.current) {
          audioPlayerRef.current.pause();
          audioPlayerRef.current.src = '';
        }
      }
    }
  };

  const handleClearAll = () => {
    takes.forEach((take) => {
      URL.revokeObjectURL(take.wavUrl);
      if (take.webmUrl) URL.revokeObjectURL(take.webmUrl);
    });
    setTakes([]);
    setActiveTakeId(null);
    setIsPlaying(false);
    setPlaybackTime(0);
    setPlaybackDuration(0);
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current.src = '';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      {/* Hidden Audio Element for Playback */}
      <audio
        ref={audioPlayerRef}
        onTimeUpdate={() => {
          if (audioPlayerRef.current) {
            setPlaybackTime(audioPlayerRef.current.currentTime);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          setPlaybackTime(0);
        }}
      />

      {/* Main Studio Console Deck */}
      <div className="relative bg-white dark:bg-[#1A1C18] border border-vt-rose/30 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl shadow-vt-rose/10 dark:shadow-black/50 transition-colors">
        {/* Top Console Bar: Mode Switch & Hardware Specs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-vt-rose/20 dark:border-slate-800/80">
          {/* Mode Switch: Studio Pure vs Speech */}
          <div className="flex items-center gap-2 p-1 bg-vt-cream/60 dark:bg-slate-800/80 rounded-xl border border-vt-rose/20 dark:border-slate-700">
            <button
              type="button"
              disabled={isRecording}
              onClick={() => setStudioMode(true)}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                studioMode
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              } ${isRecording ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Music className="w-3.5 h-3.5 text-vt-rose" />
              <span>{t.studioMode}</span>
            </button>
            <button
              type="button"
              disabled={isRecording}
              onClick={() => setStudioMode(false)}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                !studioMode
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              } ${isRecording ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Radio className="w-3.5 h-3.5 text-vt-sage" />
              <span>{t.speechMode}</span>
            </button>
          </div>

          {/* Technical Specs Indicators */}
          <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 font-mono">
            <span className="flex items-center gap-1 bg-vt-cream/60 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-vt-rose/20 dark:border-slate-700">
              <span className="w-2 h-2 rounded-full bg-vt-sage"></span>
              {hardwareSampleRate ? `${(hardwareSampleRate / 1000).toFixed(1)} kHz` : '48.0 kHz'}
            </span>
            <span className="bg-vt-cream/60 dark:bg-slate-800 px-2.5 py-1 rounded-md border border-vt-rose/20 dark:border-slate-700">
              {channelsCount > 1 ? t.stereo : t.mono}
            </span>
            <span className="bg-vt-cream/60 dark:bg-slate-800 px-2.5 py-1 rounded-md font-bold text-slate-800 dark:text-vt-cream border border-vt-rose/20 dark:border-slate-700">
              16-bit PCM
            </span>
          </div>
        </div>

        {/* Visualizer Deck */}
        <div className="relative mt-6 rounded-2xl overflow-hidden bg-[#111210] border border-vt-rose/20 dark:border-slate-800 shadow-inner">
          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="w-full h-44 sm:h-52 block cursor-default"
          />

          {/* Overlay Status Badges on Visualizer */}
          <div className="absolute top-3 left-4 flex items-center gap-2">
            {isRecording && (
              <span className="flex items-center gap-2 bg-vt-rose/20 border border-vt-rose/70 text-vt-blush text-xs font-semibold px-2.5 py-1 rounded-full animate-pulse backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-vt-rose"></span>
                {isPaused ? t.pausedState : t.recordingState}
              </span>
            )}
            {isClipping && (
              <span className="flex items-center gap-1.5 bg-vt-rose text-white text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">
                <AlertTriangle className="w-3 h-3" />
                {t.clipWarning}
              </span>
            )}
          </div>

          {/* Visualizer Mode Controls */}
          <div className="absolute top-3 right-4 flex items-center gap-1 bg-[#1A1C18]/90 border border-vt-rose/30 p-1 rounded-xl backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setVisualizerMode('waveform')}
              className={`px-2 py-0.5 rounded-lg text-xs font-medium transition-colors ${
                visualizerMode === 'waveform' ? 'bg-vt-sage text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.vizWaveform}
            </button>
            <button
              type="button"
              onClick={() => setVisualizerMode('frequency')}
              className={`px-2 py-0.5 rounded-lg text-xs font-medium transition-colors ${
                visualizerMode === 'frequency' ? 'bg-vt-sage text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.vizFrequency}
            </button>
          </div>

          {/* Peak Level dB Bar */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span>{t.peakLevel}:</span>
              <span className={`font-semibold ${peakDb > -3 ? 'text-vt-rose font-bold' : peakDb > -12 ? 'text-vt-cream' : 'text-vt-sage'}`}>
                {peakDb === -Infinity ? '-∞ dB' : `${peakDb} dB`}
              </span>
            </div>
            <div className="text-slate-500 text-[10px]">
              {studioMode ? 'PURE 100% UNCOMPRESSED' : 'SPEECH FILTER ACTIVE'}
            </div>
          </div>
        </div>

        {/* Live Elapsed Time Readout */}
        <div className="mt-6 flex flex-col items-center justify-center">
          <div className="font-mono text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-baseline">
            <span>{formatTime(isRecording ? elapsedTime : (activeTake ? playbackTime : 0), true)}</span>
            {activeTake && !isRecording && (
              <span className="text-base text-slate-400 dark:text-slate-500 ml-2 font-normal">
                / {formatTime(activeTake.duration)}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {isRecording
              ? (isPaused ? t.pausedState : t.recordingState)
              : isProcessing
              ? t.processingWav
              : (activeTake ? `${t.takeNumber} ${activeTake.takeNumber}` : t.readyToRecord)}
          </p>
        </div>

        {/* Primary Studio Record Controls */}
        <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
          {!isRecording ? (
            <button
              type="button"
              disabled={isProcessing}
              onClick={startRecording}
              className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-vt-rose hover:bg-vt-rose-hover text-white shadow-xl shadow-vt-rose/30 ring-4 ring-vt-blush/60 transition-all transform hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
              aria-label={t.startRecording}
            >
              <div className="absolute inset-0 rounded-full bg-vt-rose/25 animate-ping group-hover:block hidden"></div>
              <Mic className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </button>
          ) : (
            <div className="flex items-center gap-4">
              {/* Pause / Resume Button */}
              <button
                type="button"
                onClick={isPaused ? resumeRecording : pauseRecording}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-vt-cream dark:bg-slate-800 hover:bg-vt-blush dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-vt-rose/20 transition-all cursor-pointer"
                title={isPaused ? t.resumeRecording : t.pauseRecording}
                aria-label={isPaused ? t.resumeRecording : t.pauseRecording}
              >
                {isPaused ? <Play className="w-6 h-6 ml-0.5 text-vt-sage" /> : <Pause className="w-6 h-6 text-slate-700 dark:text-slate-200" />}
              </button>

              {/* Stop & Save Button */}
              <button
                type="button"
                onClick={stopRecording}
                className="flex items-center justify-center w-20 h-20 rounded-full bg-vt-rose hover:bg-vt-rose-hover text-white shadow-xl shadow-vt-rose/40 ring-4 ring-vt-blush/60 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                title={t.stopRecording}
                aria-label={t.stopRecording}
              >
                <Square className="w-8 h-8 fill-current" />
              </button>

              {/* Discard / Reset Button */}
              <button
                type="button"
                onClick={discardRecording}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-vt-cream dark:bg-slate-800 hover:bg-vt-blush/60 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-vt-rose dark:hover:text-vt-rose border border-vt-rose/20 transition-all cursor-pointer"
                title={t.discardRecording}
                aria-label={t.discardRecording}
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Microphone Error Notice */}
        {micError && (
          <div className="mt-6 p-4 rounded-xl bg-vt-blush/40 dark:bg-red-950/40 border border-vt-rose/40 text-slate-800 dark:text-red-300 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-vt-rose mt-0.5" />
            <div>
              <p className="font-semibold">{micError}</p>
              <p className="mt-1 text-xs opacity-85">
                Check that your browser has permission to access your audio interface / microphone.
              </p>
            </div>
          </div>
        )}

        {/* Processing Indicator */}
        {isProcessing && (
          <div className="mt-6 flex items-center justify-center gap-3 p-4 bg-vt-cream/80 dark:bg-slate-800/80 border border-vt-rose/30 text-slate-800 dark:text-vt-cream rounded-xl text-sm font-medium animate-pulse">
            <Sparkles className="w-5 h-5 animate-spin text-vt-rose" />
            <span>{t.processingWav}</span>
          </div>
        )}

        {/* Active Take Player & Quick Action Bar */}
        {activeTake && !isRecording && (
          <div className="mt-8 pt-6 border-t border-vt-rose/20 dark:border-slate-800">
            <div className="flex flex-col gap-4 bg-vt-cream/35 dark:bg-slate-800/40 border border-vt-rose/25 dark:border-slate-700/60 rounded-2xl p-4 sm:p-5">
              {/* Header Info */}
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 dark:text-slate-200">
                    {t.takeNumber} #{activeTake.takeNumber}
                  </span>
                  <span>•</span>
                  <span>{activeTake.timestamp}</span>
                  <span>•</span>
                  <span className="font-mono text-vt-sage font-bold">
                    {formatBytes(activeTake.sizeBytes)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-vt-blush text-slate-800 dark:bg-vt-rose/25 dark:text-vt-blush border border-vt-rose/30 px-2 py-0.5 rounded text-[11px] font-semibold">
                    Lossless WAV
                  </span>
                </div>
              </div>

              {/* Waveform Scrubber Seekbar */}
              <div
                onClick={handleSeek}
                className="relative h-12 w-full bg-slate-200/80 dark:bg-slate-900 rounded-lg flex items-center px-2 gap-1 cursor-pointer overflow-hidden group border border-vt-rose/15"
              >
                {/* Progress Fill */}
                <div
                  className="absolute top-0 bottom-0 left-0 bg-vt-sage/20 border-r-2 border-vt-sage pointer-events-none transition-all duration-75"
                  style={{
                    width: `${Math.min(100, (playbackTime / activeTake.duration) * 100)}%`,
                  }}
                />

                {/* Peak Bars Display */}
                {activeTake.peaks.map((p, idx) => {
                  const percentPos = idx / activeTake.peaks.length;
                  const isPassed = percentPos <= playbackTime / activeTake.duration;
                  return (
                    <div
                      key={idx}
                      className="flex-1 flex items-center justify-center h-full pointer-events-none"
                    >
                      <div
                        className={`w-full rounded-full transition-colors ${
                          isPassed ? 'bg-vt-sage dark:bg-vt-sage' : 'bg-slate-300 dark:bg-slate-700'
                        }`}
                        style={{ height: `${Math.max(12, p * 100)}%` }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Playback Controls & Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlayActiveTake}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 dark:bg-vt-cream text-white dark:text-slate-950 hover:bg-vt-sage dark:hover:bg-vt-blush transition-colors cursor-pointer"
                    aria-label={isPlaying ? t.pauseTake : t.playTake}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <div className="text-xs font-mono text-slate-700 dark:text-slate-300">
                    {formatTime(playbackTime)} / {formatTime(activeTake.duration)}
                  </div>

                  {/* Volume Control */}
                  <div className="hidden sm:flex items-center gap-1.5 ml-2 text-slate-500">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="p-1 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                    >
                      {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                      className="w-16 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-vt-sage"
                    />
                  </div>
                </div>

                {/* Instant Download Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => triggerDownload(activeTake, 'wav')}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-vt-sage hover:bg-vt-sage-hover text-white text-xs sm:text-sm font-semibold shadow-sm shadow-vt-sage/25 transition-all transform hover:scale-102 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-vt-cream" />
                    <span>{t.downloadWav}</span>
                  </button>

                  {activeTake.webmBlob && (
                    <button
                      type="button"
                      onClick={() => triggerDownload(activeTake, 'webm')}
                      className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-vt-cream/80 dark:bg-slate-700/80 hover:bg-vt-blush dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium border border-vt-rose/20 transition-colors cursor-pointer"
                      title={t.downloadWebm}
                    >
                      <FileAudio className="w-3.5 h-3.5" />
                      <span>WebM</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={(e) => handleDeleteTake(activeTake.id, e)}
                    className="p-2 rounded-xl text-slate-400 hover:text-vt-rose hover:bg-vt-blush/40 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
                    title={t.deleteTake}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Session Multi-Takes Ledger */}
      {takes.length > 0 && (
        <div className="bg-white dark:bg-[#1A1C18] border border-vt-rose/25 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm transition-colors">
          <div className="flex items-center justify-between pb-4 border-b border-vt-rose/20 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-vt-sage" />
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {t.takesHistory} ({takes.length})
              </h3>
            </div>
            {takes.length > 1 && (
              <button
                type="button"
                onClick={handleClearAll}
                className="text-xs text-slate-500 hover:text-vt-rose transition-colors cursor-pointer flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{t.clearAllTakes}</span>
              </button>
            )}
          </div>

          <div className="mt-4 divide-y divide-vt-rose/15 dark:divide-slate-800/80">
            {takes.map((take) => {
              const isSelected = activeTake?.id === take.id;
              return (
                <div
                  key={take.id}
                  onClick={() => handleSelectTake(take)}
                  className={`py-3 px-2 flex items-center justify-between gap-3 rounded-xl transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-vt-cream/40 dark:bg-slate-800/60 border border-vt-rose/20'
                      : 'hover:bg-vt-cream/20 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isSelected) {
                          togglePlayActiveTake();
                        } else {
                          handleSelectTake(take);
                        }
                      }}
                      className="w-8 h-8 rounded-full bg-vt-cream dark:bg-slate-800 border border-vt-rose/20 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-vt-blush dark:hover:bg-slate-700"
                    >
                      {isSelected && isPlaying ? (
                        <Pause className="w-3.5 h-3.5" />
                      ) : (
                        <Play className="w-3.5 h-3.5 ml-0.5 text-vt-sage" />
                      )}
                    </button>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        <span>{t.takeNumber} #{take.takeNumber}</span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-vt-sage"></span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2">
                        <span>{formatTime(take.duration)}</span>
                        <span>•</span>
                        <span>{formatBytes(take.sizeBytes)}</span>
                        <span>•</span>
                        <span>{take.timestamp}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerDownload(take, 'wav');
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-vt-cream/60 dark:bg-slate-800 hover:bg-vt-blush dark:hover:bg-slate-700 border border-vt-rose/20 text-slate-800 dark:text-slate-200 text-xs font-medium transition-colors"
                      title="Download 16-bit PCM WAV"
                    >
                      <Download className="w-3.5 h-3.5 text-vt-rose" />
                      <span className="hidden sm:inline">WAV</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleDeleteTake(take.id, e)}
                      className="p-1.5 text-slate-400 hover:text-vt-rose transition-colors"
                      title={t.deleteTake}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Privacy Guarantee Seal */}
      <div className="flex items-center justify-center gap-2 text-xs text-slate-600 dark:text-slate-400 bg-vt-cream/40 dark:bg-slate-900/40 border border-vt-rose/20 dark:border-slate-800/80 py-2.5 px-4 rounded-xl">
        <ShieldCheck className="w-4 h-4 text-vt-sage flex-shrink-0" />
        <span>
          <strong>100% In-Browser Engine:</strong> All audio remains strictly inside your local device memory. Zero server uploads.
        </span>
      </div>
    </div>
  );
}
