// Generate 8 slides of 4:5 Carousel OV1
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const slidesData = [
  {
    nn: '01',
    topTag: 'TẠI CẨM PHẢ',
    slideNum: 'TỔNG HỢP DỊCH VỤ',
    icon: `<svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    title: 'VIỆC KỸ THUẬT,<br>CÓ THỢ ĐẤT MỎ.',
    desc: 'Thợ Đất Mỏ nhận các việc kỹ thuật tại Cẩm Phả'
  },
  {
    nn: '02',
    topTag: 'TẠI CẨM PHẢ',
    slideNum: 'DỊCH VỤ 01/06',
    icon: `<svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="15" height="10" rx="2"></rect><path d="m17 9 5-3v12l-5-3"></path><circle cx="7" cy="10" r="2" fill="currentColor"></circle></svg>`,
    title: 'CAMERA',
    desc: 'Lắp camera tận nơi'
  },
  {
    nn: '03',
    topTag: 'TẠI CẨM PHẢ',
    slideNum: 'DỊCH VỤ 02/06',
    icon: `<svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    title: 'MÁY TÍNH & PC',
    desc: 'Cài đặt phần mềm • Lắp ráp PC • Tư vấn cấu hình máy tính'
  },
  {
    nn: '04',
    topTag: 'TẠI CẨM PHẢ',
    slideNum: 'DỊCH VỤ 03/06',
    icon: `<svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path></svg>`,
    title: 'WI-FI & MẠNG',
    desc: 'Lắp đặt Wi-Fi, mạng tận nơi'
  },
  {
    nn: '05',
    topTag: 'TẠI CẨM PHẢ',
    slideNum: 'DỊCH VỤ 04/06',
    icon: `<svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`,
    title: 'ĐIỆN NƯỚC',
    desc: 'Sửa chữa điện nước gia đình tận nơi'
  },
  {
    nn: '06',
    topTag: 'TẠI CẨM PHẢ',
    slideNum: 'DỊCH VỤ 05/06',
    icon: `<svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M2 12h2"></path><path d="M20 12h2"></path></svg>`,
    title: 'ĐIỆN MẶT TRỜI',
    desc: 'Lắp đặt hệ thống điện mặt trời'
  },
  {
    nn: '07',
    topTag: 'TẠI CẨM PHẢ',
    slideNum: 'DỊCH VỤ 06/06',
    icon: `<svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="10" rx="2"></rect><line x1="6" y1="18" x2="6" y2="21"></line><line x1="12" y1="18" x2="12" y2="21"></line><line x1="18" y1="18" x2="18" y2="21"></line><line x1="4" y1="10" x2="20" y2="10"></line></svg>`,
    title: 'ĐIỀU HÒA',
    desc: 'Sửa chữa điều hòa tận nơi'
  },
  {
    nn: '08',
    topTag: 'CẨM PHẢ • QUẢNG NINH',
    slideNum: 'LIÊN HỆ TRỰC TIẾP',
    icon: `<svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    title: 'CẦN THỢ?<br>GỌI THỢ ĐẤT MỎ',
    desc: 'Hotline tiếp nhận: 0888 942 247'
  }
];

const templatePath = path.join(ROOT, 'src', 'ads', 'template_carousel_ov1.html');
const templateHtml = fs.readFileSync(templatePath, 'utf-8');

for (const slide of slidesData) {
  let html = templateHtml
    .replace('id="topTag">TẠI CẨM PHẢ<', `id="topTag">${slide.topTag}<`)
    .replace('id="slideNum">DỊCH VỤ 01/06<', `id="slideNum">${slide.slideNum}<`)
    .replace('id="slideIcon"></div>', `id="slideIcon">${slide.icon}</div>`)
    .replace('id="mainTitle">TIÊU ĐỀ<', `id="mainTitle">${slide.title}<`)
    .replace('id="descBox">Mô tả<', `id="descBox">${slide.desc}<`);

  const tmpFile = path.join(ROOT, 'src', 'ads', `tmp_slide_${slide.nn}.html`);
  fs.writeFileSync(tmpFile, html, 'utf-8');

  const outPng = path.join(ROOT, 'exports', `THO-DAT-MO_CAROUSEL_OV1_${slide.nn}_1080x1350_v01.png`);
  console.log(`Exporting slide ${slide.nn}...`);
  const cmd = `"${EDGE}" --headless --disable-gpu --screenshot="${outPng}" --window-size=1080,1350 --no-sandbox --disable-extensions --run-all-compositor-stages-before-draw --virtual-time-budget=3000 "file:///${tmpFile.replace(/\\/g, '/')}"`;
  
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log(`  OK: ${outPng}`);
  } catch (e) {
    console.error(`  FAIL: ${e.message}`);
  } finally {
    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
  }
}

console.log('All 8 slides exported successfully.');
