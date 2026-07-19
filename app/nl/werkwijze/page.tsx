import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Werkwijze — Vaste scope, vaste prijs, vaste deadline',
  description:
    'Hoe Voltage werkt: vaste scope, vaste prijs en vaste deadline — op papier, vóór er code wordt geschreven. Een build van 6–8 weken, elke vrijdag een live demo, betaling per mijlpaal en zes garanties die het risico bij ons leggen.',
  alternates: { canonical: '/nl/werkwijze/', languages: { en: '/approach/', nl: '/nl/werkwijze/', 'x-default': '/approach/' } },
};

export default function WerkwijzeNL() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Zo werken we</p>
          <h1 className="hero-title reveal">Vaste scope. Vaste prijs. Vaste deadline.</h1>
          <p className="page-lead reveal">
            De twee manieren waarop softwarewerk een koper meestal teleurstelt zijn dezelfde twee: de prijs verschuift en
            de datum schuift op. Wij halen beide vooraf weg — op papier, vóór er code wordt geschreven — en daarna kijk je
            elke vrijdag hoe het samenkomt in een live demo.
          </p>
          <div className="hero-cta reveal">
            <a href="/nl/afspraak/" className="btn btn-primary">Plan een kennismaking <span aria-hidden="true">→</span></a>
            <a href="/nl/tarieven/" className="btn btn-ghost">Bekijk tarieven</a>
          </div>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section promise-section" id="promise">
        <div className="container">
          <div className="promise-card reveal">
            <p className="eyebrow mono gold-text">De belofte</p>
            <h2 className="h2">Op papier, vóór er code wordt geschreven.</h2>
            <p>
              De meeste bureaus factureren per uur en leveren &quot;als het klaar is.&quot; Wij niet. Vóór er één regel
              code wordt geschreven, spreken we precies af wat er gebouwd wordt, wat het kost en de dag dat het live gaat
              — en we houden alle drie. Geen urenteller, geen scope-creep-facturen, geen open-eind planning. Je ziet het
              elke vrijdag samenkomen in een live demo, dus als er iets afdwaalt zie je dat in dagen, niet bij de deadline.
              Dat is het product: een harde, vastgelegde belofte, onderbouwd door zes concrete voorwaarden hieronder — geen slogan.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">De build van 6–8 weken</p>
            <h2 className="h2">Van scope naar livegang, week voor week</h2>
            <p className="section-sub">Geen uurtje-factuurtje, geen scope creep, geen &quot;het is klaar als het klaar is.&quot; We spreken precies af wat er gebouwd wordt, wat het kost en wanneer het landt — vóór er code wordt geschreven. Daarna zie je het elke vrijdag samenkomen.</p>
          </div>
          <ol className="rail reveal">
            <li className="rail-step"><span className="rail-node mono">W0</span><h3 className="rail-title">Scope &amp; vastleggen</h3><p>We brengen de build in kaart, bepalen precies hoe &quot;klaar&quot; eruitziet en leggen scope, prijs en livedatum vast. Je krijgt een voorstel met vaste prijs — meestal binnen 48 uur na ons gesprek.</p></li>
            <li className="rail-step"><span className="rail-node mono">W1–2</span><h3 className="rail-title">Fundament</h3><p>Architectuur, datamodel en kernflows. Het onglamoureuze structurele werk dat bepaalt of software een ontmoeting met echte gebruikers overleeft.</p></li>
            <li className="rail-step"><span className="rail-node mono">W3–5</span><h3 className="rail-title">Bouwen</h3><p>Feature voor feature krijgt het product vorm. Elke vrijdag krijg je een live demo van werkende software — geen statusmail, het echte ding.</p></li>
            <li className="rail-step"><span className="rail-node mono">W6–7</span><h3 className="rail-title">Verharden &amp; polijsten</h3><p>Randgevallen, foutafhandeling, performance en de details die &quot;werkt op mijn machine&quot; scheiden van productieklaar.</p></li>
            <li className="rail-step"><span className="rail-node mono">W8</span><h3 className="rail-title">Livegang + overdracht</h3><p>We gaan live. Code, repo&apos;s en infrastructuur overgedragen — 100% van jou. Daarna 30 dagen support na livegang.</p></li>
          </ol>
          <p className="rail-marker mono reveal">⚡ Elke vrijdag een live demo — je zit nooit langer dan 7 dagen zonder echte, draaiende voortgang te zien.</p>
          <p className="rail-foot reveal">Twee oprichters, handen op het toetsenbord, de hele weg. De mensen met wie je praat zijn de mensen die het bouwen.</p>
        </div>
      </section>

      <section className="section guarantee-section" id="guarantees">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono gold-text">Risico omgedraaid</p>
            <h2 className="h2">We zijn nieuw — dus wij nemen het risico, niet jij.</h2>
            <p className="section-sub">Een eerste klant van een nieuwe studio verdient meer bescherming, niet minder. Zo verdienen we het traject — zes voorwaarden, stuk voor stuk iets dat we op papier waar kunnen maken.</p>
          </div>
          <ul className="guarantee-grid reveal">
            <li className="g-card"><span className="g-n mono">01</span><h3>Vaste prijs, vastgelegd</h3><p>Het bedrag in het voorstel is het bedrag dat je betaalt. Geen urencreep, geen verrassingsfacturen.</p></li>
            <li className="g-card"><span className="g-n mono">02</span><h3>Je betaalt per mijlpaal</h3><p>25% bij start, 50% halverwege, 25% bij livegang. Je geld volgt geleverde voortgang, geen beloftes.</p></li>
            <li className="g-card"><span className="g-n mono">03</span><h3>Wekelijkse vrijdagdemo&apos;s</h3><p>Elke week live werkende software. Als we afdwalen, zie je het direct — niet aan het eind.</p></li>
            <li className="g-card"><span className="g-n mono">04</span><h3>Je bezit 100% van de code</h3><p>Volledig eigendom, volledige repo, volledige infrastructuur, geen lock-in, geen licentiespelletjes — uitgerold op accounts die jij beheert.</p></li>
            <li className="g-card"><span className="g-n mono">05</span><h3>30 dagen support na livegang</h3><p>We verdwijnen niet bij de overdracht. Een maand support zit erin, zodat je in een vangnet live gaat.</p></li>
            <li className="g-card"><span className="g-n mono">06</span><h3>Maximaal twee klanten</h3><p>We houden het op twee gelijktijdige projecten, zodat die van jou de volle aandacht van een oprichter krijgt. Altijd.</p></li>
          </ul>
          <p className="fine reveal">Deze voorwaarden dekken de scope die we op papier afspreken. Voeg je halverwege nieuwe scope toe, dan quoten we die transparant opnieuw — vaste prijs, opnieuw.</p>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="h2">Zie het werken vóór je je vastlegt</h2>
            <p className="lead">Plan een kennismaking. Je krijgt binnen 48 uur een voorstel met vaste prijs — scope, planning, mijlpalen — en daarna elke vrijdag een werkende demo.</p>
          </div>
          <div className="center reveal">
            <a href="/nl/afspraak/" className="btn btn-primary">Plan een kennismaking <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
