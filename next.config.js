/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: false,
  experimental: {
    emotion: true,
  },
  optimizeFonts: false,
  optimization: {
    mergeDuplicateChunks: true,
  },
};

module.exports = { ...withCss(withPurgeCss()), ...nextConfig };
