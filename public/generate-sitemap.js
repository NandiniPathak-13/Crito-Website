const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Apne URLs yahaan daal lo
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/blogs', changefreq: 'weekly', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.5 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
];

// Apna domain likhna mat bhoolna
const sitemap = new SitemapStream({ hostname: 'https://crito-website.vercel.app/'});
const writeStream = createWriteStream('./public/sitemap.xml');

// Pipe sitemap stream into write stredjshfsdjf sdjf sdhfjsahfh ff
sitemap.pipe(writeStream);

// Links likho
links.forEach(link => sitemap.write(link));

// Stream close karna zaruri hai
sitemap.end();

// Jab pura likh jaye tab success message print karo
streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap generated successfully!'))
  .catch(err => console.error('❌ Error generating sitemap:', err));
