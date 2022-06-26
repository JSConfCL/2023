/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
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

const MinimizeConfig = { ...withCss(withPurgeCss()), ...nextConfig };

module.exports = withBundleAnalyzer(MinimizeConfig);
