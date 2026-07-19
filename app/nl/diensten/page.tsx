import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diensten — Websites, webapps, MVP\'s, portals & integraties',
  description:
    'Jij vertelt wat je nodig hebt; wij bouwen precies dat — websites, webapps, MVP\'s, klantportalen, ops-dashboards en API-integraties. Alleen greenfield, vaste prijs, geleverd in 6–8 weken.',
  alternates: { canonical: '/nl/diensten/', languages: { en: '/services/', nl: '/nl/diensten/', 'x-default': '/services/' } },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Maatwerk softwareontwikkeling',
  provider: { '@type': 'Organization', name: 'Voltage Software', url: 'https://voltage-software.com/' },
  areaServed: 'NL',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Softwareprojecten',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Websites & webapps' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MVP-ontwikkeling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Klantportalen & dashboards' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API-integraties' } },
    ],
  },
};

export default function DienstenNL() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Wat we bouwen</p>
          <h1 className="hero-title reveal">Wat je ook nodig hebt — vanaf een lege repo</h1>
          <p className="page-lead reveal">
            Jij vertelt wat je nodig hebt; wij bouwen precies dat — een website, een webapp, een portal, een intern
            tool, een integratie. We nemen alleen greenfield-projecten aan: nieuwe sites, nieuwe producten, nieuwe
            systemen — geen redding van andermans legacy-code, geen half afgemaakte herbouw. Een schone start is hoe we
            een vaste deadline met vertrouwen halen.
          </p>
          <div className="hero-cta reveal">
            <a href="/nl/afspraak/" className="btn btn-primary">Vertel wat je nodig hebt <span aria-hidden="true">→</span></a>
            <a href="/nl/tarieven/" className="btn btn-ghost">Bekijk tarieven</a>
          </div>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section build-section" id="build">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Trajecten</p>
            <h2 className="h2">Vier dingen die we doen, en goed doen</h2>
            <p className="section-sub">Elk traject is productieklaar en tegen een vaste prijs. Weet je niet welke past? Precies waar het kennismakingsgesprek voor is.</p>
          </div>
          <ul className="build-grid reveal">
            <li className="build-card"><h3 className="build-title">Websites &amp; webapps</h3><p>Van een strakke, snelle marketingsite tot een volledige webapplicatie. Responsive, gebouwd om te converteren, en klaar om mee te groeien.</p></li>
            <li className="build-card"><h3 className="build-title">MVP&apos;s</h3><p>Je eerste échte versie in handen van klanten. Productieklaar vanaf dag één — geen wegwerp-prototype dat volgend jaar technische schuld wordt.</p></li>
            <li className="build-card"><h3 className="build-title">Portals &amp; dashboards</h3><p>Self-service klantportalen en interne ops-dashboards waar mensen inloggen, hun data zien en hun werk doen. Auth, rollen, alles erop en eraan.</p></li>
            <li className="build-card"><h3 className="build-title">API-integraties</h3><p>Verbind de systemen die allang met elkaar zouden moeten praten. Netjes, gedocumenteerd, onderhoudbaar.</p></li>
          </ul>
          <p className="build-foot reveal">Alleen greenfield — nieuwe builds, goed gebouwd, geen reddingsacties op geërfde code.{' '}<a href="/nl/afspraak/" className="inline-link">Weet je niet welke je nodig hebt? Daar is het gesprek voor →</a></p>
          <div className="chips reveal" aria-label="Gebouwd met" style={{ marginTop: '2rem' }}>
            <span className="chip mono">Next.js</span><span className="chip mono">React</span><span className="chip mono">TypeScript</span><span className="chip mono">PostgreSQL</span><span className="chip mono">Node</span>
          </div>
        </div>
      </section>

      <section className="section fit-section" id="fit">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Eerlijke match</p>
            <h2 className="h2">Een goede match als… en een eerlijk &quot;nog niet&quot; als niet</h2>
            <p className="section-sub">We kwalificeren liever een slechte match weg op het gesprek dan te veel beloven en teleurstellen. Hier is de eerlijke versie.</p>
          </div>
          <div className="fit-grid reveal">
            <div className="fit-col fit-yes">
              <h3 className="fit-h"><span aria-hidden="true">✓</span> Goede match als je —</h3>
              <ul>
                <li>Een oprichter, operator of team bent met een duidelijk gevormd idee</li>
                <li>Op zoek bent naar een frisse, greenfield build — geen redding van legacy-code</li>
                <li>Een vaste prijs en vaste datum verkiest boven open-eind uurwerk</li>
                <li>Eén beslisser kunt aanwijzen voor de wekelijkse vrijdagdemo&apos;s</li>
              </ul>
            </div>
            <div className="fit-col fit-no">
              <h3 className="fit-h"><span aria-hidden="true">—</span> Waarschijnlijk geen match als je —</h3>
              <ul>
                <li>Doorlopend onderhoud aan een bestaande grote codebase nodig hebt (wij doen greenfield)</li>
                <li>Een scope hebt die nog echt niet te definiëren is — al is hulp bij het vormgeven prima om mee te nemen</li>
                <li>Meer dan twee teams aan parallel werk nu nodig hebt</li>
                <li>Puur per uur wilt factureren met een open-eind scope</li>
              </ul>
            </div>
          </div>
          <p className="fit-foot reveal">Twijfel je? Vraag het gewoon op het gesprek. Zijn we niet de juiste studio, dan zeggen we het eerlijk — en wijzen we je iets beters.</p>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="h2">Vertel ons wat je bouwt</h2>
            <p className="lead">Plan een kennismaking van 30–45 minuten en je hebt binnen 48 uur een voorstel met vaste prijs — scope, planning, mijlpalen.</p>
          </div>
          <div className="center reveal">
            <a href="/nl/afspraak/" className="btn btn-primary">Plan een kennismaking <span aria-hidden="true">→</span></a>
            <p className="cta-reassure mono">Geen uurtje-factuurtje. Geen verplichting.</p>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
    </>
  );
}
