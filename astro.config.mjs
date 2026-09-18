import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output: every page is plain HTML at build time.
// Netlify serves it from its CDN; no server runtime is involved.
export default defineConfig({
  site: 'https://cristinaacosta.ca',
  output: 'static',
  trailingSlash: 'never',
  // 'directory' emits /page/index.html, served at the clean /page URL with no /page.html
  // twin sitting alongside it — that twin was the source of the duplicate-URL/canonical bug.
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/reviews') && !page.includes('/thanks'),
      i18n: { defaultLocale: 'en', locales: { en: 'en-CA', es: 'es-CA' } },
    }),
  ],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
