import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Plan een kennismaking',
  description:
    'Plan een kennismaking van 30–45 minuten met de oprichters. Het eindigt met een voorstel met vaste prijs in je inbox binnen 48 uur — heldere scope, planning en mijlpalen. Geen uurtje-factuurtje, geen verplichting.',
  alternates: { canonical: '/nl/contact/', languages: { en: '/contact/', nl: '/nl/contact/', 'x-default': '/contact/' } },
};

export default function ContactNL() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Even praten</p>
          <h1 className="hero-title reveal">Vertel ons wat je wilt laten bouwen</h1>
          <p className="page-lead reveal">
            Je hoeft geen woord op deze site te geloven. Stuur de oprichters een bericht en, als het een match is, heb je
            binnen 48 uur na een kort kennismakingsgesprek een voorstel met vaste prijs.
          </p>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <p className="eyebrow mono">Het kennismakingsgesprek</p>
            <h2 className="h2">30–45 minuten. Een voorstel binnen 48 uur.</h2>
            <p className="lead">Als je klaar bent om te praten over wat we voor je zouden bouwen, duurt het kennismakingsgesprek 30–45 minuten en eindigt het met een voorstel met vaste prijs in je inbox binnen 48 uur. Geen uurtje-factuurtje, geen scope creep, geen verrassingen na zes maanden — en daarna zie je elke week werkende software.</p>
            <ul className="check-list contact-benefits">
              <li>Gesprek zonder druk — kwalificeer ons, wij kwalificeren jou</li>
              <li>Voorstel met vaste prijs binnen 48 uur na het gesprek</li>
              <li>Heldere scope, planning en mijlpalen vooraf</li>
            </ul>
            <p className="contact-alt">Liever direct plannen? <a href="/nl/afspraak/">Kies een tijd voor een gesprek →</a></p>
            <p className="contact-alt">Al klant? <a href="/portal/">Ga naar het klantportaal →</a></p>
          </div>
          <div className="form-wrap reveal">
            <ContactForm lang="nl" />
          </div>
        </div>
      </section>
    </>
  );
}
