#!/usr/bin/env node
/**
 * Generates PWA icons at build time.
 * Runs as "prebuild" via package.json so Vercel creates them automatically.
 * Requires: sharp (listed in dependencies)
 */
import { createRequire } from "module";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const sharp = require("sharp");

const outDir = join(__dirname, "../public/icons");
mkdirSync(outDir, { recursive: true });

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#0E0E10" rx="80"/>
  <circle cx="256" cy="256" r="200" fill="#E8001D"/>
  <text x="256" y="320" font-family="Arial Black,Arial" font-weight="900"
    font-size="240" fill="white" text-anchor="middle" letter-spacing="-10">M</text>
  <rect x="0" y="0" width="512" height="4" fill="#E8001D" rx="2"/>
</svg>`;

const buf = Buffer.from(svg);

const sizes = [
  { name: "icon-192.png",        size: 192 },
  { name: "icon-512.png",        size: 512 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "favicon-32.png",      size: 32  },
];

await Promise.all(
  sizes.map(({ name, size }) =>
    sharp(buf).resize(size, size).png().toFile(join(outDir, name))
  )
);

console.log(`✓ PWA icons generated in public/icons/`);
