import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';


const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/blogs', changefreq: 'weekly', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.5 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
];

const sitemap = new SitemapStream({ hostname: 'https://crito-website.vercel.app/'});
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap generated successfully!'))
  .catch(console.error);

links.forEach(link => sitemap.write(link));
sitemap.end();
sitemap.pipe(writeStream);
