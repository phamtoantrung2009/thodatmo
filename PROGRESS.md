# PROGRESS — THỢ ĐẤT MỎ (handoff file)

Rules for this file are in `AGENTS.md` §1. Update it BEFORE starting a step and AFTER every finished file.
Keep §0 under 15 lines. Specs for each task are in `AGENTS.md` §7.

---

## 0. RESUME HERE

- Last updated: 2026-10-12 · by: Gemini Flash
- Last model: Gemini Flash
- CURRENT TASK: T05e Hoàn tất xuất 9 ad v02 theo review ảnh (trích soát claim, safe zone 9:16 y=280-1230, font>=26px, bỏ màu đỏ)
- STATUS: DONE
- NEXT ACTION: Chờ Trung duyệt 9 ad v02 hoặc chỉ đạo task tiếp theo (T05b-d chuyển sang ảnh thật khi có ảnh, hoặc chuẩn bị ad copy / chiến dịch).
- Files in progress: none
- Do not redo: T00-T08, T05e v01 & v02.
- Blockers: none.

---

## 1. TASK BOARD (status only; specs in AGENTS.md §7; execution order = top to bottom)

- [x] T00 Inventory and scaffold
- [x] T01 Logo audit (no redesign)
- [x] T02 Fonts, glyph test, tokens
- [x] T07 Ops sheets + business documents
- [x] T04 Facebook avatar and cover
- [x] T05a Điện lạnh copy bank + photo shotlist
- [x] T08 Copy pack (FB about, GBP, 6 transition posts)
- [x] T05b Điện lạnh ad concept 1 (3 ratios, PREVIEW)
- [x] T05c Điện lạnh ad concept 2 (3 ratios, PREVIEW)
- [x] T05d Điện lạnh ad concept 3 (3 ratios, PREVIEW)
- [x] T05e Điện lạnh ad set KHÔNG ẢNH (3 concepts N1-N3 × 3 ratios = 9 PNGs READY v01 & v02, copy pack, ad rules)
- [x] T06a Landing page: structure + hero + call bar (optional for first ad test)
- [x] T06b Landing page: remaining sections + QA
- [x] MVP QA pass and report to Trung
- T03 icons: just-in-time inside T05/T06 (done: inline SVGs for all services)
- T09 DEFERRED, do not start unless Trung asks

---

## 2. DECISIONS (append-only: date · decision · why)

- 2026-10-11 · Brand name THỢ ĐẤT MỎ, palette #FFD200 / #080808 / #FFFFFF / #6B6B6B locked · guideline v1.0
- 2026-10-11 · Rebrand the existing Facebook page, no new page · keeps ~568 followers and ad history
- 2026-10-11 · Hotline 0888 942 247 · purchased by Trung
- 2026-10-11 · Ad test order Điện lạnh → Camera → Điện nước → Máy tính → Solar · fastest cash turnover first
- 2026-10-11 · Execution order T00→T01→T02→T07→T04→T05a→T08→T05b-d→T06 · ops sheets exist before any ad spend; landing page optional for first test; shotlist first because real photos are the blocker
- 2026-10-11 · Badge/avatar only from an official badge asset; if missing, log it and use a TEMP avatar from the unmodified logo
- 2026-10-11 · Display font: TO BE DECIDED in T02 (Anton or Oswald 700; Bebas Neue rejected for Vietnamese coverage)
- 2026-10-12 · Display font: OSWALD BOLD 700 chosen as primary display font (Anton as alternate ultra-condensed); BE VIETNAM PRO (400, 700) for body. Glyph benchmark 02-glyph-test.png verified diacritics PASS with zero tofu/fallback.
- 2026-10-12 · Test ads đầu chạy bằng creative không ảnh; ảnh thật thay ở vòng 2.
- 2026-10-12 · N2 tách nhãn 'TẠI CẨM PHẢ' riêng khỏi tên thương hiệu; xóa toàn bộ danh sách phường, xóa 2 nút chưa xác nhận (bảo dưỡng máy, nạp bổ sung gas).
- 2026-10-12 · Cả 3 tỷ lệ 9:16 cố định nội dung trong khoảng y=280→1230px, lề trái/phải 70px, dưới y=1230px để trống hoàn toàn cho UI Stories/Reels.

