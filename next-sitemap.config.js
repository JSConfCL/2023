/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://dev.jsconf.cl",
  generateRobotsTxt: true, // (optional)
  // ...other options
};

export default config;
