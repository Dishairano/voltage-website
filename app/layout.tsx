import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WebGLScene from '@/components/WebGLScene';
import SiteEnhancements from '@/components/SiteEnhancements';
import Analytics from '@/components/Analytics';

const SITE = 'https://voltage-software.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Voltage Software — Fixed-Price Custom Software, Shipped in 6–8 Weeks',
    template: '%s · Voltage Software',
  },
  description:
    'Voltage builds the specific software you need — websites, web apps, MVPs, portals, dashboards, integrations — to your spec, at a fixed price, in 6–8 weeks. A new studio that proves it the honest way: a working demo every Friday, milestone payments, and code you own.',
  keywords: [
    'software development studio', 'MVP development', 'customer portal', 'B2B SaaS',
    'fixed price software', 'product engineering', 'Next.js studio',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/assets/images/favicon.svg', apple: '/assets/images/favicon.svg' },
  openGraph: {
    type: 'website',
    url: SITE,
    siteName: 'Voltage Software',
    title: "Voltage Software — Don't take our word for it. Watch us build it.",
    description:
      'A founder-led studio that proves it ships — not with logos, but with working software in your hands every Friday, milestone payments, and 100% code ownership. Fixed price, fixed 6–8 week deadline.',
    images: [{ url: '/assets/images/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Voltage Software — Don't take our word for it. Watch us build it.",
    description:
      'A founder-led studio that proves it ships. Websites, web apps, and tools — fixed price, fixed 6–8 week deadline.',
    images: ['/assets/images/og-image.svg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#07090D',
  width: 'device-width',
  initialScale: 1,
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#org`,
  name: 'Voltage Software',
  url: `${SITE}/`,
  description:
    'Founder-led software studio building production-ready custom software — websites, web apps, MVPs, customer portals, dashboards, and API integrations — at a fixed price on a fixed 6–8 week deadline.',
  foundingDate: '2025-12',
  email: 'info@voltage-software.com',
  founder: [
    { '@type': 'Person', name: 'Dishairano de Boer', jobTitle: 'Founder & Lead Engineer' },
    { '@type': 'Person', name: 'Kenji Vliet', jobTitle: 'Co-founder & Engineer' },
  ],
  logo: `${SITE}/assets/images/favicon.svg`,
  slogan: "Don't take our word for it. Watch us build it.",
  sameAs: ['https://www.linkedin.com/company/voltagesoftware'],
  address: { '@type': 'PostalAddress', addressCountry: 'NL' },
  areaServed: ['Netherlands', 'Europe'],
  knowsAbout: [
    'Website development', 'Web application development', 'MVP development', 'Customer portals',
    'Internal dashboards', 'API integrations', 'Next.js', 'TypeScript', 'PostgreSQL',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <canvas id="bg-canvas" aria-hidden="true"></canvas>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WebGLScene />
        <SiteEnhancements />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