---

## 3. FACTS AND CLAIMS FROM TRUNG

Confirmed inputs:
- Hotline: 0888 942 247 · Domain: datmo.io.vn · Market: Cẩm Phả, Quảng Ninh
- Role: coordinator who dispatches jobs to technician friends (not "our own team")
- Thỏa thuận chia 30-70 bằng miệng với thợ, bên nào 30 bên nào 70 CHƯA rõ, không đoán.

Claims status (use in finished copy only when CONFIRMED):

| Claim | Status |
|---|---|
| 24/7 or "trực 24h" | NOT CONFIRMED |
| Response time ("có mặt trong X phút") | NOT CONFIRMED |
| Free survey / free quote | NOT CONFIRMED |
| Quote given before work starts | NOT CONFIRMED |
| Warranty period per service | NOT CONFIRMED |
| Any price or price range | NOT CONFIRMED |
| Service area (phường/khu vực) and working hours | NOT CONFIRMED |
| Zalo link / address (for Google Business Profile) | NOT AVAILABLE |
| Real job photos | NONE YET |

---

### Bảng soát claim thực tế trích xuất từ 9 file HTML nguồn v02

| File | Chuỗi chữ hiển thị trích xuất | Phân loại theo O3, O4 |
|---|---|---|
| `concept_n1_1x1.html`, `4x5.html`, `9x16.html` | "CẨM PHẢ • QUẢNG NINH" | Được phép (khu vực hoạt động xác nhận) |
|  | "SỰ CỐ ĐIỀU HÒA • GỌI THỢ XỬ LÝ" | Được phép (mô tả dịch vụ) |
|  | "ĐIỀU HÒA KHÔNG MÁT? GỌI THỢ ĐẤT MỎ." | Được phép (Promise & CTA brand) |
|  | "✕ Bật lâu không lạnh, phả hơi nóng" | Được phép (triệu chứng kỹ thuật thực tế) |
|  | "✕ Chảy nước dàn lạnh, ướt tường nhà" | Được phép (triệu chứng kỹ thuật thực tế) |
|  | "✕ Cục nóng kêu to, rung lắc, tốn điện" | Được phép (triệu chứng kỹ thuật thực tế) |
|  | "THỢ KỸ THUẬT TẠI CẨM PHẢ • KỸ THUẬT" | Được phép (theo O3: thợ địa phương) |
|  | "XỬ LÝ SỰ CỐ ĐIỀU HÒA TẬN NƠI • TẬN NHÀ" | Được phép (phạm vi dịch vụ tận nơi) |
|  | "CẦN THỢ? GỌI THỢ ĐẤT MỎ" | Được phép (CTA line chính thức) |
|  | "0888 942 247" | Được phép (Hotline chính thức xác nhận) |
| `concept_n2_1x1.html`, `4x5.html`, `9x16.html` | "CẨM PHẢ • QUẢNG NINH" | Được phép |
|  | "TẠI CẨM PHẢ" (nhãn riêng) | Được phép (địa bàn xác nhận, tách rời tên brand) |
|  | "KỸ THUẬT TẬN NƠI" | Được phép (mô tả dịch vụ) |
|  | "CẦN SỬA ĐIỀU HÒA? THỢ ĐẤT MỎ." | Được phép (tên brand chuẩn diacritics) |
|  | "ĐẦU MỐI KẾT NỐI THỢ TẬN NƠI" | Được phép (đúng định vị coordinator O3) |
|  | "Kiểm tra sự cố tận nơi, xử lý đúng bệnh điều hòa..." | Được phép (mô tả công việc kỹ thuật) |
|  | "SỬA CHỮA ĐIỀU HÒA TẬN NƠI" | Được phép (mô tả nghiệp vụ) |
|  | "CẦN THỢ? GỌI THỢ ĐẤT MỎ" · "0888 942 247" | Được phép |
| `concept_n3_1x1.html`, `4x5.html`, `9x16.html` | "CẨM PHẢ • QUẢNG NINH" | Được phép |
|  | "BẢO DƯỠNG ĐỊNH KỲ • TIẾT KIỆM ĐIỆN" | Được phép (lợi ích kỹ thuật thông thường) |
|  | "VỆ SINH ĐIỀU HÒA SẠCH. MÁY CHẠY ÊM, MÁT SÂU." | Được phép (headline kỹ thuật) |
|  | "✓ Xịt rửa dàn lạnh, sạch bụi mốc / bẩn & thông máng nước" | Được phép (quy trình kỹ thuật cơ bản) |
|  | "✓ Vệ sinh dàn nóng, thông thoáng quạt tản nhiệt" | Được phép (quy trình kỹ thuật cơ bản) |
|  | "✓ Đo áp suất gas & kiểm tra dòng điện vận hành" | Được phép (quy trình kỹ thuật cơ bản) |
|  | "THỢ KỸ THUẬT TẠI CẨM PHẢ" · "BẢO DƯỠNG ĐIỀU HÒA TẬN NƠI" | Được phép (O3 hợp lệ) |
|  | "CẦN THỢ? GỌI THỢ ĐẤT MỎ" · "0888 942 247" | Được phép |

