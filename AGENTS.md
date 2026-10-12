# AGENTS.md — THỢ ĐẤT MỎ project

Read this file FIRST in every session (new chat, new account, new model).
Then read `PROGRESS.md` §0 and §1 only. Do not open anything else until you know your current task.

Owner: Trung. He writes casual Vietnamese ("tao/mày"). Talk to him in Vietnamese: short, blunt, no filler, no performative apology, no narrating your reasoning. Deliver files, then report in 1–3 lines.

---

## 1. HANDOFF PROTOCOL (most important rule)

Trung uses free accounts. Quota can die at any moment and he will switch account or model mid-task.
**The only memory that survives is the files in this folder. Chat history is lost.**

1. **Write-ahead.** Before starting any task or sub-step, update `PROGRESS.md` §0 (CURRENT TASK, STATUS=in progress, NEXT ACTION).
2. **Save after every file, not at the end of a task.** After each finished file or sub-step: tick §1, rewrite NEXT ACTION so a stranger could continue from it with zero context (exact file path + exact next step).
3. Never keep state only in chat. Decisions go to §2, facts from Trung go to §3, open questions go to §4, files go to §5.
4. **On resume**, `ls` the files named in §0. A file that is missing, 0 bytes, truncated, missing closing tags, or newer than the last log line is INCOMPLETE: redo only that file and log it. Do not redo finished work.
5. When Trung says `tiếp tục` / `continue` (or pastes the resume line): run the session-start protocol and keep going. Do not ask what to do. Do not re-summarize the project.
6. End of every task: tick §1, add a line to §5 (path, status, QA result), add ≤3 lines to §6. If git exists, commit `T## done`.
7. If you see rate-limit warnings, errors, or slowdowns: stop starting new work, finish or cleanly park the file in progress, write the exact NEXT ACTION in §0, then tell Trung: `Sắp hết quota — đã lưu. Đổi tài khoản rồi gõ: tiếp tục`.
8. Log the model you are running in §0 ("Last model") so differences between models can be spotted.

**Session-start protocol:** read AGENTS.md → read PROGRESS.md §0–§1 → verify the last touched files (rule 4) → continue NEXT ACTION.

---

## 2. Project in 6 lines

- THỢ ĐẤT MỎ is a local technical-service coordinator in Cẩm Phả, Quảng Ninh. Trung runs the ads and takes jobs, then dispatches them to friends who are technicians and earns commission/markup. He does not do the technical work himself.
- One brand, no sub-brands. Services: **Sửa chữa** (điện, nước, điện lạnh, máy tính), **Lắp đặt** (camera, Wi-Fi/mạng, điện mặt trời), **Bảo trì** (điều hòa, camera, điện/nước).
- Ad test order: Điện lạnh → Camera → Điện nước → Máy tính → Solar. **Start with Điện lạnh only.**
- An existing Facebook page (~568 followers, has ad history) is being rebranded to "Thợ Đất Mỏ". Do not propose a new page. Old ads still running under the old page carry ANOTHER person's phone number; nothing you create may ever contain it.
- Domain `datmo.io.vn`. Hotline `0888 942 247` (purchased). Zalo: not created yet.
- Budget is minimal. Speed to the first paying customer beats polish. Build the MVP kit in §7 and nothing else until Trung says revenue exists.

---

## 3. Source files and reading tiers

**Tier 1 (every session):** this file + `PROGRESS.md` §0–§1.

**Tier 2 (on demand, by section, using grep on headings — never load a whole file):**

| File | Use it for |
|---|---|
| `THO-DAT-MO_BRAND_MASTER_GUIDELINE_v1_0.md` | what the brand is; §32 QC checklist; §34–38 prompt add-ons |
| `THO-DAT-MO_DESIGN_SYSTEM_v1_0.md` | layouts L01–L10 (§8), components (§9), social/ad templates (§13–14), website (§15), cover/avatar (§16–17), docs/warranty (§18–19), file naming (§27), MVP (§38) |
| `THO-DAT-MO_AI_DESIGN_SKILL_v1_0.md` | agent behaviour: engines §15–23, self-critique §25, QA §26 |
| `brand-brief-tho-dat-mo.md` | short brief, partly superseded (see §5 overrides) |

