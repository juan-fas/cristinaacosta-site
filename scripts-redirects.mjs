// Post-build step: Netlify's redirect engine has no suffix wildcard (no "*.html" pattern —
// only a trailing "/prefix/*" splat is supported), so a single rule can't 301 every /page.html
// to /page. Instead, walk the actual build output and write one exact-match line per page into
// dist/_redirects, which Netlify picks up automatically from the publish directory. This is what
// keeps the old file-format build's /page.html files from being independently indexable.
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const lines = [];

(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { walk(full); continue; }
    if (!entry.name.endsWith('.html')) continue;
    const rel = '/' + path.relative(dist, full).replace(/\\/g, '/');
    const clean = rel === '/index.html' ? '/' : rel.replace(/\.html$/, '');
    if (clean === rel) continue; // shouldn't happen, but never redirect a page to itself
    lines.push(`${rel}  ${clean}  301!`);
  }
})(dist);

const redirectsPath = path.join(dist, '_redirects');
const existing = fs.existsSync(redirectsPath) ? fs.readFileSync(redirectsPath, 'utf8') + '\n' : '';
fs.writeFileSync(redirectsPath, existing + lines.join('\n') + '\n');
console.log(`_redirects: added ${lines.length} exact-match /*.html -> clean-URL redirects`);
