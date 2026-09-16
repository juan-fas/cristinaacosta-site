// Internal link check over dist/: every href starting with "/" must resolve to a built file.
import fs from "node:fs"; import path from "node:path";
const dist = "dist"; const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && files.push(p); } })(dist);
const exists = (u) => { const clean = u.split("#")[0].split("?")[0]; if (clean === "/") return true; const c = clean.replace(/\/$/, ""); return fs.existsSync(path.join(dist, c + ".html")) || fs.existsSync(path.join(dist, c, "index.html")) || fs.existsSync(path.join(dist, c)); };
const bad = new Map();
for (const f of files) { const html = fs.readFileSync(f, "utf8"); for (const m of html.matchAll(/href="(\/[^"]*)"/g)) { const u = m[1]; if (u.startsWith("/_astro") || u.startsWith("/fonts") || u.startsWith("/.netlify")) continue; if (!exists(u)) bad.set(u, [...(bad.get(u) || []), f]); } }
console.log(files.length, "pages checked;", bad.size, "broken internal links"); for (const [u, fs_] of bad) console.log(" ", u, "<-", [...new Set(fs_)].slice(0, 3).join(", "));