The three guideline files total ~4,200 lines. Reading them all burns the quota. This file already contains the digest you need for most work.

**Logo files** are somewhere in this folder. T00 locates them; record exact paths in `PROGRESS.md` §5.

---

## 4. Brand digest (always apply)

- **Name:** THỢ ĐẤT MỎ, always with full diacritics. Never: Thợ Mỏ, Đất Mỏ, Thợ Đất, DATMO, THO DAT MO.
- **Positioning:** local technical-service hub (đầu mối) that connects customers with local technicians.
- **Public lines:** Promise `Việc kỹ thuật, có Thợ Đất Mỏ.` · CTA line `Cần thợ? Gọi Thợ Đất Mỏ.` · optional descriptor `KỸ THUẬT TẬN NƠI • CẨM PHẢ • QUẢNG NINH`.
- **Internal values** (not a customer-facing claim): THỰC TẾ • TIN CẬY • ĐỊA PHƯƠNG • CÓ NGHỀ.
- **Palette (only these):** Mining Yellow `#FFD200` · Charcoal Black `#080808` · White `#FFFFFF` · Support Gray `#6B6B6B` (support only). Priority: black + yellow + white.
- **Forbidden:** neon, red, purple, cyan, pastel, rainbow gradient, glow, bevel, heavy shadow, 3D, glassmorphism, mascot, clipart, luxury/startup/futuristic look.
- **Type:** display = ultra-bold condensed sans (see override O1); body = Be Vietnam Pro. Max 2 families per layout. Never set long paragraphs in the display font.
- **Shape:** bold geometric blocks, controlled rounding, industrial angled cuts. Yellow blocks may use subtle rounding.
- **Photos:** real jobs, real technicians, real local places only.
- **Voice:** short, direct, action-first, benefit-first. Good: `Điều hòa không mát? Gọi thợ.` / `Cần lắp camera? Thợ Đất Mỏ xử lý.` Bad: corporate brochure language ("giải pháp đột phá", "hệ sinh thái", "đẳng cấp 5 sao").
- **Contact format:** display `0888 942 247` (grouped 4-3-3, never glued), link `tel:0888942247`. Domain `datmo.io.vn`. No other phone number anywhere.
- **Tone check:** the result must feel like "local technicians, real work, right here in the area", not "a pretty tech app".

---

## 5. OVERRIDES (win over the three guideline files and the brief)

The guideline files have known defects. Do not edit them. Follow this list instead.

