/* Voltage Software — scroll-driven WebGL "object → dispersal → background" experience.
   One particle system reused across every section: each section owns a themed point-cloud
   and an accent colour. As you scroll, the object for a section forms when that section is
   centred, then is pulled apart into a colour wash (its "background") while the next
   section's object reassembles. Loaded via dynamic import with a graceful no-op fallback.
   Multi-page: keyed off whichever SECTIONS are present in THIS page's DOM. */
import * as THREE from '/vendor/three.module.js';

/* ---------- Per-section object + colour map (DOM order) ---------- */
const SECTIONS = [
  { id: 'hero',          shape: 'bolt',    color: 0x6BA8FF },
  { id: 'promise',       shape: 'cube',    color: 0x6C8CFF },
  { id: 'straight-talk', shape: 'pillars', color: 0x38BDF8 },
  { id: 'proof',         shape: 'screen',  color: 0x2DD4BF },
  { id: 'build',         shape: 'modules', color: 0xA78BFA },
  { id: 'process',       shape: 'helix',   color: 0x60A5FA },
  { id: 'guarantees',    shape: 'shield',  color: 0x34D399 },
  { id: 'pricing',       shape: 'bars',    color: 0xFBBF24 },
  { id: 'founder',       shape: 'sphere',  color: 0xFB7185 },
  { id: 'fit',           shape: 'rings',   color: 0xA3E635 },
  { id: 'founding',      shape: 'star',    color: 0xF0B429 },
  { id: 'faq',           shape: 'knot',    color: 0x5C9DFF },
  { id: 'contact',       shape: 'plane',   color: 0x6C8CFF },
];

/* ---------- Bail out when motion is unwanted or WebGL is unavailable ---------- */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('bg-canvas');
if (reduceMotion || !canvas) {
  // Static tinted backgrounds (from CSS) carry the design; nothing else to do.
} else {
  init(canvas);
}

