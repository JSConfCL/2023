/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  reactStrictMode: true,
  experimental: {
    emotion: true,
  },
  optimizeFonts: false,
};

module.exports = nextConfig;
