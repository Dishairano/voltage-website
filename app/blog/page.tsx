import type { Metadata } from 'next';
import { POSTS, prettyDate } from './posts';

export const metadata: Metadata = {
  title: 'Writing — Honest guides on building custom software',
  description:
    'Straight, sales-pitch-free guides on building custom software: build vs. buy, how to hire a studio without getting burned, and what custom software actually costs.',
  alternates: { canonical: '/blog/', languages: { en: '/blog/', nl: '/nl/blog/', 'x-default': '/blog/' } },
};

export default function Blog() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Writing</p>
          <h1 className="hero-title reveal">Honest guides, not sales pitches</h1>
          <p className="page-lead reveal">
            We build custom software for a living — so these are the straight answers we&apos;d give you on a call,
            including the times the honest answer is &quot;don&apos;t build it.&quot; No fabricated stats, no gated
            downloads.
          </p>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-list">
            {POSTS.map((p) => (
              <a key={p.slug} className="post-card reveal" href={`/blog/${p.slug}/`}>
                <span className="post-meta">{prettyDate(p.date)}{p.readingTime ? ` · ${p.readingTime}` : ''}</span>
                <h3>{p.title}</h3>
                <p>{p.dek.replace(/<[^>]+>/g, '')}</p>
                <span className="post-more">Read the guide →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="h2">Weighing a build?</h2>
            <p className="lead">Book a 30-minute call. You&apos;ll get a straight answer — including &quot;buy X instead&quot; if that&apos;s the truth.</p>
          </div>
          <div className="center reveal">
            <a href="/book/" className="btn btn-primary">Book a discovery call <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
