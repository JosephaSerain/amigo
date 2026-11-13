const STORE_KEY = "amigo-tirage-v2";
const $ = (id) => document.getElementById(id);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const pad = (n) => String(n).padStart(3, "0");

let state = { drawNo: 1, interval: 0, pace: 1.4, history: [] };
let drawing = false;
let nextAt = 0;
let tokenAt = null;

function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {} }
function load() {
  try { const s = JSON.parse(localStorage.getItem(STORE_KEY)); if (s && Array.isArray(s.history)) state = { ...state, ...s }; } catch {}
}

/* ---------- Grille ---------- */
const cells = {};
for (let n = 1; n <= 28; n++) {
  const c = document.createElement("div");
  c.className = "cell";
  c.textContent = n;
  $("board").appendChild(c);
  cells[n] = c;
}
const token = $("token");

// Centre d'une case, en pixels relatifs à la grille
function cellCenter(n) {
  const c = cells[n];
  return { x: c.offsetLeft + c.offsetWidth / 2, y: c.offsetTop + c.offsetHeight / 2 };
}
function setTokenXY(x, y) { token.style.transform = `translate3d(${x}px, ${y}px, 0)`; }
function placeToken(n) {
  tokenAt = n;
  const { x, y } = cellCenter(n);
  setTokenXY(x, y);
}
window.addEventListener("resize", () => { if (tokenAt && !moving) placeToken(tokenAt); });

function setTitle(kind) {
  $("title").innerHTML = kind === "blue"
    ? `Les <span class="num blue">7</span> numéros bleus`
    : kind === "yellow"
      ? `Les <span class="num yellow">5</span> numéros jaunes`
      : kind === "next"
        ? `Prochain tirage`
        : `Résultats du tirage N°${pad(state.history[0]?.no ?? state.drawNo)}`;
}
// Le statut (ex. « Prochain tirage dans 3:12 ») est aussi affiché sur les brèves
const setStatus = (t) => {
  $("status").textContent = t;
  $("slStatus").textContent = t;
  $("slDrawNo").textContent = pad(state.drawNo);
};

function renderHistory() {
  $("history").innerHTML = state.history.map((h) => `
    <div class="hrow"><b>N°${pad(h.no)}</b>
      ${h.blue.map((n) => `<span class="b">${n}</span>`).join("")}<i class="sep"></i>
      ${h.yellow.map((n) => `<span class="y">${n}</span>`).join("")}
    </div>`).join("");
}

/* ---------- Résultats plein écran (30 s) ---------- */
const RESULTS_SECONDS = 30;
let resultsTimer = null;

function showResults(h) {
  const cell = (n, cls, i) => `<div class="res-cell ${cls}" style="animation-delay:${i * 0.12}s">${n}</div>`;
  $("results").innerHTML = `
    <div class="res-label blue">Les 7 numéros bleus</div>
    <div class="res-row">${h.blue.map((n, i) => cell(n, "blue", i)).join("")}</div>
    <div class="res-label yellow">Les 5 numéros jaunes</div>
    <div class="res-row">${h.yellow.map((n, i) => cell(n, "yellow", i + 7)).join("")}</div>
    <div class="res-timer" id="resTimer"></div>`;
  document.querySelector(".screen").classList.add("show-results");

  let left = RESULTS_SECONDS;
  const next = state.interval === SLIDES_INTERVAL ? "Les brèves du sport" : "Retour à la grille";
  const update = () => { $("resTimer").textContent = `${next} dans ${left} s`; };
  update();
  clearInterval(resultsTimer);
  resultsTimer = setInterval(() => {
    left--;
    if (left <= 0) {
      hideResults();
      if (state.interval === SLIDES_INTERVAL) startSlides();
    }
    else update();
  }, 1000);
}

function hideResults() {
  clearInterval(resultsTimer);
  resultsTimer = null;
  document.querySelector(".screen").classList.remove("show-results");
  showResult(null);
  if (!drawing) setTitle("next");
}

/* ---------- Brèves du sport ----------
   En mode Auto 5 min, après les résultats : chaque écran reste 45 s,
   puis la grille revient une fois tous les écrans passés. */
