import sharp from "sharp"; import fs from "node:fs"; import path from "node:path";
const dir = "src/assets/photos";
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith(".jpg")) continue;
  const p = path.join(dir, f); const meta = await sharp(p).metadata();
  if ((meta.height ?? 0) <= 2000) { console.log(f, "ok"); continue; }
  const tmp = p + ".tmp.jpg";
  await sharp(p).rotate().resize({ height: 2000, withoutEnlargement: true }).jpeg({ quality: 88, mozjpeg: true }).toFile(tmp);
  fs.renameSync(tmp, p);
  console.log(f, meta.width + "x" + meta.height, "->", Math.round(fs.statSync(p).size / 1024) + "KB");
}
