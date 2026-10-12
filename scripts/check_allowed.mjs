import fs from 'fs';

const allowedPhrases = [
  "Điều hòa không mát?",
  "Cần sửa điều hòa?",
  "Gọi thợ",
  "Cần thợ? Gọi Thợ Đất Mỏ",
  "Việc kỹ thuật, có Thợ Đất Mỏ",
  "Thợ địa phương",
  "Kỹ thuật tận nơi",
  "Đầu mối kết nối thợ tận nơi",
  "Sửa chữa điều hòa tận nơi",
  "Tại Cẩm Phả",
  "0888 942 247",
  "THỢ ĐẤT MỎ"
];

function normalize(str) {
  return str.toLowerCase().replace(/[.,:•●✕✓—–\-_?]/g, '').replace(/\s+/g, ' ').trim();
}

const allowedNorm = allowedPhrases.map(normalize);

const filesN1 = [
  "src/ads/concept_n1_1x1.html",
  "src/ads/concept_n1_4x5.html",
  "src/ads/concept_n1_9x16.html"
];

const filesN2 = [
  "src/ads/concept_n2_1x1.html",
  "src/ads/concept_n2_4x5.html",
  "src/ads/concept_n2_9x16.html"
];

function extractTexts(files) {
  const set = new Set();
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/>([^<]+)</g) || [];
    for (const m of matches) {
      const t = m.replace(/^[>\s]+|[<\s]+$/g, '').trim();
      if (!t || t.startsWith('@') || t.startsWith('Ad N') || t.includes('{') || t.includes('}') || t === '✕' || t === '●') continue;
      set.add(t);
    }
  }
  return [...set];
}

const n1Texts = extractTexts(filesN1);
const n2Texts = extractTexts(filesN2);

console.log("=== N1 TEXTS ===");
for (const t of n1Texts) {
  const norm = normalize(t);
  const isAllowed = allowedNorm.includes(norm);
  console.log(`[${isAllowed ? "ĐƯỢC PHÉP" : "CẦN DUYỆT"}] "${t}"`);
}

console.log("\n=== N2 TEXTS ===");
for (const t of n2Texts) {
  const norm = normalize(t);
  const isAllowed = allowedNorm.includes(norm);
  console.log(`[${isAllowed ? "ĐƯỢC PHÉP" : "CẦN DUYỆT"}] "${t}"`);
}
