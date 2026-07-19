import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { POSTS_NL, getPostNL, prettyDateNL } from '../posts-nl';

export function generateStaticParams() {
  return POSTS_NL.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostNL(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/nl/blog/${post.slug}/` },
    openGraph: { type: 'article', title: `${post.title} · Voltage Software`, description: post.description, url: `https://voltage-software.com/nl/blog/${post.slug}/` },
  };
}

export default async function PostNL({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostNL(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.description,
    datePublished: post.date, inLanguage: 'nl',
    author: { '@type': 'Organization', name: 'Voltage Software', url: 'https://voltage-software.com/' },
    publisher: { '@type': 'Organization', name: 'Voltage Software', url: 'https://voltage-software.com/' },
    mainEntityOfPage: `https://voltage-software.com/nl/blog/${post.slug}/`,
  };

  const related = POSTS_NL.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner article">
          <a className="article-back" href="/nl/blog/">← Alle blogs</a>
          <p className="post-meta reveal">{prettyDateNL(post.date)}{post.readingTime ? ` · ${post.readingTime}` : ''}</p>
          <h1 className="reveal">{post.title}</h1>
          <p className="page-lead reveal" dangerouslySetInnerHTML={{ __html: post.dek }} />
        </div>
        <div className="hero-arc" aria-hidden="true"></div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <article className="article">
            <div className="article-body reveal" dangerouslySetInnerHTML={{ __html: post.body }} />
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head reveal" style={{ marginBottom: '2rem', textAlign: 'left', maxWidth: 'none' }}>
              <h2 className="h2">Verder lezen</h2>
            </div>
            <div className="blog-list">
              {related.map((p) => (
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
      )}

      <section className="section cta-band">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="h2">Een eerlijk antwoord over jouw build?</h2>
            <p className="lead">Plan een kennismaking van 30 minuten — je krijgt een eerlijke inschatting, inclusief &quot;koop dit in plaats daarvan&quot; als dat de waarheid is.</p>
          </div>
          <div className="center reveal"><a href="/nl/afspraak/" className="btn btn-primary">Plan een kennismaking <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
