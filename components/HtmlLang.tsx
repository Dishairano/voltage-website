'use client';

import { useEffect } from 'react';

/** Sets <html lang> for the current route (static export renders lang="en" by default). */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => { document.documentElement.lang = prev || 'en'; };
  }, [lang]);
  return null;
}
