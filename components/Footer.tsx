'use client';

import { usePathname } from 'next/navigation';
import { isNL } from '@/lib/i18n';

const YEAR = new Date().getFullYear();

function Logo() {
  return (
    <span className="nav-logo">
      <svg className="logo-icon" width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M18 2L6 18h10l-4 12 12-16H14l4-12z" fill="#5C9DFF" />
      </svg>
      <span className="logo-text">Voltage<span className="logo-dim">Software</span></span>
    </span>
  );
}

const COPY = {
  en: {
    tag: 'Production-ready custom software — websites, web apps, and the tools your business needs. Built to be opened, not just described.',
    studio: 'Studio', build: 'What we build', start: 'Get started',
    links: {
      services: '/services/', approach: '/approach/', pricing: '/pricing/', about: '/about/', blog: '/blog/', book: '/book/',
    },
    studioLinks: [['Services', '/services/'], ['How we work', '/approach/'], ['Pricing', '/pricing/'], ['About the founders', '/about/'], ['Writing', '/blog/']],
    buildLinks: [['Websites & web apps', '/services/'], ['MVPs', '/services/'], ['Portals & dashboards', '/services/'], ['API integrations', '/services/']],
    startLinks: [['Book a discovery call', '/book/'], ['Client portal', '/portal/']],
    sig: 'Founded December 2025 · Founder-led · Max 2 clients at a time · Greenfield builds only',
    rights: `© ${YEAR} Voltage Software. A founder-led studio. You own your code — every line.`,
    micro: "Every claim on this site is something we can prove. That's the point.",
    top: '↑ Back to top',
  },
  nl: {
    tag: 'Productieklare maatwerksoftware — websites, webapps en de tools die je bedrijf nodig heeft. Gebouwd om te openen, niet alleen te beschrijven.',
    studio: 'Studio', build: 'Wat we bouwen', start: 'Aan de slag',
    links: {},
    studioLinks: [['Diensten', '/nl/diensten/'], ['Werkwijze', '/nl/werkwijze/'], ['Tarieven', '/nl/tarieven/'], ['Over de oprichters', '/nl/over-ons/'], ['Blog', '/nl/blog/']],
    buildLinks: [['Websites & webapps', '/nl/diensten/'], ["MVP's", '/nl/diensten/'], ['Portals & dashboards', '/nl/diensten/'], ['API-integraties', '/nl/diensten/']],
    startLinks: [['Plan een kennismaking', '/nl/afspraak/'], ['Klantportaal', '/portal/']],
    sig: 'Opgericht december 2025 · Founder-led · Max 2 klanten tegelijk · Alleen greenfield-projecten',
    rights: `© ${YEAR} Voltage Software. Een founder-led studio. Jij bezit je code — elke regel.`,
    micro: 'Elke claim op deze site kunnen we bewijzen. Dat is het punt.',
    top: '↑ Terug naar boven',
  },
} as const;

export default function Footer() {
  const pathname = usePathname() || '/';
  const t = isNL(pathname) ? COPY.nl : COPY.en;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tag">{t.tag}</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/voltagesoftware" target="_blank" rel="noopener" aria-label="Voltage Software on LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2.02 0-2.33 1.57-2.33 3.2V21H9z" />
                </svg>
              </a>
              <a href="mailto:info@voltage-software.com" aria-label="Email Voltage Software">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="footer-col" aria-label={t.studio}>
            <h4>{t.studio}</h4>
            <ul>{t.studioLinks.map(([label, href]) => <li key={href + label}><a href={href}>{label}</a></li>)}</ul>
          </nav>

          <nav className="footer-col" aria-label={t.build}>
            <h4>{t.build}</h4>
            <ul>{t.buildLinks.map(([label, href]) => <li key={href + label}><a href={href}>{label}</a></li>)}</ul>
          </nav>

          <nav className="footer-col" aria-label={t.start}>
            <h4>{t.start}</h4>
            <ul>
              {t.startLinks.map(([label, href]) => <li key={href + label}><a href={href}>{label}</a></li>)}
              <li><a href="mailto:info@voltage-software.com">info@voltage-software.com</a></li>
            </ul>
          </nav>
        </div>

        <p className="footer-sig mono">{t.sig}</p>

        <div className="footer-bottom">
          <p>{t.rights}</p>
          <div className="footer-legal">
            <p className="footer-micro">{t.micro}</p>
            <a className="to-top" href="#header">{t.top}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
