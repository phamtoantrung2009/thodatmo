// Export script for T11 ads
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const target = process.argv[2] || 'all';

const allAds = {
  w1: [
    { file: 'src/ads/concept_w1_1x1.html',  out: 'exports/THO-DAT-MO_AD_W1_1x1_1080x1080_v01.png',  w: 1080, h: 1080 },
    { file: 'src/ads/concept_w1_4x5.html',  out: 'exports/THO-DAT-MO_AD_W1_4x5_1080x1350_v01.png',  w: 1080, h: 1350 },
    { file: 'src/ads/concept_w1_9x16.html', out: 'exports/THO-DAT-MO_AD_W1_9x16_1080x1920_v01.png', w: 1080, h: 1920 },
  ],
  d1: [
    { file: 'src/ads/concept_d1_1x1.html',  out: 'exports/THO-DAT-MO_AD_D1_1x1_1080x1080_v01.png',  w: 1080, h: 1080 },
    { file: 'src/ads/concept_d1_4x5.html',  out: 'exports/THO-DAT-MO_AD_D1_4x5_1080x1350_v01.png',  w: 1080, h: 1350 },
    { file: 'src/ads/concept_d1_9x16.html', out: 'exports/THO-DAT-MO_AD_D1_9x16_1080x1920_v01.png', w: 1080, h: 1920 },
  ],
  s1: [
    { file: 'src/ads/concept_s1_1x1.html',  out: 'exports/THO-DAT-MO_AD_S1_1x1_1080x1080_v01.png',  w: 1080, h: 1080 },
    { file: 'src/ads/concept_s1_4x5.html',  out: 'exports/THO-DAT-MO_AD_S1_4x5_1080x1350_v01.png',  w: 1080, h: 1350 },
    { file: 'src/ads/concept_s1_9x16.html', out: 'exports/THO-DAT-MO_AD_S1_9x16_1080x1920_v01.png', w: 1080, h: 1920 },
  ]
};

const adsToRun = target === 'all' 
  ? [...allAds.w1, ...allAds.d1, ...allAds.s1] 
  : (allAds[target] || []);

for (const ad of adsToRun) {
  const url = `file:///${ROOT.replace(/\\/g, '/')}/${ad.file}`;
  const outPath = path.join(ROOT, ad.out);
  console.log(`Exporting ${ad.out}...`);
  const cmd = `"${EDGE}" --headless --disable-gpu --screenshot="${outPath}" --window-size=${ad.w},${ad.h} --no-sandbox --disable-extensions --run-all-compositor-stages-before-draw --virtual-time-budget=3000 "${url}"`;
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`  OK: ${outPath}`);
  } catch (e) {
    console.error(`  FAIL: ${e.message}`);
  }
}
console.log('Done.');
