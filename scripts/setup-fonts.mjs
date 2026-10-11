import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const fontsToFetch = [
  {
    name: 'Anton',
    family: 'Anton',
    weight: '400',
    style: 'normal',
    subsets: [
      { name: 'vietnamese', url: 'https://fonts.gstatic.com/s/anton/v27/1Ptgg87LROyAm3K8-C8QSw.woff2', range: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB' },
      { name: 'latin-ext', url: 'https://fonts.gstatic.com/s/anton/v27/1Ptgg87LROyAm3K9-C8QSw.woff2', range: 'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF' },
      { name: 'latin', url: 'https://fonts.gstatic.com/s/anton/v27/1Ptgg87LROyAm3Kz-C8.woff2', range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD' }
    ]
  },
  {
    name: 'Oswald',
    family: 'Oswald',
    weight: '700',
    style: 'normal',
    subsets: [
      { name: 'vietnamese', url: 'https://fonts.gstatic.com/s/oswald/v57/TK3_WkUHHAIjg75cFRf3bXL8LICs1xZosUliZTaR.woff2', range: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB' },
      { name: 'latin-ext', url: 'https://fonts.gstatic.com/s/oswald/v57/TK3_WkUHHAIjg75cFRf3bXL8LICs1xZosUhiZTaR.woff2', range: 'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF' },
      { name: 'latin', url: 'https://fonts.gstatic.com/s/oswald/v57/TK3_WkUHHAIjg75cFRf3bXL8LICs1xZosUZiZQ.woff2', range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD' }
    ]
  },
  {
    name: 'BeVietnamPro-Regular',
    family: 'Be Vietnam Pro',
    weight: '400',
    style: 'normal',
    subsets: [
      { name: 'vietnamese', url: 'https://fonts.gstatic.com/s/bevietnampro/v12/QdVPSTAyLFyeg_IDWvOJmVES_Hw4BXoKZA.woff2', range: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB' },
      { name: 'latin-ext', url: 'https://fonts.gstatic.com/s/bevietnampro/v12/QdVPSTAyLFyeg_IDWvOJmVES_Hw5BXoKZA.woff2', range: 'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF' },
      { name: 'latin', url: 'https://fonts.gstatic.com/s/bevietnampro/v12/QdVPSTAyLFyeg_IDWvOJmVES_Hw3BXo.woff2', range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD' }
    ]
  },
  {
    name: 'BeVietnamPro-Bold',
    family: 'Be Vietnam Pro',
    weight: '700',
    style: 'normal',
    subsets: [
      { name: 'vietnamese', url: 'https://fonts.gstatic.com/s/bevietnampro/v12/QdVMSTAyLFyeg_IDWvOJmVES_HSMIG86Rb0bcw.woff2', range: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB' },
      { name: 'latin-ext', url: 'https://fonts.gstatic.com/s/bevietnampro/v12/QdVMSTAyLFyeg_IDWvOJmVES_HSMIG87Rb0bcw.woff2', range: 'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF' },
      { name: 'latin', url: 'https://fonts.gstatic.com/s/bevietnampro/v12/QdVMSTAyLFyeg_IDWvOJmVES_HSMIG81Rb0.woff2', range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD' }
    ]
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

async function run() {
  let cssContent = '/* Self-hosted fonts for THỢ ĐẤT MỎ */\n\n';
  for (const f of fontsToFetch) {
    for (const s of f.subsets) {
      const filename = `${f.name}-${s.name}.woff2`;
      const filePath = path.join('assets', 'fonts', filename);
      console.log(`Downloading ${filename}...`);
      await download(s.url, filePath);
      cssContent += `/* ${f.family} ${f.weight} [${s.name}] */\n`;
      cssContent += `@font-face {\n`;
      cssContent += `  font-family: '${f.family}';\n`;
      cssContent += `  font-style: ${f.style};\n`;
      cssContent += `  font-weight: ${f.weight};\n`;
      cssContent += `  font-display: swap;\n`;
      cssContent += `  src: url('${filename}') format('woff2');\n`;
      cssContent += `  unicode-range: ${s.range};\n`;
      cssContent += `}\n\n`;
    }
  }
  fs.writeFileSync(path.join('assets', 'fonts', 'fonts.css'), cssContent, 'utf8');
  console.log('Saved assets/fonts/fonts.css');
}

run();
