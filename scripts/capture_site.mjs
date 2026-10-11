import { execSync } from 'child_process';
import path from 'path';

const fileUrl = 'file:///' + path.resolve('site/index.html').replace(/\\/g, '/');
const edgePath = '"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"';

function capture(w, h, outName) {
  const outPath = path.resolve('reports', outName);
  console.log(`Capturing ${outName} (${w}x${h})...`);
  execSync(`${edgePath} --headless --hide-scrollbars --window-size=${w},${h} "--screenshot=${outPath}" "${fileUrl}"`);
}

capture(1280, 2400, 'site-desktop.png');
capture(390, 3100, 'site-mobile-390px.png');
capture(360, 800, 'site-mobile-360px.png');
capture(430, 932, 'site-mobile-430px.png');

console.log('All captures completed successfully.');
