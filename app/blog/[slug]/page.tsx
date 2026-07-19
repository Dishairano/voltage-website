import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { POSTS, getPost, prettyDate } from '../posts';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: 'article',
      title: `${post.title} · Voltage Software`,
      description: post.description,
      url: `https://voltage-software.com/blog/${post.slug}/`,
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Voltage Software', url: 'https://voltage-software.com/' },
    publisher: { '@type': 'Organization', name: 'Voltage Software', url: 'https://voltage-software.com/' },
    mainEntityOfPage: `https://voltage-software.com/blog/${post.slug}/`,
  };

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="hero hero--compact" id="hero">
        <div className="container hero-inner article">
          <a className="article-back" href="/blog/">← All writing</a>
          <p className="post-meta reveal">{prettyDate(post.date)}{post.readingTime ? ` · ${post.readingTime}` : ''}</p>
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
              <h2 className="h2">Related reading</h2>
            </div>
            <div className="blog-list">
              {related.map((p) => (
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
      )}

      <section className="section cta-band">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="h2">Want a straight answer on your build?</h2>
            <p className="lead">Book a 30-minute discovery call — you&apos;ll get an honest read, including &quot;buy this instead&quot; if that&apos;s the truth.</p>
          </div>
          <div className="center reveal">
            <a href="/book/" className="btn btn-primary">Book a discovery call <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
