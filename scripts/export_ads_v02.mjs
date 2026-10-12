import { execSync } from 'child_process';
import path from 'path';

const edgePath = '"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"';

const tasks = [
  { src: 'src/ads/concept_n1_1x1.html', w: 1080, h: 1080, out: 'exports/THO-DAT-MO_AD_N1_1x1_1080x1080_v02.png' },
  { src: 'src/ads/concept_n1_4x5.html', w: 1080, h: 1350, out: 'exports/THO-DAT-MO_AD_N1_4x5_1080x1350_v02.png' },
  { src: 'src/ads/concept_n1_9x16.html', w: 1080, h: 1920, out: 'exports/THO-DAT-MO_AD_N1_9x16_1080x1920_v02.png' },

  { src: 'src/ads/concept_n2_1x1.html', w: 1080, h: 1080, out: 'exports/THO-DAT-MO_AD_N2_1x1_1080x1080_v02.png' },
  { src: 'src/ads/concept_n2_4x5.html', w: 1080, h: 1350, out: 'exports/THO-DAT-MO_AD_N2_4x5_1080x1350_v02.png' },
  { src: 'src/ads/concept_n2_9x16.html', w: 1080, h: 1920, out: 'exports/THO-DAT-MO_AD_N2_9x16_1080x1920_v02.png' },

  { src: 'src/ads/concept_n3_1x1.html', w: 1080, h: 1080, out: 'exports/THO-DAT-MO_AD_N3_1x1_1080x1080_v02.png' },
  { src: 'src/ads/concept_n3_4x5.html', w: 1080, h: 1350, out: 'exports/THO-DAT-MO_AD_N3_4x5_1080x1350_v02.png' },
  { src: 'src/ads/concept_n3_9x16.html', w: 1080, h: 1920, out: 'exports/THO-DAT-MO_AD_N3_9x16_1080x1920_v02.png' }
];

for (const t of tasks) {
  const fileUrl = 'file:///' + path.resolve(t.src).replace(/\\/g, '/');
  const outPath = path.resolve(t.out);
  console.log(`Exporting ${t.src} -> ${t.out} (${t.w}x${t.h})...`);
  execSync(`${edgePath} --headless --hide-scrollbars --window-size=${t.w},${t.h} "--screenshot=${outPath}" "${fileUrl}"`);
}

console.log('All 9 v02 exports completed successfully.');
