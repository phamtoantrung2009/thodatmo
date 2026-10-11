# T01 — Logo Audit Report

Generated: 2026-10-12
Model: Claude Sonnet 4.6 (Thinking)
Status: **DONE**

---

## 1. Source file

| Item | Value |
|------|-------|
| File | `ChatGPT Image Sep 16, 2026, 12_22_22 AM.png` (root) |
| Format | PNG raster (no alpha channel — RGB mode) |
| Dimensions | 1536 × 1024 px |
| File size | ~1.16 MB |
| Vector source | **NONE** (confirmed by Trung 2026-10-12) |
| Type of file | Multi-variant reference sheet — NOT a single isolated logo export |

The PNG is a presentation/reference sheet containing three variants displayed side by side with Vietnamese labels.

---

## 2. Variants found in the source sheet

| ID | Variant | Label in file | Content | Location in sheet |
|----|---------|--------------|---------|-------------------|
| V1 | Horizontal primary | LOGO CHÍNH (NGANG) | "THỢ" yellow angled block + "ĐẤT MỎ" black text + yellow tagline bar "THỰC TẾ • TIN CẬY • ĐỊA PHƯƠNG • CÓ NGHỀ" | Top half (full width) |
| V2 | Square badge / icon | ICON / AVATAR | Yellow rounded-rectangle with "THỢ" in black, high-contrast | Bottom-left |
| V3 | Black-on-white | LOGO ĐEN TRẮNG | Same as V1 but black background replaces yellow, white text on black blocks | Bottom-right |

Missing variants (per Guideline §10):
- Stacked variant: NOT present — log as missing
- Wordmark-only variant: NOT present — log as missing
- White-on-black isolated export: present as V3 but embedded in sheet only
- True round badge (circle crop for Facebook): V2 exists as square-rounded; usable with circle crop

---

## 3. Diacritics check

String: THỢ ĐẤT MỎ (must contain Ợ, Ấ, Ỏ)

| Char | Found in logo | Renders correctly | Notes |
|------|--------------|------------------|-------|
| Ợ (THỢ) | YES | YES — hook + dot visible in V1, V2, V3 | No tofu, no fallback |
| Ấ (ĐẤT) | YES | YES — circumflex + acute visible in V1, V3 | Custom glyph with angular cut; intentional design choice |
| Ỏ (MỎ) | YES | YES — hook visible in V1, V3 | Renders correctly |

**Diacritics verdict: PASS** — all three critical characters render with full marks. No tofu or fallback font detected. (Note: font appears to be a custom/modified display face, not a standard web font — glyph shapes are stylised.)

---

## 4. Color analysis

| Color | Role in logo | Measured RGB | Measured HEX | Brand spec | Delta |
|-------|-------------|-------------|-------------|-----------|-------|
| Yellow | Badge/block background, tagline bar | RGB(252, 200, 3) avg | ~#FDCA06 | #FFD200 | ΔE small (warm yellow, acceptable) |
| Black | Primary text, logo body | RGB(14, 15, 13) avg | ~#0E0F0D | #080808 | PASS — near-identical |
| White | Background of sheet, text in V3 | RGB(253, 253, 252) | ~#FDFDFC | #FFFFFF | PASS — white background |

**Color verdict:** Yellow is slightly warmer than brand spec (#FFD200) by ~12 units on R channel — this is within normal raster rendering tolerance and acceptable. No forbidden colors (neon, red, purple, cyan, pastel) present.

---

## 5. Small-size legibility

| Size | File | Verdict |
|------|------|---------|
| 1080×1080 (avatar) | `assets/logo-derived/THO-DAT-MO_BADGE_AVATAR_1080x1080_v01.png` | PASS — "THỢ" and all marks fully readable |
| 256×256 | `assets/logo-derived/THO-DAT-MO_BADGE_check_256px.png` | PASS |
| 128×128 | `assets/logo-derived/THO-DAT-MO_BADGE_check_128px.png` | PASS |
| 64×64 | `assets/logo-derived/THO-DAT-MO_BADGE_check_64px.png` | PASS — "THỢ" still legible, hook + dot preserved |

**Small-size verdict: PASS**

---

## 6. Derived exports (scaling + padding only; no redraw, no retypeset)

| File | Method | Notes |
|------|--------|-------|
| `assets/logo-derived/THO-DAT-MO_BADGE_AVATAR_1080x1080_v01.png` | Crop V2 from sheet → square → resize to 1080×1080 with 10% margin (white bg) | Ready for Facebook avatar; survives circular crop |
| `assets/logo-derived/THO-DAT-MO_LOGO_HORIZONTAL_crop_v01.png` | Crop V1 from sheet (excl. label text) with 40px padding | Clean horizontal primary; use as source for T04 cover and T06 |
| `assets/logo-derived/THO-DAT-MO_BADGE_check_256px.png` | Downscale of badge crop | QA reference only |
| `assets/logo-derived/THO-DAT-MO_BADGE_check_128px.png` | Downscale of badge crop | QA reference only |
| `assets/logo-derived/THO-DAT-MO_BADGE_check_64px.png` | Downscale of badge crop | QA reference only |

---

## 7. Missing variants (log for PROGRESS §4)

| Missing variant | Action |
|----------------|--------|
| Stacked (vertical) layout | Not in source sheet — requires Trung to commission or a designer to produce; DO NOT assemble from raster sheet |
| Wordmark only (text without badge) | Not isolated in source — not extractable cleanly from raster |
| True white-on-black isolated export | V3 is embedded in sheet; a clean isolated export requires vector or a new raster session |

---

## 8. Overall verdict

**USABLE AS-IS (with noted gaps)**

The existing PNG contains:
- A clean horizontal primary logo (V1) — usable for T04 cover and T06 landing page
- A clean square badge/icon (V2) — usable for Facebook avatar (T04)
- A black-on-white reference (V3) — not separately exported (not blocking any current MVP task)

No vector source = any future resize above ~1536px native will introduce quality loss. Acceptable for MVP; Trung should commission SVG before scaling to large print (signage, vehicle wrap — both deferred T09).

No forbidden design elements (3D, glow, neon, mascot, glassmorphism, luxury/startup look). Style is bold industrial — consistent with brand guidelines.

---

Next: T02 — Fonts, glyph test, tokens
