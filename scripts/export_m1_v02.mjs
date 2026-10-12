import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const url = `file:///${ROOT.replace(/\\/g, '/')}/src/ads/concept_m1_4x5_v02.html`;
const outPath = path.join(ROOT, 'exports', 'THO-DAT-MO_AD_M1_4x5_1080x1350_v02.png');

const cmd = `"${EDGE}" --headless --disable-gpu --screenshot="${outPath}" --window-size=1080,1350 --no-sandbox --disable-extensions --run-all-compositor-stages-before-draw --virtual-time-budget=3000 "${url}"`;
execSync(cmd, { stdio: 'inherit' });
console.log('Exported:', outPath);
