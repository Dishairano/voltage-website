'use client';

import { useEffect } from 'react';

/**
 * Privacy-friendly, first-party pageview beacon → /api/hit (voltage-lead-service).
 * No cookies, no third party. Uses sendBeacon so it never delays the page.
 * Fires once per page load (navigation is full-page, so every view is counted).
 */
export default function Analytics() {
  useEffect(() => {
    try {
      const body = JSON.stringify({ p: location.pathname, r: document.referrer || '' });
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/hit', new Blob([body], { type: 'application/json' }));
      } else {
        fetch('/api/hit', {
          method: 'POST',
          body,
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
        }).catch(() => {});
      }
    } catch {
      /* analytics must never break the page */
    }
  }, []);

  return null;
}
