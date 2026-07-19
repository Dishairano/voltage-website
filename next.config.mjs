/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export -> out/ , served by nginx exactly like the old static site.
  output: 'export',
  // Directory-style routes (/services/ -> services/index.html) so nginx
  // `try_files $uri $uri/` + `index index.html` resolves every page.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
