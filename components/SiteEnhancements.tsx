'use client';

import { useEffect } from 'react';

/**
 * Scroll-reveal + pointer spotlight on cards + magnetic buttons.
 * Ported from the original static site's script.js. Runs once per page load
 * (navigation is full-page, so the DOM is fresh each time).
 */
export default function SiteEnhancements() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // --- Scroll reveal ---
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if ('IntersectionObserver' in window && reveals.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      reveals.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      reveals.forEach((el) => el.classList.add('in'));
    }

    // --- Pointer spotlight + magnetic buttons (skip touch / reduced-motion) ---
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const noHover = window.matchMedia('(hover: none)').matches;
    if (!reduce && !noHover) {
      const CARDS =
        '.build-card,.g-card,.price-card,.pillar,.rail-step,.fit-col,.promise-card,.founder-card,.founding-card,.portal-panel,.post-card';
      document.querySelectorAll<HTMLElement>(CARDS).forEach((card) => {
        card.classList.add('fx-spot');
        const move = (e: PointerEvent) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
          card.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
        };
        card.addEventListener('pointermove', move);
        cleanups.push(() => card.removeEventListener('pointermove', move));
      });

      document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
        const move = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          const mx = e.clientX - r.left - r.width / 2;
          const my = e.clientY - r.top - r.height / 2;
          btn.style.transform = `translate(${(mx * 0.18).toFixed(1)}px,${(my * 0.28).toFixed(1)}px)`;
        };
        const leave = () => { btn.style.transform = ''; };
        btn.addEventListener('pointermove', move);
        btn.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          btn.removeEventListener('pointermove', move);
          btn.removeEventListener('pointerleave', leave);
        });
      });
    }

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
