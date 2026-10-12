// Measure content bounds in exported PNGs
// Uses jimp (pure JS, no native deps) to read pixel data
// BG color: #080808, tolerance: 15 per channel

import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const BG = { r: 8, g: 8, b: 8 };
const TOL = 20;

function isBackground(r, g, b) {
  return Math.abs(r - BG.r) <= TOL && Math.abs(g - BG.g) <= TOL && Math.abs(b - BG.b) <= TOL;
}

async function measurePng(relPath) {
  const { Jimp } = await import('jimp');
  const absPath = path.join(ROOT, relPath);
  const img = await Jimp.read(absPath);
  const w = img.bitmap.width;
  const h = img.bitmap.height;

  let yFirst = h, yLast = 0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = img.bitmap.data[idx];
      const g = img.bitmap.data[idx + 1];
      const b = img.bitmap.data[idx + 2];
      if (!isBackground(r, g, b)) {
        if (y < yFirst) yFirst = y;
        if (y > yLast) yLast = y;
        break; // found non-bg in this row, move to next y
      }
    }
  }

  return { file: relPath, w, h, yFirst, yLast };
}

const files = [
  'exports/THO-DAT-MO_AD_OV1_9x16_1080x1920_v01.png',
  'exports/THO-DAT-MO_AD_OV1_4x5_1080x1350_v01.png',
  'exports/THO-DAT-MO_AD_OV1_1x1_1080x1080_v01.png',
];

for (const f of files) {
  try {
    const r = await measurePng(f);
    console.log(`${path.basename(r.file)}: ${r.w}x${r.h} | content y: ${r.yFirst} → ${r.yLast}`);
  } catch (e) {
    console.error(`FAIL ${f}: ${e.message}`);
  }
}
