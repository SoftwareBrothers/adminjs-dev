const path = require('path');
const SitemapGenerator = require('sitemap-generator');

const sitemapPath = path.join(process.cwd(), 'docs/sitemap.xml');

// create generator
const generator = SitemapGenerator(process.env.DOCS_URL || 'https://docs.adminjs.co', {
  stripQuerystring: false,
  filepath: sitemapPath,
  lastMod: true,
  priorityMap: [1.0, 0.8, 0.6, 0.4, 0.2, 0],
});

// register event listeners
generator.on('done', async () => {
  console.log('Sitemap generated, please redeploy');
});

// start the crawler
generator.start();
