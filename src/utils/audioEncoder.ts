/**
 * VoiceTake Lossless PCM WAV Audio Encoder
 * Pure client-side RIFF WAV generator from raw Float32Array PCM samples or AudioBuffer.
 * Zero external libraries, 100% in-browser memory.
 */

export interface WavEncodingOptions {
  sampleRate: number;
  numChannels: number;
  bitDepth?: 16 | 24 | 32;
}

/**
 * Encodes audio buffers (Float32Array for each channel) into a lossless 16-bit PCM RIFF WAV Blob.
 */
export function encodePcmWav(
  channelBuffers: Float32Array[],
  sampleRate: number,
  bitDepth: 16 | 24 = 16
): Blob {
  const numChannels = channelBuffers.length;
  if (numChannels === 0 || !channelBuffers[0]) {
    throw new Error('No audio buffers provided for WAV encoding');
  }

  const numSamples = channelBuffers[0].length;
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * blockAlign;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  // Write ASCII string helper
  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  /* RIFF identifier */
  writeString(0, 'RIFF');
  /* file length minus 8 bytes */
  view.setUint32(4, 36 + dataSize, true);
  /* RIFF type */
  writeString(8, 'WAVE');
  /* format chunk identifier */
  writeString(12, 'fmt ');
  /* format chunk length */
  view.setUint32(16, 16, true);
  /* sample format (raw PCM = 1) */
  view.setUint16(20, 1, true);
  /* channel count */
  view.setUint16(22, numChannels, true);
  /* sample rate */
  view.setUint32(24, sampleRate, true);
  /* byte rate (sample rate * block align) */
  view.setUint32(28, byteRate, true);
  /* block align (channel count * bytes per sample) */
  view.setUint16(32, blockAlign, true);
  /* bits per sample */
  view.setUint16(34, bitDepth, true);
  /* data chunk identifier */
  writeString(36, 'data');
  /* data chunk length */
  view.setUint32(40, dataSize, true);

  // Write interleaved PCM sample data
  let offset = 44;

  if (bitDepth === 16) {
    for (let i = 0; i < numSamples; i++) {
      for (let ch = 0; ch < numChannels; ch++) {
        // Clamp sample to [-1, 1]
        const sample = Math.max(-1, Math.min(1, channelBuffers[ch][i]));
        // Scale to 16-bit signed integer [-32768, 32767]
        const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
        view.setInt16(offset, intSample, true);
        offset += 2;
      }
    }
  } else if (bitDepth === 24) {
    for (let i = 0; i < numSamples; i++) {
      for (let ch = 0; ch < numChannels; ch++) {
        const sample = Math.max(-1, Math.min(1, channelBuffers[ch][i]));
        const intSample = sample < 0 ? sample * 0x800000 : sample * 0x7fffff;
        const intVal = Math.floor(intSample);
        view.setUint8(offset, intVal & 0xff);
        view.setUint8(offset + 1, (intVal >> 8) & 0xff);
        view.setUint8(offset + 2, (intVal >> 16) & 0xff);
        offset += 3;
      }
    }
  }

  return new Blob([buffer], { type: 'audio/wav' });
}

/**
 * Converts an AudioBuffer directly to a 16-bit PCM WAV Blob.
 */
export function audioBufferToWavBlob(audioBuffer: AudioBuffer): Blob {
  const channels: Float32Array[] = [];
  for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
    channels.push(audioBuffer.getChannelData(i));
  }
  return encodePcmWav(channels, audioBuffer.sampleRate, 16);
}

/**
 * Format bytes into human-readable MB / KB string
 */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/**
 * Format seconds into mm:ss or mm:ss.ms
 */
export function formatTime(seconds: number, includeMs = false): string {
  if (isNaN(seconds) || seconds < 0) seconds = 0;
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 100);

  const pad = (n: number) => n.toString().padStart(2, '0');

  if (includeMs) {
    return `${pad(mins)}:${pad(secs)}.${pad(ms)}`;
  }
  return `${pad(mins)}:${pad(secs)}`;
}

/**
 * Generates a clean filename for recordings with timestamp
 */
export function generateFilename(format: 'wav' | 'webm', takeNum: number): string {
  const date = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const dateStr = `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
  return `VoiceTake_Take${takeNum}_${dateStr}.${format}`;
}
