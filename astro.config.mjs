// @ts-check

import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kishans.in',
  prefetch: true,

  redirects: {
    // Resume PDF was renamed to match the AI-engineer positioning; keep the
    // old URL alive for links already shared in applications and DMs.
    '/assets/Kishan_Kumar_SDE_FullStack_Resume.pdf':
      '/assets/Kishan_Kumar_AI_Engineer_Resume.pdf',
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.endsWith('/demo/'),
    }),
  ],
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
