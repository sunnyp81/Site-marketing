import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

// Renders the site-wide Open Graph card (1200x630) to public/images/og-default.png.
// Run: node scripts/generate-og.mjs  — the resulting PNG is committed to the repo.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0b0b"/>
  <text x="80" y="300" font-family="system-ui, -apple-system, 'Segoe UI', 'Inter', sans-serif" font-size="80" font-weight="700" fill="#4ee29a">site.marketing</text>
  <text x="80" y="372" font-family="system-ui, -apple-system, 'Segoe UI', 'Inter', sans-serif" font-size="34" font-weight="400" fill="#eeeeee">The operator's manual for marketing an existing website.</text>
  <rect x="0" y="624" width="1200" height="6" fill="#4ee29a"/>
</svg>`;

const outDir = resolve(process.cwd(), 'public/images');
mkdirSync(outDir, { recursive: true });
const outFile = resolve(outDir, 'og-default.png');

const png = await sharp(Buffer.from(svg)).png().toBuffer();
const { writeFileSync } = await import('node:fs');
writeFileSync(outFile, png);
console.log(`Wrote ${outFile} (${png.length} bytes)`);
