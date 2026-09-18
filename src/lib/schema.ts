/* Small structured-data helpers shared across pages. */
import { site } from '../data/site';

export type Crumb = { name: string; path: string };

/** BreadcrumbList for a page at the end of `items` (path is relative to the site root, e.g. "/mortgages"). */
export function breadcrumbs(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path === '/' ? '' : it.path}` || site.url,
    })),
  };
}
