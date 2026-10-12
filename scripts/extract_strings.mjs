import fs from 'fs';

const files = [
  "src/ads/concept_n1_1x1.html",
  "src/ads/concept_n1_4x5.html",
  "src/ads/concept_n1_9x16.html",
  "src/ads/concept_n2_1x1.html",
  "src/ads/concept_n2_4x5.html",
  "src/ads/concept_n2_9x16.html"
];

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  // Match text nodes
  const matches = content.match(/>([^<]+)</g) || [];
  const texts = matches
    .map(m => m.replace(/^[>\s]+|[<\s]+$/g, '').trim())
    .filter(t => t.length > 0 && !t.startsWith('@') && !t.includes('{') && !t.includes('}'));
  console.log(`\n=== ${f} ===`);
  const unique = [...new Set(texts)];
  unique.forEach(u => console.log(`- "${u}"`));
}
