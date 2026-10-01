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
      title: 'VoiceTake | Free Studio-Quality Browser Audio Recorder',
      description: 'Record, visualize, and download uncompressed studio-quality WAV audio directly in your browser. 100% client-side, zero server uploads, bypasses AGC for pristine sound.',
      keywords: 'audio recorder, studio audio recorder, browser audio recorder, lossless WAV recorder, high quality voice recorder, client side audio recording, web audio api',
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
      title: 'VoiceTake | Grabador de Audio de Calidad de Estudio Gratuito',
      description: 'Graba, visualiza y descarga audio WAV sin comprimir con calidad de estudio directamente en tu navegador. 100% del lado del cliente, sin servidores y sin AGC.',
      keywords: 'grabador de audio, grabadora de voz online, grabador wav sin pérdidas, audio de estudio en navegador, grabadora sin servidor, web audio api',
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
      title: 'VoiceTake | Gravador de Áudio com Qualidade de Estúdio Grátis',
      description: 'Grave, visualize e baixe áudio WAV não compactado com qualidade de estúdio diretamente no navegador. 100% no cliente, sem servidores e sem AGC.',
      keywords: 'gravador de audio, gravador de voz online, gravador wav sem perdas, gravar audio no navegador, gravador studio, web audio api',
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
      title: 'VoiceTake | Kostenloser Studio-Audio-Recorder im Browser',
      description: 'Nehmen Sie unkomprimiertes Studio-WAV-Audio direkt in Ihrem Browser auf. 100% Client-seitig, keine Server-Uploads, ohne automatische Verstärkungsregelung.',
      keywords: 'Audio Recorder, Studio Voice Recorder, WAV Recorder ohne Verlust, Browser Audio Recorder, Mikrofon Aufnahme, Web Audio API',
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
      title: 'VoiceTake | Enregistreur Audio Qualité Studio Gratuit sur Navigateur',
      description: 'Enregistrez, visualisez et téléchargez des fichiers audio WAV non compressés de qualité studio directement dans votre navigateur. 100% côté client, zéro serveur.',
      keywords: 'enregistreur audio, enregistreur vocal studio, enregistreur wav sans perte, enregistreur audio navigateur, micro studio en ligne, web audio api',
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
      title: 'VoiceTake | 完全無料・スタジオ品質ブラウザ音声レコーダー',
      description: 'ブラウザ上で非圧縮スタジオ品質のWAV音声を録音・可視化・ダウンロード。100%クライアントサイド動作・サーバー送信なし・AGC自動補正を無効化し純粋な原音を収録。',
      keywords: '音声レコーダー, ボイスレコーダー オンライン, 高音質 WAV 録音, スタジオ品質 録音, ブラウザ 録音, 完全無料 録音, Web Audio API',
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
    },
    footer: {
      rights: 'VoiceTake — 完全無料・スタジオ品質ブラウザ音声レコーダー。オープンソース＆クライアントサイド。',
      clientSideGuarantee: 'サーバー送信ゼロ。録音データは常にあなたの手元に残ります。',
      supportDev: 'BuyMeACoffeeで開発者をサポートする',
      github: 'GitHub リポジトリ',
    },
  },
};
