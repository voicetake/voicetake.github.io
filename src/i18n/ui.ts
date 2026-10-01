export type Locale = 'en' | 'es' | 'pt' | 'de' | 'fr' | 'ja';

export const LOCALES: { code: Locale; name: string; nativeName: string; flag: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
];

export interface Translation {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    features: string;
    specs: string;
    faq: string;
    support: string;
    supportTitle: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    privacyNote: string;
  };
  recorder: {
    studioMode: string;
    studioModeDesc: string;
    speechMode: string;
    speechModeDesc: string;
    startRecording: string;
    stopRecording: string;
    pauseRecording: string;
    resumeRecording: string;
    discardRecording: string;
    recordingState: string;
    pausedState: string;
    readyToRecord: string;
    processingWav: string;
    sampleRate: string;
    channels: string;
    mono: string;
    stereo: string;
    bitDepth: string;
    formatWav: string;
    formatWebm: string;
    downloadWav: string;
    downloadWebm: string;
    visualizerMode: string;
    vizWaveform: string;
    vizFrequency: string;
    vizOscilloscope: string;
    micPermissionDenied: string;
    micPermissionPrompt: string;
    micPermissionGrant: string;
    takesHistory: string;
    takeNumber: string;
    emptyTakes: string;
    clearAllTakes: string;
    deleteTake: string;
    playTake: string;
    pauseTake: string;
    duration: string;
    size: string;
    peakLevel: string;
    clipWarning: string;
  };
  specs: {
    title: string;
    subtitle: string;
    colParam: string;
    colVoiceTake: string;
    colStandard: string;
    rowFormat: string;
    rowFormatVal: string;
    rowFormatStd: string;
    rowAudioEngine: string;
    rowAudioEngineVal: string;
    rowAudioEngineStd: string;
    rowAgc: string;
    rowAgcVal: string;
    rowAgcStd: string;
    rowPrivacy: string;
    rowPrivacyVal: string;
    rowPrivacyStd: string;
    rowSampleRate: string;
    rowSampleRateVal: string;
    rowSampleRateStd: string;
    rowLimit: string;
    rowLimitVal: string;
    rowLimitStd: string;
  };
  features: {
    title: string;
    subtitle: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
    f5Title: string;
    f5Desc: string;
    f6Title: string;
    f6Desc: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  useCases: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string; icon: string }[];
  };
  guide: {
    title: string;
    subtitle: string;
    articles: { title: string; content: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
  };
  footer: {
    rights: string;
    clientSideGuarantee: string;
    supportDev: string;
    github: string;
  };
}

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      title: 'VoiceTake - Free Online Audio Recorder | Lossless Studio WAV',
      description: 'Free online studio audio recorder. Record, visualize, and download uncompressed 16/24-bit PCM WAV in your browser. 100% private, zero server uploads, AGC bypass.',
      keywords: 'online audio recorder, free voice recorder, studio audio recorder, browser audio recorder, lossless wav recorder, record audio online, wav recorder, uncompressed audio recording, voice recorder without limits, web audio recorder, microphone recorder, pcm wav recorder, client side audio recording, free voice memo online',
    },
    nav: {
      features: 'Features',
      specs: 'Studio Specs',
      faq: 'FAQ',
      support: 'Support Developer',
      supportTitle: 'Buy me a coffee to support free open audio tools',
    },
    hero: {
      badge: '100% In-Browser • Zero Compression • Zero Server Uploads',
      titleStart: 'Free Studio-Quality',
      titleHighlight: 'Browser Audio Recorder',
      titleEnd: '',
      subtitle: 'Capture pristine, uncompressed 16/24-bit PCM WAV audio right inside your browser. Automated gain control and echo cancellation are bypassed for raw acoustic authenticity.',
      privacyNote: '🔒 100% Client-Side Private: Your voice never leaves your device or touches any remote server.',
    },
    recorder: {
      studioMode: 'Studio Pure (Raw)',
      studioModeDesc: 'Zero filter, AGC off, echo cancellation off. Pristine dynamic range.',
      speechMode: 'Speech Optimized',
      speechModeDesc: 'Applies noise suppression and echo cancellation for noisy environments.',
      startRecording: 'Start Recording',
      stopRecording: 'Stop Recording',
      pauseRecording: 'Pause',
      resumeRecording: 'Resume',
      discardRecording: 'Reset',
      recordingState: 'Recording Studio Take',
      pausedState: 'Recording Paused',
      readyToRecord: 'Ready to record studio audio',
      processingWav: 'Encoding Lossless PCM WAV...',
      sampleRate: 'Sample Rate',
      channels: 'Channels',
      mono: 'Mono',
      stereo: 'Stereo',
      bitDepth: 'Bit Depth',
      formatWav: 'Lossless WAV (PCM)',
      formatWebm: 'WebM Audio (Opus)',
      downloadWav: 'Download Lossless WAV',
      downloadWebm: 'Download WebM',
      visualizerMode: 'Visualizer',
      vizWaveform: 'Waveform',
      vizFrequency: 'Spectrum',
      vizOscilloscope: 'Oscilloscope',
      micPermissionDenied: 'Microphone access was denied. Please allow microphone permissions in your browser address bar to record.',
      micPermissionPrompt: 'Click Start Recording to grant microphone access.',
      micPermissionGrant: 'Grant Access',
      takesHistory: 'Session Takes',
      takeNumber: 'Take',
      emptyTakes: 'No recordings yet. Hit the record button above to start your first take.',
      clearAllTakes: 'Clear All Takes',
      deleteTake: 'Delete take',
      playTake: 'Play',
      pauseTake: 'Pause',
      duration: 'Duration',
      size: 'Size',
      peakLevel: 'Peak Level',
      clipWarning: 'CLIPPING',
    },
    specs: {
      title: 'Technical Specifications',
      subtitle: 'Compare VoiceTake studio audio capture against standard online voice recorders.',
      colParam: 'Feature / Spec',
      colVoiceTake: 'VoiceTake Engine',
      colStandard: 'Standard Web Recorders',
      rowFormat: 'Audio Output Formats',
      rowFormatVal: 'Uncompressed PCM WAV (16-bit / 24-bit) & Opus WebM',
      rowFormatStd: 'Compressed MP3 / lossy 64kbps Opus',
      rowAudioEngine: 'Audio Processing',
      rowAudioEngineVal: 'Direct Web Audio API Float32 PCM pipeline',
      rowAudioEngineStd: 'Browser MediaRecorder lossy compression',
      rowAgc: 'Hardware Processing Bypass',
      rowAgcVal: 'Echo cancellation & AGC disabled for natural dynamics',
      rowAgcStd: 'Aggressive AGC & noise suppression enabled',
      rowPrivacy: 'Data Privacy & Uploads',
      rowPrivacyVal: '100% In-Browser Memory • Zero Server Uploads',
      rowPrivacyStd: 'Files uploaded to third-party cloud servers',
      rowSampleRate: 'Hardware Sample Rate',
      rowSampleRateVal: 'Native hardware rate (44.1kHz, 48kHz, up to 96kHz)',
      rowSampleRateStd: 'Downsampled to 16kHz or 24kHz',
      rowLimit: 'Recording Limits & Cost',
      rowLimitVal: 'Completely Free • Unlimited duration & takes',
      rowLimitStd: 'Time limits, paywalls, or audio watermarks',
    },
    features: {
      title: 'Built for Audio Perfectionists',
      subtitle: 'Everything you need to capture vocals, musical instruments, voiceovers, and podcasts with zero compromises.',
      f1Title: 'Lossless PCM WAV Export',
      f1Desc: 'Generate true uncompressed RIFF WAV files encoded directly in client-side memory with standard PCM headers compatible with every DAW (Pro Tools, Logic, Ableton, Audacity).',
      f2Title: '100% Client-Side Privacy',
      f2Desc: 'Zero server uploads. Your microphone audio never touches a backend, database, or analytics server. Recordings are held strictly in temporary browser memory.',
      f3Title: 'Raw Studio Acoustic Bypass',
      f3Desc: 'Bypass browser automated gain control (AGC), echo cancellation, and voice isolation filters to record the natural frequency response of your professional microphone.',
      f4Title: '60 FPS Real-time Visualizer',
      f4Desc: 'High-performance HTML5 Canvas visualizer offering real-time waveform, spectral FFT frequency bars, oscilloscope views, and instant peak dB headroom clipping alerts.',
      f5Title: 'Multi-Take Session Manager',
      f5Desc: 'Record multiple takes in a single session. Audition with instant scrubbable playback, compare takes, and download only your best performances.',
      f6Title: 'Zero Install & Mobile Ready',
      f6Desc: 'Runs instantly on desktop (Chrome, Safari, Firefox, Edge) and mobile smartphones/tablets without installing plugins or software.',
    },
    howItWorks: {
      title: 'How It Works in 3 Steps',
      subtitle: 'Studio-grade audio recording made as simple as a single click.',
      step1Title: '1. Select Mode & Allow Mic',
      step1Desc: 'Choose Studio Pure mode for uncompressed instruments/vocals or Speech mode for noisy surroundings. Click Start and grant permission.',
      step2Title: '2. Perform with Live Feedback',
      step2Desc: 'Watch the real-time waveform visualizer and peak VU meters to ensure your levels stay clean without digital clipping.',
      step3Title: '3. Audition & Download WAV',
      step3Desc: 'Instantly playback your take. Click Download Lossless WAV to save your broadcast-ready audio file directly to your disk.',
    },
    useCases: {
      title: 'Engineered for Every Audio Workflow',
      subtitle: 'From quick voice memos to broadcast-ready studio masters, VoiceTake delivers uncompromising fidelity.',
      items: [
        {
          title: 'Voiceover & Auditions',
          desc: 'Record clean vocal auditions with full dynamic nuances, zero background noise suppression artifacts, and broadcast-ready WAV delivery.',
          icon: '🎙️',
        },
        {
          title: 'Vocalists & Songwriters',
          desc: 'Capture acoustic instruments, vocal runs, and spontaneous melodic ideas without aggressive browser compression cutting off natural harmonic overtones.',
          icon: '🎵',
        },
        {
          title: 'Podcasters & Remote Audio',
          desc: 'Record remote guest audio locally in lossless WAV to eliminate Zoom and Google Meet robotic compression artifacts before mixing.',
          icon: '📻',
        },
        {
          title: 'Sound Design & Foley',
          desc: 'Capture real-world sound effects and acoustic textures directly through your USB audio interface or field microphone at native sample rates.',
          icon: '⚡',
        },
        {
          title: 'Journalists & Interviews',
          desc: 'Conduct sensitive interviews with zero recording time limits, infinite takes, and complete confidence that audio never leaves your machine.',
          icon: '📝',
        },
        {
          title: 'YouTubers & Video Creators',
          desc: 'Export crisp, uncompressed WAV voice tracks ready to drag and drop straight into Premiere Pro, DaVinci Resolve, or Final Cut Pro.',
          icon: '🎬',
        },
      ],
    },
    guide: {
      title: 'The Engineering Behind VoiceTake',
      subtitle: 'Discover how modern in-browser Web Audio API architecture surpasses legacy cloud recorders.',
      articles: [
        {
          title: 'Why Uncompressed PCM WAV Outperforms MP3 and Opus',
          content: 'Compressed audio codecs like MP3 and Opus reduce file sizes by permanently removing high-frequency overtones above 16kHz and smoothing transient attacks. Uncompressed 16-bit linear PCM RIFF WAV preserves every single digital audio sample captured by your audio interface converter. This guarantees maximum headroom, transparent equalization, and pristine quality when mastering in DAWs like Pro Tools, Logic Pro, or Ableton Live.',
        },
        {
          title: 'The Problem with Browser Automated Gain Control (AGC)',
          content: 'Standard web browsers automatically alter your microphone sensitivity in real-time to normalize voice chat volume. This creates audible background noise "breathing" during silent pauses and squashes the expressive dynamics of musical instruments. VoiceTake\'s Studio Pure mode explicitly instructs the MediaStream API to disable AGC, echo cancellation, and noise suppression, delivering the pure acoustic response of your microphone.',
        },
        {
          title: 'Full Hardware Sample Rate Support (44.1 kHz, 48 kHz, 96 kHz)',
          content: 'Many online voice recorders downsample audio to 16kHz or 24kHz to reduce server bandwidth costs, resulting in muffled, flat speech. Because VoiceTake executes 100% locally, it captures audio at your interface native clock rate (typically 48kHz for video broadcast or 44.1kHz for CD music production) with zero resampling degradation.',
        },
        {
          title: 'Zero-Knowledge Security: 100% In-Memory Audio Processing',
          content: 'Traditional online tools upload your audio to third-party cloud servers for conversion. This exposes sensitive meetings, personal voice memos, and proprietary music stems to potential interception and AI model scraping. VoiceTake never sends a single byte of audio over the network; all buffer operations occur exclusively inside your device local RAM.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about recording high-fidelity audio in the browser.',
      q1: 'Is VoiceTake truly 100% free and private?',
      a1: 'Yes. VoiceTake is completely free and open. All audio processing and WAV encoding occur exclusively in your local browser using the Web Audio API. No audio data is ever transmitted over the network or saved on any remote server.',
      q2: 'What is the difference between Studio Pure and Speech mode?',
      a2: 'Standard web browsers automatically alter your microphone audio with Echo Cancellation, Noise Suppression, and Automated Gain Control (AGC). Studio Pure mode disables these algorithms to capture the unaltered raw acoustics of your microphone, perfect for music and studio microphones. Speech mode activates gentle noise reduction if you are in an untreated room.',
      q3: 'Can I import the downloaded WAV into DAWs like Audacity or Pro Tools?',
      a3: 'Absolutely. VoiceTake exports standard RIFF PCM WAV files with standard 44.1kHz or 48kHz sampling rates and 16-bit PCM resolution, fully compatible with all audio workstations, video editors (Premiere, DaVinci Resolve, Final Cut), and transcription tools.',
      q4: 'Why is client-side WAV better than MP3 or WebM?',
      a4: 'MP3 and lossy codecs discard subtle acoustic frequencies and introduce phase distortion. Uncompressed WAV preserves 100% of the acoustic data captured by your audio interface or USB microphone without compression artifacts.',
      q5: 'Does VoiceTake work on mobile devices?',
      a5: 'Yes, VoiceTake works smoothly on modern mobile browsers including iOS Safari and Android Chrome with responsive touch-friendly controls.',
      q6: 'Is there any recording time limit or take limit on VoiceTake?',
      a6: 'No. VoiceTake has zero artificial time limits and allows you to record unlimited consecutive takes in a single session. Your recording length is only constrained by your device available RAM.',
      q7: 'Which microphones and audio interfaces are supported?',
      a7: 'VoiceTake works seamlessly with any microphone recognized by your operating system, including built-in laptop/phone microphones, USB studio condenser mics (Blue Yeti, Rode NT-USB, Shure MV7), and professional XLR audio interfaces (Focusrite Scarlett, PreSonus, Universal Audio, MOTU).',
    },
    footer: {
      rights: 'VoiceTake — Free Studio-Quality Browser Audio Recorder. Open source & client-side.',
      clientSideGuarantee: 'Zero server uploads. Your audio data stays on your machine.',
      supportDev: 'Support the Developer on BuyMeACoffee',
      github: 'GitHub Repository',
    },
  },

  es: {
    meta: {
      title: 'VoiceTake - Grabador de Audio Online Gratuito | WAV de Estudio sin Pérdidas',
      description: 'Grabador de audio de estudio online gratuito. Graba, visualiza y descarga PCM WAV sin comprimir de 16/24 bits en tu navegador. 100% privado, sin servidores.',
      keywords: 'grabador de audio online, grabador de voz gratuito, grabador wav sin perdidas, grabador de estudio navegador, grabar audio sin limites, pcm wav online',
    },
    nav: {
      features: 'Características',
      specs: 'Especificaciones',
      faq: 'Preguntas Frecuentes',
      support: 'Apoyar al Desarrollador',
      supportTitle: 'Cómprame un café para apoyar herramientas de audio gratuitas',
    },
    hero: {
      badge: '100% en el Navegador • Cero Compresión • Sin Servidores',
      titleStart: 'Grabador de Audio',
      titleHighlight: 'Calidad de Estudio',
      titleEnd: 'Gratuito',
      subtitle: 'Captura audio PCM WAV puro de 16/24 bits sin comprimir directamente en tu navegador. El control automático de ganancia y la cancelación de eco se omiten para lograr máxima fidelidad acústica.',
      privacyNote: '🔒 100% Privado en tu Dispositivo: Tu voz jamás sube a ningún servidor remoto.',
    },
    recorder: {
      studioMode: 'Estudio Puro (Raw)',
      studioModeDesc: 'Sin filtros, AGC desactivado, cancelación de eco apagada. Rango dinámico puro.',
      speechMode: 'Voz Optimizada',
      speechModeDesc: 'Aplica supresión de ruido y cancelación de eco para entornos ruidosos.',
      startRecording: 'Iniciar Grabación',
      stopRecording: 'Detener Grabación',
      pauseRecording: 'Pausar',
      resumeRecording: 'Reanudar',
      discardRecording: 'Reiniciar',
      recordingState: 'Grabando Toma de Estudio',
      pausedState: 'Grabación Pausada',
      readyToRecord: 'Listo para grabar audio de estudio',
      processingWav: 'Codificando WAV PCM sin pérdidas...',
      sampleRate: 'Frecuencia de Muestreo',
      channels: 'Canales',
      mono: 'Mono',
      stereo: 'Estéreo',
      bitDepth: 'Profundidad de Bits',
      formatWav: 'WAV sin pérdidas (PCM)',
      formatWebm: 'WebM Audio (Opus)',
      downloadWav: 'Descargar WAV sin pérdidas',
      downloadWebm: 'Descargar WebM',
      visualizerMode: 'Visualizador',
      vizWaveform: 'Forma de onda',
      vizFrequency: 'Espectro',
      vizOscilloscope: 'Osciloscopio',
      micPermissionDenied: 'Permiso de micrófono denegado. Permite el acceso en la barra de direcciones de tu navegador.',
      micPermissionPrompt: 'Haz clic en Iniciar Grabación para permitir el acceso al micrófono.',
      micPermissionGrant: 'Permitir Acceso',
      takesHistory: 'Tomas de la Sesión',
      takeNumber: 'Toma',
      emptyTakes: 'Aún no hay grabaciones. Presiona el botón de grabar para comenzar.',
      clearAllTakes: 'Borrar Todas las Tomas',
      deleteTake: 'Eliminar toma',
      playTake: 'Reproducir',
      pauseTake: 'Pausar',
      duration: 'Duración',
      size: 'Tamaño',
      peakLevel: 'Nivel Pico',
      clipWarning: 'SATURACIÓN',
    },
    specs: {
      title: 'Especificaciones Técnicas',
      subtitle: 'Compara la captura de VoiceTake con los grabadores en línea convencionales.',
      colParam: 'Parámetro',
      colVoiceTake: 'Motor VoiceTake',
      colStandard: 'Grabadores Web Estándar',
      rowFormat: 'Formatos de Salida',
      rowFormatVal: 'PCM WAV sin comprimir (16/24 bits) y Opus WebM',
      rowFormatStd: 'MP3 comprimido o lossy Opus a 64kbps',
      rowAudioEngine: 'Procesamiento de Audio',
      rowAudioEngineVal: 'Flujo Web Audio API Float32 PCM directo',
      rowAudioEngineStd: 'Compresión con pérdida MediaRecorder',
      rowAgc: 'Omisión de Filtros',
      rowAgcVal: 'Cancelación de eco y AGC desactivados',
      rowAgcStd: 'AGC agresivo y supresión de ruido forzados',
      rowPrivacy: 'Privacidad y Almacenamiento',
      rowPrivacyVal: '100% Memoria del Navegador • Cero Subidas',
      rowPrivacyStd: 'Archivos enviados a servidores en la nube',
      rowSampleRate: 'Frecuencia de Muestreo',
      rowSampleRateVal: 'Frecuencia nativa de hardware (44.1kHz, 48kHz, 96kHz)',
      rowSampleRateStd: 'Reducido a 16kHz o 24kHz',
      rowLimit: 'Límites y Costo',
      rowLimitVal: 'Completamente Gratis • Tomas y tiempo ilimitados',
      rowLimitStd: 'Límites de tiempo o pagos requeridos',
    },
    features: {
      title: 'Diseñado para Perfeccionistas del Sonido',
      subtitle: 'Todo lo necesario para grabar voces, instrumentos, podcasts y doblajes sin compromisos.',
      f1Title: 'Exportación WAV PCM sin Pérdidas',
      f1Desc: 'Genera archivos RIFF WAV reales sin compresión directamente en memoria, compatibles con cualquier estación de trabajo de audio (Pro Tools, Logic, Ableton, Audacity).',
      f2Title: 'Privacidad 100% del Lado del Cliente',
      f2Desc: 'Cero subidas a servidores. Tu audio jamás viaja por internet ni toca servidores remotos. Todo permanece en la memoria de tu navegador.',
      f3Title: 'Omisión de Filtros Acústicos',
      f3Desc: 'Desactiva el control de ganancia automático (AGC), la cancelación de eco y la supresión de ruido del navegador para capturar la respuesta natural de tu micrófono.',
      f4Title: 'Visualizador a 60 FPS en Tiempo Real',
      f4Desc: 'Visualizador Canvas de alto rendimiento con espectro de frecuencias, forma de onda y alerta de saturación de picos en dB.',
      f5Title: 'Gestor de Sesión Multi-Toma',
      f5Desc: 'Graba múltiples tomas en una misma sesión. Escúchalas al instante, compáralas y descarga tus mejores versiones.',
      f6Title: 'Sin Instalación y Compatible con Móviles',
      f6Desc: 'Funciona al instante en computadoras de escritorio y dispositivos móviles sin instalar complementos.',
    },
    howItWorks: {
      title: 'Cómo Funciona en 3 Pasos',
      subtitle: 'Grabación de audio profesional al alcance de un clic.',
      step1Title: '1. Selecciona Modo y Micrófono',
      step1Desc: 'Elige Estudio Puro para voces e instrumentos o Modo Voz para entornos ruidosos. Pulsa Grabar y otorga permisos.',
      step2Title: '2. Graba con Retroalimentación en Vivo',
      step2Desc: 'Observa la forma de onda y los medidores de picos para mantener tus niveles limpios y sin distorsión.',
      step3Title: '3. Escucha y Descarga WAV',
      step3Desc: 'Reproduce tu toma de inmediato y pulsa Descargar WAV sin pérdidas para guardarla en tu disco.',
    },
    useCases: {
      title: 'Diseñado para Cada Flujo de Trabajo',
      subtitle: 'Desde notas rápidas hasta pistas maestras de estudio con total fidelidad.',
      items: [
        { title: 'Locución y Doblaje', desc: 'Audiciones impecables con dinámica completa y entrega en WAV profesional.', icon: '🎙️' },
        { title: 'Músicos y Cantantes', desc: 'Graba instrumentos acústicos y voces sin que la compresión del navegador corte los armónicos.', icon: '🎵' },
        { title: 'Podcasters y Entrevistas', desc: 'Graba a invitados remotos en WAV sin artefactos robóticos de videollamadas.', icon: '📻' },
        { title: 'Diseño Sonoro y Efectos', desc: 'Captura texturas acústicas reales desde cualquier interfaz USB a frecuencias nativas.', icon: '⚡' },
        { title: 'Periodistas y Estudiantes', desc: 'Entrevistas y notas con duración ilimitada y privacidad 100% en tu dispositivo.', icon: '📝' },
        { title: 'Creadores de Video', desc: 'Pistas de audio cristalinas listas para arrastrar a Premiere, DaVinci o Final Cut.', icon: '🎬' },
      ],
    },
    guide: {
      title: 'La Ingeniería de VoiceTake',
      subtitle: 'Descubre por qué la arquitectura Web Audio API supera a las grabadoras en la nube tradicionales.',
      articles: [
        {
          title: 'Por qué el WAV PCM sin comprimir supera al MP3 y Opus',
          content: 'Los formatos comprimidos eliminan armónicos por encima de 16kHz para ahorrar espacio. El formato PCM WAV sin comprimir conserva el 100% de la información analógica digitalizada sin degradación ni pérdida de dinámica.',
        },
        {
          title: 'El problema del AGC (Control Automático de Ganancia)',
          content: 'Los navegadores ajustan el volumen del micrófono en tiempo real, bombeando ruido en las pausas. El modo Estudio Puro desactiva estos filtros para respetar la acústica original de tu micrófono.',
        },
        {
          title: 'Frecuencias de Muestreo Nativas (44.1kHz, 48kHz, 96kHz)',
          content: 'Al operar 100% en tu máquina, VoiceTake graba a la frecuencia nativa de tu tarjeta de sonido sin re-muestreo destructivo.',
        },
        {
          title: 'Seguridad Zero-Knowledge: 100% en Memoria Local',
          content: 'Ningún dato de audio se transmite por internet. Todas las tomas se almacenan y procesan en la memoria RAM de tu navegador, garantizando confidencialidad absoluta.',
        },
      ],
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre la grabación de audio de alta fidelidad en el navegador.',
      q1: '¿VoiceTake es realmente gratuito y privado?',
      a1: 'Sí. Todo el procesamiento de audio ocurre exclusivamente en tu navegador local. Ningún dato de audio se envía por la red ni se guarda en servidores externos.',
      q2: '¿Cuál es la diferencia entre Estudio Puro y Modo Voz?',
      a2: 'Los navegadores web suelen alterar el micrófono con cancelación de eco y reducción de ruido. El modo Estudio Puro apaga estos filtros para captar la acústica pura de tu micrófono.',
      q3: '¿Puedo abrir los archivos WAV en programas como Audacity o Pro Tools?',
      a3: 'Totalmente. VoiceTake genera archivos estándar RIFF PCM WAV a 44.1kHz o 48kHz con 16 bits de resolución, compatibles con cualquier editor de audio o video.',
      q4: '¿Por qué el formato WAV es mejor que MP3 o WebM?',
      a4: 'MP3 elimina frecuencias sutiles y genera distorsión de fase. WAV sin comprimir conserva el 100% de la información acústica capturada.',
      q5: '¿Funciona en teléfonos móviles?',
      a5: 'Sí, es totalmente compatible con navegadores móviles como Safari en iOS y Chrome en Android.',
      q6: '¿Hay límite de tiempo de grabación o número de tomas?',
      a6: 'No. No hay límites artificiales de tiempo ni de tomas. Puedes grabar tanto como soporte la memoria RAM de tu dispositivo.',
      q7: '¿Qué micrófonos e interfaces son compatibles?',
      a7: 'Cualquier micrófono detectado por tu sistema operativo: micros USB (Blue Yeti, Rode, Shure), interfaces XLR (Focusrite, PreSonus) y micros integrados.',
    },
    footer: {
      rights: 'VoiceTake — Grabador de audio de calidad de estudio gratuito para navegador.',
      clientSideGuarantee: 'Cero subidas a servidores. Tu audio se queda en tu dispositivo.',
      supportDev: 'Apoya al desarrollador en BuyMeACoffee',
      github: 'Repositorio GitHub',
    },
  },

  pt: {
    meta: {
      title: 'VoiceTake - Gravador de Áudio Online Grátis | WAV de Estúdio sem Perdas',
      description: 'Gravador de áudio de estúdio online gratuito. Grave, visualize e baixe PCM WAV não compactado de 16/24 bits no navegador. 100% privado, sem servidores.',
      keywords: 'gravador de audio online, gravador de voz gratis, gravador wav sem perdas, gravar audio no navegador, gravador studio, web audio api',
    },
    nav: {
      features: 'Recursos',
      specs: 'Especificações',
      faq: 'Perguntas Frequentes',
      support: 'Apoiar Desenvolvedor',
      supportTitle: 'Pague-me um café para apoiar ferramentas de áudio gratuitas',
    },
    hero: {
      badge: '100% no Navegador • Zero Compressão • Sem Envio para Servidor',
      titleStart: 'Gravador de Áudio',
      titleHighlight: 'Qualidade de Estúdio',
      titleEnd: 'Gratuito',
      subtitle: 'Capture áudio PCM WAV puro de 16/24 bits não compactado diretamente no navegador. O controle automático de ganho e cancelamento de eco são desativados para fidelidade acústica máxima.',
      privacyNote: '🔒 100% Privado no seu Dispositivo: Sua voz nunca é enviada para nenhum servidor remoto.',
    },
    recorder: {
      studioMode: 'Estúdio Puro (Raw)',
      studioModeDesc: 'Sem filtros, AGC desativado, cancelamento de eco desligado. Faixa dinâmica pura.',
      speechMode: 'Voz Otimizada',
      speechModeDesc: 'Aplica supressão de ruído e cancelamento de eco para ambientes barulhentos.',
      startRecording: 'Iniciar Gravação',
      stopRecording: 'Parar Gravação',
      pauseRecording: 'Pausar',
      resumeRecording: 'Retomar',
      discardRecording: 'Reiniciar',
      recordingState: 'Gravando Tomada de Estúdio',
      pausedState: 'Gravação Pausada',
      readyToRecord: 'Pronto para gravar áudio de estúdio',
      processingWav: 'Codificando WAV PCM sem perdas...',
      sampleRate: 'Taxa de Amostragem',
      channels: 'Canais',
      mono: 'Mono',
      stereo: 'Estéreo',
      bitDepth: 'Profundidade de Bits',
      formatWav: 'WAV sem perdas (PCM)',
      formatWebm: 'WebM Áudio (Opus)',
      downloadWav: 'Baixar WAV sem perdas',
      downloadWebm: 'Baixar WebM',
      visualizerMode: 'Visualizador',
      vizWaveform: 'Forma de onda',
      vizFrequency: 'Espectro',
      vizOscilloscope: 'Osciloscópio',
      micPermissionDenied: 'Permissão de microfone negada. Conceda acesso na barra de endereço do navegador.',
      micPermissionPrompt: 'Clique em Iniciar Gravação para permitir o acesso ao microfone.',
      micPermissionGrant: 'Permitir Acesso',
      takesHistory: 'Tomadas da Sessão',
      takeNumber: 'Tomada',
      emptyTakes: 'Nenhuma gravação ainda. Clique no botão de gravar para iniciar sua primeira tomada.',
      clearAllTakes: 'Limpar Todas as Tomadas',
      deleteTake: 'Excluir tomada',
      playTake: 'Reproduzir',
      pauseTake: 'Pausar',
      duration: 'Duração',
      size: 'Tamanho',
      peakLevel: 'Nível de Pico',
      clipWarning: 'DISTORÇÃO',
    },
    specs: {
      title: 'Especificações Técnicas',
      subtitle: 'Compare a captura de estúdio do VoiceTake com gravadores de voz web padrão.',
      colParam: 'Parâmetro',
      colVoiceTake: 'Motor VoiceTake',
      colStandard: 'Gravadores Web Padrão',
      rowFormat: 'Formatos de Saída',
      rowFormatVal: 'PCM WAV não compactado (16/24 bits) e Opus WebM',
      rowFormatStd: 'MP3 comprimido ou Opus lossy a 64kbps',
      rowAudioEngine: 'Processamento de Áudio',
      rowAudioEngineVal: 'Pipeline direto Float32 PCM da Web Audio API',
      rowAudioEngineStd: 'Compressão com perdas MediaRecorder',
      rowAgc: 'Desvio de Filtros de Hardware',
      rowAgcVal: 'Cancelamento de eco e AGC desativados',
      rowAgcStd: 'AGC agressivo e supressão forçados',
      rowPrivacy: 'Privacidade e Armazenamento',
      rowPrivacyVal: '100% Memória do Navegador • Zero Envios',
      rowPrivacyStd: 'Arquivos enviados para servidores na nuvem',
      rowSampleRate: 'Taxa de Amostragem',
      rowSampleRateVal: 'Taxa nativa do hardware (44.1kHz, 48kHz, até 96kHz)',
      rowSampleRateStd: 'Reduzido para 16kHz ou 24kHz',
      rowLimit: 'Limites e Custo',
      rowLimitVal: 'Totalmente Grátis • Duração e tomadas ilimitadas',
      rowLimitStd: 'Limites de tempo ou assinaturas pagas',
    },
    features: {
      title: 'Criado para Perfeccionistas de Áudio',
      subtitle: 'Tudo o que você precisa para gravar vocais, instrumentos, podcasts e dublagens com máxima fidelidade.',
      f1Title: 'Exportação WAV PCM sem Perdas',
      f1Desc: 'Gere arquivos RIFF WAV reais sem compactação diretamente na memória, compatíveis com qualquer DAW (Pro Tools, Logic, Ableton, Audacity).',
      f2Title: 'Privacidade 100% no Cliente',
      f2Desc: 'Zero envios para servidores. O áudio do seu microfone nunca passa por bancos de dados ou servidores remotos.',
      f3Title: 'Desvio de Filtros Acústicos',
      f3Desc: 'Desative o controle automático de ganho (AGC), cancelamento de eco e filtros de ruído para registrar o som puro do seu microfone.',
      f4Title: 'Visualizador a 60 FPS em Tempo Real',
      f4Desc: 'Visualizador Canvas de alto desempenho com espectro de frequências, forma de onda e alerta de distorção de picos.',
      f5Title: 'Gerenciador de Múltiplas Tomadas',
      f5Desc: 'Grave várias tomadas na mesma sessão. Ouça instantaneamente, compare e baixe apenas os seus melhores desempenhos.',
      f6Title: 'Sem Instalação e Pronto para Celular',
      f6Desc: 'Funciona perfeitamente em computadores e celulares sem a necessidade de baixar aplicativos ou plugins.',
    },
    howItWorks: {
      title: 'Como Funciona em 3 Passos',
      subtitle: 'Gravação de áudio de estúdio com apenas um clique.',
      step1Title: '1. Escolha o Modo e Microfone',
      step1Desc: 'Selecione Estúdio Puro para instrumentos e voz pura, ou Modo Voz para locais com ruído. Clique em Gravar e autorize o microfone.',
      step2Title: '2. Cante ou Fale com Monitoramento',
      step2Desc: 'Observe a forma de onda e o medidor de picos em tempo real para manter o som limpo e sem saturação.',
      step3Title: '3. Ouça e Baixe em WAV',
      step3Desc: 'Ouça sua gravação instantaneamente e clique em Baixar WAV sem perdas para salvar no seu dispositivo.',
    },
    useCases: {
      title: 'Projetado para Todos os Criadores',
      subtitle: 'De gravações vocais a podcasts profissionais com fidelidade total.',
      items: [
        { title: 'Locução e Dublagem', desc: 'Áudio limpo para testes e trabalhos profissionais em WAV sem perda.', icon: '🎙️' },
        { title: 'Músicos e Cantores', desc: 'Capture voz e instrumentos sem o corte de frequências da compressão web.', icon: '🎵' },
        { title: 'Podcasts e Entrevistas', desc: 'Grave áudio remoto em WAV eliminando a compressão de chamadas online.', icon: '📻' },
        { title: 'Efeitos Sonoros e Foley', desc: 'Capture texturas e sons em alta resolução direto da sua interface de áudio.', icon: '⚡' },
        { title: 'Jornalistas e Estudantes', desc: 'Gravações sem limite de tempo com privacidade total no seu navegador.', icon: '📝' },
        { title: 'Criadores de Vídeo', desc: 'Arquivos WAV prontos para edição no Premiere Pro, DaVinci ou Final Cut.', icon: '🎬' },
      ],
    },
    guide: {
      title: 'A Engenharia do VoiceTake',
      subtitle: 'Por que a tecnologia Web Audio API supera gravadores em nuvem tradicionais.',
      articles: [
        {
          title: 'Por que o WAV PCM sem perdas é superior ao MP3',
          content: 'Formatos como MP3 descartam frequências sutis para diminuir o arquivo. O WAV linear PCM preserva 100% dos dados acústicos capturados.',
        },
        {
          title: 'Desativando o Controle Automático de Ganho (AGC)',
          content: 'O AGC dos navegadores comprime a dinâmica e eleva o ruído de fundo. O modo Estúdio Puro desativa esses filtros para manter o som autêntico.',
        },
        {
          title: 'Taxas de Amostragem Nativas (44.1kHz a 96kHz)',
          content: 'Sem re-amostragem destrutiva, VoiceTake opera na taxa nativa do seu hardware para máxima clareza.',
        },
        {
          title: 'Segurança Total: 100% na Memória do Navegador',
          content: 'Nenhum dado de áudio é enviado para servidores. Seus arquivos ficam exclusivamente na memória RAM local.',
        },
      ],
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Tudo o que você precisa saber sobre gravação de áudio de alta fidelidade no navegador.',
      q1: 'O VoiceTake é realmente gratuito e privado?',
      a1: 'Sim. Todo o processamento de áudio acontece exclusivamente no seu navegador local usando a Web Audio API. Nenhum dado de áudio é enviado para servidores.',
      q2: 'Qual é a diferença entre Estúdio Puro e Modo Voz?',
      a2: 'O modo Estúdio Puro desativa o AGC e o cancelamento de eco para capturar o som original e dinâmico do microfone. O Modo Voz ativa filtros leves para reduzir ruídos de fundo.',
      q3: 'Posso abrir o arquivo WAV no Audacity ou Reaper?',
      a3: 'Sim, o arquivo é um PCM WAV padrão em 44.1kHz ou 48kHz em 16 bits, aceito por qualquer software de edição de áudio profissional.',
      q4: 'Por que o WAV sem perdas é superior ao MP3?',
      a4: 'O MP3 descarta frequências para diminuir o tamanho do arquivo. O WAV mantém 100% dos dados originais sem distorção.',
      q5: 'Funciona no celular?',
      a5: 'Sim, funciona tanto no Safari do iPhone quanto no Chrome do Android com interface responsiva.',
      q6: 'Existe limite de tempo de gravação?',
      a6: 'Não. O VoiceTake não impõe limites artificiais de duração ou número de tomadas. O único limite é a memória RAM do seu aparelho.',
      q7: 'Quais microfones são suportados?',
      a7: 'Qualquer microfone reconhecido pelo seu computador ou celular, incluindo microfones USB, fones de ouvido e interfaces XLR.',
    },
    footer: {
      rights: 'VoiceTake — Gravador de áudio com qualidade de estúdio gratuito para navegador.',
      clientSideGuarantee: 'Zero uploads para servidores. Seus dados ficam no seu dispositivo.',
      supportDev: 'Apoie o desenvolvedor no BuyMeACoffee',
      github: 'Repositório GitHub',
    },
  },

  de: {
    meta: {
      title: 'VoiceTake - Kostenloser Online Audio-Recorder | Verlustfreies Studio-WAV',
      description: 'Kostenloser Studio-Audio-Recorder im Browser. Unkomprimiertes 16/24-Bit PCM-WAV aufnehmen, visualisieren und herunterladen. 100% privat, ohne Server.',
      keywords: 'Audio Recorder online, kostenloser Voice Recorder, Studio WAV Recorder, Browser Audio Recorder, verlustfreie Aufnahme, Web Audio API',
    },
    nav: {
      features: 'Funktionen',
      specs: 'Spezifikationen',
      faq: 'Häufige Fragen',
      support: 'Entwickler unterstützen',
      supportTitle: 'Kaufen Sie mir einen Kaffee, um freie Audio-Tools zu unterstützen',
    },
    hero: {
      badge: '100% im Browser • Keine Kompression • Keine Server-Uploads',
      titleStart: 'Kostenloser',
      titleHighlight: 'Studio-Audio-Recorder',
      titleEnd: 'im Browser',
      subtitle: 'Erfassen Sie reines, unkomprimiertes 16/24-Bit-PCM-WAV-Audio direkt in Ihrem Webbrowser. Automatische Verstärkung (AGC) und Echounterdrückung werden für unverfälschte Akustik umgangen.',
      privacyNote: '🔒 100% Client-seitig & privat: Ihre Stimme verlässt niemals Ihr Gerät.',
    },
    recorder: {
      studioMode: 'Studio Pure (Raw)',
      studioModeDesc: 'Keine Filter, AGC aus, Echounterdrückung aus. Voller Dynamikumfang.',
      speechMode: 'Sprachoptimiert',
      speechModeDesc: 'Aktiviert sanfte Rauschunterdrückung für unruhige Umgebungen.',
      startRecording: 'Aufnahme Starten',
      stopRecording: 'Aufnahme Stoppen',
      pauseRecording: 'Pausieren',
      resumeRecording: 'Fortsetzen',
      discardRecording: 'Zurücksetzen',
      recordingState: 'Studio-Aufnahme läuft',
      pausedState: 'Aufnahme Pausiert',
      readyToRecord: 'Bereit für Studio-Aufnahme',
      processingWav: 'Kodierung von verlustfreiem PCM-WAV...',
      sampleRate: 'Abtastrate',
      channels: 'Kanäle',
      mono: 'Mono',
      stereo: 'Stereo',
      bitDepth: 'Bittiefe',
      formatWav: 'Verlustfreies WAV (PCM)',
      formatWebm: 'WebM Audio (Opus)',
      downloadWav: 'Verlustfreies WAV herunterladen',
      downloadWebm: 'WebM herunterladen',
      visualizerMode: 'Visualizer',
      vizWaveform: 'Wellenform',
      vizFrequency: 'Spektrum',
      vizOscilloscope: 'Oszilloskop',
      micPermissionDenied: 'Mikrofonzugriff verweigert. Bitte erlauben Sie den Zugriff in der Adressleiste.',
      micPermissionPrompt: 'Klicken Sie auf Aufnahme Starten, um den Zugriff zu gewähren.',
      micPermissionGrant: 'Zugriff Erlauben',
      takesHistory: 'Sitzungs-Aufnahmen',
      takeNumber: 'Aufnahme',
      emptyTakes: 'Noch keine Aufnahmen vorhanden. Starten Sie oben Ihre erste Aufnahme.',
      clearAllTakes: 'Alle Aufnahmen löschen',
      deleteTake: 'Aufnahme löschen',
      playTake: 'Abspielen',
      pauseTake: 'Pause',
      duration: 'Dauer',
      size: 'Größe',
      peakLevel: 'Spitzenpegel',
      clipWarning: 'ÜBERSTEUERUNG',
    },
    specs: {
      title: 'Technische Spezifikationen',
      subtitle: 'Vergleichen Sie die VoiceTake Studio-Engine mit herkömmlichen Online-Recordern.',
      colParam: 'Eigenschaft',
      colVoiceTake: 'VoiceTake Engine',
      colStandard: 'Standard Web-Recorder',
      rowFormat: 'Audioformate',
      rowFormatVal: 'Unkomprimiertes PCM-WAV (16/24-Bit) & Opus WebM',
      rowFormatStd: 'Komprimiertes MP3 oder 64kbps Opus',
      rowAudioEngine: 'Audioverarbeitung',
      rowAudioEngineVal: 'Direkte Web Audio API Float32 PCM-Pipeline',
      rowAudioEngineStd: 'Verlustbehaftete MediaRecorder-Kompression',
      rowAgc: 'Filter-Bypass',
      rowAgcVal: 'Echounterdrückung und AGC deaktiviert für reinen Klang',
      rowAgcStd: 'Aggressives AGC und Rauschfilter fest aktiv',
      rowPrivacy: 'Datenschutz & Speicher',
      rowPrivacyVal: '100% Browserspeicher • Keine Server-Uploads',
      rowPrivacyStd: 'Dateien werden auf Drittanbieter-Server geladen',
      rowSampleRate: 'Hardware-Abtastrate',
      rowSampleRateVal: 'Native Hardware-Rate (44.1kHz, 48kHz, bis 96kHz)',
      rowSampleRateStd: 'Heruntergerechnet auf 16kHz oder 24kHz',
      rowLimit: 'Aufnahmelimits & Kosten',
      rowLimitVal: 'Vollkommen kostenlos • Unbegrenzte Dauer & Takes',
      rowLimitStd: 'Zeitlimits oder Bezahlschranken',
    },
    features: {
      title: 'Für Audio-Perfektionisten entwickelt',
      subtitle: 'Alles, was Sie für Aufnahmen von Gesang, Instrumenten, Podcasts und Voice-Over ohne Qualitätsverlust benötigen.',
      f1Title: 'Verlustfreier PCM-WAV-Export',
      f1Desc: 'Generieren Sie unkomprimierte RIFF-WAV-Dateien direkt im Browserspeicher, kompatibel mit jeder DAW (Pro Tools, Logic, Cubase, Audacity).',
      f2Title: '100% Client-seitige Privatsphäre',
      f2Desc: 'Keine Server-Uploads. Ihr Audiosignal berührt niemals externe Server oder Datenbanken.',
      f3Title: 'Hardware-Filter-Bypass',
      f3Desc: 'Umgehen Sie die automatische Verstärkungsregelung (AGC) des Browsers, um den vollen Dynamikumfang Ihres Mikrofons einzufangen.',
      f4Title: '60 FPS Echtzeit-Visualizer',
      f4Desc: 'Hochperformanter Canvas-Visualizer mit Frequenzspektrum, Wellenform und Übersteuerungs-Warnanzeige.',
      f5Title: 'Multi-Take Sitzungs-Manager',
      f5Desc: 'Nehmen Sie mehrere Takes in einer Sitzung auf, vergleichen Sie diese sofort und laden Sie nur die besten Versionen herunter.',
      f6Title: 'Keine Installation & Mobil-Bereit',
      f6Desc: 'Läuft direkt im Browser auf Desktop und Smartphones ohne Software-Downloads.',
    },
    howItWorks: {
      title: 'In 3 Schritten zur Studio-Aufnahme',
      subtitle: 'Kristallklares Audio mit nur einem Mausklick.',
      step1Title: '1. Modus & Mikrofon wählen',
      step1Desc: 'Wählen Sie Studio Pure für Instrumente und Gesang oder Sprachmodus bei lauter Umgebung.',
      step2Title: '2. Aufnehmen mit Live-Feedback',
      step2Desc: 'Behalten Sie Wellenform und Pegelanzeige im Auge, um Verzerrungen zu vermeiden.',
      step3Title: '3. Anhören & WAV herunterladen',
      step3Desc: 'Spielen Sie die Aufnahme direkt ab und speichern Sie die verlustfreie WAV-Datei auf Ihrem Rechner.',
    },
    useCases: {
      title: 'Für jeden Audio-Einsatzbereich',
      subtitle: 'Professionelle Aufnahmen für Musiker, Sprecher, Podcaster und Entwickler.',
      items: [
        { title: 'Sprecher & Synchronisation', desc: 'Kristallklare Sprachaufnahmen mit vollem Dynamikumfang ohne Rauschfilter-Artefakte.', icon: '🎙️' },
        { title: 'Sänger & Musiker', desc: 'Nehmen Sie Akustikgitarre und Gesang auf, ohne dass Kompression Obertöne abschneidet.', icon: '🎵' },
        { title: 'Podcaster & Interviews', desc: 'Verlustfreie lokale Aufnahme ohne typische Videokonferenz-Klangverluste.', icon: '📻' },
        { title: 'Sounddesign & Foley', desc: 'Hochwertige Geräusche und Texturen direkt über Ihr USB-Interface aufnehmen.', icon: '⚡' },
        { title: 'Journalisten & Studenten', desc: 'Unbegrenzte Aufnahmedauer mit garantierter lokaler Datensicherheit.', icon: '📝' },
        { title: 'Video-Produzenten', desc: 'WAV-Dateien direkt kompatibel mit Premiere, DaVinci Resolve und Final Cut.', icon: '🎬' },
      ],
    },
    guide: {
      title: 'Die Technik hinter VoiceTake',
      subtitle: 'Warum in-Browser Web Audio API moderne Cloud-Recorder übertrifft.',
      articles: [
        {
          title: 'Warum unkomprimiertes PCM-WAV MP3 überlegen ist',
          content: 'MP3 schneidet Frequenzen ab. Unkomprimiertes PCM-WAV speichert 100% aller Audiosamples für beste Studio-Weiterverarbeitung.',
        },
        {
          title: 'Die Nachteile von Browser-AGC',
          content: 'Automatische Lautstärkeregler pumpen Hintergrundrauschen hoch. Studio Pure umgeht diese Filter vollständig.',
        },
        {
          title: 'Echte Hardware-Abtastraten bis 96 kHz',
          content: 'VoiceTake nutzt die native Taktfrequenz Ihres Mikrofons ohne klangminderndes Downsampling.',
        },
        {
          title: 'Sicherheit: Reines In-Memory-Processing',
          content: 'Keine Server-Uploads. Ihre Aufnahmen verbleiben ausschließlich im lokalen RAM Ihres Rechners.',
        },
      ],
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Alles Wissenswerte über hochwertige Audioaufnahmen direkt im Webbrowser.',
      q1: 'Ist VoiceTake wirklich kostenlos und datenschutzsicher?',
      a1: 'Ja. Die gesamte Audiokodierung findet ausschließlich lokal im Browser über die Web Audio API statt. Es werden keine Daten an Server gesendet.',
      q2: 'Was ist der Unterschied zwischen Studio Pure und Sprachmodus?',
      a2: 'Studio Pure schaltet alle Filter wie automatische Lautstärke und Echounterdrückung ab, um das unberührte Signal Ihres Mikrofons aufzuzeichnen.',
      q3: 'Kann ich die WAV-Dateien in Audacity oder Logic bearbeiten?',
      a3: 'Ja, es handelt sich um Standard-PCM-WAV-Dateien mit 44.1kHz oder 48kHz, die von jedem Audioprogramm gelesen werden können.',
      q4: 'Warum ist WAV besser als MP3?',
      a4: 'MP3 schneidet Frequenzen ab. Unkomprimiertes WAV erhält 100% aller Klangdetails ohne Qualitätsverlust.',
      q5: 'Funktioniert VoiceTake auf dem Smartphone?',
      a5: 'Ja, sowohl auf Safari unter iOS als auch auf Chrome unter Android.',
      q6: 'Gibt es ein Zeitlimit bei der Aufnahme?',
      a6: 'Nein, es gibt keine künstlichen Zeitbegrenzungen. Sie können so lange aufnehmen, wie Ihr Arbeitsspeicher reicht.',
      q7: 'Welche Mikrofone werden unterstützt?',
      a7: 'Alle von Ihrem Betriebssystem erkannten Mikrofone, von USB-Mikrofonen bis hin zu professionellen XLR-Audio-Interfaces.',
    },
    footer: {
      rights: 'VoiceTake — Kostenloser Studio-Audio-Recorder im Browser.',
      clientSideGuarantee: 'Keine Server-Uploads. Ihre Audiodaten bleiben auf Ihrem Gerät.',
      supportDev: 'Entwickler auf BuyMeACoffee unterstützen',
      github: 'GitHub Repository',
    },
  },

  fr: {
    meta: {
      title: 'VoiceTake - Enregistreur Audio en Ligne Gratuit | WAV Studio sans Perte',
      description: 'Enregistreur audio studio gratuit sur navigateur. Enregistrez et téléchargez des fichiers PCM WAV 16/24 bits non compressés. 100% privé, sans serveur.',
      keywords: 'enregistreur audio en ligne, enregistreur vocal gratuit, enregistreur wav sans perte, enregistrer micro navigateur, audio studio web audio api',
    },
    nav: {
      features: 'Fonctionnalités',
      specs: 'Spécifications',
      faq: 'FAQ',
      support: 'Soutenir le Développeur',
      supportTitle: 'Offrez-moi un café pour soutenir les outils audio gratuits',
    },
    hero: {
      badge: '100% dans le Navigateur • Zéro Compression • Zéro Serveur',
      titleStart: 'Enregistreur Audio',
      titleHighlight: 'Qualité Studio',
      titleEnd: 'Gratuit',
      subtitle: 'Capturez du son PCM WAV 16/24 bits pur et non compressé directement dans votre navigateur. Le contrôle automatique de gain et l’annulation d’écho sont désactivés pour une fidélité acoustique totale.',
      privacyNote: '🔒 100% Privé sur votre Appareil : Votre voix ne quitte jamais votre ordinateur.',
    },
    recorder: {
      studioMode: 'Studio Pur (Raw)',
      studioModeDesc: 'Aucun filtre, AGC désactivé, annulation d’écho éteinte. Dynamique sonore totale.',
      speechMode: 'Voix Optimisée',
      speechModeDesc: 'Applique une réduction de bruit légère pour les environnements bruyants.',
      startRecording: 'Lancer l’Enregistrement',
      stopRecording: 'Arrêter l’Enregistrement',
      pauseRecording: 'Pause',
      resumeRecording: 'Reprendre',
      discardRecording: 'Réinitialiser',
      recordingState: 'Enregistrement Prise Studio',
      pausedState: 'Enregistrement en Pause',
      readyToRecord: 'Prêt à enregistrer de l’audio studio',
      processingWav: 'Encodage WAV PCM sans perte...',
      sampleRate: 'Fréquence d’Échantillonnage',
      channels: 'Canaux',
      mono: 'Mono',
      stereo: 'Stéréo',
      bitDepth: 'Profondeur de Bits',
      formatWav: 'WAV sans perte (PCM)',
      formatWebm: 'WebM Audio (Opus)',
      downloadWav: 'Télécharger WAV sans perte',
      downloadWebm: 'Télécharger WebM',
      visualizerMode: 'Visualiseur',
      vizWaveform: 'Forme d’onde',
      vizFrequency: 'Spectre',
      vizOscilloscope: 'Oscilloscope',
      micPermissionDenied: 'Accès au microphone refusé. Veuillez l’autoriser dans la barre d’adresse.',
      micPermissionPrompt: 'Cliquez sur Lancer l’Enregistrement pour autoriser le microphone.',
      micPermissionGrant: 'Autoriser l’Accès',
      takesHistory: 'Prises de la Session',
      takeNumber: 'Prise',
      emptyTakes: 'Aucun enregistrement pour l’instant. Cliquez ci-dessus pour démarrer.',
      clearAllTakes: 'Effacer Toutes les Prises',
      deleteTake: 'Supprimer la prise',
      playTake: 'Lire',
      pauseTake: 'Pause',
      duration: 'Durée',
      size: 'Taille',
      peakLevel: 'Niveau Crête',
      clipWarning: 'SATURATION',
    },
    specs: {
      title: 'Spécifications Techniques',
      subtitle: 'Comparez le moteur studio VoiceTake aux enregistreurs vocaux en ligne classiques.',
      colParam: 'Caractéristique',
      colVoiceTake: 'Moteur VoiceTake',
      colStandard: 'Enregistreurs Web Classiques',
      rowFormat: 'Formats de Sortie',
      rowFormatVal: 'PCM WAV non compressé (16/24 bits) et Opus WebM',
      rowFormatStd: 'MP3 compressé ou Opus 64kbps avec pertes',
      rowAudioEngine: 'Traitement Audio',
      rowAudioEngineVal: 'Pipeline Float32 PCM direct via Web Audio API',
      rowAudioEngineStd: 'Compression MediaRecorder avec pertes',
      rowAgc: 'Contournement des Filtres',
      rowAgcVal: 'Annulation d’écho et AGC désactivés pour une acoustique pure',
      rowAgcStd: 'AGC agressif et réduction de bruit forcés',
      rowPrivacy: 'Confidentialité et Stockage',
      rowPrivacyVal: '100% Mémoire Navigateur • Zéro Envoi Serveur',
      rowPrivacyStd: 'Fichiers téléversés sur des serveurs tiers',
      rowSampleRate: 'Fréquence d’Échantillonnage',
      rowSampleRateVal: 'Fréquence matérielle native (44.1kHz, 48kHz, jusqu’à 96kHz)',
      rowSampleRateStd: 'Sous-échantillonné à 16kHz ou 24kHz',
      rowLimit: 'Limites et Tarif',
      rowLimitVal: 'Entièrement Gratuit • Prises et durée illimitées',
      rowLimitStd: 'Limites de durée ou abonnements payants',
    },
    features: {
      title: 'Conçu pour les Perfectionnistes du Son',
      subtitle: 'Tout ce dont vous avez besoin pour enregistrer voix, instruments et podcasts sans aucun compromis.',
      f1Title: 'Export WAV PCM sans Perte',
      f1Desc: 'Créez de vrais fichiers RIFF WAV non compressés directement dans la mémoire du navigateur, compatibles avec tous les séquenceurs (Pro Tools, Logic, Ableton, Audacity).',
      f2Title: '100% Privé Côté Client',
      f2Desc: 'Zéro envoi sur serveur. Le son de votre micro ne transite par aucun serveur ni aucune base de données.',
      f3Title: 'Contournement des Traitements Automatiques',
      f3Desc: 'Désactivez le contrôle automatique de gain (AGC) et l’annulation d’écho pour capturer la dynamique naturelle de votre microphone.',
      f4Title: 'Visualiseur 60 FPS en Temps Réel',
      f4Desc: 'Visualiseur Canvas haute performance avec spectre de fréquences, forme d’onde et alerte de saturation crête.',
      f5Title: 'Gestionnaire Multi-Prises',
      f5Desc: 'Enregistrez plusieurs prises au cours d’une même session. Écoutez instantanément et ne téléchargez que vos meilleures prises.',
      f6Title: 'Sans Installation & Prêt pour Mobile',
      f6Desc: 'Fonctionne immédiatement sur ordinateur et smartphone sans installer le moindre logiciel.',
    },
    howItWorks: {
      title: 'Comment ça Marche en 3 Étapes',
      subtitle: 'L’enregistrement de qualité studio en un simple clic.',
      step1Title: '1. Choisissez le Mode et le Micro',
      step1Desc: 'Sélectionnez Studio Pur pour instruments et voix pure, ou Mode Voix pour les environnements bruyants.',
      step2Title: '2. Enregistrez avec Retour en Direct',
      step2Desc: 'Surveillez la forme d’onde et les niveaux crête pour garantir un son propre sans distorsion.',
      step3Title: '3. Écoutez et Téléchargez en WAV',
      step3Desc: 'Écoutez votre prise immédiatement et cliquez sur Télécharger WAV sans perte pour sauvegarder sur votre disque.',
    },
    useCases: {
      title: 'Pour Tous les Métiers du Son',
      subtitle: 'La fidélité studio accessible pour la voix, la musique et le podcast.',
      items: [
        { title: 'Voix-off et Doublage', desc: 'Prises propres et dynamiques livrées en WAV sans artefacts de compression.', icon: '🎙️' },
        { title: 'Chant et Musique', desc: 'Enregistrez vos instruments acoustiques en préservant toutes les harmoniques naturelles.', icon: '🎵' },
        { title: 'Podcasts et Émissions', desc: 'Enregistrez vos invités à distance en local sans la dégradation des logiciels de visio.', icon: '📻' },
        { title: 'Design Sonore et Bruitage', desc: 'Captation d’effets sonores à la fréquence native de votre interface audio.', icon: '⚡' },
        { title: 'Journalistes et Interviews', desc: 'Enregistrements sans limite de temps et totalement confidentiels sur votre appareil.', icon: '📝' },
        { title: 'Créateurs Vidéo', desc: 'Fichiers audio WAV prêts à être glissés dans Premiere Pro ou DaVinci Resolve.', icon: '🎬' },
      ],
    },
    guide: {
      title: 'L’Ingénierie Audio derrière VoiceTake',
      subtitle: 'Comprenez pourquoi le traitement Web Audio API local surpasse les serveurs distants.',
      articles: [
        {
          title: 'Pourquoi le WAV PCM sans perte est supérieur au MP3',
          content: 'Le MP3 coupe les hautes fréquences pour réduire le fichier. Le PCM WAV conserve 100% de la dynamique pour un mixage studio parfait.',
        },
        {
          title: 'Le problème du contrôle automatique de gain (AGC)',
          content: 'L’AGC compresse le signal et augmente le souffle pendant les silences. Studio Pur désactive ce filtre pour un rendu pur.',
        },
        {
          title: 'Fréquences d’Échantillonnage Natives (44.1 à 96 kHz)',
          content: 'VoiceTake utilise la fréquence native de votre carte son sans aucun sous-échantillonnage destructif.',
        },
        {
          title: 'Confidentialité Totale en Mémoire Vive',
          content: 'Aucun fichier ne transite par internet. Tout reste exclusivement dans la mémoire vive locale de votre navigateur.',
        },
      ],
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Tout ce qu’il faut savoir sur l’enregistrement audio haute fidélité dans le navigateur.',
      q1: 'VoiceTake est-il vraiment gratuit et sécurisé ?',
      a1: 'Oui. Tout le traitement et l’encodage WAV s’effectuent exclusivement sur votre machine via la Web Audio API. Aucune donnée audio n’est envoyée sur internet.',
      q2: 'Quelle est la différence entre Studio Pur et Mode Voix ?',
      a2: 'Le mode Studio Pur désactive tous les traitements automatiques pour enregistrer le son brut et pur de votre micro. Le Mode Voix applique un léger filtre antibruit.',
      q3: 'Puis-je ouvrir les fichiers WAV dans Audacity ou Logic ?',
      a3: 'Absolument. Il s’agit de fichiers standards RIFF PCM WAV 44.1kHz ou 48kHz en 16 bits reconnus par tous les logiciels.',
      q4: 'Pourquoi le WAV sans perte est-il supérieur au MP3 ?',
      a4: 'Le MP3 supprime des fréquences audibles pour réduire la taille. Le WAV conserve 100% de la dynamique originale.',
      q5: 'Est-ce compatible avec les smartphones ?',
      a5: 'Oui, parfaitement compatible avec Safari sur iOS et Chrome sur Android.',
      q6: 'Y a-t-il une limite de durée d’enregistrement ?',
      a6: 'Non. Il n’y a aucune limite de durée artificielle. Vous pouvez enregistrer aussi longtemps que la mémoire de votre appareil le permet.',
      q7: 'Quels microphones sont supportés ?',
      a7: 'Tous les micros détectés par votre ordinateur ou smartphone : micros USB, casques et cartes son externes XLR.',
    },
    footer: {
      rights: 'VoiceTake — Enregistreur audio qualité studio gratuit pour navigateur.',
      clientSideGuarantee: 'Zéro envoi sur serveur. Vos données audio restent sur votre appareil.',
      supportDev: 'Soutenir le développeur sur BuyMeACoffee',
      github: 'Dépôt GitHub',
    },
  },

  ja: {
    meta: {
      title: 'VoiceTake - 完全無料・高音質オンライン音声レコーダー | 非圧縮スタジオWAV',
      description: 'ブラウザ上で非圧縮スタジオ品質の16/24ビットPCM WAV音声を録音・ダウンロード。完全無料・100%クライアントサイド動作・サーバー送信なし・AGC自動補正を無効化。',
      keywords: 'オンライン音声レコーダー, ボイスレコーダー 無料, 高音質 wav 録音, ブラウザ 録音, スタジオ録音, 音声録音 制限なし, web audio api',
    },
    nav: {
      features: '特徴',
      specs: 'スタジオ仕様',
      faq: 'よくある質問',
      support: '開発者を支援',
      supportTitle: '無料音声ツールを継続開発するためBuyMeACoffeeで応援する',
    },
    hero: {
      badge: '100% ブラウザ内完結 • 非圧縮ロスレス • サーバー送信ゼロ',
      titleStart: '完全無料・スタジオ品質',
      titleHighlight: 'ブラウザ音声レコーダー',
      titleEnd: '',
      subtitle: 'ブラウザ上で原音そのままの16/24ビット非圧縮PCM WAV音声を収録。ブラウザ標準のAGC（自動利得制御）やエコーキャンセラーをバイパスし、プロフェッショナルなダイナミクスを記録します。',
      privacyNote: '🔒 100%端末内完結の完全プライバシー：録音データは外部サーバーに一切送信されません。',
    },
    recorder: {
      studioMode: 'スタジオ・ピュア (Raw)',
      studioModeDesc: 'フィルターなし・AGC無効・エコーキャンセル無効。ありのままのダイナミックレンジをキャプチャ。',
      speechMode: 'スピーチ最適化',
      speechModeDesc: '周囲の雑音が気になる環境向けに、適度なノイズ抑制とエコー除去を適用します。',
      startRecording: '録音を開始',
      stopRecording: '録音を停止',
      pauseRecording: '一時停止',
      resumeRecording: '再開',
      discardRecording: 'リセット',
      recordingState: 'スタジオテイクを録音中',
      pausedState: '一時停止中',
      readyToRecord: 'スタジオ録音の準備完了',
      processingWav: 'ロスレスPCM WAVをエンコード中...',
      sampleRate: 'サンプリングレート',
      channels: 'チャンネル',
      mono: 'モノラル',
      stereo: 'ステレオ',
      bitDepth: 'ビット深度',
      formatWav: '非圧縮ロスレス WAV (PCM)',
      formatWebm: 'WebM オーディオ (Opus)',
      downloadWav: 'ロスレスWAVを保存',
      downloadWebm: 'WebMを保存',
      visualizerMode: '波形表示モード',
      vizWaveform: '波形 (Waveform)',
      vizFrequency: '周波数スペクトル',
      vizOscilloscope: 'オシロスコープ',
      micPermissionDenied: 'マイクへのアクセスが拒否されました。ブラウザのアドレスバーからマイクの使用を許可してください。',
      micPermissionPrompt: '録音を開始ボタンを押してマイクの使用を許可してください。',
      micPermissionGrant: 'アクセスを許可',
      takesHistory: 'セッションテイク履歴',
      takeNumber: 'テイク',
      emptyTakes: 'まだ録音テイクがありません。上の録音ボタンを押して最初のテイクを録音しましょう。',
      clearAllTakes: 'すべてのテイクを消去',
      deleteTake: 'テイクを削除',
      playTake: '再生',
      pauseTake: '一時停止',
      duration: '録音時間',
      size: 'ファイルサイズ',
      peakLevel: 'ピーク音量',
      clipWarning: '音割れ警告 (CLIPPING)',
    },
    specs: {
      title: '技術仕様・性能比較',
      subtitle: 'VoiceTakeのスタジオオーディオエンジンと一般的なWeb音声レコーダーの比較。',
      colParam: '項目 / スペック',
      colVoiceTake: 'VoiceTake エンジン',
      colStandard: '一般的なWebボイスレコーダー',
      rowFormat: '出力音声フォーマット',
      rowFormatVal: '完全非圧縮 PCM WAV (16/24ビット) & Opus WebM',
      rowFormatStd: '圧縮MP3または低音質64kbps Opus',
      rowAudioEngine: '音声処理パイプライン',
      rowAudioEngineVal: 'Web Audio API Float32 PCM ダイレクト処理',
      rowAudioEngineStd: 'ブラウザ標準MediaRecorder非可逆圧縮',
      rowAgc: '自動音量補正のバイパス',
      rowAgcVal: 'AGC・エコーキャンセラを完全バイパスし原音再現',
      rowAgcStd: '強制的なAGCや強ノイズ抑制で原音が変質',
      rowPrivacy: 'プライバシーと保存場所',
      rowPrivacyVal: '100% ブラウザメモリ内完結 • 外部サーバー送信ゼロ',
      rowPrivacyStd: '録音ファイルが第三者クラウドサーバーにアップロード',
      rowSampleRate: 'ハードウェアサンプリング周波数',
      rowSampleRateVal: '端末固有の最高品質 (44.1kHz, 48kHz, 最大96kHz)',
      rowSampleRateStd: '16kHz〜24kHzへ強制ダウンサンプリング',
      rowLimit: '利用制限と料金',
      rowLimitVal: '完全無料 • 録音時間・テイク数無制限',
      rowLimitStd: '時間制限、有料課金、または透かし音',
    },
    features: {
      title: '音にこだわるすべてのクリエイターへ',
      subtitle: 'ボーカル、楽器演奏、ナレーション、ポッドキャストを妥協なき最高音質で記録。',
      f1Title: '完全非圧縮 PCM WAV 書き出し',
      f1Desc: 'ブラウザメモリ内で標準RIFF PCM WAVファイルを生成。Pro Tools、Logic Pro、Ableton Live、AudacityなどのDAWにそのまま読み込めます。',
      f2Title: '100% クライアントサイド・完全プライバシー',
      f2Desc: 'サーバー送信は一切行われません。マイクからの音声はあなたのブラウザメモリ内だけで処理されるため、機密性の高い音声も安心して録音できます。',
      f3Title: '原音ダイナミクスを保つバイパス設計',
      f3Desc: 'ブラウザ独自のAGC（自動音量調整）や音声フィルタを無効化し、コンデンサーマイクやオーディオインターフェースの本来の響きを忠実に記録。',
      f4Title: '60 FPS リアルタイム波形ビジュアライザー',
      f4Desc: '滑らかなHTML5 Canvasビジュアライザーを搭載。スペクトルアナライザー、リアルタイム波形、音割れ（クリッピング）警告表示に対応。',
      f5Title: 'マルチテイク・セッション管理',
      f5Desc: '1回のセッションで何テイクでも連続録音可能。即座に波形シーク付きで試聴・比較し、ベストなテイクだけをダウンロードできます。',
      f6Title: 'インストール不要・スマホ対応',
      f6Desc: 'アプリや拡張機能のインストールは不要。PC・Mac・iPhone・Androidの主要ブラウザで即座に動作します。',
    },
    howItWorks: {
      title: '3つのステップで完了',
      subtitle: 'ワンクリックでスタジオクオリティの録音を。',
      step1Title: '1. モードを選んでマイクを許可',
      step1Desc: '楽器や歌声には「スタジオ・ピュア」、周囲の雑音が気になる場所では「スピーチ最適化」を選択し、マイクを許可します。',
      step2Title: '2. リアルタイム波形を見ながら録音',
      step2Desc: 'リアルタイムの波形とピークレベルメーターを確認しながら、音割れのない最適な音量で録音します。',
      step3Title: '3. 即座に試聴＆WAVダウンロード',
      step3Desc: '録音後すぐにプレイヤーで再生確認。「ロスレスWAVを保存」をクリックするだけで最高音質ファイルが保存されます。',
    },
    useCases: {
      title: 'あらゆるクリエイティブワークフローに最適',
      subtitle: 'ナレーション収録から楽器演奏まで、妥協なきスタジオクオリティを提供。',
      items: [
        { title: '声優・ナレーションオーディション', desc: '声の細やかなニュアンスをそのまま記録し、DAWへ即座に持ち込めるWAV形式で書き出し。', icon: '🎙️' },
        { title: 'ボーカル・シンガーソングライター', desc: 'ブラウザ独自の不要な音量圧縮をバイパスし、アコースティック楽器や歌声の倍音を忠実に録音。', icon: '🎵' },
        { title: 'ポッドキャスト・リモート対談', desc: 'ZoomやMeetのロボット音化を回避し、最高音質WAVで各ホストの音声をローカル収録。', icon: '📻' },
        { title: '効果音制作・フォーリー録音', desc: '日常の環境音やアコースティック素材を、オーディオインターフェース直結で原音キャプチャ。', icon: '⚡' },
        { title: '記者取材・学生の講義メモ', desc: '録音時間無制限・外部送信ゼロの完全プライベート環境で安心して長時間の録音が可能。', icon: '📝' },
        { title: '動画クリエイター・YouTube', desc: 'Premiere ProやDaVinci Resolveにそのままドラッグ＆ドロップできるクリアな音声ファイルを即座に入手。', icon: '🎬' },
      ],
    },
    guide: {
      title: 'VoiceTakeのオーディオエンジニアリング技術',
      subtitle: 'Web Audio APIを活用した完全ローカル処理が従来のWebレコーダーを凌駕する理由。',
      articles: [
        {
          title: 'なぜ非圧縮PCM WAVはMP3やOpusより優れているのか',
          content: 'MP3やOpusなどの非可逆圧縮はファイルサイズを小さくするために16kHz以上の高域やアタック音を間引きます。非圧縮PCM WAVはマイクが捉えた音響信号を1ビットも失わずに記録するため、音の奥行きや透明感を100%保持できます。',
        },
        {
          title: 'ブラウザ標準の自動音量補正（AGC）による音質劣化',
          content: '多くのWebレコーダーは通話用の自動ゲイン（AGC）が働き、静かな部分で背景ノイズを増幅させてしまいます。「スタジオ・ピュア」モードはAGCを強制無効化し、マイク本来の自然な響きを守ります。',
        },
        {
          title: '最高96kHzサンプリング周波数へのネイティブ対応',
          content: '通信量を削減するために音声を強制的に間引くクラウド型ツールと異なり、VoiceTakeはあなたのオーディオインターフェースの最高クロック周波数（44.1kHz / 48kHz / 96kHz）でダイレクトに音を記録します。',
        },
        {
          title: 'ゼロナレッジ・完全プライベートなメモリ内処理',
          content: '録音データが第三者のクラウドサーバーに送信されることは一切ありません。すべての波形処理やWAVファイルの生成は端末のブラウザRAM内だけで完結するため、機密性の高い音声も安心して収録できます。',
        },
      ],
    },
    faq: {
      title: 'よくあるご質問',
      subtitle: 'ブラウザでのスタジオ品質録音についての疑問にお答えします。',
      q1: 'VoiceTakeは本当に無料ですか？音声データは安全ですか？',
      a1: 'はい、完全無料かつオープンにご利用いただけます。すべての音声処理とWAVエンコードは端末のブラウザ内（Web Audio API）でのみ実行され、外部サーバーに送信・保存されることは一切ありません。',
      q2: '「スタジオ・ピュア」と「スピーチ最適化」の違いは何ですか？',
      a2: '通常のブラウザ録音ではエコーキャンセルや自動ゲイン（AGC）が働き、音のダイナミクスが圧縮されます。「スタジオ・ピュア」はこれらを完全にオフにしてマイクの純粋な音を拾います。「スピーチ最適化」は騒がしい場所で会話を録る際に適しています。',
      q3: 'ダウンロードしたWAVは動画編集ソフトやDAWで使えますか？',
      a3: 'はい。標準的なRIFF PCM WAV（44.1kHz/48kHz, 16bit）として書き出されるため、Premiere Pro、DaVinci Resolve、Final Cut Pro、Logic、Audacity等ですぐに使えます。',
      q4: 'MP3やWebMと比べてWAVの利点は何ですか？',
      a4: 'MP3などの非可逆圧縮はファイルサイズを小さくするために高域や微細な音を間引きます。PCM WAVは圧縮を一切行わないため、録音した空気感や倍音を100%残せます。',
      q5: 'スマートフォンでも録音できますか？',
      a5: 'はい、iPhone（Safari）およびAndroid（Chrome）の最新ブラウザで快適にご利用いただけます。',
      q6: '録音時間やテイク数に上限はありますか？',
      a6: 'いいえ。VoiceTakeには時間制限やテイク数の制限は一切ありません。端末のメモリ（RAM）が許す限り長時間の連続録音が可能です。',
      q7: 'どのようなマイクやオーディオインターフェースが使えますか？',
      a7: 'パソコンやスマートフォンが認識できるすべてのマイク（USBコンデンサーマイク、イヤホンマイク、FocusriteやPreSonusなどのXLRオーディオインターフェース）に対応しています。',
    },
    footer: {
      rights: 'VoiceTake — 完全無料・スタジオ品質ブラウザ音声レコーダー。オープンソース＆クライアントサイド。',
      clientSideGuarantee: 'サーバー送信ゼロ。録音データは常にあなたの手元に残ります。',
      supportDev: 'BuyMeACoffeeで開発者をサポートする',
      github: 'GitHub リポジトリ',
    },
  },
};
