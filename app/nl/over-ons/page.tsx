import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over ons — Je werkt met de engineers, niet met een bureaulaag',
  description:
    'Voltage is een founder-led studio, gebouwd door Dishairano de Boer en Kenji Vliet — de twee engineers die de code schrijven. Geen accountmanagers, geen bait-and-switch — de mensen op je gesprek zijn de mensen die je product bouwen en elke vrijdag demonstreren.',
  alternates: { canonical: '/nl/over-ons/', languages: { en: '/about/', nl: '/nl/over-ons/', 'x-default': '/about/' } },
};

export default function OverOnsNL() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Wie we zijn</p>
          <h1 className="hero-title reveal">Je werkt met de engineers, niet met een bureaulaag</h1>
          <p className="page-lead reveal">
            Voltage is een founder-led studio. De mensen op je kennismakingsgesprek zijn de twee engineers die je code
            schrijven en het elke vrijdag demonstreren — precies waarom we maar twee klanten tegelijk aannemen.
          </p>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section founder-section" id="founder">
        <div className="container">
          <div className="founder-card reveal">
            <div className="founder-aside">
              <div>
                <span className="founder-avatar" aria-hidden="true">DdB</span>
                <p className="founder-name">Dishairano de Boer</p>
                <p className="founder-role mono">Oprichter &amp; Lead Engineer</p>
              </div>
              <div style={{ marginTop: 'var(--space-6)' }}>
                <span className="founder-avatar" aria-hidden="true">KV</span>
                <p className="founder-name">Kenji Vliet</p>
                <p className="founder-role mono">Mede-oprichter &amp; Engineer</p>
              </div>
            </div>
            <div className="founder-body">
              <p className="eyebrow mono">Wie het bouwt</p>
              <h2 className="h2">De mensen met wie je praat zijn de mensen die het bouwen</h2>
              <p>Voltage wordt gebouwd door Dishairano de Boer en Kenji Vliet — mede-oprichters, en de twee engineers die de code daadwerkelijk schrijven. Samen bouwden we jarenlang productiesoftware bij startups, het soort dat moet werken op de dag dat echte klanten opduiken.</p>
              <p>De meeste bureaus verkopen je een senior in de pitch en zetten je na tekenen op juniors. Bij Voltage is er geen bait-and-switch, want er is niemand om in te wisselen — je krijgt ons allebei. De mensen op je kennismakingsgesprek zijn de mensen die je code schrijven en het elke vrijdag demonstreren — precies waarom we maar twee klanten tegelijk aannemen. En je hoeft de ervaring niet op vertrouwen aan te nemen: elke vrijdag zie je de échte code draaien, de enige eerlijke manier om welke studio dan ook te beoordelen — op het werk, terwijl het gebouwd wordt.</p>
              <blockquote className="pull-quote">&quot;We laten je liever een systeem zien dat we bouwden dan dat we je vertellen over systemen die je niet kunt zien.&quot;</blockquote>
              <a href="/nl/afspraak/" className="inline-link">Praat direct met de oprichters <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section talk-section" id="straight-talk">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Eerlijk verhaal</p>
            <h2 className="h2">We zijn nieuw. Dus we laten het zien, we vertellen het niet.</h2>
          </div>
          <p className="prose reveal">
            De meeste bureaus openen met &quot;vertrouwd door 200+ bedrijven,&quot; een muur vol logo&apos;s en een rij
            sterren. Dat kunnen wij nog niet — en we gaan het niet faken, herkauwen of stiekem suggereren. Geen verzonnen
            klantaantal, geen geleende logo&apos;s, geen testimonials die we zelf schreven, geen cases die we niet kunnen
            laten zien. Wat we <em>wel</em> op tafel leggen: een manier van werken die het risico bij ons legt, niet bij
            jou — een vaste prijs, werkende software die je elke week ziet, en een contract dat je alles in handen geeft.
            Dat is de hele belofte, en alles op deze site kunnen we bewijzen.
          </p>
          <ul className="pillars reveal">
            <li className="pillar"><span className="pillar-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="#2A7BFF" strokeWidth="2" strokeLinecap="round" /><circle cx="19" cy="17" r="2.5" stroke="#2A7BFF" strokeWidth="2" /></svg></span><h3 className="pillar-title">Elke vrijdag werkende software</h3><p>Je ziet je échte product elke week draaien — geen statusmailtjes, het echte ding.</p></li>
            <li className="pillar"><span className="pillar-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#2A7BFF" strokeWidth="2" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><h3 className="pillar-title">Een contract dat jou beschermt</h3><p>Vaste prijs, betaling per mijlpaal, volledig eigenaarschap van de code.</p></li>
            <li className="pillar"><span className="pillar-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4" stroke="#2A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><h3 className="pillar-title">Oprichters die de code schrijven</h3><p>Je werkt direct met de twee engineers die het bouwen. Geen accountmanagers, geen doorschuiven.</p></li>
          </ul>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="h2">Praat met de oprichters</h2>
            <p className="lead">Een gesprek van 30–45 minuten zonder druk — jij kwalificeert ons, wij kwalificeren jou — met een voorstel met vaste prijs binnen 48 uur als het een match is.</p>
          </div>
          <div className="center reveal"><a href="/nl/afspraak/" className="btn btn-primary">Plan een kennismaking <span aria-hidden="true">→</span></a></div>
        </div>
      </section>
    </>
  );
}
