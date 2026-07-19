import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Approach — Fixed scope, fixed price, fixed deadline',
  description:
    'How Voltage works: fixed scope, fixed price, fixed deadline agreed in writing before any code. A week-by-week 6–8 week build with a live demo every Friday, milestone payments, and six guarantees that put the risk on us.',
  alternates: { canonical: '/approach/', languages: { en: '/approach/', nl: '/nl/werkwijze/', 'x-default': '/approach/' } },
};

export default function Approach() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">How we work</p>
          <h1 className="hero-title reveal">Fixed scope. Fixed price. Fixed deadline.</h1>
          <p className="page-lead reveal">
            The two ways software work usually fails a buyer are the same two: the price moves and the date slips. We
            remove both up front — in writing, before any code is written — and then you watch it come together on a
            live demo every Friday.
          </p>
          <div className="hero-cta reveal">
            <a href="/book/" className="btn btn-primary">Book a discovery call <span aria-hidden="true">→</span></a>
            <a href="/pricing/" className="btn btn-ghost">See pricing</a>
          </div>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      {/* THE PROMISE */}
      <section className="section promise-section" id="promise">
        <div className="container">
          <div className="promise-card reveal">
            <p className="eyebrow mono gold-text">The promise</p>
            <h2 className="h2">In writing, before any code is written.</h2>
            <p>
              Most studios bill by the hour and ship &quot;when it&apos;s ready.&quot; We don&apos;t. Before a single
              line of code is written, we agree on exactly what gets built, what it costs, and the day it lands — and we
              hold all three. No hourly meter, no scope-creep invoices, no open-ended timeline. You watch it come
              together on a live demo every Friday, so if anything drifts you see it in days, not at the deadline.
              That&apos;s the product: a hard, locked promise, backed by six concrete terms below — not a slogan.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS RAIL */}
      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">The 6–8 week build</p>
            <h2 className="h2">From scoped to shipped, one week at a time</h2>
            <p className="section-sub">
              No hourly billing, no scope creep, no &quot;it&apos;ll be ready when it&apos;s ready.&quot; We agree on
              exactly what gets built, what it costs, and when it lands — before a line of code is written. Then you
              watch it come together every Friday.
            </p>
          </div>
          <ol className="rail reveal">
            <li className="rail-step"><span className="rail-node mono">W0</span><h3 className="rail-title">Scope &amp; lock</h3><p>We map the build, define exactly what &quot;done&quot; looks like, and lock scope, price, and launch date. You get a fixed-price proposal — typically within 48 hours of our call.</p></li>
            <li className="rail-step"><span className="rail-node mono">W1–2</span><h3 className="rail-title">Foundations</h3><p>Architecture, data model, and core flows. The unglamorous structural work that decides whether software survives contact with real users.</p></li>
            <li className="rail-step"><span className="rail-node mono">W3–5</span><h3 className="rail-title">Build</h3><p>Feature by feature, the product takes shape. Every Friday you get a live demo of working software — not a status email, the real thing.</p></li>
            <li className="rail-step"><span className="rail-node mono">W6–7</span><h3 className="rail-title">Harden &amp; polish</h3><p>Edge cases, error handling, performance, and the details that separate &quot;works on my machine&quot; from production-ready.</p></li>
            <li className="rail-step"><span className="rail-node mono">W8</span><h3 className="rail-title">Launch + handoff</h3><p>We ship. Code, repos, and infrastructure handed over — 100% yours. Then 30 days of post-launch support to keep things smooth.</p></li>
          </ol>
          <p className="rail-marker mono reveal">⚡ Live demo every Friday — you&apos;ll never go more than 7 days without seeing real, running progress.</p>
          <p className="rail-foot reveal">Two founders, hands on the keyboard, the whole way through. The people you talk to are the people who build it.</p>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="section guarantee-section" id="guarantees">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono gold-text">Risk reversal</p>
            <h2 className="h2">We&apos;re new — so we take the risk, not you.</h2>
            <p className="section-sub">
              A first-time client of a new studio deserves more protection, not less. Here&apos;s exactly how we earn the
              engagement — six terms, every one something we can stand behind in writing.
            </p>
          </div>
          <ul className="guarantee-grid reveal">
            <li className="g-card"><span className="g-n mono">01</span><h3>Fixed price, locked</h3><p>The number in the proposal is the number you pay. No hourly creep, no surprise invoices.</p></li>
            <li className="g-card"><span className="g-n mono">02</span><h3>You pay in milestones</h3><p>25% to start, 50% at the midpoint, 25% at launch. Your money tracks delivered progress, not promises.</p></li>
            <li className="g-card"><span className="g-n mono">03</span><h3>Weekly Friday demos</h3><p>Every week, live working software. If we drift, you see it immediately — not at the end.</p></li>
            <li className="g-card"><span className="g-n mono">04</span><h3>You own 100% of the code</h3><p>Full ownership, full repo, full infrastructure, no lock-in, no license games — deployed to accounts you control.</p></li>
            <li className="g-card"><span className="g-n mono">05</span><h3>30 days of post-launch support</h3><p>We don&apos;t vanish at handoff. A month of support is built in, so you ship into a safety net.</p></li>
            <li className="g-card"><span className="g-n mono">06</span><h3>Two clients, maximum</h3><p>We cap at two concurrent projects so yours gets the founders&apos; full attention. Always.</p></li>
          </ul>
          <p className="fine reveal">These terms cover the scope we agree to in writing. If you add new scope mid-build, we re-quote it transparently — fixed price, all over again.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="h2">See it work before you commit</h2>
            <p className="lead">Book a discovery call. You&apos;ll get a fixed-price proposal — scope, timeline, milestones — within 48 hours, and from there a working demo every Friday.</p>
          </div>
          <div className="center reveal">
            <a href="/book/" className="btn btn-primary">Book a discovery call <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