const SLIDE_SECONDS = 45;
const SLIDES_INTERVAL = 300; // mode Auto 5 min
let slideTimer = null;

// Les écrans sont dessinés en 1920 px de large : on les met à l'échelle de l'écran TV
const slidesBox = $("slides");
new ResizeObserver(() => {
  slidesBox.style.setProperty("--sl-scale", slidesBox.clientWidth / 1920);
}).observe(slidesBox);

function startSlides(start = 0) {
  const box = $("slideList");
  box.innerHTML = SLIDES.map((s) => `<div class="slide">${renderSlide(s)}</div>`).join("");
  const slides = box.querySelectorAll(".slide");
  let i = start;
  slides[i].classList.add("on");
  document.querySelector(".screen").classList.add("show-slides");

  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    slides[i].classList.remove("on");
    i++;
    if (i >= slides.length) hideSlides();
    else slides[i].classList.add("on");
  }, SLIDE_SECONDS * 1000);
}

function hideSlides() {
  clearInterval(slideTimer);
  slideTimer = null;
  document.querySelector(".screen").classList.remove("show-slides");
}

function showResult(h) {
  for (const n in cells) cells[n].className = "cell";
  if (!h) return;
  h.blue.forEach((n) => cells[n].className = "cell blue");
  h.yellow.forEach((n) => cells[n].className = "cell yellow");
}

/* ---------- Déplacement du jeton ----------
   Le jeton va en ligne droite d'une case à l'autre en passant par plusieurs
   cases voisines au hasard, sans s'arrêter, à vitesse régulière, puis ralentit
   en douceur jusqu'au numéro tiré. Animé image par image (requestAnimationFrame). */
let moving = false;

// Courbe d'accélération façon CSS cubic-bezier
function bezierEase(x1, y1, x2, y2) {
  const bx = (t) => 3 * x1 * t * (1 - t) ** 2 + 3 * x2 * t * t * (1 - t) + t ** 3;
  const by = (t) => 3 * y1 * t * (1 - t) ** 2 + 3 * y2 * t * t * (1 - t) + t ** 3;
  return (x) => {
    let lo = 0, hi = 1, t = x;
    for (let i = 0; i < 25; i++) { t = (lo + hi) / 2; if (bx(t) < x) lo = t; else hi = t; }
    return by(t);
  };
}
const ease = bezierEase(.35, 0, .15, 1); // démarre en douceur, long ralentissement final

// Choisit un chemin de cases proches les unes des autres
function pickPath(target, taken) {
  const rc = (n) => ({ r: Math.floor((n - 1) / 7), c: (n - 1) % 7 });
  const free = [];
  for (let n = 1; n <= 28; n++) if (!taken.has(n) && n !== target) free.push(n);
  const hops = 6 + Math.floor(Math.random() * 3);
  const path = [tokenAt];
  let cur = tokenAt;
  for (let h = 0; h < hops; h++) {
    const a = rc(cur);
    let near = free.filter((n) => {
      const b = rc(n), d = Math.max(Math.abs(a.r - b.r), Math.abs(a.c - b.c));
      return n !== cur && n !== path[path.length - 2] && d >= 1 && d <= 2;
    });
    if (!near.length) near = free.filter((n) => n !== cur);
    cur = near[Math.floor(Math.random() * near.length)];
    path.push(cur);
  }
  path.push(target);
  return path;
}

function travelTo(target, taken) {
  const pts = pickPath(target, taken).map(cellCenter);
  // Trajet en segments droits : distance cumulée à chaque case pour avancer à vitesse constante
  const samples = [{ ...pts[0], d: 0 }];
  for (let i = 1; i < pts.length; i++) {
    const prev = samples[i - 1];
    samples.push({ ...pts[i], d: prev.d + Math.hypot(pts[i].x - prev.x, pts[i].y - prev.y) });
  }
  const total = samples[samples.length - 1].d;
  const pitch = cells[2].offsetLeft - cells[1].offsetLeft; // distance entre deux cases
  const duration = Math.max(2600, (total / pitch) / 3.2 * 1000) * state.pace;

  moving = true;
  return new Promise((resolve) => {
    const t0 = performance.now();
    let j = 0;
    function frame(now) {
      const u = Math.min(1, (now - t0) / duration);
      const d = ease(u) * total;
      while (j < samples.length - 2 && samples[j + 1].d < d) j++;
      const a = samples[j], b = samples[j + 1] || a;
      const f = b.d > a.d ? (d - a.d) / (b.d - a.d) : 0;
      setTokenXY(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f);
      if (u < 1) requestAnimationFrame(frame);
      else { moving = false; placeToken(target); resolve(); }
    }
    requestAnimationFrame(frame);
  });
}

