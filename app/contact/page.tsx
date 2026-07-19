import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Book a discovery call',
  description:
    'Book a 30–45 minute discovery call with the founders. It ends with a fixed-price proposal in your inbox within 48 hours — clear scope, timeline, and milestones. No hourly billing, no obligation.',
  alternates: { canonical: '/contact/', languages: { en: '/contact/', nl: '/nl/contact/', 'x-default': '/contact/' } },
};

export default function Contact() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Let&apos;s talk</p>
          <h1 className="hero-title reveal">Tell us what you want built</h1>
          <p className="page-lead reveal">
            You don&apos;t have to believe a word on this site. Send the founders a note and, if it&apos;s a fit,
            you&apos;ll have a fixed-price proposal within 48 hours of a short discovery call.
          </p>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <p className="eyebrow mono">The discovery call</p>
            <h2 className="h2">30–45 minutes. A proposal within 48 hours.</h2>
            <p className="lead">
              When you&apos;re ready to talk about what we&apos;d build for you, the discovery call is 30–45 minutes and
              ends with a fixed-price proposal in your inbox within 48 hours. No hourly billing, no scope creep, no
              six-month surprises — and from there you see working software every single week.
            </p>
            <ul className="check-list contact-benefits">
              <li>No-pressure conversation — qualify us, we&apos;ll qualify you</li>
              <li>Fixed-price proposal within 48 hours of the call</li>
              <li>Clear scope, timeline, and milestones up front</li>
            </ul>
            <p className="contact-alt">
              Prefer email? <a href="mailto:info@voltage-software.com">info@voltage-software.com</a> — though the form
              is the fastest way to reach the founders directly.
            </p>
            <p className="contact-alt">
              Already a client? <a href="/portal/">Head to the client portal →</a>
            </p>
          </div>

          <div className="form-wrap reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
