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
  webpack(config, ctx) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    if (ctx.nextRuntime === "edge") {
      if (!config.resolve.conditionNames) {
        config.resolve.conditionNames = ["require", "node"];
      }
      if (!config.resolve.conditionNames.includes("worker")) {
        config.resolve.conditionNames.push("worker");
      }
    }

    return config;
  },
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  optimizeFonts: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/laprevia",
          destination: "/",
        },
      ],
    };
  },
};

const MinimizeConfig = { ...withCss(withPurgeCss()), ...nextConfig };

module.exports = withBundleAnalyzer(MinimizeConfig);
