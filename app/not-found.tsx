export default function NotFound() {
  return (
    <section className="hero hero--compact" id="hero">
      <div className="container hero-inner">
        <p className="eyebrow mono">404</p>
        <h1 className="hero-title">This page went off the grid</h1>
        <p className="page-lead">
          The link may be old or mistyped. Everything&apos;s still here from the homepage.
        </p>
        <div className="hero-cta">
          <a href="/" className="btn btn-primary">Back to home <span aria-hidden="true">→</span></a>
          <a href="/book/" className="btn btn-ghost">Book a call</a>
        </div>
      </div>
      <div className="hero-arc" aria-hidden="true"></div>
    </section>
  );
}
