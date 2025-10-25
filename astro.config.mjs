// @ts-check

import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  prefetch: true,

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],

  output: 'static',
  image: {
    domains: ['images.unsplash.com', 'hashnode.com', 'cdn.hashnode.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hashnode.com',
      },
    ],
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
  }),
})
