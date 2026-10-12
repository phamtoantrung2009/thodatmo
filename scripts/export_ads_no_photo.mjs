import { execSync } from 'child_process';
import path from 'path';

const edgePath = '"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"';

function exportAd(srcFile, w, h, outFile) {
  const fileUrl = 'file:///' + path.resolve(srcFile).replace(/\\/g, '/');
  const outPath = path.resolve(outFile);
  console.log(`Exporting ${srcFile} -> ${outFile} (${w}x${h})...`);
  execSync(`${edgePath} --headless --hide-scrollbars --window-size=${w},${h} "--screenshot=${outPath}" "${fileUrl}"`);
}

// Export N3 only (N1 and N2 are already exported)
exportAd('src/ads/concept_n3_1x1.html', 1080, 1080, 'exports/THO-DAT-MO_AD_N3_1x1_1080x1080_v01.png');
exportAd('src/ads/concept_n3_4x5.html', 1080, 1350, 'exports/THO-DAT-MO_AD_N3_4x5_1080x1350_v01.png');
exportAd('src/ads/concept_n3_9x16.html', 1080, 1920, 'exports/THO-DAT-MO_AD_N3_9x16_1080x1920_v01.png');

console.log('N3 exports completed.');
