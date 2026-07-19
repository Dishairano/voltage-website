import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Voltage Software — Don't take our word for it. Watch us build it.",
  alternates: { canonical: '/', languages: { en: '/', nl: '/nl/', 'x-default': '/' } },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">New studio · founded December 2025 · founder-led</p>
          <h1 className="hero-title reveal">
            Don&apos;t take our word for it.<br />
            <span className="grad">Watch us build it.</span>
          </h1>
          <p className="hero-sub reveal">
            Voltage builds the specific software you need — production-ready, to your spec. Websites, web apps, MVPs,
            customer portals, dashboards, API integrations — whatever you want built, we build it. Fixed scope, fixed
            price, delivered in 6–8 weeks. We&apos;re a new studio, so we earn it the hard way: working software in your
            hands every Friday, milestone payments tied to real progress, and 100% code ownership from day one.
          </p>
          <div className="hero-cta reveal">
            <a href="/book/" className="btn btn-primary">Book a discovery call <span aria-hidden="true">→</span></a>
            <a href="/approach/" className="btn btn-ghost">See how we work</a>
          </div>
          <p className="hero-micro mono reveal">
            Book a 30–45 min call → fixed-price proposal within 48 hours of that call. No retainer, no obligation.
          </p>
          <ul className="trust-row reveal" aria-label="What every engagement includes">
            <li>Fixed price, no scope creep</li>
            <li>Weekly Friday demos</li>
            <li>You own 100% of the code</li>
            <li>30-day post-launch support</li>
          </ul>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      {/* STRAIGHT TALK */}
      <section className="section talk-section" id="straight-talk">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Straight talk</p>
            <h2 className="h2">We&apos;re a new studio. So we&apos;ll show you, not tell you.</h2>
          </div>
          <p className="prose reveal">
            Most studios open with &quot;trusted by 200+ companies,&quot; a wall of client logos, and a row of star
            ratings. We can&apos;t do that yet — and we won&apos;t fake it, re-skin it, or quietly imply it. No invented
            client count, no borrowed logos, no testimonials we wrote ourselves, no case studies we can&apos;t show you.
            What we <em>can</em> put on the table is a way of working that puts the risk on us, not you — a fixed price,
            working software you see every single week, and a contract that hands you everything.
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

      {/* THE PROOF */}
      <section className="section proof-section" id="proof">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">The proof, not the pitch</p>
            <h2 className="h2">No client logos yet. So we prove it the honest way.</h2>
          </div>
          <div className="proof-grid">
            <div className="proof-copy reveal">
              <p>
                We&apos;re a brand-new studio, so we won&apos;t show you a wall of logos or testimonials we wrote
                ourselves. Instead, the proof is built into how we work. You watch your product come together on a live
                demo every Friday, you pay in milestones tied to delivered progress, and you own 100% of the code from
                day one. You don&apos;t trust a reputation — you watch it get built, week by week.
              </p>
              <p className="disclosure">
                And you&apos;re never locked in. The repo, the infrastructure, and every line of code are yours, deployed
                to accounts you control. If we ever stopped being the right fit, you could pick it up and walk — which is
                exactly the kind of confidence a new studio should have to offer.
              </p>
              <ul className="spec-list" aria-label="What every build includes">
                <li><span className="mono spec-k">Demos</span> live working software every Friday</li>
                <li><span className="mono spec-k">Payments</span> 25 / 50 / 25 across milestones</li>
                <li><span className="mono spec-k">Ownership</span> 100% of the code &amp; infrastructure</li>
                <li><span className="mono spec-k">Quality</span> production-grade, not a throwaway</li>
                <li><span className="mono spec-k">Support</span> 30 days included after launch</li>
                <li><span className="mono spec-k">Focus</span> two clients at a time, maximum</li>
              </ul>
              <div className="chips" aria-label="Built with">
                <span className="chip mono">Next.js</span><span className="chip mono">React</span><span className="chip mono">TypeScript</span><span className="chip mono">PostgreSQL</span>
              </div>
              <div className="proof-cta">
                <a href="/book/" className="btn btn-primary">Book a discovery call <span aria-hidden="true">→</span></a>
                <a href="/approach/" className="btn btn-ghost">See the weekly process</a>
              </div>
            </div>

            <figure className="specimen reveal">
              <div className="specimen-frame">
                <div className="specimen-chrome">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <span className="specimen-url mono">your-product.com</span>
                </div>
                <div className="specimen-body">
                  <aside className="sp-side">
                    <span className="sp-brand mono">⚡ Your product</span>
                    <span className="sp-nav sp-active">Dashboard</span>
                    <span className="sp-nav">Customers</span>
                    <span className="sp-nav">Projects</span>
                    <span className="sp-nav">Reports</span>
                    <span className="sp-nav">Settings</span>
                  </aside>
                  <div className="sp-main">
                    <div className="sp-cards">
                      <div className="sp-card"><span className="sp-k mono">Active users</span><span className="sp-v">—</span><span className="sp-bar"><i style={{ width: '64%' }}></i></span></div>
                      <div className="sp-card"><span className="sp-k mono">Revenue</span><span className="sp-v">—</span><span className="sp-bar"><i style={{ width: '42%' }}></i></span></div>
                      <div className="sp-card"><span className="sp-k mono">Tasks done</span><span className="sp-v">—</span><span className="sp-bar"><i style={{ width: '78%' }}></i></span></div>
                    </div>
                    <div className="sp-chart" aria-hidden="true">
                      <i style={{ height: '38%' }}></i><i style={{ height: '62%' }}></i><i style={{ height: '48%' }}></i><i style={{ height: '80%' }}></i><i style={{ height: '58%' }}></i><i style={{ height: '92%' }}></i><i style={{ height: '70%' }}></i>
                    </div>
                    <div className="sp-rows">
                      <span className="sp-row"></span><span className="sp-row"></span><span className="sp-row"></span>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="mono">Illustration of the kind of interface we build — clean, fast, production-ready. Your product, your brand.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD (teaser) */}
      <section className="section build-section" id="build">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Engagements</p>
            <h2 className="h2">Whatever you need built — from a blank repo</h2>
            <p className="section-sub">
              A website, a web app, a portal, an internal tool, an integration. We take on greenfield builds only — new
              sites, new products, new systems — because a clean start is how we hit a fixed deadline with confidence.
            </p>
          </div>
          <ul className="build-grid reveal">
            <li className="build-card"><h3 className="build-title">Websites &amp; web apps</h3><p>From a polished, fast-loading marketing site to a full web application. Responsive, built to convert, ready to scale.</p></li>
            <li className="build-card"><h3 className="build-title">MVPs</h3><p>Your first real version in customers&apos; hands. Production-grade from day one — not a throwaway prototype.</p></li>
            <li className="build-card"><h3 className="build-title">Portals &amp; dashboards</h3><p>Self-serve customer portals and internal ops dashboards. Auth, roles, the lot.</p></li>
            <li className="build-card"><h3 className="build-title">API integrations</h3><p>Connect the systems that should already talk to each other. Clean, documented, maintainable.</p></li>
          </ul>
          <p className="build-foot reveal">
            <a href="/services/" className="inline-link">See everything we build, and who it&apos;s for →</a>
          </p>
        </div>
      </section>

      {/* PROCESS (teaser) */}
      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">How we work — the 6–8 week build</p>
            <h2 className="h2">From scoped to shipped, one week at a time</h2>
            <p className="section-sub">
              No hourly billing, no scope creep. We agree exactly what gets built, what it costs, and when it lands —
              before a line of code is written. Then you watch it come together every Friday.
            </p>
          </div>
          <ol className="rail reveal">
            <li className="rail-step"><span className="rail-node mono">W0</span><h3 className="rail-title">Scope &amp; lock</h3><p>We map the build and lock scope, price, and launch date. Fixed-price proposal, typically within 48 hours.</p></li>
            <li className="rail-step"><span className="rail-node mono">W1–2</span><h3 className="rail-title">Foundations</h3><p>Architecture, data model, and core flows — the structural work that decides whether software survives real users.</p></li>
            <li className="rail-step"><span className="rail-node mono">W3–5</span><h3 className="rail-title">Build</h3><p>Feature by feature. Every Friday, a live demo of working software — not a status email.</p></li>
            <li className="rail-step"><span className="rail-node mono">W6–8</span><h3 className="rail-title">Harden &amp; launch</h3><p>Edge cases, performance, polish — then we ship and hand over 100% of the code, plus 30 days of support.</p></li>
          </ol>
          <p className="rail-foot reveal">
            <a href="/approach/" className="inline-link">See the full week-by-week process and guarantees →</a>
          </p>
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
              we quote — in exchange for one thing: permission to tell your story as a case study once it ships. You get
              premium work for less; we get the proof that turns a new studio into an established one.
            </p>
            <div className="center"><a href="/book/" className="btn btn-gold">Claim a founding-client slot</a></div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section cta-band" id="contact">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow mono">Let&apos;s talk</p>
            <h2 className="h2">You don&apos;t have to believe a word on this page.</h2>
            <p className="lead">
              The discovery call is 30–45 minutes and ends with a fixed-price proposal in your inbox within 48 hours.
              No hourly billing, no scope creep — and from there you see working software every single week.
            </p>
          </div>
          <div className="center reveal">
            <a href="/book/" className="btn btn-primary">Book a discovery call <span aria-hidden="true">→</span></a>
            <p className="cta-reassure mono">Ends with a fixed-price proposal in 48 hours — no obligation.</p>
          </div>
        </div>
      </section>
    </>
  );
}
