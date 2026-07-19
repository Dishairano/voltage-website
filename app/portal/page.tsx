import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Portal — Your project, live',
  description:
    'The Voltage client portal is where current clients log in to follow their build: weekly demos, milestones and invoices, deliverables, and a direct line to the founders. Secure login for active clients.',
  alternates: { canonical: '/portal/' },
  robots: { index: true, follow: true },
};

const ERP = 'https://erp.voltage-software.com';

export default function Portal() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner portal-hero">
          <p className="eyebrow mono reveal">Client portal</p>
          <h1 className="hero-title reveal">Your project, live — not in your inbox</h1>
          <p className="page-lead reveal">
            Every Voltage client gets a private portal to follow their build in real time: what shipped this week,
            what&apos;s next, where the milestones and invoices stand, and a direct line to the founders. If you&apos;re an
            active client, log in below.
          </p>
          <div className="hero-cta reveal">
            <a href={`${ERP}/login`} className="btn btn-primary">Log in to the portal <span aria-hidden="true">→</span></a>
            <a href="/book/" className="btn btn-ghost">Not a client yet? Book a call</a>
          </div>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portal-grid">
            <div className="portal-panel reveal">
              <p className="eyebrow mono">What&apos;s inside</p>
              <h3>Everything about your build, in one place</h3>
              <ul className="portal-list">
                <li>Live project status — what&apos;s done, in progress, and up next</li>
                <li>Your weekly Friday demo and release notes</li>
                <li>Milestones and invoices — see exactly what the 25 / 50 / 25 covers</li>
                <li>Deliverables and files, ready to download</li>
                <li>A direct message thread with the founders</li>
              </ul>
            </div>
            <div className="portal-panel reveal">
              <p className="eyebrow mono">First time here?</p>
              <h3>Access is set up when your project starts</h3>
              <p>
                When we kick off, you&apos;ll get an email invitation with your login. Accounts are created for active
                clients only — there&apos;s no public sign-up, which keeps your project data private to you and the
                founder.
              </p>
              <ul className="portal-list">
                <li>Didn&apos;t get your invite? Email <a href="mailto:info@voltage-software.com">info@voltage-software.com</a></li>
                <li>Forgot your password? Use &quot;reset&quot; on the login screen</li>
              </ul>
              <div className="portal-cta">
                <a href={`${ERP}/login`} className="btn btn-primary">Log in <span aria-hidden="true">→</span></a>
                <a href="/book/" className="inline-link">Start a project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