- **O1 Fonts.** The guideline lists Bebas Neue first, but Bebas Neue as distributed on Google Fonts does not cover Vietnamese diacritics, and the brand name contains Ợ, Ấ, Ỏ. Use **Anton** or **Oswald 700** for display and **Be Vietnam Pro** for body. Decide in T02 by rendering the glyph test; any tofu box, fallback font or misplaced tone mark rejects that font. Self-host font files in `assets/fonts/` (all OFL).
- **O2 Tagline.** The guideline calls two different lines "tagline". Resolved: customer-facing = the Promise and the CTA line (§4). The values line is internal and may appear only as an optional lock-up or footer line.
- **O3 No false team claims.** The guideline's phrases "đội thợ thật" and "đội thợ địa phương có nghề" are an internal feeling test, not copy. Never write "đội thợ của chúng tôi", "nhân viên của chúng tôi", "công ty có X năm kinh nghiệm". Allowed: "thợ địa phương", "kết nối thợ", "có thợ tại khu vực".
- **O4 Hotline, '247' và các claim cần xác nhận.** Hotline is `0888 942 247`; it replaces `[PHONE]`, `XXXXXXXX` and "SIM mới" everywhere. The ending 247 must not be marketed as 24/7. Do not write "24/7", "trực 24h", "có mặt ngay", "30 phút", "miễn phí khảo sát", "bảo hành X tháng", "báo giá rõ trước khi làm", any price/offer, hoặc bất kỳ claim nào về phạm vi dịch vụ cụ thể (xịt rửa, vệ sinh dàn nóng, đo/nạp gas, kiểm tra điện), kết quả/lợi ích (tiết kiệm điện, chạy êm, mát sâu, sạch mốc), chương trình lặp lại ("định kỳ") và icon gợi bảo đảm (khiên/shield) trừ khi được liệt kê là CONFIRMED trong `PROGRESS.md` §3 (hoặc nằm trong bảng ALLOWED PHRASES). Mọi câu/claim khác đều cần Trung xác nhận. Unconfirmed claims may appear in drafts only as `[CONFIRM: …]` and never inside exported images.
- **O5 File names.** The master guideline is `THO-DAT-MO_BRAND_MASTER_GUIDELINE_v1_0.md`. The AI Skill's reference to `..._v1.0.md` and the guideline's §33 names (`BRAND-GUIDELINE.md` etc.) are wrong. Do not rename or move the originals; you may propose renames in `PROGRESS.md` §4.
- **O6 Folder layout.** Ignore guideline §33's tree. Use the layout in T00. File naming for outputs: `THO-DAT-MO_[ASSET]_[PLATFORM]_[SIZE]_v01` (Design System §27).
- **O7 Scope.** Brief §10 still rules: MVP first (Design System §38). Colors are now locked (the brief said "not fixed"). Uniform, vehicle, signage, extended icon sets, 10-folder brand kit and motion are deferred. Icons are drawn just-in-time (T03).
- **O8 Real photos only.** No real job photos exist yet. Layouts that depend on proof (L03 Before/After, L04 Case Study, L06 Testimonial, S03, S05) are blocked until Trung supplies real photos. Everywhere else, use clearly labelled photo placeholders (gray block with the label `ẢNH THẬT: <what to shoot>`).

---

## 6. HARD RULES (never)

1. Never modify, overwrite, rename, move or delete the original logo files, the three guideline files, or the brief. Derived files go in `assets/logo-derived/`.
2. Never redesign, recolor, crop, stretch, re-typeset or add effects to the logo. Report conflicts instead.
3. Never invent: prices, offers, discounts, warranty periods, response times, years of experience, customer counts, reviews, testimonials, certifications, addresses, Zalo links, phone numbers, team size, "uy tín số 1".
4. Never create fake "real" photos, fake before/after, fake technician portraits. AI imagery is allowed only as non-evidentiary decoration and must be labelled.
5. Never publish, deploy, post, email, log in to any account (Facebook, Google, Zalo, domain registrar), run ads, or spend money. Produce files; Trung publishes.
6. Never store passwords, tokens or customer data in this folder.
7. Never start deferred work (T09) unless Trung asks.
8. Never reuse any phone number other than `0888 942 247`.

---

## 7. TASKS (canonical specs; status lives in PROGRESS.md §1)

Execution order (not numeric): **T00 → T01 → T02 → T07 → T04 → T05a → T08 → T05b → T05c → T05d → T06a → T06b**. T03 icons are just-in-time (see T03). Do one at a time. Every task or lettered sub-task must be finishable inside one session; if one is not, split it further in `PROGRESS.md` §1 before starting.

**T00 Inventory and scaffold.**
List the folder tree (depth 3) → `reports/00-inventory.md` (every file, type, size; identify the logo files). Create missing dirs only: `reports/`, `assets/{fonts,icons,logo-derived,photos}/`, `src/`, `exports/`, `site/`, `ops/`, `copy/`. Move nothing. Done when the report exists and PROGRESS.md is updated.