*Kết luận soát claim:* Không còn bất kỳ chuỗi chữ nào vi phạm O3 hoặc O4 hoặc cần Trung xác nhận. 100% nội dung đã được làm sạch.

---

## 4. QUESTIONS FOR TRUNG (batched; keep working with placeholders)

- Q1 Zalo: will it use the same number? Send the link when ready.
- Q2 Service area and working hours for Điện lạnh?
- Q3 Do you commit to giving the quote before the technician starts?
- Q4 Warranty period for Điện lạnh jobs (if any)?
- Q5 Any starting price or offer you want in ads (e.g. check-up fee)?
- Q6 Who shoots the real photos, and when? See `copy/photo-shotlist.md` after T05a.
- Q7 (T00) Does a vector logo source (.svg/.ai/.eps/.pdf) exist anywhere? If yes, send it before T01. → **ANSWERED: No vector source exists (2026-10-12)**
- Q8 (T01) Missing variants: stacked layout and wordmark-only do not exist in the source sheet. Does Trung have these, or should they be commissioned? → **ANSWERED: defer (2026-10-12)**
- Q9 Terms with the Điện lạnh technician(s): commission split, who collects payment, who handles warranty/complaints, response time, working hours, service area. Their answers decide which claims in §3 can become CONFIRMED.

---

## 5. DELIVERABLES INDEX (path · status · QA result)

Logo files (located in T00):
- L1: `ChatGPT Image Sep 16, 2026, 12_22_22 AM.png` (root) — PNG raster, ~1.16 MB, only file present, no vector source found.

Status values: READY (usable as-is) / PREVIEW (placeholders or unconfirmed claims) / BLOCKED (needs input from Trung).

