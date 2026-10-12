import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const edgePath = '"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"';

const files = [
  'src/ads/concept_n1_9x16.html',
  'src/ads/concept_n2_9x16.html',
  'src/ads/concept_n3_9x16.html'
];

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  const injectScript = `
  <div id="debug-result" style="display:none;"></div>
  <script>
    const getB = (id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { top: Math.round(r.top), bottom: Math.round(r.bottom), left: Math.round(r.left), right: Math.round(r.right), height: Math.round(r.height) };
    };
    const res = {
      file: "${f}",
      logo: getB('ad-logo'),
      title: getB('ad-title'),
      hotline: getB('ad-hotline'),
      cta: getB('ad-cta')
    };
    document.getElementById('debug-result').textContent = 'DEBUG_COORDS_START' + JSON.stringify(res) + 'DEBUG_COORDS_END';
  </script>
  </body>`;
  
  const tempFile = f.replace('.html', '_temp_measure.html');
  fs.writeFileSync(tempFile, content.replace('</body>', injectScript));
  
  const fileUrl = 'file:///' + path.resolve(tempFile).replace(/\\/g, '/');
  try {
    const out = execSync(`${edgePath} --headless --hide-scrollbars --window-size=1080,1920 --dump-dom "${fileUrl}"`, { stdio: 'pipe' }).toString();
    const m = out.match(/DEBUG_COORDS_START(\{.*?\})DEBUG_COORDS_END/);
    if (m) {
      console.log(m[1]);
    } else {
      console.log('No match found for ' + f);
    }
  } catch (err) {
    console.error(err);
  } finally {
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
  }
}
