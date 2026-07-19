import type { Metadata } from 'next';
import Faq, { type QA } from '@/components/Faq';

export const metadata: Metadata = {
  title: 'Tarieven — Vaste prijsklassen, geen uurtje-factuurtje',
  description:
    'Transparante vaste prijsklassen, zodat je kunt budgetteren vóór je boekt. Elk project is één vaste prijs voor een afgesproken scope, betaald 25/50/25 over de mijlpalen, met een exact bedrag op papier binnen 48 uur na je gesprek.',
  alternates: { canonical: '/nl/tarieven/', languages: { en: '/pricing/', nl: '/nl/tarieven/', 'x-default': '/pricing/' } },
};

const FAQ_ITEMS: QA[] = [
  { q: 'Jullie zijn een nieuwe studio. Waarom zou ik jullie mijn product toevertrouwen?', a: 'Vertrouw ons niet op reputatie — die hebben we nog niet verdiend, en we gaan er geen faken. Vertrouw op hoe we werken: je ziet elke vrijdag werkende software, je betaalt per mijlpaal op basis van echte voortgang, en je bezit 100% van de code. We hebben het hele traject zo opgezet dat je heel weinig riskeert om erachter te komen dat we goed zijn.' },
  { q: 'Hebben jullie klant-cases?', a: 'Nog niet — en we verzinnen ze niet. We zijn een nieuwe studio, dus in plaats van te wijzen op werk dat we niet kunnen tonen, halen we het risico weg: een vaste prijs, elke vrijdag werkende software, betaling per mijlpaal en volledig eigenaarschap van de code. Onze founding clients worden onze eerste gepubliceerde cases.' },
  { q: 'Wat voor software bouwen jullie?', a: 'Wat je ook nodig hebt, zolang het een frisse, greenfield build is — websites, webapps, MVP\'s, klantportalen, interne en ops-dashboards, en API-integraties. Jij vertelt wat je wilt; wij scopen het, prijzen het en bouwen precies dat. We nemen geen redding van grote legacy-codebases aan, want een schone start is hoe we een vaste deadline halen.' },
  { q: 'Wat kost het?', a: 'Elk project heeft een vaste prijs, vooraf gequote. De prijsklassen hierboven geven je de eerlijke vorm vóór je ooit boekt; na het kennismakingsgesprek krijg je een exact bedrag, scope en deadline binnen 48 uur — vóór je je ergens aan bindt. Founding clients krijgen een founder-tarief.' },
  { q: 'En als het project over scope of over tijd gaat?', a: 'De prijs staat vast, dus overschrijdingen zijn ons probleem, niet jouw factuur. Je ziet elke vrijdag werkende software, dus afwijking komt in dagen aan het licht, niet bij de deadline. Betaling per mijlpaal betekent dat je geld alleen beweegt als er echte voortgang landt. Voeg je halverwege nieuwe scope toe, dan quoten we die transparant opnieuw — de oorspronkelijke afspraak blijft vast.' },
  { q: 'Wat gebeurt er na de 30 dagen support?', a: 'Je bezit 100% van de code, repo\'s en infrastructuur, uitgerold op accounts die jij beheert — dus je zit nooit vast. Het venster van 30 dagen dekt fixes na livegang; daarna kun je het in-house nemen, aan wie dan ook overdragen, of voortgezette support met ons afspreken. We draaien geen verplicht retainer, en we doen niet alsof.' },
  { q: 'Waarom maar twee klanten tegelijk?', a: 'Omdat de oprichters het werk doen. Twee is het aantal waarbij elke klant echte senior-aandacht krijgt. Het is een bewuste grens, geen fase waar we ons voor schamen — plan dus een gesprek en we vertellen je eerlijk wanneer we kunnen starten.' },
];

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage', '@id': 'https://voltage-software.com/nl/tarieven/#faq',
  inLanguage: 'nl',
  mainEntity: FAQ_ITEMS.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: typeof it.a === 'string' ? it.a : '' } })),
};

