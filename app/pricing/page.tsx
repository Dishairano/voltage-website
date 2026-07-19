import type { Metadata } from 'next';
import Faq, { type QA } from '@/components/Faq';

export const metadata: Metadata = {
  title: 'Pricing — Fixed-price bands, no hourly billing',
  description:
    'Transparent fixed-price bands so you can budget before you book. Every project is one fixed price for an agreed scope, paid 25/50/25 across milestones, with an exact figure in writing within 48 hours of your call.',
  alternates: { canonical: '/pricing/', languages: { en: '/pricing/', nl: '/nl/tarieven/', 'x-default': '/pricing/' } },
};

const FAQ_ITEMS: QA[] = [
  {
    q: "You're a new studio. Why should I trust you with my product?",
    a: "You shouldn't trust us on reputation — we haven't earned one yet, and we won't fake one. Trust the way we work instead: you see working software every Friday, you pay in milestones tied to real progress, and you own 100% of the code. We've structured the whole engagement so you risk very little to find out we're good.",
  },
  {
    q: 'Do you have client case studies?',
    a: "Not yet — and we won't invent them. We're a new studio, so instead of pointing at work we can't show you, we de-risk it: a fixed price, working software every Friday, milestone payments, and full code ownership. Our founding clients will be our first published case studies.",
  },
  {
    q: 'What kinds of software do you build?',
    a: "Whatever you need built, as long as it's a fresh, greenfield build — websites, web apps, MVPs, customer portals, internal and ops dashboards, and API integrations. You tell us what you want; we scope it, price it, and build exactly that. We don't take on rescues of large legacy codebases, because a clean start is how we hold a fixed deadline.",
  },
  {
    q: 'What does it cost?',
    a: 'Every project is fixed-price, quoted up front. The pricing bands above give you the honest shape before you ever book; after the discovery call you get an exact number, scope, and deadline within 48 hours — before you commit to anything. Founding clients get a founder rate.',
  },
  {
    q: 'What if the project goes over scope or over time?',
    a: 'The price is locked, so overruns are our problem, not your invoice. You see working software every Friday, so drift surfaces in days, not at the deadline. Milestone payments mean your money only moves as real progress lands. Add new scope mid-build and we re-quote it transparently — the original deal stays fixed.',
  },
  {
    q: 'What happens after the 30 days of support?',
    a: "You own 100% of the code, repos, and infrastructure, deployed to accounts you control — so you're never stuck. The 30-day window covers post-launch fixes; after that you can take it in-house, hand it to anyone, or arrange continued support with us by separate agreement. We don't run a mandatory retainer, and we won't pretend to.",
  },
  {
    q: 'Why only two clients at a time?',
    a: "Because the founders do the work. Two is the number where every client gets real senior attention. It's a deliberate cap, not a stage we're embarrassed about — so book a call and we'll tell you honestly when we can start.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://voltage-software.com/pricing/#faq',
  mainEntity: FAQ_ITEMS.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: typeof it.a === 'string' ? it.a : '' },
  })),
};

export default function Pricing() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Transparent pricing</p>
          <h1 className="hero-title reveal">Fixed-price bands, so you can budget before you book</h1>
          <p className="page-lead reveal">
            Every project is quoted to its scope — but you shouldn&apos;t have to sit through a sales call just to learn
            the shape of it. Here&apos;s the honest version. Your discovery call turns one of these into a single fixed
            price, in writing, with no hourly billing behind it.
          </p>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      {/* PRICING BANDS */}
      <section className="section pricing-section" id="pricing">
        <div className="container">
          <ul className="price-grid reveal">
            <li className="price-card">
              <span className="price-k mono">Focused build</span>
              <p className="price-scope">A tightly-scoped MVP, a single dashboard, or one specific integration.</p>
              <p className="price-meta mono">Shortest end of the 6–8 weeks · one core flow</p>
            </li>
            <li className="price-card price-featured">
              <span className="badge-most mono">Most common</span>
              <span className="price-k mono">Standard build</span>
              <p className="price-scope">A fuller product — an MVP with several core flows, a customer portal, or a connected internal tool.</p>
              <p className="price-meta mono">The typical Voltage engagement · ~6–8 weeks</p>
            </li>
            <li className="price-card">
              <span className="price-k mono">Extended build</span>
              <p className="price-scope">A larger, more connected system spanning multiple modules and integrations.</p>
              <p className="price-meta mono">Full 8 weeks · multiple modules</p>
            </li>
          </ul>
          <p className="price-foot reveal">
            Every band is one fixed price for an agreed scope, paid <span className="mono">25 / 50 / 25</span> across
            milestones. The exact figure comes from your discovery call and lands in a written proposal within 48 hours.
            Founding clients get a genuine discount on the fixed price we quote.
          </p>
          <div className="center reveal">
            <a href="/book/" className="btn btn-primary">Book a discovery call</a>
            <p className="cta-reassure mono">Ends with a fixed-price proposal in 48 hours — no obligation.</p>
          </div>
        </div>
      </section>

      {/* FOUNDING */}
      <section className="section founding-section" id="founding">
        <div className="container">
          <div className="founding-card reveal">
            <span className="founding-badge mono">Limited · founding clients</span>
            <h2 className="h2">Be one of our first. Pay a founder rate for it.</h2>
            <p className="lead">
              We&apos;re taking on our first handful of clients at a founder rate — a genuine discount on the fixed price
              we quote — in exchange for one thing: permission to tell your story as a case study and to quote you once
              it ships. You get premium work for less; we get the proof that turns a new studio into an established one.
              That&apos;s a fair trade, and it only happens once.
            </p>
            <div className="founding-cols">
              <div>
                <h3 className="founding-h">What you get</h3>
                <ul className="check-list">
                  <li>A genuine discount on your fixed price</li>
                  <li>The same fixed-scope, fixed-deadline guarantees as every client</li>
                  <li>The founders&apos; full attention — we cap at two projects at a time</li>
                </ul>
              </div>
              <div>
                <h3 className="founding-h">What we ask</h3>
                <ul className="check-list">
                  <li>A short, candid testimonial after launch</li>
                  <li>Permission to publish the project as a case study</li>
                </ul>
              </div>
            </div>
            <p className="founding-scarcity">
              Because we run a maximum of two builds at a time, founding-client availability is genuinely limited — not a
              tactic. No countdown timers, no manufactured panic. Ask on your call whether a founding-client slot is
              currently open.
            </p>
            <div className="center"><a href="/book/" className="btn btn-gold">Claim a founding-client slot</a></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Straight answers</p>
            <h2 className="h2">The questions a careful CTO actually asks</h2>
          </div>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
