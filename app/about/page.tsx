import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — You work with the engineers, not an agency layer',
  description:
    'Voltage is a founder-led studio built by Dishairano de Boer and Kenji Vliet — the two engineers who write the code. No account managers, no bait-and-switch — the people on your call are the people building and demoing your product every Friday.',
  alternates: { canonical: '/about/', languages: { en: '/about/', nl: '/nl/over-ons/', 'x-default': '/about/' } },
};

export default function About() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Who we are</p>
          <h1 className="hero-title reveal">You work with the engineers, not an agency layer</h1>
          <p className="page-lead reveal">
            Voltage is a founder-led studio. The people on your discovery call are the two engineers writing your code
            and demoing it every Friday — which is exactly why we only take two clients at a time.
          </p>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      {/* FOUNDERS */}
      <section className="section founder-section" id="founder">
        <div className="container">
          <div className="founder-card reveal">
            <div className="founder-aside">
              <div>
                <span className="founder-avatar" aria-hidden="true">DdB</span>
                <p className="founder-name">Dishairano de Boer</p>
                <p className="founder-role mono">Founder &amp; Lead Engineer</p>
              </div>
              <div style={{ marginTop: 'var(--space-6)' }}>
                <span className="founder-avatar" aria-hidden="true">KV</span>
                <p className="founder-name">Kenji Vliet</p>
                <p className="founder-role mono">Co-founder &amp; Engineer</p>
              </div>
            </div>
            <div className="founder-body">
              <p className="eyebrow mono">Who builds it</p>
              <h2 className="h2">The people you talk to are the people who build it</h2>
              <p>
                Voltage is built by Dishairano de Boer and Kenji Vliet — co-founders, and the two engineers who actually
                write the code. Between us we&apos;ve spent years building production software at startups, the kind that
                has to work the day real customers show up.
              </p>
              <p>
                Most agencies sell you a senior in the pitch and staff you with juniors after you sign. At Voltage
                there&apos;s no bait-and-switch, because there&apos;s no one to swap in — you get the two of us. The
                people on your discovery call are the people writing your code and demoing it every Friday, which is
                exactly why we only take two clients at a time. And you don&apos;t have to take it on faith: every Friday
                you see the actual code running, the only honest way to judge any studio — by the work, as it gets built.
              </p>
              <blockquote className="pull-quote">
                &quot;We&apos;d rather show you a system we built than tell you about ones you can&apos;t see.&quot;
              </blockquote>
              <a href="/book/" className="inline-link">Talk to the founders directly <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* STRAIGHT TALK / VALUES */}
      <section className="section talk-section" id="straight-talk">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Straight talk</p>
            <h2 className="h2">We&apos;re new. So we&apos;ll show you, not tell you.</h2>
          </div>
          <p className="prose reveal">
            Most studios open with &quot;trusted by 200+ companies,&quot; a wall of client logos, and a row of star
            ratings. We can&apos;t do that yet — and we won&apos;t fake it, re-skin it, or quietly imply it. No invented
            client count, no borrowed logos, no testimonials we wrote ourselves, no case studies we can&apos;t show you.
            What we <em>can</em> put on the table is a way of working that puts the risk on us, not you — a fixed price,
            working software you see every single week, and a contract that hands you everything. That&apos;s the whole
            promise, and everything on this site is something we can prove.
          </p>
          <ul className="pillars reveal">
            <li className="pillar">
              <span className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M4 7h16M4 12h16M4 17h10" stroke="#2A7BFF" strokeWidth="2" strokeLinecap="round" /><circle cx="19" cy="17" r="2.5" stroke="#2A7BFF" strokeWidth="2" /></svg>
              </span>
              <h3 className="pillar-title">Working software every Friday</h3>
              <p>You see your real product running each week — not status emails, the actual thing.</p>
            </li>
            <li className="pillar">
              <span className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="#2A7BFF" strokeWidth="2" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="#3DDC84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <h3 className="pillar-title">A contract that protects you</h3>
              <p>Fixed price, milestone payments, full code ownership.</p>
            </li>
            <li className="pillar">
              <span className="pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4" stroke="#2A7BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <h3 className="pillar-title">Founders who write the code</h3>
              <p>You work directly with the two engineers building it. No account managers, no handoffs.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="h2">Talk to the founders</h2>
            <p className="lead">A no-pressure 30–45 minute call — you qualify us, we qualify you — ending with a fixed-price proposal within 48 hours if it&apos;s a fit.</p>
          </div>
          <div className="center reveal">
            <a href="/book/" className="btn btn-primary">Book a discovery call <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
