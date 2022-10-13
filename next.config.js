/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/**
 * @type { import('next').NextConfig }
 */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  optimizeFonts: false,
};

const MinimizeConfig = { ...withCss(withPurgeCss()), ...nextConfig };

module.exports = withBundleAnalyzer(MinimizeConfig);
