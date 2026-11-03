import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// Production URL. PUBLIC_SITE_URL can override it (e.g. for a preview deploy).
const site = process.env.PUBLIC_SITE_URL || 'https://evfc1.com';

export default defineConfig({
  site,
  // The carnival landing page used to live at /coming-soon; keep old links working.
  redirects: {
    '/coming-soon': '/carnival',
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "aos/dist/aos.css";`
        }
      }
    },
    optimizeDeps: {
      include: ['aos']
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langs: [],
      transformers: [],
      showLineNumbers: false,
      lineNumbersPrefix: ''
    }
  },
  integrations: [
    // No changefreq/priority/lastmod: Google ignores the first two, and a lastmod that
    // changes on every build teaches crawlers to distrust the field.
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/coming-soon'),
    }),
  ],
  image: {
    // Allow all remote patterns (https and http)
    remotePatterns: [
      {
        protocol: "https"
      },
      {
        protocol: "http"
      }
    ]
  }
});