import type { Metadata } from 'next';
import BookingWidget from '@/components/BookingWidget';

export const metadata: Metadata = {
  title: 'Book a discovery call',
  description:
    'Pick a time for a 45-minute discovery call with the founders of Voltage Software. If it\'s a fit, you\'ll have a fixed-price proposal within 48 hours — no obligation.',
  alternates: { canonical: '/book/', languages: { en: '/book/', nl: '/nl/afspraak/', 'x-default': '/book/' } },
};

export default function Book() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Book a discovery call</p>
          <h1 className="hero-title reveal">Pick a time that works for you</h1>
          <p className="page-lead reveal">
            A 45-minute call with the founders — you tell us what you want built, we tell you honestly whether and how we
            can help. If it&apos;s a fit, you&apos;ll have a fixed-price proposal within 48 hours. No obligation.
          </p>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="booking-wrap reveal">
            <BookingWidget />
          </div>
        </div>
      </section>
    </>
  );
}