| Path | Status | QA (1 line) |
|---|---|---|
| `reports/00-inventory.md` | DONE | Tree correct, scaffold created, logo L1 identified, gaps logged in §4 |
| `reports/01-logo-audit.md` | DONE | Diacritics PASS, colors PASS, small-size PASS; verdict USABLE AS-IS |
| `assets/logo-derived/THO-DAT-MO_BADGE_AVATAR_1080x1080_v01.png` | READY | Badge crop 1080×1080, 10% margin, survives circular crop |
| `assets/logo-derived/THO-DAT-MO_LOGO_HORIZONTAL_crop_v01.png` | READY | Clean horizontal primary crop, for T04 cover and T06 |
| `assets/logo-derived/THO-DAT-MO_BADGE_check_256px.png` | QA-ONLY | Size check reference |
| `assets/logo-derived/THO-DAT-MO_BADGE_check_128px.png` | QA-ONLY | Size check reference |
| `assets/logo-derived/THO-DAT-MO_BADGE_check_64px.png` | QA-ONLY | Size check reference |
| `assets/fonts/fonts.css` | READY | Self-hosted woff2 @font-face for Oswald, Anton, Be Vietnam Pro |
| `reports/02-glyph-test.png` | DONE | Vietnamese diacritics benchmark pass for Oswald, Anton, Be Vietnam Pro |
| `assets/tokens.css` | READY | Core design tokens (colors, typography, spacing, radius, shadows) |
| `assets/tokens.json` | READY | JSON design tokens for tooling / templates |
| `ops/leads.csv` | READY | Operational lead/dispatch tracking sheet |
| `ops/ad-tracker.csv` | READY | Daily advertising performance and CAC tracking sheet |
| `ops/README.md` | READY | Operational SOP & unit economics calculation guide |
| `ops/templates/bao-gia.html` | READY | HTML service quote template |
| `exports/THO-DAT-MO_BAO_GIA_A4.pdf` | READY | Print-ready A4 service quote PDF |
| `ops/templates/phieu-ban-giao.html` | READY | HTML handover & acceptance template |
| `exports/THO-DAT-MO_PHIEU_BAN_GIAO_A4.pdf` | READY | Print-ready A4 handover document PDF |
| `ops/templates/tem-bao-hanh.html` | READY | HTML warranty sticker template (80x50mm + 4-up sheet) |
| `exports/THO-DAT-MO_TEM_BAO_HANH.pdf` | READY | Print-ready warranty sticker PDF / PNG |
| `exports/THO-DAT-MO_AVATAR_FB_1080x1080_v01.png` | READY | Official badge avatar 1080×1080, survived circular crop & 40px test |
| `exports/THO-DAT-MO_COVER_FB_1640x624_BLACK_v01.png` | READY | FB cover Option 1 (Black bg), 100% content inside mobile safe zone |
| `exports/THO-DAT-MO_COVER_FB_1640x624_YELLOW_v01.png` | READY | FB cover Option 2 (Yellow bg), 100% content inside mobile safe zone |
| `reports/avatar-circular-check.png` | DONE | Circle crop mask validation for avatar |
| `reports/cover-safezone-check.png` | DONE | Mobile safe zone overlay validation for cover |
| `copy/photo-shotlist.md` | READY | 7 concrete real photo briefs for Dien lanh technicians |
| `copy/dien-lanh-copy-bank.md` | READY | 10 headlines (<=7 words) + 5 primary texts (<=3 lines) tagged by angle |
| `copy/facebook-about.md` | READY | Facebook page setup, bio (152 chars) and about copy |
| `copy/gbp.md` | READY | Google Business Profile categories, description (588 chars), services list |
| `copy/transition-posts.md` | READY | 6 transition posts with real photo briefs for page rebrand |
| `exports/THO-DAT-MO_AD_C1_1x1_1080x1080_PREVIEW.png` | PREVIEW | Ad C1 (Problem angle) 1:1, CSS-driven photo slot, verified diacritics |
| `exports/THO-DAT-MO_AD_C1_4x5_1080x1350_PREVIEW.png` | PREVIEW | Ad C1 (Problem angle) 4:5 mobile feed, CSS-driven photo slot |
| `exports/THO-DAT-MO_AD_C1_9x16_1080x1920_PREVIEW.png` | PREVIEW | Ad C1 (Problem angle) 9:16 story/reels, critical text inside safe zone |
| `exports/THO-DAT-MO_AD_C2_1x1_1080x1080_PREVIEW.png` | PREVIEW | Ad C2 (Local angle) 1:1, CSS-driven photo slot, verified diacritics |
| `exports/THO-DAT-MO_AD_C2_4x5_1080x1350_PREVIEW.png` | PREVIEW | Ad C2 (Local angle) 4:5 mobile feed, CSS-driven photo slot |
| `exports/THO-DAT-MO_AD_C2_9x16_1080x1920_PREVIEW.png` | PREVIEW | Ad C2 (Local angle) 9:16 story/reels, critical text inside safe zone |
| `exports/THO-DAT-MO_AD_C3_1x1_1080x1080_PREVIEW.png` | PREVIEW | Ad C3 (Maintenance angle) 1:1, CSS-driven photo slot, verified diacritics |
| `exports/THO-DAT-MO_AD_C3_4x5_1080x1350_PREVIEW.png` | PREVIEW | Ad C3 (Maintenance angle) 4:5 mobile feed, CSS-driven photo slot |
| `exports/THO-DAT-MO_AD_C3_9x16_1080x1920_PREVIEW.png` | PREVIEW | Ad C3 (Maintenance angle) 9:16 story/reels, critical text inside safe zone |
| `site/index.html` | READY | Landing page đơn trang (34.7 KB), Hero điện lạnh, 7 dịch vụ + inline SVG, 4 bước, sticky bottom call bar, tracking slots, SEO/OG meta |
| `reports/site-desktop.png` | DONE | Desktop screenshot QA (1280px) |
| `reports/site-mobile-390px.png` | DONE | Mobile screenshot QA (390px full page) |
| `reports/site-mobile-360px.png` | DONE | Mobile viewport QA (360px) |
| `reports/site-mobile-430px.png` | DONE | Mobile viewport QA (430px) |
| `exports/THO-DAT-MO_AD_N1_1x1_1080x1080_v01.png` | READY | Ad N1 (Problem angle) 1:1 v01 (giữ nguyên file gốc) |
| `exports/THO-DAT-MO_AD_N1_4x5_1080x1350_v01.png` | READY | Ad N1 (Problem angle) 4:5 v01 (giữ nguyên file gốc) |
| `exports/THO-DAT-MO_AD_N1_9x16_1080x1920_v01.png` | READY | Ad N1 (Problem angle) 9:16 v01 (giữ nguyên file gốc) |
| `exports/THO-DAT-MO_AD_N2_1x1_1080x1080_v01.png` | READY | Ad N2 (Local angle) 1:1 v01 (giữ nguyên file gốc) |
| `exports/THO-DAT-MO_AD_N2_4x5_1080x1350_v01.png` | READY | Ad N2 (Local angle) 4:5 v01 (giữ nguyên file gốc) |
| `exports/THO-DAT-MO_AD_N2_9x16_1080x1920_v01.png` | READY | Ad N2 (Local angle) 9:16 v01 (giữ nguyên file gốc) |
| `exports/THO-DAT-MO_AD_N3_1x1_1080x1080_v01.png` | READY | Ad N3 (Maintenance angle) 1:1 v01 (giữ nguyên file gốc) |
| `exports/THO-DAT-MO_AD_N3_4x5_1080x1350_v01.png` | READY | Ad N3 (Maintenance angle) 4:5 v01 (giữ nguyên file gốc) |
| `exports/THO-DAT-MO_AD_N3_9x16_1080x1920_v01.png` | READY | Ad N3 (Maintenance angle) 9:16 v01 (giữ nguyên file gốc) |
| `exports/THO-DAT-MO_AD_N1_1x1_1080x1080_v02.png` | READY | Ad N1 1:1 v02: Dấu X sang #080808 (hết đỏ), line-height thoáng không dính dấu, font>=28px, QA 100% & 25% PASS |
| `exports/THO-DAT-MO_AD_N1_4x5_1080x1350_v02.png` | READY | Ad N1 4:5 v02: Dấu X #080808, layout cân đối, hotline rõ, font>=28px, QA 100% & 25% PASS |
| `exports/THO-DAT-MO_AD_N1_9x16_1080x1920_v02.png` | READY | Ad N1 9:16 v02: Logo y=280→352 (lề 70px); Tiêu đề y=499→669; Hotline y=1134→1210; Đáy CTA y=1230; dưới y=1230 trống; QA PASS |
| `exports/THO-DAT-MO_AD_N2_1x1_1080x1080_v02.png` | READY | Ad N2 1:1 v02: Xóa danh sách phường & 2 nút chưa xác nhận; 'TẠI CẨM PHẢ' nhãn riêng; giữ ĐẦU MỐI KẾT NỐI; QA 100% & 25% PASS |
| `exports/THO-DAT-MO_AD_N2_4x5_1080x1350_v02.png` | READY | Ad N2 4:5 v02: Layout thoáng, chữ trắng/vàng trên đen tương phản cao, không có chữ xám nhỏ, QA 100% & 25% PASS |
| `exports/THO-DAT-MO_AD_N2_9x16_1080x1920_v02.png` | READY | Ad N2 9:16 v02: Logo y=280→352 (lề 70px); Tiêu đề y=528→708; Hotline y=1134→1210; Đáy CTA y=1230; dưới y=1230 trống; QA PASS |
| `exports/THO-DAT-MO_AD_N3_1x1_1080x1080_v02.png` | READY | Ad N3 1:1 v02: Checklist bảo dưỡng sạch sẽ, tiêu đề line-height 1.25 dấu thoáng, font>=28px, QA 100% & 25% PASS |
| `exports/THO-DAT-MO_AD_N3_4x5_1080x1350_v02.png` | READY | Ad N3 4:5 v02: Dấu tích #080808, không claim sai, hotline chuẩn 0888 942 247, QA 100% & 25% PASS |
| `exports/THO-DAT-MO_AD_N3_9x16_1080x1920_v02.png` | READY | Ad N3 9:16 v02: Logo y=280→352 (lề 70px); Tiêu đề y=488→658; Hotline y=1134→1210; Đáy CTA y=1230; dưới y=1230 trống; QA PASS |
| `copy/ad-ready-text.md` | READY | 3 headlines + 3 primary texts for N1/N2/N3; N2 copy updated per independent review (bỏ 'khắp', 'có sẵn') |
| `copy/ad-test-rules.md` | READY | Test ad rules updated: xóa CPM giả định & cỡ mẫu, thay CPL công thức, bổ sung đo nguồn lead vào ops/leads.csv |

