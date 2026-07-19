// Bilingual routing: English lives at the root, Dutch under /nl/.
// This maps nav + counterpart URLs so the header, footer, language switcher,
// and hreflang tags all stay in sync.

export type NavItem = { href: string; label: string };

export const NAV_EN: NavItem[] = [
  { href: '/services/', label: 'Services' },
  { href: '/approach/', label: 'Approach' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/about/', label: 'About' },
  { href: '/blog/', label: 'Writing' },
];

export const NAV_NL: NavItem[] = [
  { href: '/nl/diensten/', label: 'Diensten' },
  { href: '/nl/werkwijze/', label: 'Werkwijze' },
  { href: '/nl/tarieven/', label: 'Tarieven' },
  { href: '/nl/over-ons/', label: 'Over ons' },
  { href: '/nl/blog/', label: 'Blog' },
];

// English path -> Dutch counterpart (used by the language switcher + hreflang).
export const EN_TO_NL: Record<string, string> = {
  '/': '/nl/',
  '/services/': '/nl/diensten/',
  '/approach/': '/nl/werkwijze/',
  '/pricing/': '/nl/tarieven/',
  '/about/': '/nl/over-ons/',
  '/contact/': '/nl/contact/',
  '/book/': '/nl/afspraak/',
  '/blog/': '/nl/blog/',
};

export const NL_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_NL).map(([en, nl]) => [nl, en]),
);

export const isNL = (pathname: string) => pathname === '/nl' || pathname.startsWith('/nl/');

/** The counterpart URL in the other language (falls back to the other home). */
export function counterpart(pathname: string): string {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  if (isNL(p)) return NL_TO_EN[p] ?? '/';
  return EN_TO_NL[p] ?? '/nl/';
}

// Per-locale UI strings for the shared chrome.
export const UI = {
  en: { clientLogin: 'Client login', bookCta: 'Book a call', switchTo: 'NL', switchAria: 'Bekijk deze site in het Nederlands' },
  nl: { clientLogin: 'Klant login', bookCta: 'Plan een gesprek', switchTo: 'EN', switchAria: 'View this site in English' },
} as const;

export const BOOK_HREF = { en: '/book/', nl: '/nl/afspraak/' };
export const PORTAL_HREF = '/portal/'; // ERP portal is shared (login is language-agnostic)
