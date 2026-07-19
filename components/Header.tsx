'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_EN, NAV_NL, UI, BOOK_HREF, PORTAL_HREF, isNL, counterpart } from '@/lib/i18n';

function Logo() {
  return (
    <>
      <svg className="logo-icon" width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M18 2L6 18h10l-4 12 12-16H14l4-12z" fill="#5C9DFF" />
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
