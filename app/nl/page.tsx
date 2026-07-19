import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voltage Software — Neem niet ons woord ervoor. Kijk hoe we het bouwen.',
  description:
    'Voltage bouwt de specifieke software die je nodig hebt — websites, webapps, MVP\'s, portals, dashboards, integraties — op maat, voor een vaste prijs, in 6–8 weken. Een nieuwe studio uit Nederland die het eerlijk bewijst: elke vrijdag een werkende demo, betaling per mijlpaal, en code die van jou is.',
  alternates: { canonical: '/nl/', languages: { en: '/', nl: '/nl/', 'x-default': '/' } },
};

export default function HomeNL() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Nieuwe studio · opgericht december 2025 · founder-led</p>
          <h1 className="hero-title reveal">
            Neem niet ons woord ervoor.<br />
            <span className="grad">Kijk hoe we het bouwen.</span>
          </h1>
          <p className="hero-sub reveal">
            Voltage bouwt de specifieke software die je nodig hebt — productieklaar, op jouw maat. Websites, webapps,
            MVP&apos;s, klantportalen, dashboards, API-integraties — wat je ook wilt laten bouwen, wij bouwen het. Vaste
            scope, vaste prijs, geleverd in 6–8 weken. We zijn een nieuwe studio, dus we verdienen het op de eerlijke
            manier: elke vrijdag werkende software in je handen, betaling per mijlpaal, en 100% eigenaarschap van de code
            vanaf dag één.
          </p>
          <div className="hero-cta reveal">
            <a href="/nl/afspraak/" className="btn btn-primary">Plan een kennismaking <span aria-hidden="true">→</span></a>
            <a href="/nl/werkwijze/" className="btn btn-ghost">Zo werken we</a>
          </div>
          <p className="hero-micro mono reveal">
            Plan een gesprek van 30–45 min → voorstel met vaste prijs binnen 48 uur na dat gesprek. Geen abonnement, geen verplichting.
          </p>
          <ul className="trust-row reveal" aria-label="Wat elk traject bevat">
            <li>Vaste prijs, geen scope creep</li>
            <li>Wekelijkse vrijdagdemo&apos;s</li>
            <li>Je bezit 100% van de code</li>
            <li>30 dagen support na livegang</li>
          </ul>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      {/* STRAIGHT TALK */}
      <section className="section talk-section" id="straight-talk">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Eerlijk verhaal</p>
            <h2 className="h2">We zijn een nieuwe studio. Dus we laten het zien, we vertellen het niet.</h2>
          </div>
          <p className="prose reveal">
            De meeste bureaus openen met &quot;vertrouwd door 200+ bedrijven,&quot; een muur vol logo&apos;s en een rij
            sterren. Dat kunnen wij nog niet — en we gaan het niet faken, herkauwen of stiekem suggereren. Geen verzonnen
            klantaantal, geen geleende logo&apos;s, geen testimonials die we zelf schreven, geen cases die we niet kunnen
            laten zien. Wat we <em>wel</em> op tafel leggen: een manier van werken die het risico bij ons legt, niet bij
            jou — een vaste prijs, werkende software die je elke week ziet, en een contract dat je alles in handen geeft.
          </p>
          <ul className="pillars reveal">
            <li className="pillar">
              <span className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="#2A7BFF" strokeWidth="2" strokeLinecap="round" /><circle cx="19" cy="17" r="2.5" stroke="#2A7BFF" strokeWidth="2" /></svg>
              </span>
              <h3 className="pillar-title">Elke vrijdag werkende software</h3>
              <p>Je ziet je échte product elke week draaien — geen statusmailtjes, het echte ding.</p>
            </li>
            <li className="pillar">
              <span className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#2A7BFF" strokeWidth="2" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <h3 className="pillar-title">Een contract dat jou beschermt</h3>
              <p>Vaste prijs, betaling per mijlpaal, volledig eigenaarschap van de code.</p>
            </li>
            <li className="pillar">
              <span className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4" stroke="#2A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <h3 className="pillar-title">Oprichters die de code schrijven</h3>
              <p>Je werkt direct met de twee engineers die het bouwen. Geen accountmanagers, geen doorschuiven.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* PROOF */}
      <section className="section proof-section" id="proof">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Het bewijs, niet de pitch</p>
            <h2 className="h2">Nog geen klantlogo&apos;s. Dus we bewijzen het eerlijk.</h2>
          </div>
          <div className="proof-grid">
            <div className="proof-copy reveal">
              <p>
                We zijn een gloednieuwe studio, dus we tonen je geen muur vol logo&apos;s of testimonials die we zelf
                schreven. In plaats daarvan zit het bewijs in hoe we werken. Je ziet je product elke vrijdag samenkomen
                in een live demo, je betaalt per mijlpaal op basis van geleverde voortgang, en je bezit 100% van de code
                vanaf dag één. Je vertrouwt geen reputatie — je kijkt hoe het gebouwd wordt, week na week.
              </p>
              <p className="disclosure">
                En je zit nergens aan vast. De repo, de infrastructuur en elke regel code zijn van jou, uitgerold op
                accounts die jij beheert. Zouden we ooit niet meer de juiste match zijn, dan pak je het op en loop je weg
                — precies het soort vertrouwen dat een nieuwe studio zou moeten durven bieden.
              </p>
              <ul className="spec-list" aria-label="Wat elke build bevat">
                <li><span className="mono spec-k">Demo&apos;s</span> elke vrijdag live werkende software</li>
                <li><span className="mono spec-k">Betaling</span> 25 / 50 / 25 over de mijlpalen</li>
                <li><span className="mono spec-k">Eigendom</span> 100% van de code &amp; infrastructuur</li>
                <li><span className="mono spec-k">Kwaliteit</span> productieklaar, geen wegwerpversie</li>
                <li><span className="mono spec-k">Support</span> 30 dagen inbegrepen na livegang</li>
                <li><span className="mono spec-k">Focus</span> maximaal twee klanten tegelijk</li>
              </ul>
              <div className="chips" aria-label="Gebouwd met">
                <span className="chip mono">Next.js</span><span className="chip mono">React</span><span className="chip mono">TypeScript</span><span className="chip mono">PostgreSQL</span>
              </div>
              <div className="proof-cta">
                <a href="/nl/afspraak/" className="btn btn-primary">Plan een kennismaking <span aria-hidden="true">→</span></a>
                <a href="/nl/werkwijze/" className="btn btn-ghost">Bekijk het wekelijkse proces</a>
              </div>
            </div>

            <figure className="specimen reveal">
              <div className="specimen-frame">
                <div className="specimen-chrome">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <span className="specimen-url mono">jouw-product.nl</span>
                </div>
                <div className="specimen-body">
                  <aside className="sp-side">
                    <span className="sp-brand mono">⚡ Jouw product</span>
                    <span className="sp-nav sp-active">Dashboard</span>
                    <span className="sp-nav">Klanten</span>
                    <span className="sp-nav">Projecten</span>
                    <span className="sp-nav">Rapporten</span>
                    <span className="sp-nav">Instellingen</span>
                  </aside>
                  <div className="sp-main">
                    <div className="sp-cards">
                      <div className="sp-card"><span className="sp-k mono">Actieve gebruikers</span><span className="sp-v">—</span><span className="sp-bar"><i style={{ width: '64%' }}></i></span></div>
                      <div className="sp-card"><span className="sp-k mono">Omzet</span><span className="sp-v">—</span><span className="sp-bar"><i style={{ width: '42%' }}></i></span></div>
                      <div className="sp-card"><span className="sp-k mono">Taken klaar</span><span className="sp-v">—</span><span className="sp-bar"><i style={{ width: '78%' }}></i></span></div>
                    </div>
                    <div className="sp-chart" aria-hidden="true">
                      <i style={{ height: '38%' }}></i><i style={{ height: '62%' }}></i><i style={{ height: '48%' }}></i><i style={{ height: '80%' }}></i><i style={{ height: '58%' }}></i><i style={{ height: '92%' }}></i><i style={{ height: '70%' }}></i>
                    </div>
                    <div className="sp-rows"><span className="sp-row"></span><span className="sp-row"></span><span className="sp-row"></span></div>
                  </div>
                </div>
              </div>
              <figcaption className="mono">Illustratie van het soort interface dat we bouwen — strak, snel, productieklaar. Jouw product, jouw merk.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD (teaser) */}
      <section className="section build-section" id="build">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Trajecten</p>
            <h2 className="h2">Wat je ook nodig hebt — vanaf een lege repo</h2>
            <p className="section-sub">
              Een website, een webapp, een portal, een intern tool, een integratie. We nemen alleen greenfield-projecten
              aan — nieuwe sites, nieuwe producten, nieuwe systemen — want een schone start is hoe we een vaste deadline
              met vertrouwen halen.
            </p>
          </div>
          <ul className="build-grid reveal">
            <li className="build-card"><h3 className="build-title">Websites &amp; webapps</h3><p>Van een strakke, snelle marketingsite tot een volledige webapplicatie. Responsive, gebouwd om te converteren, klaar om mee te groeien.</p></li>
            <li className="build-card"><h3 className="build-title">MVP&apos;s</h3><p>Je eerste échte versie in handen van klanten. Productieklaar vanaf dag één — geen wegwerp-prototype.</p></li>
            <li className="build-card"><h3 className="build-title">Portals &amp; dashboards</h3><p>Self-service klantportalen en interne ops-dashboards. Inloggen, rollen, rechten — de hele mikmak.</p></li>
            <li className="build-card"><h3 className="build-title">API-integraties</h3><p>Verbind de systemen die allang met elkaar zouden moeten praten. Netjes, gedocumenteerd, onderhoudbaar.</p></li>
          </ul>
          <p className="build-foot reveal"><a href="/nl/diensten/" className="inline-link">Bekijk alles wat we bouwen, en voor wie →</a></p>
        </div>
      </section>

      {/* PROCESS (teaser) */}
      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Zo werken we — de build van 6–8 weken</p>
            <h2 className="h2">Van scope naar livegang, week voor week</h2>
            <p className="section-sub">
              Geen uurtje-factuurtje, geen scope creep. We spreken precies af wat er gebouwd wordt, wat het kost en
              wanneer het live gaat — vóór er één regel code wordt geschreven. Daarna zie je het elke vrijdag samenkomen.
            </p>
          </div>
          <ol className="rail reveal">
            <li className="rail-step"><span className="rail-node mono">W0</span><h3 className="rail-title">Scope &amp; vastleggen</h3><p>We brengen de build in kaart en leggen scope, prijs en livedatum vast. Voorstel met vaste prijs, meestal binnen 48 uur.</p></li>
            <li className="rail-step"><span className="rail-node mono">W1–2</span><h3 className="rail-title">Fundament</h3><p>Architectuur, datamodel en kernflows — het structurele werk dat bepaalt of software een ontmoeting met echte gebruikers overleeft.</p></li>
            <li className="rail-step"><span className="rail-node mono">W3–5</span><h3 className="rail-title">Bouwen</h3><p>Feature voor feature. Elke vrijdag een live demo van werkende software — geen statusmail.</p></li>
            <li className="rail-step"><span className="rail-node mono">W6–8</span><h3 className="rail-title">Verharden &amp; live</h3><p>Randgevallen, performance, de puntjes op de i — dan gaan we live en dragen we 100% van de code over, plus 30 dagen support.</p></li>
          </ol>
          <p className="rail-foot reveal"><a href="/nl/werkwijze/" className="inline-link">Bekijk het volledige week-voor-week proces en de garanties →</a></p>
        </div>
      </section>

      {/* FOUNDING */}
      <section className="section founding-section" id="founding">
        <div className="container">
          <div className="founding-card reveal">
            <span className="founding-badge mono">Beperkt · founding clients</span>
            <h2 className="h2">Wees een van onze eersten. Betaal er een founder-tarief voor.</h2>
            <p className="lead">
              We nemen onze eerste handvol klanten aan tegen een founder-tarief — een echte korting op de vaste prijs die
              we quoten — in ruil voor één ding: toestemming om jouw verhaal als case study te vertellen zodra het live
              is. Jij krijgt premium werk voor minder; wij krijgen het bewijs dat een nieuwe studio een gevestigde maakt.
            </p>
            <div className="center"><a href="/nl/afspraak/" className="btn btn-gold">Claim een founding-client plek</a></div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section cta-band" id="contact">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Even praten</p>
            <h2 className="h2">Je hoeft geen woord op deze pagina te geloven.</h2>
            <p className="lead">
              Het kennismakingsgesprek duurt 30–45 minuten en eindigt met een voorstel met vaste prijs in je inbox binnen
              48 uur. Geen uurtje-factuurtje, geen scope creep — en daarna zie je elke week werkende software.
            </p>
          </div>
          <div className="center reveal">
            <a href="/nl/afspraak/" className="btn btn-primary">Plan een kennismaking <span aria-hidden="true">→</span></a>
            <p className="cta-reassure mono">Eindigt met een voorstel met vaste prijs binnen 48 uur — geen verplichting.</p>
          </div>
        </div>
      </section>
    </>
  );
}
