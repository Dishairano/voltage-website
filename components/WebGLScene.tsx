'use client';

import { useEffect } from 'react';

/**
 * Lazy-loads the WebGL particle scene (public/three-scene.js, which imports
 * three from /vendor). The page paints + becomes interactive first; the scene
 * pulls in on idle. Skipped entirely on Data Saver. The dynamic import is made
 * bundler-opaque (via Function) so Next leaves the public file alone. ES module
 * URLs are cached, so it only ever initialises once per page load.
 */
export default function WebGLScene() {
  useEffect(() => {
    const conn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection || {};
    if (conn.saveData) return;

    let cancelled = false;
    const load = () => {
      if (cancelled) return;
      (new Function('u', 'return import(u)'))('/three-scene.js?v=20260719').catch((e: unknown) =>
        console.warn('WebGL scene disabled:', e),
      );
    };
    const kick = () => {
      if ('requestIdleCallback' in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void, o?: object) => void }).requestIdleCallback(
          load,
          { timeout: 2500 },
        );
      } else {
        setTimeout(load, 600);
      }
    };

    if (document.readyState === 'complete') kick();
    else window.addEventListener('load', kick, { once: true });

    return () => { cancelled = true; };
  }, []);

  return null;
}
