/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://catalystinstitute.in',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  transform: async (config, path) => {
    // Set different priorities for different pages
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/courses')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/blog')) {
      priority = 0.8;
      changefreq = 'daily';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString()
    };
  },
  additionalPaths: async (config) => {
    // Add additional static paths if needed
    return [];
  }
};

export default config;