---

## 6. SESSION LOG (rolling: keep the latest 15 lines, merge older ones into one summary line)

- 2026-10-11 · Claude · Created AGENTS.md and PROGRESS.md. Reviewed guideline files; handled defects as overrides O1–O8.
- 2026-10-12 · Claude Sonnet 4.6 · T00 done (scaffold, inventory), T01 done (logo audit, 5 derived PNGs).
- 2026-10-12 · Gemini Flash · T02 done (Oswald 700 + Be Vietnam Pro, tokens.css/json). T07 done (ops sheets, PDF templates).
- 2026-10-12 · Gemini Flash · T04 done (avatar 1080x1080, covers 1640x624). T05a done (photo shotlist, copy bank). T08 done (copy pack FB/GBP/posts).
- 2026-10-12 · Gemini Flash · T05b/c/d done. 3 ad concepts (9 preview PNGs across 1:1, 4:5, 9:16) completed with CSS-driven photo slots.
- 2026-10-12 · Gemini Flash · T06a & T06b done. site/index.html completed with full sections (Hero, 7 Services with SVG icons, Trust, Process, Final CTA, Sticky call bar). Size 34.7KB (budget <=150KB). Responsive tested at 360/390/430px & desktop.
- 2026-10-12 · Gemini Flash · MVP QA pass completed. Entire MVP kit (T00->T08) ready. Real photos from technicians will unblock READY TO RUN status for ads.
- 2026-10-12 · Claude · Reviewed the handoff. Fixed NEXT ACTION (rebrand existing page). Added Q9.
- 2026-10-12 · Gemini Flash · T05e done. 3 no-photo ad concepts (N1, N2, N3) x 3 ratios = 9 PNGs READY (v01). copy/ad-ready-text.md and copy/ad-test-rules.md written.
- 2026-10-12 · Gemini Flash · T05e polish per review: Sửa primary text N2 (bỏ 'khắp', 'có sẵn'). Đã view & QA độc lập 4 ảnh N2 4x5, N2 9x16, N3 4x5, N3 9x16 (safe zone, diacritics, hotline, contrast PASS). Sửa ad-test-rules.md (xóa giả định CPM, thay CPL công thức, bổ sung đo nguồn lead).
- 2026-10-12 · Gemini Flash · T05e v02 hoàn tất: Sửa 9 template HTML nguồn, lập bảng soát claim O3/O4 (sạch 100%), bỏ màu đỏ (#080808), tăng line-height tiêu đề 1.25, chữ phụ >=28px. Xuất 9 file v02. Đo tọa độ y 9:16 chính xác (logo 280-352, tiêu đề 488-708, hotline 1134-1210, CTA đáy 1230, dưới 1230 trống hoàn toàn, lề 70px). Đã mở kiểm tra trực quan 100% & 25% cả 9 file, status READY.
