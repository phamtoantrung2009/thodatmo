// Export Camera K1, K2 ads (6 PNGs) using Edge headless
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browser = existsSync(EDGE) ? EDGE : CHROME;

const ads = [
  { file: 'src/ads/concept_k1_1x1.html',  out: 'exports/THO-DAT-MO_AD_K1_1x1_1080x1080_v01.png',  w: 1080, h: 1080 },
  { file: 'src/ads/concept_k1_4x5.html',  out: 'exports/THO-DAT-MO_AD_K1_4x5_1080x1350_v01.png',  w: 1080, h: 1350 },
  { file: 'src/ads/concept_k1_9x16.html', out: 'exports/THO-DAT-MO_AD_K1_9x16_1080x1920_v01.png', w: 1080, h: 1920 },
  { file: 'src/ads/concept_k2_1x1.html',  out: 'exports/THO-DAT-MO_AD_K2_1x1_1080x1080_v01.png',  w: 1080, h: 1080 },
  { file: 'src/ads/concept_k2_4x5.html',  out: 'exports/THO-DAT-MO_AD_K2_4x5_1080x1350_v01.png',  w: 1080, h: 1350 },
  { file: 'src/ads/concept_k2_9x16.html', out: 'exports/THO-DAT-MO_AD_K2_9x16_1080x1920_v01.png', w: 1080, h: 1920 },
];

for (const ad of ads) {
  const url = `file:///${ROOT.replace(/\\/g, '/')}/${ad.file}`;
  const outPath = path.join(ROOT, ad.out);
  console.log(`Exporting ${ad.out}...`);
  const cmd = `"${browser}" --headless --disable-gpu --screenshot="${outPath}" --window-size=${ad.w},${ad.h} --no-sandbox --disable-extensions --run-all-compositor-stages-before-draw --virtual-time-budget=3000 "${url}"`;
  try {
    execSync(cmd, { timeout: 30000, stdio: 'pipe' });
    console.log(`  OK: ${outPath}`);
  } catch (e) {
    console.error(`  FAIL: ${e.message}`);
  }
}
console.log('Done.');
