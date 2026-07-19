import type { Metadata } from 'next';
import { POSTS_NL, prettyDateNL } from './posts-nl';

export const metadata: Metadata = {
  title: 'Blog — Eerlijke gidsen over maatwerksoftware',
  description:
    'Rechttoe rechtaan gidsen over maatwerksoftware: bouwen of kopen, wanneer je spreadsheets ontgroeit, en wat maatwerk echt kost. Geen verzonnen cijfers, geen salespraatje.',
  alternates: { canonical: '/nl/blog/', languages: { en: '/blog/', nl: '/nl/blog/', 'x-default': '/blog/' } },
};

export default function BlogNL() {
  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner">
          <p className="eyebrow mono reveal">Blog</p>
          <h1 className="hero-title reveal">Eerlijke gidsen, geen salespraatjes</h1>
          <p className="page-lead reveal">
            We bouwen maatwerksoftware voor de kost — dit zijn de rechttoe rechtaan antwoorden die we je op een gesprek
            zouden geven, inclusief de keren dat het eerlijke antwoord &quot;niet bouwen&quot; is. Geen verzonnen cijfers.
          </p>
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-list">
            {POSTS_NL.map((p) => (
              <a key={p.slug} className="post-card reveal" href={`/nl/blog/${p.slug}/`}>
                <span className="post-meta">{prettyDateNL(p.date)}{p.readingTime ? ` · ${p.readingTime}` : ''}</span>
                <h3>{p.title}</h3>
                <p>{p.dek.replace(/<[^>]+>/g, '')}</p>
                <span className="post-more">Lees de gids →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="h2">Twijfel je over een build?</h2>
            <p className="lead">Plan een gesprek van 30 minuten. Je krijgt een eerlijk antwoord — inclusief &quot;koop X in plaats daarvan&quot; als dat de waarheid is.</p>
          </div>
          <div className="center reveal"><a href="/nl/afspraak/" className="btn btn-primary">Plan een kennismaking <span aria-hidden="true">→</span></a></div>
        </div>
      </section>
    </>
  );
}
