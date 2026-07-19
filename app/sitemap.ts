import type { MetadataRoute } from 'next';
import { POSTS } from './blog/posts';
import { POSTS_NL } from './nl/blog/posts-nl';

export const dynamic = 'force-static';

const BASE = 'https://voltage-software.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const enRoutes = ['', '/services', '/approach', '/pricing', '/about', '/blog', '/book', '/contact', '/portal'];
  const nlRoutes = ['/nl', '/nl/diensten', '/nl/werkwijze', '/nl/tarieven', '/nl/over-ons', '/nl/blog', '/nl/afspraak', '/nl/contact'];

  const pages: MetadataRoute.Sitemap = [...enRoutes, ...nlRoutes].map((r) => ({
    url: `${BASE}${r}/`,
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));

  const enPosts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}/`, lastModified: p.date, changeFrequency: 'yearly', priority: 0.6,
  }));
  const nlPosts: MetadataRoute.Sitemap = POSTS_NL.map((p) => ({
    url: `${BASE}/nl/blog/${p.slug}/`, lastModified: p.date, changeFrequency: 'yearly', priority: 0.6,
  }));

  return [...pages, ...enPosts, ...nlPosts];
}
