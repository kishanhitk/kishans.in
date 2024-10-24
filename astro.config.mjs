// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  prefetch: true,

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],

  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
    imagesConfig: {
      domains: ["images.unsplash.com", "hashnode.com", "cdn.hashnode.com"],
      remotePatterns: [
        {
          hostname: "hashnode.com",
        },
      ],
      sizes: [320, 640, 1280],
    },
  }),
});
