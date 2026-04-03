'use strict';

/* ── Service Worker ─────────────────────────────────── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const base = location.pathname.replace(/\/[^/]*$/, '/');
    navigator.serviceWorker
      .register(base + 'service-worker.js', { scope: base })
      .then(r => console.log('[SW] scope:', r.scope))
      .catch(e => console.warn('[SW] failed:', e));
  });
}

/* ── Theme ──────────────────────────────────────────── */
(function() {
  const saved = localStorage.getItem('theme') || 'dark';
  applyTheme(saved);
})();

function applyTheme(t) {
  document.documentElement.dataset.theme = t === 'light' ? 'light' : '';
  localStorage.setItem('theme', t);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = t === 'light' ? '#f4f3ee' : '#090910';
  document.querySelectorAll('.theme-dark').forEach(el => el.style.display = t === 'dark' ? 'none' : '');
  document.querySelectorAll('.theme-light').forEach(el => el.style.display = t === 'light' ? 'none' : '');
}

function toggleTheme() {
  applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
}

/* ── Install ────────────────────────────────────────── */
let _deferredPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _deferredPrompt = e;
  const b = document.getElementById('installBanner');
  if (b && !sessionStorage.getItem('ib-dismissed')) b.classList.remove('hidden');
});

window.installApp = function() {
  if (_deferredPrompt) {
    _deferredPrompt.prompt();
    _deferredPrompt.userChoice.then(r => {
      if (r.outcome === 'accepted') toast('Installed ✨');
      _deferredPrompt = null;
      const b = document.getElementById('installBanner');
      if (b) b.classList.add('hidden');
    });
  } else {
    toast('Use browser menu → Add to Home Screen');
  }
};

window.addEventListener('appinstalled', () => toast('App installed ✨'));

/* ── Toast ──────────────────────────────────────────── */
function toast(msg, ms = 2400) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), ms);
}

/* ── Timer ──────────────────────────────────────────── */
const CIRC = 2 * Math.PI * 108; // r=108

let _dur = 600, _rem = 600, _iv = null, _paused = true;

window.openTimer = function(minutes, name) {
  _dur = minutes * 60;
  _rem = _dur;
  _paused = true;
  clearInterval(_iv);

  const el = document.getElementById('timerOverlay');
  if (!el) return;
  el.classList.add('on');
  document.body.style.overflow = 'hidden';

  const n = document.getElementById('timerName');
  const d = document.getElementById('timerDur');
  if (n) n.textContent = name || 'Meditation';
  if (d) d.textContent = `${minutes} minute session`;

  _updateTimer();
  _updatePlay();
};

window.closeTimer = function() {
  clearInterval(_iv);
  const el = document.getElementById('timerOverlay');
  if (el) el.classList.remove('on');
  document.body.style.overflow = '';
  _paused = true;
};

window.toggleTimer = function() {
  _paused = !_paused;
  _updatePlay();
  if (!_paused) _iv = setInterval(_tick, 1000);
  else clearInterval(_iv);
};

window.resetTimer = function() {
  clearInterval(_iv); _rem = _dur; _paused = true;
  _updateTimer(); _updatePlay();
};

function _tick() {
  if (_rem <= 0) { clearInterval(_iv); _onDone(); return; }
  _rem--;
  _updateTimer();
}

function _updateTimer() {
  const t = document.getElementById('timerTime');
  const a = document.getElementById('timerArc');
  if (t) {
    const m = String(Math.floor(_rem / 60)).padStart(2,'0');
    const s = String(_rem % 60).padStart(2,'0');
    t.textContent = `${m}:${s}`;
  }
  if (a) {
    const frac = _rem / _dur;
    a.style.strokeDasharray = CIRC;
    a.style.strokeDashoffset = CIRC * (1 - frac);
  }
}

function _updatePlay() {
  const b = document.getElementById('timerPlay');
  if (b) b.textContent = _paused ? '▶' : '⏸';
}

function _onDone() {
  _paused = true; _updatePlay();
  toast('Session complete 🙏');
  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  // Bell tone
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 432; o.type = 'sine';
    g.gain.setValueAtTime(0.35, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3);
    o.start(); o.stop(ctx.currentTime + 3);
  } catch(e) {}
}

/* ── Scroll reveal ──────────────────────────────────── */
function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    new IntersectionObserver(([e], o) => {
      if (e.isIntersecting) { el.classList.add('visible'); o.disconnect(); }
    }, { threshold: 0.06 }).observe(el);
  });
}

/* ── Active nav ─────────────────────────────────────── */
function setNav() {
  const p = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(a => {
    const h = a.getAttribute('href') || '';
    a.classList.toggle('active', h === p || (p === '' && h === 'index.html'));
  });
}

/* ── Init ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setNav();
  initReveal();

  // Theme toggle
  document.querySelectorAll('[data-action="toggle-theme"]').forEach(b =>
    b.addEventListener('click', toggleTheme)
  );

  // Timer controls
  const tp = document.getElementById('timerPlay');
  const tc = document.getElementById('timerClose');
  const tr = document.getElementById('timerReset');
  if (tp) tp.addEventListener('click', window.toggleTimer);
  if (tc) tc.addEventListener('click', window.closeTimer);
  if (tr) tr.addEventListener('click', window.resetTimer);

  // Install banner
  const ib = document.getElementById('installBtn');
  const ic = document.getElementById('installClose');
  if (ib) ib.addEventListener('click', window.installApp);
  if (ic) ic.addEventListener('click', () => {
    document.getElementById('installBanner')?.classList.add('hidden');
    sessionStorage.setItem('ib-dismissed', '1');
  });

  // Close timer on Escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeTimer(); });
});
