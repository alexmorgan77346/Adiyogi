# 🧘 ADIYOGI PWA

> A free, offline-first Progressive Web App for daily mindfulness and meditation practice.

![ADIYOGI App](https://img.shields.io/badge/PWA-Ready-blueviolet?style=flat-square) ![Offline](https://img.shields.io/badge/Offline-Supported-green?style=flat-square) ![No Tracking](https://img.shields.io/badge/Privacy-No%20Tracking-orange?style=flat-square)

---

## ✨ Features

- **7 Complete Meditation Techniques** — Focused Attention, Mindfulness, Loving-Kindness, Body Scan, Mantra, Walking, Visualization
- **Step-by-step guides** for every technique
- **Built-in meditation timer** with circular progress ring and bell sound
- **Dark & Light themes** — persisted across sessions
- **PWA installable** — Add to Home Screen, works like a native app
- **Full offline support** — Service Worker caches all content
- **Search & filter** — Find techniques by name or category
- **No account. No tracking. No ads.**

---

## 📁 File Structure

```
meditate/
├── index.html              # Home page
├── techniques.html         # All techniques (search + filter)
├── technique-detail.html   # Individual technique detail + timer
├── about.html              # About page
├── offline.html            # Offline fallback
├── styles.css              # All styles (CSS variables, dark/light)
├── app.js                  # SW registration, theme, timer, install
├── data.js                 # All technique data
├── manifest.json           # PWA manifest
├── service-worker.js       # Offline caching
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

---

## 🚀 Run Locally

### Option 1: VS Code Live Server
1. Open the `meditate/` folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**

### Option 2: Python HTTP Server
```bash
cd meditate
python3 -m http.server 8080
# Open http://localhost:8080
```

### Option 3: Node.js (npx serve)
```bash
cd meditate
npx serve .
# Open the URL shown in terminal
```

> ⚠️ **Important**: Service Workers require a server (not `file://`). Always use one of the above methods to test PWA features.

---

## 🌐 Deploy to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — ADIYOGI PWA"
   git remote add origin https://github.com/YOUR_USERNAME/meditate.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repo → **Settings** → **Pages**
   - Source: `main` branch, `/ (root)` folder
   - Click **Save**

3. **Access at:**
   `https://YOUR_USERNAME.github.io/meditate/`

> **Note for GitHub Pages:** The service worker scope is `/meditate/`. Update the `start_url` in `manifest.json` to `/meditate/index.html` if deploying to a subdirectory.

---

## 📦 Deploy to Netlify (Recommended)

1. Drag the `meditate/` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Get an instant live URL — done!

Or connect your GitHub repo for auto-deploys on push.

---

## 🧘 The 7 Techniques

| Technique | Category | Duration |
|-----------|----------|---------|
| Focused Attention (Breathing) | Foundation | 5–20 min |
| Open Monitoring (Mindfulness) | Mindfulness | 10–30 min |
| Loving-Kindness (Metta) | Heart | 10–30 min |
| Body Scan | Somatic | 10–45 min |
| Mantra Meditation | Vedic | 10–20 min |
| Walking Meditation | Active | 10–30 min |
| Visualization | Creative | 10–30 min |

---

## ⚙️ PWA Details

- **Manifest**: `display: standalone`, theme `#08080f`
- **Service Worker**: Cache-first for assets, network-first for HTML pages
- **Offline fallback**: `offline.html` served when navigation fails
- **Install prompt**: Custom banner with `beforeinstallprompt` handling
- **Icons**: 192×192 and 512×512 maskable PNG icons

---

## 🛠️ Tech Stack

- Pure **HTML5** — semantic, accessible
- **CSS3** — custom properties, animations, mobile-first
- **Vanilla JavaScript** — no frameworks, no dependencies
- **Google Fonts** — Cormorant Garamond + DM Sans
- **Web Audio API** — meditation bell sound on timer completion
- **IntersectionObserver** — scroll reveal animations
- **Service Worker** — offline caching strategy

---

## 📖 License

MIT — Free to use, modify, and distribute.

---

*Built with 🧘 and quiet intention.*
