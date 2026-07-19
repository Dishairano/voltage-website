'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_EN, NAV_NL, UI, BOOK_HREF, PORTAL_HREF, isNL, counterpart } from '@/lib/i18n';

function Logo() {
  return (
    <>
      <svg className="logo-icon" width="30" height="30" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M0.06,0.93 19.55,30.18 14.1,30.45 14.22,30.98 27.62,48.55 40.07,63.14 36.08,49.43 33.02,41.2 15.03,1.01 0.12,0.86 0.06,0.93ZM63.61,6.78 41.89,32.96 41.95,33.35 48.04,33.58 39.4,52.93 39.73,53.02 41.8,50.86 61.69,26.98 55.98,26.72 63.9,7.05 63.79,6.58 63.61,6.78Z" fill="#006FFF" />
      </svg>
      <span className="logo-text">Voltage<span className="logo-dim">Software</span></span>
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const nl = isNL(pathname);
  const t = nl ? UI.nl : UI.en;
  const nav = nl ? NAV_NL : NAV_EN;
  const home = nl ? '/nl/' : '/';
  const bookHref = nl ? BOOK_HREF.nl : BOOK_HREF.en;
  const close = () => setOpen(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header className="header" id="header">
      <nav className="nav container" aria-label="Primary">
        <a className="nav-logo" href={home} aria-label="Voltage Software home">
          <Logo />
        </a>
        <ul className={`nav-menu${open ? ' open' : ''}`} id="nav-menu">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className={`nav-link${isActive(n.href) ? ' is-active' : ''}`} onClick={close}>
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a href={PORTAL_HREF} className={`nav-link nav-login${isActive('/portal/') ? ' is-active' : ''}`} onClick={close}>
              {t.clientLogin}
            </a>
          </li>
          <li>
            <a href={bookHref} className="nav-link nav-cta" onClick={close}>{t.bookCta}</a>
          </li>
          <li>
            <a href={counterpart(pathname)} className="nav-link nav-lang" aria-label={t.switchAria} onClick={close}>
              {t.switchTo}
            </a>
          </li>
        </ul>
        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          id="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="hamburger"></span>
        </button>
      </nav>
    </header>
  );
}
