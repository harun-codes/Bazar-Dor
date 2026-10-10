import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },

    images: {

        remotePatterns: [

            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },

            {
                protocol: "https",
                hostname: "img.daisyui.com",
            },

        ],

    },
  cacheComponents: false,
  partialPrefetching: false,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