**T01 Logo audit (no redesign).**
For each logo file record: format, pixel size or vector, transparency, colors vs the palette, whether Ợ/Ấ/Ỏ render correctly, and which required variants exist (Guideline §10: horizontal primary, round badge `THỢ / — / ĐẤT MỎ`, stacked, wordmark, black-on-white, white-on-black). Derived files go in `assets/logo-derived/` and may be made ONLY from an official variant that already exists in the folder (scaling and padding only, never crop, redraw or re-typeset). If an official badge exists: export a transparent PNG 1080×1080 with ≥10% margin. If it does NOT exist: do not assemble one from the primary logo; log it as a missing variant in `PROGRESS.md` §4 for Trung. Also run small-size checks at 64/128/256 px. Make mono versions only by lossless recolor of flat/vector art; otherwise report instead of faking. Write `reports/01-logo-audit.md` with a verdict (usable as-is / needs fixes) and the missing-variant list.

**T02 Fonts, glyph test, tokens.**
Download candidates (Anton, Oswald, Be Vietnam Pro) to `assets/fonts/`. Render the test string `THỢ ĐẤT MỎ — ẮẰẲẴẶ ỆỀỂỄ ỌỘỒỔỖ ƯỨỪỬỮỰ ĐỊA PHƯƠNG ĐIỆN NƯỚC ĐIỀU HÒA 0888 942 247` → `reports/02-glyph-test.png`. Pick the display font, log it in §2. Create `assets/tokens.css` and `assets/tokens.json` from Design System §2–§6 (colors, type scale, spacing, radius, minimal shadow). Every template must import these tokens.

**T03 Service icons (just-in-time, not a standalone phase).**
Draw only the icons that a current deliverable actually uses (e.g. Điện lạnh for T05, the service cards for T06). The rest of the set (Điện, Nước, Máy tính, Camera, Wi-Fi/mạng, Solar, Bảo trì) is drawn later, when a deliverable needs it. SVG, one grid, one stroke style, `currentColor` (Guideline §16, Design System §10 and §23). Check legibility at 24 px and 64 px. No contact sheet and no full set before revenue.

**T04 Facebook avatar and cover.**
Avatar: use the official badge asset from T01 (never redraw), 1080×1080 PNG, must survive circular crop and 40 px display. If no official badge exists, make a clearly named TEMP avatar: the unmodified primary logo or wordmark centered on a square black or yellow canvas (scaling and padding only, no crop), filename suffix `_TEMP`, and ask Trung in `PROGRESS.md` §4 for the badge source. Cover: content per Design System §16, export 1640×624 PNG, key content in the central safe zone (mobile crops the sides); include the hotline only if legibility holds. Deliver two options (black background, yellow background). Check current Facebook size guidance if you can browse. Sources in `src/`, exports in `exports/`.

**T05a Điện lạnh copy bank + photo shotlist (do this first; it unblocks Trung).**
Write `copy/photo-shotlist.md`: the exact real photos Trung's technicians must shoot for Điện lạnh (5–8 shots, with framing notes). This list is the real blocker for ads. Then write `copy/dien-lanh-copy-bank.md`: 10 headlines (≤7 words), 5 primary texts (≤3 short lines), tagged by angle (problem / local / maintenance). Apply override O4 strictly.

**T05b / T05c / T05d Điện lạnh ad concepts (one concept per sub-task).**
Each concept = 3 ratios (1:1 1080×1080, 4:5 1080×1350, 9:16 1080×1920). Use Design System A01/A03 with L01/L09. Keep critical text out of the top/bottom UI zones of 9:16. CTA: `GỌI THỢ` or `NHẬN TƯ VẤN`. Hotline in every ad. Photo slots are CSS-driven so re-export is one command when real photos land in `assets/photos/`. While any slot is a placeholder or any claim is unconfirmed, the file name ends in `_PREVIEW` and its status in `PROGRESS.md` §5 is PREVIEW, never READY.

