# VoiceTake | Free Studio-Quality Browser Audio Recorder

> A 100% client-side, zero-server lossless audio recorder built with **Astro**, **React Islands**, and **Tailwind CSS**. Record, visualize, and download uncompressed studio-quality WAV audio directly in your browser.

[![Deploy to GitHub Pages](https://github.com/voicetake/voicetake.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/voicetake/voicetake.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Site-voicetake.github.io-0284c7?style=flat&logo=googlechrome&logoColor=white)](https://voicetake.github.io)
[![Support Developer](https://img.shields.io/badge/Support-Buy%20Me%20A%20Coffee-amber?style=flat&logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/kisharadilz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🎯 Architectural Overview

- **Static Framework**: [Astro 5+](https://astro.build) for static site generation (SSG), subpath routing, fast load times, and technical SEO.
- **UI & Audio State**: [React](https://react.dev) (Islands Architecture via `@astrojs/react`) for managing `MediaRecorder`, Web Audio API nodes, dynamic canvas visualizers, and scrubbable playback.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) configured with custom light/dark theme tokens, responsive layouts, and accessible touch targets.
- **Zero-Server Audio Engine**:
  - Uses native browser `Web Audio API` and `MediaDevices API`.
  - Captures raw Float32Array PCM samples directly from microphone inputs.
  - Bypasses browser automated gain control (`autoGainControl: false`), echo cancellation (`echoCancellation: false`), and noise suppression (`noiseSuppression: false`) in **Studio Pure** mode.
  - In-browser lossless 16-bit PCM RIFF WAV encoder (`audio/wav`) — zero server uploads, 100% client-side memory privacy.

---

## ⚡ Core Features

1. **Studio Pure Acoustic Capture**:
   - Disables standard browser audio compression algorithms, AGC, and echo filters.
   - Captures microphone hardware at up to 48kHz / 96kHz with full dynamic range.
2. **Lossless RIFF PCM WAV Export**:
   - Generates standard uncompressed 16-bit PCM WAV files client-side.
   - Directly importable into any professional DAW (Pro Tools, Logic Pro, Ableton Live, Audacity, Cubase).
   - Optional WebM (Opus) export for lightweight sharing.
3. **60 FPS Real-Time Canvas Visualizer**:
   - Smooth HTML5 Canvas visualizer supporting **Dynamic Waveforms** and **FFT Frequency Spectrum** bars.
   - Real-time peak dB monitoring with instant digital **clipping warnings**.
4. **Instant Playback & Waveform Scrubber**:
   - Integrated custom player with interactive peak-profile scrubber, playhead, volume slider, and duration tracking.
5. **Multi-Take Session Manager**:
   - Record consecutive takes in one session.
   - Compare and audition takes, view exact file sizes and timestamps, and download individual takes or clear history.
6. **Strict Technical SEO & i18n**:
   - Static localized subpaths for 6 major languages:
     - English (`/`)
     - Spanish (`/es/`)
     - Portuguese (`/pt/`)
     - German (`/de/`)
     - French (`/fr/`)
     - Japanese (`/ja/`)
   - Complete `hreflang` alternate links with `x-default`.
   - Open Graph tags with `<meta property="og:site_name" content="VoiceTake">`.
   - Twitter Summary Large Image cards.
   - Dynamic JSON-LD structured data schemas:
     - `schema.org/WebSite`
     - `schema.org/WebApplication` (MultimediaApplication)
     - `schema.org/SoftwareApplication` (MultimediaApplication)
   - Auto-generated `sitemap-index.xml` via `@astrojs/sitemap` and `robots.txt`.

---

## 🛠️ Development & Build Commands

All commands are run from the project root:

```bash
# Install dependencies
npm install

# Start local development server (with hot reload)
npm run dev

# Build production static bundle to ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment to GitHub Pages

This repository is preconfigured for automatic deployment to **GitHub Pages** root domain (`https://voicetake.github.io`).

1. Ensure the repository has GitHub Pages enabled under **Settings > Pages**:
   - **Source**: `GitHub Actions`
2. Push commits to `main` branch.
3. The `.github/workflows/deploy.yml` workflow will automatically test, build, and deploy the production bundle to GitHub Pages.

---

## ☕ Support the Developer

If you find VoiceTake helpful, consider supporting its continued open-source development:

👉 **[buymeacoffee.com/kisharadilz](https://buymeacoffee.com/kisharadilz)**

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