export default function TarievenNL() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Transparante tarieven</p>
          <h1 className="hero-title reveal">Vaste prijsklassen, zodat je kunt budgetteren vóór je boekt</h1>
          <p className="page-lead reveal">
            Elk project wordt op zijn scope gequote — maar je zou geen salesgesprek moeten uitzitten om de vorm ervan te
            leren kennen. Hier is de eerlijke versie. Je kennismakingsgesprek maakt van een van deze één vaste prijs, op
            papier, zonder uurtje-factuurtje erachter.
          </p>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="container">
          <ul className="price-grid reveal">
            <li className="price-card"><span className="price-k mono">Compacte build</span><p className="price-scope">Een strak-gescopede MVP, één dashboard of één specifieke integratie.</p><p className="price-meta mono">Korte kant van de 6–8 weken · één kernflow</p></li>
            <li className="price-card price-featured"><span className="badge-most mono">Meest gekozen</span><span className="price-k mono">Standaard build</span><p className="price-scope">Een voller product — een MVP met meerdere kernflows, een klantportaal of een gekoppeld intern tool.</p><p className="price-meta mono">Het typische Voltage-traject · ~6–8 weken</p></li>
            <li className="price-card"><span className="price-k mono">Uitgebreide build</span><p className="price-scope">Een groter, meer gekoppeld systeem over meerdere modules en integraties.</p><p className="price-meta mono">Volle 8 weken · meerdere modules</p></li>
          </ul>
          <p className="price-foot reveal">Elke klasse is één vaste prijs voor een afgesproken scope, betaald <span className="mono">25 / 50 / 25</span> over de mijlpalen. Het exacte bedrag komt uit je kennismakingsgesprek en landt op papier binnen 48 uur. Founding clients krijgen een echte korting op de vaste prijs die we quoten.</p>
          <div className="center reveal">
            <a href="/nl/afspraak/" className="btn btn-primary">Plan een kennismaking</a>
            <p className="cta-reassure mono">Eindigt met een voorstel met vaste prijs binnen 48 uur — geen verplichting.</p>
          </div>
        </div>
      </section>

      <section className="section founding-section" id="founding">
        <div className="container">
          <div className="founding-card reveal">
            <span className="founding-badge mono">Beperkt · founding clients</span>
            <h2 className="h2">Wees een van onze eersten. Betaal er een founder-tarief voor.</h2>
            <p className="lead">We nemen onze eerste handvol klanten aan tegen een founder-tarief — een echte korting op de vaste prijs die we quoten — in ruil voor één ding: toestemming om jouw verhaal als case study te vertellen en je te citeren zodra het live is. Jij krijgt premium werk voor minder; wij krijgen het bewijs dat een nieuwe studio een gevestigde maakt. Dat is een eerlijke ruil, en het gebeurt maar één keer.</p>
            <div className="founding-cols">
              <div><h3 className="founding-h">Wat je krijgt</h3><ul className="check-list"><li>Een echte korting op je vaste prijs</li><li>Dezelfde vaste-scope, vaste-deadline garanties als elke klant</li><li>De volle aandacht van een oprichter — max twee projecten tegelijk</li></ul></div>
              <div><h3 className="founding-h">Wat we vragen</h3><ul className="check-list"><li>Een korte, eerlijke testimonial na livegang</li><li>Toestemming om het project als case study te publiceren</li></ul></div>
            </div>
            <p className="founding-scarcity">Omdat we maximaal twee builds tegelijk draaien, is founding-client-beschikbaarheid echt beperkt — geen trucje. Geen afteltimers, geen kunstmatige paniek. Vraag op je gesprek of er nu een founding-client plek open is.</p>
            <div className="center"><a href="/nl/afspraak/" className="btn btn-gold">Claim een founding-client plek</a></div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Eerlijke antwoorden</p>
            <h2 className="h2">De vragen die een zorgvuldige CTO écht stelt</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
