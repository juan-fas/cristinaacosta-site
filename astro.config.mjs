import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output: every page is plain HTML at build time.
// Netlify serves it from its CDN; no server runtime is involved.
export default defineConfig({
  site: 'https://cristinaacosta.ca',
  output: 'static',
  trailingSlash: 'never',
  // 'file' emits /page.html, which Netlify serves at the clean extensionless /page URL
  // (and, unlike 'directory' output, with no forced trailing-slash redirect on that URL).
  // The /page.html file itself stays reachable too — that's the real duplicate-URL bug,
  // and it's fixed at the host layer instead, by the /*.html redirect in netlify.toml.
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
