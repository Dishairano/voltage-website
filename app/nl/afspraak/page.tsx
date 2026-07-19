import type { Metadata } from 'next';
import BookingWidget from '@/components/BookingWidget';

export const metadata: Metadata = {
  title: 'Plan een kennismaking',
  description:
    'Kies een tijd voor een kennismaking van 45 minuten met de oprichters van Voltage Software. Als het een match is, heb je binnen 48 uur een voorstel met vaste prijs — geen verplichting.',
  alternates: { canonical: '/nl/afspraak/', languages: { en: '/book/', nl: '/nl/afspraak/', 'x-default': '/book/' } },
};

export default function AfspraakNL() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Plan een kennismaking</p>
          <h1 className="hero-title reveal">Kies een tijd die jou uitkomt</h1>
          <p className="page-lead reveal">
            Een gesprek van 45 minuten met de oprichters — jij vertelt wat je wilt laten bouwen, wij vertellen eerlijk of
            en hoe we kunnen helpen. Als het een match is, heb je binnen 48 uur een voorstel met vaste prijs. Geen verplichting.
          </p>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="booking-wrap reveal">
            <BookingWidget lang="nl" />
          </div>
        </div>
      </section>
    </>
  );
}
