import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Websites, web apps, MVPs, portals & integrations',
  description:
    'You tell us what you need; we build exactly that — websites, web apps, MVPs, customer portals, ops dashboards, and API integrations. Greenfield builds only, fixed price, delivered in 6–8 weeks.',
  alternates: { canonical: '/services/', languages: { en: '/services/', nl: '/nl/diensten/', 'x-default': '/services/' } },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom software development',
  provider: { '@type': 'Organization', name: 'Voltage Software', url: 'https://voltage-software.com/' },
  areaServed: 'Europe',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software builds',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Websites & web apps' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MVP development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer portals & dashboards' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API integrations' } },
    ],
  },
};

export default function Services() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">What we build</p>
          <h1 className="hero-title reveal">Whatever you need built — from a blank repo</h1>
          <p className="page-lead reveal">
            You tell us what you need; we build exactly that — a website, a web app, a portal, an internal tool, an
            integration. We take on greenfield builds only: new sites, new products, new systems — no rescuing someone
            else&apos;s legacy codebase, no half-finished rewrites. A clean start is how we hit a fixed deadline with
            confidence.
          </p>
          <div className="hero-cta reveal">
            <a href="/book/" className="btn btn-primary">Tell us what you need <span aria-hidden="true">→</span></a>
            <a href="/pricing/" className="btn btn-ghost">See pricing</a>
          </div>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="section build-section" id="build">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Engagements</p>
            <h2 className="h2">Four things we do, done properly</h2>
            <p className="section-sub">
              Every engagement is production-grade and fixed-price. Not sure which one fits? That&apos;s exactly what the
              discovery call is for.
            </p>
          </div>
          <ul className="build-grid reveal">
            <li className="build-card">
              <h3 className="build-title">Websites &amp; web apps</h3>
              <p>From a polished, fast-loading marketing site to a full web application. Responsive, built to convert, and ready to scale when you grow.</p>
            </li>
            <li className="build-card">
              <h3 className="build-title">MVPs</h3>
              <p>Get your first real version into customers&apos; hands. Production-grade from day one — not a throwaway prototype that becomes next year&apos;s technical debt.</p>
            </li>
            <li className="build-card">
              <h3 className="build-title">Portals &amp; dashboards</h3>
              <p>Self-serve customer portals and internal ops dashboards where people log in, see their data, and do their work. Auth, roles, the lot.</p>
            </li>
            <li className="build-card">
              <h3 className="build-title">API integrations</h3>
              <p>Connect the systems that should already talk to each other. Clean, documented, maintainable.</p>
            </li>
          </ul>
          <p className="build-foot reveal">
            Greenfield only — new builds, built right, not rescue missions on inherited code.{' '}
            <a href="/book/" className="inline-link">Not sure which one you need? That&apos;s what the call is for →</a>
          </p>
          <div className="chips reveal" aria-label="Built with" style={{ marginTop: '2rem' }}>
            <span className="chip mono">Next.js</span><span className="chip mono">React</span><span className="chip mono">TypeScript</span><span className="chip mono">PostgreSQL</span><span className="chip mono">Node</span>
          </div>
        </div>
      </section>

      {/* HONEST FIT */}
      <section className="section fit-section" id="fit">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Honest fit</p>
            <h2 className="h2">A great fit if… and an honest &quot;not yet&quot; if not</h2>
            <p className="section-sub">We&apos;d rather qualify out a bad fit on the call than overpromise and disappoint. Here&apos;s the straight version.</p>
          </div>
          <div className="fit-grid reveal">
            <div className="fit-col fit-yes">
              <h3 className="fit-h"><span aria-hidden="true">✓</span> A great fit if you&apos;re —</h3>
              <ul>
                <li>A founder, operator, or team with a clearly-shaped build in mind</li>
                <li>Looking for a fresh, greenfield build — a new site, product, or system, not a rescue of legacy code</li>
                <li>Someone who values a fixed price and a fixed date over open-ended hourly work</li>
                <li>Able to give a single decision-maker for the weekly Friday demos</li>
              </ul>
            </div>
            <div className="fit-col fit-no">
              <h3 className="fit-h"><span aria-hidden="true">—</span> Probably not a fit if you —</h3>
              <ul>
                <li>Need ongoing maintenance of an existing large codebase (we do greenfield)</li>
                <li>Have a scope that genuinely can&apos;t be defined yet — though if you&apos;d like help shaping it, that&apos;s a fair thing to bring to the call</li>
                <li>Need more than two teams&apos; worth of parallel work right now</li>
                <li>Want to bill purely by the hour with scope left open-ended</li>
              </ul>
            </div>
          </div>
          <p className="fit-foot reveal">Not sure? Just ask on the call. If we&apos;re not the right studio for it, we&apos;ll tell you honestly — and point you somewhere better.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="h2">Tell us what you&apos;re building</h2>
            <p className="lead">Book a 30–45 minute discovery call and you&apos;ll have a fixed-price proposal — scope, timeline, milestones — within 48 hours.</p>
          </div>
          <div className="center reveal">
            <a href="/book/" className="btn btn-primary">Book a discovery call <span aria-hidden="true">→</span></a>
            <p className="cta-reassure mono">No hourly billing. No obligation.</p>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
    </>
  );
}
