import sharp from "sharp";
import fs from "node:fs";
const iso = "src/assets/isotype.png";
await sharp(iso).resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("public/favicon-32.png");
await sharp(iso).resize(180, 180, { fit: "contain", background: "#F4EFE9" }).png().toFile("public/apple-touch-icon.png");
// favicon.svg: isotype as embedded PNG in an SVG wrapper (crisp enough at tab size; replaced by pure vector later)
const b64 = fs.readFileSync("public/favicon-32.png").toString("base64");
fs.writeFileSync("public/favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><image href="data:image/png;base64,${b64}" width="32" height="32"/></svg>`);
// OG default: cream canvas, logo centred
const logo = fs.readFileSync("src/assets/logo.svg", "utf8").replace(/class="logo-fill-blue"/g, 'fill="#163191"').replace(/class="logo-fill-beige"/g, 'fill="#BAAA97"');
const logoPng = await sharp(Buffer.from(logo)).resize({ width: 640 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#F4EFE9" } }).composite([{ input: logoPng, gravity: "centre" }]).png().toFile("public/og/default.png");
console.log("icons + og done");