async function runDraw() {
  if (drawing) return;
  drawing = true;
  hideResults();
  hideSlides();
  nextAt = 0;
  $("go").disabled = true;

  const order = Array.from({ length: 28 }, (_, i) => i + 1);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const blue = order.slice(0, 7);
  const yellow = order.slice(7, 12);
  const taken = new Set();

  $("drawNo").textContent = pad(state.drawNo);
  setStatus("Tirage en cours");
  showResult(null);
  setTitle("blue");

  // Le jeton apparaît au centre de la grille
  placeToken(11);
  await wait(50);
  token.classList.add("show");
  await wait(600);

  for (let k = 0; k < 12; k++) {
    const color = k < 7 ? "blue" : "yellow";
    const target = k < 7 ? blue[k] : yellow[k - 7];
    if (k === 7) { setTitle("yellow"); await wait(900 * state.pace); }

    await travelTo(target, taken);
    token.classList.add("bump");
    await wait(350);
    cells[target].className = "cell " + color;
    taken.add(target);
    await wait(900 * state.pace);
    token.classList.remove("bump");
  }

  token.classList.remove("show");
  const sorted = (a) => [...a].sort((x, y) => x - y);
  state.history.unshift({ no: state.drawNo, blue: sorted(blue), yellow: sorted(yellow) });
  state.history = state.history.slice(0, 6);
  state.drawNo++;
  save();
  renderHistory();
  setTitle("result");
  showResults(state.history[0]);

  drawing = false;
  $("go").disabled = false;
  scheduleNext();
}

/* ---------- Rythme ---------- */
function scheduleNext() {
  if (state.interval > 0) nextAt = Date.now() + state.interval * 1000;
  else { nextAt = 0; setStatus(state.history.length ? "Tirage terminé" : "Prochain tirage"); }
  $("drawNo").textContent = pad(state.history.length ? state.history[0].no : state.drawNo);
}

function tick() {
  if (drawing || !nextAt) return;
  const ms = nextAt - Date.now();
  if (ms <= 0) { runDraw(); return; }
  const s = Math.ceil(ms / 1000);
  setStatus(`Prochain tirage dans ${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`);
}

function renderSegs() {
  document.querySelectorAll("#mode button").forEach((b) => b.classList.toggle("on", +b.dataset.s === state.interval));
  document.querySelectorAll("#pace button").forEach((b) => b.classList.toggle("on", +b.dataset.p === state.pace));
}

$("mode").onclick = (e) => {
  const b = e.target.closest("button"); if (!b) return;
  state.interval = +b.dataset.s;
  save(); renderSegs();
  if (!drawing) scheduleNext();
  tick();
};
$("pace").onclick = (e) => {
  const b = e.target.closest("button"); if (!b) return;
  state.pace = +b.dataset.p;
  save(); renderSegs();
};
$("go").onclick = runDraw;

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen();
  else $("tv").requestFullscreen?.();
}
$("fs").onclick = toggleFullscreen;
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") { e.preventDefault(); runDraw(); }
  if (e.key === "f" || e.key === "F") toggleFullscreen();
});

/* ---------- Démarrage ---------- */
load();
renderSegs();
renderHistory();
setTitle("next");
scheduleNext();
setInterval(tick, 250);

// Aperçu des brèves sans attendre un tirage : ouvrir la page avec #breves (ou #breves-3 pour le 3e écran)
const preview = location.hash.match(/^#breves(?:-(\d+))?$/);
if (preview) startSlides(Math.min(SLIDES.length, Math.max(1, +preview[1] || 1)) - 1);
