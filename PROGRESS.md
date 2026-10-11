# PROGRESS — THỢ ĐẤT MỎ (handoff file)

Rules for this file are in `AGENTS.md` §1. Update it BEFORE starting a step and AFTER every finished file.
Keep §0 under 15 lines. Specs for each task are in `AGENTS.md` §7.

---

## 0. RESUME HERE

- Last updated: 2026-10-12 · by: Gemini Flash
- Last model: Gemini Flash
- CURRENT TASK: T06a Landing page: structure + hero + call bar
- STATUS: not started
- NEXT ACTION: Build site/index.html (HTML5 semantic, tokens, Hero focused on Dien lanh, sticky mobile bottom call bar 0888 942 247, responsive 360/390/430px check) → tick §1.
- Files in progress: none
- Do not redo: T00, T01, T02, T07, T04, T05a, T08, T05b, T05c, T05d (done)
- Blockers: none

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
- [ ] T06a Landing page: structure + hero + call bar (optional for first ad test)
- [ ] T06b Landing page: remaining sections + QA
- [ ] MVP QA pass and report to Trung
- T03 icons: just-in-time inside T05/T06, no standalone task
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

---

## 3. FACTS AND CLAIMS FROM TRUNG

Confirmed inputs:
- Hotline: 0888 942 247 · Domain: datmo.io.vn · Market: Cẩm Phả, Quảng Ninh
- Role: coordinator who dispatches jobs to technician friends (not "our own team")

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

## 4. QUESTIONS FOR TRUNG (batched; keep working with placeholders)

- Q1 Zalo: will it use the same number? Send the link when ready.
- Q2 Service area and working hours for Điện lạnh?
- Q3 Do you commit to giving the quote before the technician starts?
- Q4 Warranty period for Điện lạnh jobs (if any)?
- Q5 Any starting price or offer you want in ads (e.g. check-up fee)?
- Q6 Who shoots the real photos, and when? See `copy/photo-shotlist.md` after T05a.
- Q7 (T00) Does a vector logo source (.svg/.ai/.eps/.pdf) exist anywhere? If yes, send it before T01. → **ANSWERED: No vector source exists (2026-10-12)**
- Q8 (T01) Missing variants: stacked layout and wordmark-only do not exist in the source sheet. Does Trung have these, or should they be commissioned? → **ANSWERED: defer (2026-10-12)**

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

---

## 6. SESSION LOG (rolling: keep the latest 15 lines, merge older ones into one summary line)

- 2026-10-11 · Claude · Created AGENTS.md and PROGRESS.md. Reviewed the three guideline files and the brief; known defects are handled as overrides O1–O8 in AGENTS.md §5.
- 2026-10-12 · Claude Sonnet 4.6 · T00 done. Scaffold created (11 dirs). Logo L1 identified (PNG only, no vector). reports/00-inventory.md written. PROGRESS.md updated. → NEXT: T01.
- 2026-10-12 · Claude Sonnet 4.6 · T01 done. Logo sheet analyzed: 3 variants found (horizontal primary V1, square badge V2, black-on-white V3). Diacritics PASS. Colors PASS. 5 derived PNGs exported to assets/logo-derived/. Missing: stacked + wordmark variants (logged Q8). → NEXT: T02.
- 2026-10-12 · Gemini Flash · T02 done. Self-hosted woff2 downloaded. Glyph test rendered to reports/02-glyph-test.png (Oswald 700 selected for display, Be Vietnam Pro for body). assets/tokens.css & tokens.json created. → NEXT: T07.
- 2026-10-12 · Gemini Flash · T07 done. ops/leads.csv, ops/ad-tracker.csv, ops/README.md (unit economics formulas) created. Business documents (báo giá, bàn giao, tem bảo hành) created in HTML + exported to PDF & preview PNG. → NEXT: T04.
- 2026-10-12 · Gemini Flash · T04 done. Avatar exported to 1080x1080 (verified circular crop & 40px display). Facebook covers created in 2 options (black & yellow bg), mobile safe zone 1200px verified. → NEXT: T05a.
- 2026-10-12 · Gemini Flash · T05a done. copy/photo-shotlist.md (7 real shots for AC technicians) and copy/dien-lanh-copy-bank.md (10 headlines, 5 primary texts) completed. → NEXT: T08.
- 2026-10-12 · Gemini Flash · T08 done. copy/facebook-about.md, copy/gbp.md, copy/transition-posts.md (6 posts with photo briefs) completed within platform limits. → NEXT: T05b.
- 2026-10-12 · Gemini Flash · T05b done. Điện lạnh ad concept 1 (Problem angle: Điều hòa không mát? Gọi thợ) created in 3 ratios (1:1, 4:5, 9:16). Photo slot CSS-driven. Preview PNGs exported. → NEXT: T05c.
- 2026-10-12 · Gemini Flash · T05c done. Điện lạnh ad concept 2 (Local trust angle: Sửa điều hòa tận nhà tại Cẩm Phả) created in 3 ratios (1:1, 4:5, 9:16). Photo slot CSS-driven. Preview PNGs exported. → NEXT: T05d.
- 2026-10-12 · Gemini Flash · T05d done. Điện lạnh ad concept 3 (Maintenance angle: Vệ sinh điều hòa sạch bụi tiết kiệm điện) created in 3 ratios (1:1, 4:5, 9:16). Photo slot CSS-driven. Preview PNGs exported. Full suite of 3 ad concepts (9 preview files) ready. → NEXT: T06a.