function init(canvas) {
  const rand = Math.random;
  const TAU = Math.PI * 2;
  const small = window.innerWidth < 760;
  const COUNT = small ? 14000 : 40000;

  /* ---------- Geometry samplers (each returns a Float32Array of COUNT*3) ---------- */
  function boxPoint(cx, cy, cz, w, h, d, out, o) {
    const f = (rand() * 6) | 0, u = rand() - 0.5, v = rand() - 0.5;
    let x = cx, y = cy, z = cz;
    if (f === 0) { x += w / 2; y += u * h; z += v * d; }
    else if (f === 1) { x -= w / 2; y += u * h; z += v * d; }
    else if (f === 2) { y += h / 2; x += u * w; z += v * d; }
    else if (f === 3) { y -= h / 2; x += u * w; z += v * d; }
    else if (f === 4) { z += d / 2; x += u * w; y += v * h; }
    else { z -= d / 2; x += u * w; y += v * h; }
    out[o] = x; out[o + 1] = y; out[o + 2] = z;
  }
  function torusPoint(R, r, plane, cx, out, o) {
    const a = rand() * TAU, b = rand() * TAU;
    let x = (R + r * Math.cos(b)) * Math.cos(a);
    let y = (R + r * Math.cos(b)) * Math.sin(a);
    let z = r * Math.sin(b);
    if (plane === 'yz') { const t = x; x = z; z = t; } // rotate ring into YZ plane
    out[o] = x + cx; out[o + 1] = y; out[o + 2] = z;
  }
  function inPoly(px, py, vs) {
    let inside = false;
    for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      const xi = vs[i][0], yi = vs[i][1], xj = vs[j][0], yj = vs[j][1];
      if (((yi > py) !== (yj > py)) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }
  function polyFill(verts, depth, n) {
    let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
    for (const v of verts) { minx = Math.min(minx, v[0]); maxx = Math.max(maxx, v[0]); miny = Math.min(miny, v[1]); maxy = Math.max(maxy, v[1]); }
    const out = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      let x, y, guard = 0;
      do { x = minx + rand() * (maxx - minx); y = miny + rand() * (maxy - miny); } while (!inPoly(x, y, verts) && ++guard < 60);
      out[i * 3] = x; out[i * 3 + 1] = y; out[i * 3 + 2] = (rand() - 0.5) * depth;
    }
    return out;
  }
  // Fill several polygon rings at once. Even-odd across ALL rings combined =
  // union of disjoint solid parts (and any holes cancel), so a multi-part logo
  // like the Voltage "V" bolt samples correctly.
  function multiPolyFill(rings, depthFrac, n) {
    let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
    for (const r of rings) for (const p of r) {
      if (p[0] < minx) minx = p[0]; if (p[0] > maxx) maxx = p[0];
      if (p[1] < miny) miny = p[1]; if (p[1] > maxy) maxy = p[1];
    }
    const depth = Math.max(maxx - minx, maxy - miny) * depthFrac;
    const out = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      let x, y, inside = false, guard = 0;
      do {
        x = minx + rand() * (maxx - minx); y = miny + rand() * (maxy - miny);
        inside = false;
        for (const r of rings) if (inPoly(x, y, r)) inside = !inside;
      } while (!inside && ++guard < 80);
      out[i * 3] = x; out[i * 3 + 1] = y; out[i * 3 + 2] = (rand() - 0.5) * depth;
    }
    return out;
  }
  function triFill(tris, n) {
    const out = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const t = tris[(rand() * tris.length) | 0];
      let r1 = rand(), r2 = rand();
      if (r1 + r2 > 1) { r1 = 1 - r1; r2 = 1 - r2; }
      for (let k = 0; k < 3; k++) out[i * 3 + k] = t[0][k] + r1 * (t[1][k] - t[0][k]) + r2 * (t[2][k] - t[0][k]);
    }
    return out;
  }

  function build(shape) {
    const out = new Float32Array(COUNT * 3);
    switch (shape) {
      case 'bolt': {
        // Voltage "V" bolt monogram, vectorised from the brand logo (two solid
        // rings: left stroke + right lightning bolt). y is world-up (upright).
        const rings = [[[13.1,1416.7],[453,756.5],[330.1,750.5],[332.7,738.5],[635,341.9],[916,12.6],[826,322.1],[757,507.9],[351,1414.7],[14.5,1418.3]],[[1447.4,1284.6],[957.2,693.7],[958.4,685],[1096,679.8],[901,243.1],[908.4,241],[955,289.9],[1404,828.8],[1275,834.5],[1453.8,1278.5],[1451.3,1289]]];
        return multiPolyFill(rings, 0.05, COUNT);
      }
      case 'star': {
        const v = [];
        for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, r = k % 2 ? 0.42 : 1; v.push([Math.cos(a) * r, Math.sin(a) * r]); }
        return polyFill(v, 0.12, COUNT);
      }
      case 'shield': {
        const v = [[0, 1.2], [1, 0.6], [1, -0.2], [0, -1.3], [-1, -0.2], [-1, 0.6]];
        return polyFill(v, 0.16, COUNT);
      }
      case 'cube':
        for (let i = 0; i < COUNT; i++) boxPoint(0, 0, 0, 2, 2, 2, out, i * 3);
        return out;
      case 'pillars': {
        const cx = [-1.4, 0, 1.4];
        for (let i = 0; i < COUNT; i++) boxPoint(cx[i % 3], 0, 0, 0.7, 2.6, 0.7, out, i * 3);
        return out;
      }
      case 'modules': {
        const c = [[-0.95, 0.95], [0.95, 0.95], [-0.95, -0.95], [0.95, -0.95]];
        for (let i = 0; i < COUNT; i++) { const p = c[i % 4]; boxPoint(p[0], p[1], 0, 1.1, 1.1, 1.1, out, i * 3); }
        return out;
      }
      case 'bars': {
        const cx = [-1.3, 0, 1.3], h = [1.1, 1.8, 2.5];
        for (let i = 0; i < COUNT; i++) { const k = i % 3; boxPoint(cx[k], (h[k] - 2.5) / 2, 0, 0.8, h[k], 0.8, out, i * 3); }
        return out;
      }
      case 'screen': {
        for (let i = 0; i < COUNT; i++) {
          const r = rand(); let x, y;
          if (r < 0.16) { x = -1.5 + rand() * 0.42; y = -1.05 + rand() * 2.05; }          // sidebar
          else if (r < 0.30) { x = -1.05 + rand() * 2.55; y = 0.85 + rand() * 0.18; }      // top bar
          else { x = -1.0 + rand() * 2.5; y = -1.05 + rand() * 1.82; }                     // main panel
          out[i * 3] = x; out[i * 3 + 1] = y; out[i * 3 + 2] = (rand() - 0.5) * 0.12;
        }
        return out;
      }
      case 'helix': {
        for (let i = 0; i < COUNT; i++) {
          const t = i / COUNT, a = t * TAU * 4;
          out[i * 3] = Math.cos(a) * 1.25 + (rand() - 0.5) * 0.04;
          out[i * 3 + 1] = (t - 0.5) * 3.2;
          out[i * 3 + 2] = Math.sin(a) * 1.25 + (rand() - 0.5) * 0.04;
        }
        return out;
      }
      case 'sphere': {
        for (let i = 0; i < COUNT; i++) {
          const u = rand() * TAU, c = Math.acos(2 * rand() - 1);
          out[i * 3] = Math.sin(c) * Math.cos(u) * 1.6;
          out[i * 3 + 1] = Math.sin(c) * Math.sin(u) * 1.6;
          out[i * 3 + 2] = Math.cos(c) * 1.6;
        }
        return out;
      }
      case 'rings': {
        for (let i = 0; i < COUNT; i++) torusPoint(0.95, 0.26, i % 2 ? 'yz' : 'xy', i % 2 ? 0.55 : -0.55, out, i * 3);
        return out;
      }
      case 'knot': {
        for (let i = 0; i < COUNT; i++) {
          const t = rand() * TAU, p = 2, q = 3, r = 2 + Math.cos(q * t);
          out[i * 3] = r * Math.cos(p * t) * 0.55 + (rand() - 0.5) * 0.05;
          out[i * 3 + 1] = r * Math.sin(p * t) * 0.55 + (rand() - 0.5) * 0.05;
          out[i * 3 + 2] = Math.sin(q * t) * 1.1 + (rand() - 0.5) * 0.05;
        }
        return out;
      }
      case 'plane': {
        const tip = [0, 0, 1.5], cen = [0, -0.05, -0.7], lw = [-1.15, 0, -1.0], rw = [1.15, 0, -1.0], tail = [0, 0.4, -1.1];
        return triFill([[tip, lw, cen], [tip, cen, rw], [cen, lw, tail], [cen, tail, rw]], COUNT);
      }
    }
    return out;
  }

  function normalize(a) { // centre at origin, scale longest radius to ~1.7
    let cx = 0, cy = 0, cz = 0; const n = a.length / 3;
    for (let i = 0; i < a.length; i += 3) { cx += a[i]; cy += a[i + 1]; cz += a[i + 2]; }
    cx /= n; cy /= n; cz /= n;
    let max = 0;
    for (let i = 0; i < a.length; i += 3) { const dx = a[i] - cx, dy = a[i + 1] - cy, dz = a[i + 2] - cz; max = Math.max(max, Math.hypot(dx, dy, dz)); }
    const s = 1.7 / (max || 1);
    for (let i = 0; i < a.length; i += 3) { a[i] = (a[i] - cx) * s; a[i + 1] = (a[i + 1] - cy) * s; a[i + 2] = (a[i + 2] - cz) * s; }
    return a;
  }

  // Only the sections actually present on THIS page drive the sequence.
  let active = SECTIONS.filter(s => document.getElementById(s.id));
  if (active.length === 0) active = [SECTIONS[0]]; // unknown page -> ambient bolt
  const shapes = active.map(s => normalize(build(s.shape)));
  const colors = active.map(s => new THREE.Color(s.color));
  if (shapes.length === 1) { shapes.push(shapes[0].slice()); colors.push(colors[0]); } // keep A/B pair valid

  /* ---------- Per-particle scatter direction + random seed ---------- */
  const dir = new Float32Array(COUNT * 3);
  const seed = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    const u = rand() * TAU, c = Math.acos(2 * rand() - 1), m = 0.6 + rand() * 1.4;
    dir[i * 3] = Math.sin(c) * Math.cos(u) * m;
    dir[i * 3 + 1] = Math.sin(c) * Math.sin(u) * m;
    dir[i * 3 + 2] = Math.cos(c) * m;
    seed[i] = rand();
  }

  /* ---------- Three.js scene ---------- */
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 6;

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(COUNT * 3), 3));
  const attrA = new THREE.BufferAttribute(shapes[0].slice(), 3);
  const attrB = new THREE.BufferAttribute(shapes[1].slice(), 3);
  geo.setAttribute('aPosA', attrA);
  geo.setAttribute('aPosB', attrB);
  geo.setAttribute('aDir', new THREE.BufferAttribute(dir, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));

  const uniforms = {
    uMorph: { value: 0 },
    uScatter: { value: 0 },
    uTime: { value: 0 },
    uSize: { value: (small ? 24 : 27) * Math.min(window.devicePixelRatio, 2) },
    uColorA: { value: colors[0].clone() },
    uColorB: { value: colors[1].clone() },
    uOpacity: { value: small ? 0.38 : 1.0 }, // full-size but dim on phones so it fills yet stays readable
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute vec3 aPosA; attribute vec3 aPosB; attribute vec3 aDir; attribute float aSeed;
      uniform float uMorph, uScatter, uTime, uSize;
      uniform vec3 uColorA, uColorB;
      varying vec3 vColor; varying float vA;
      void main() {
        vec3 base = mix(aPosA, aPosB, uMorph);
        float t = uTime * 0.4 + aSeed * 6.2831;
        vec3 turb = vec3(sin(t), cos(t * 1.3), sin(t * 0.7)) * 0.16;
        vec3 pos = base + (aDir * 2.3 + turb) * uScatter;
        vColor = mix(uColorA, uColorB, uMorph);
        // subtle per-particle brightness so the field reads as living dust,
        // not a uniform grid of identical dots
        float bright = 0.72 + aSeed * 0.55;
        vA = (1.0 - uScatter * 0.55) * 0.9 * bright;
        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mv;
        // organic size variation + clamp so near particles never hit the GPU's
        // point-size ceiling (which clips them into hard squares)
        float sizeVar = 0.7 + aSeed * 0.75;
        gl_PointSize = clamp((uSize * sizeVar) / max(-mv.z, 0.1), 1.0, 64.0);
      }`,
    fragmentShader: `
      varying vec3 vColor; varying float vA;
      uniform float uOpacity;
      void main() {
        // distance from sprite centre, 0 at core → 1 at rim
        float d = length(gl_PointCoord - vec2(0.5)) * 2.0;
        // gaussian core + soft halo, forced to exactly 0 at the rim: a clean,
        // self-antialiased glowing orb with no hard clipped circle edge
        float a = exp(-d * d * 4.0) * smoothstep(1.0, 0.72, d);
        a *= vA * uOpacity;
        if (a < 0.004) discard;
        gl_FragColor = vec4(vColor, a);
      }`,
  });

  const points = new THREE.Points(geo, material);
  points.frustumCulled = false;
  scene.add(points);

  /* ---------- Scroll → object lifecycle ---------- */
  const els = active.map(s => document.getElementById(s.id)).filter(Boolean);
  let curIdx = -1;
  const ease = f => f * f * (3 - 2 * f);

  function computeT() {
    const c = els.map(el => el.offsetTop + el.offsetHeight / 2);
    if (c.length < 2) return 0; // single section -> hold the shape, no morph
    const vCenter = window.scrollY + window.innerHeight / 2;
    if (vCenter <= c[0]) return 0;
    if (vCenter >= c[c.length - 1]) return c.length - 1 - 1e-3;
    let k = 0;
    while (k < c.length - 1 && c[k + 1] <= vCenter) k++;
    const span = c[k + 1] - c[k];
    return k + (span > 0 ? (vCenter - c[k]) / span : 0);
  }

  /* ---------- Pointer parallax ---------- */
  let px = 0, py = 0, tpx = 0, tpy = 0;
  window.addEventListener('pointermove', e => {
    tpx = (e.clientX / window.innerWidth - 0.5) * 2;
    tpy = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, { passive: true });

  // HOLD = how much of each section-to-section span keeps the shape fully formed & crisp
  // (a small "deadzone" at each end). The wide middle band disperses + reforms gradually.
  // Mobile sections are taller, so the same fraction feels far bigger — shrink it there.
  const HOLD = small ? 0.05 : 0.16;
  let dispT = computeT(); // smoothed scroll position, so motion eases instead of snapping

  const clock = new THREE.Clock();
  function frame() {
    requestAnimationFrame(frame);
    dispT += (computeT() - dispT) * 0.07; // temporal smoothing → silky, scroll-jitter-proof
    const i = Math.min(Math.max(Math.floor(dispT), 0), shapes.length - 2);
    const f = dispT - i;

    if (i !== curIdx) { // swap the active pair only when crossing a boundary
      attrA.array.set(shapes[i]); attrA.needsUpdate = true;
      attrB.array.set(shapes[i + 1]); attrB.needsUpdate = true;
      uniforms.uColorA.value.copy(colors[i]);
      uniforms.uColorB.value.copy(colors[i + 1]);
      curIdx = i;
    }

    // Dwell: hold the object crisp through the deadzones, disperse/reform only mid-span
    let scatter, morph;
    if (f < HOLD) { scatter = 0; morph = 0; }                 // holding the current shape
    else if (f > 1 - HOLD) { scatter = 0; morph = 1; }         // holding the next shape
    else {
      const g = (f - HOLD) / (1 - 2 * HOLD);                   // 0→1 across the transition band
      scatter = Math.pow(Math.sin(g * Math.PI), 1.15);         // 0 → dispersed → 0
      morph = ease(g);                                         // shape A → shape B
    }
    uniforms.uMorph.value = morph;
    uniforms.uScatter.value = scatter;
    uniforms.uTime.value = clock.getElapsedTime();

    px += (tpx - px) * 0.05; py += (tpy - py) * 0.05;
    camera.position.x = px * 0.6;
    camera.position.y = -py * 0.4;
    camera.lookAt(0, 0, 0);

    // Gentle oscillation (not a full spin) so flat shapes like the bolt stay readable
    const tt = clock.getElapsedTime();
    points.rotation.y = Math.sin(tt * 0.22) * 0.35;
    points.rotation.x = Math.sin(tt * 0.16) * 0.10;
    points.scale.setScalar(1 + scatter * 0.10);

    renderer.render(scene, camera);
  }
  frame();
  document.documentElement.classList.add('webgl-on');
}