**T06 Landing page `site/index.html` (OPTIONAL for the first ad test; ads can drive to call/Messenger/Zalo first).**
Split: T06a = structure, Hero, sticky call bar, tokens, mobile check; T06b = remaining sections, meta tags, QA. One self-contained file (inline CSS/JS, fonts via relative woff2), `lang="vi"`, mobile-first, tested at 360 / 390 / 430 px and desktop. Components from Design System §15: Hero, Services, Trust, Process, Final CTA. Hero focuses on Điện lạnh with `Cần thợ? Gọi Thợ Đất Mỏ.`; the other six services appear as simple cards. Trust section uses only verifiable content (how it works, local coverage). No invented numbers or reviews. Sticky mobile bottom bar: `GỌI 0888 942 247` (`tel:0888942247`) + a Zalo button that stays hidden until `[ZALO_LINK]` is set. A form is optional; if included, post to the placeholder `[FORM_ENDPOINT]` and fall back to tel/Zalo, never invent a backend. Leave `<!-- META_PIXEL_SLOT -->` and `<!-- GA_SLOT -->`, and add `data-event="call_click"` / `"zalo_click"` attributes for later tracking. Add title, description, OG tags (badge image), favicon from the badge. Budget: HTML+CSS+JS ≤150 KB excluding fonts/images. Verify with screenshots at three widths, WCAG AA contrast for body text, Lighthouse mobile if available.

**T07 Ops sheets and business documents.**
`ops/leads.csv` (id, date, source, service, customer, phone, area, status, quote_vnd, final_vnd, technician, tech_cost_vnd, other_cost_vnd, profit_vnd, notes), `ops/ad-tracker.csv` (date, campaign, service, spend_vnd, impressions, clicks, calls, leads, jobs_won, revenue_vnd, profit_vnd), and `ops/README.md` with the formulas: cost per lead, close rate, CAC per job, profit per job, net after ad spend, payout to technician. Documents per Design System §18–19: quote (báo giá), job completion (phiếu bàn giao), warranty sticker. Leave warranty period, prices and order codes as blanks/placeholders. Provide print-ready PDF plus HTML source.

**T08 Copy pack.**
`copy/facebook-about.md` (page name, short intro, about text; respect platform limits and verify them), `copy/gbp.md` (Google Business Profile: name, category suggestions, description, services; address/service area left as `[TRUNG TO FILL]`), and 6 transition posts for the rebranded page (Thợ Đất Mỏ là ai? / sửa điều hòa Cẩm Phả / lắp camera / sửa máy tính tại nhà / điện nước tại nhà / Wi-Fi và mạng), each with 3–5 lines of text plus the image brief of the real photo it needs. Wording must reflect coordination, not "our team" (O3).

**MVP build done when:** T00, T01, T02, T04, T05a–d, T06, T07, T08 are complete and QA'd. Ads are **READY TO RUN** only when real photos have replaced every placeholder and every claim used is CONFIRMED in `PROGRESS.md` §3; until then they are PREVIEW. Then stop and report. Trung publishes.

**T09 DEFERRED (do not start unless asked):** ad sets for other services, collaborator agreement draft, uniform/vehicle/signage, full brand kit folder, motion.

---

## 8. Work method

- **Autonomy.** Decide style, layout and typography yourself from the system. Ask only for missing facts that change the output (price, offer, claims, Zalo link, address). Put questions in `PROGRESS.md` §4 as a batch and keep going with placeholders.
- **Verify visually.** Render every export in a headless browser (Playwright/Chromium or equivalent), open the PNG, check it at 25% scale and at phone width, confirm Vietnamese diacritics and contrast. Use terminal, browser and file tools to their full extent; run independent subtasks in parallel if your environment supports it.
- **QA per deliverable.** Run Guideline §32 + AI Skill §26. Write a one-line result in `PROGRESS.md` §5. A failed check is fixed before moving on.
- **Reproducible exports.** Prefer a script (e.g. `scripts/export.mjs` or Python) over manual exports. Free/open-source tools only. Log every install.
- **Quota economy.** Grep headings instead of reading whole guideline files. Do not re-read files you just wrote. Edit in place instead of regenerating. One task at a time. Save often.
- **Language.** Anything customer-facing is Vietnamese with full diacritics. Reports to Trung are short Vietnamese. Code comments may be English.
- **Git (optional).** If git is installed and the folder is not a repo, `git init`; commit after each task. Never commit private data.
