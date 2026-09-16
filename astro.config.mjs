import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output: every page is plain HTML at build time.
// Netlify serves it from its CDN; no server runtime is involved.
export default defineConfig({
  site: 'https://cristinaacosta.ca',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/reviews') && !page.includes('/thanks'),
      i18n: { defaultLocale: 'en', locales: { en: 'en-CA', es: 'es-CA' } },
    }),
  ],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
