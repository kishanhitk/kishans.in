// @ts-check

import react from '@astrojs/react'

import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  prefetch: true,

  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'static',
  image: {
    domains: ['images.unsplash.com', 'hashnode.com', 'cdn.hashnode.com'],
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
  }),
})
