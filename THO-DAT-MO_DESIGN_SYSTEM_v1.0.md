# THỢ ĐẤT MỎ --- DESIGN SYSTEM

## Production Design System v1.0

**Purpose:** Quy chuẩn thực thi để biến Brand Guideline + AI Design
Skill thành các layout, component và asset có thể tái sử dụng.

------------------------------------------------------------------------

# 1. SYSTEM OVERVIEW

THỢ ĐẤT MỎ vận hành theo 3 tầng:

``` text
BRAND GUIDELINE
      ↓
AI DESIGN SKILL
      ↓
DESIGN SYSTEM
      ↓
ASSET / TEMPLATE / CAMPAIGN
```

-   **Brand Guideline:** thương hiệu là gì.
-   **AI Design Skill:** AI phải suy nghĩ thế nào.
-   **Design System:** AI/designer phải xây cụ thể ra sao.

Mục tiêu:

> **Một người làm một asset, nhưng toàn hệ thống phải trông như được làm
> bởi cùng một đội.**

------------------------------------------------------------------------

# 2. CORE TOKENS

## 2.1 Color tokens

``` yaml
brand:
  yellow: "#FFD200"
  black: "#080808"
  white: "#FFFFFF"
  gray: "#6B6B6B"
```

Semantic usage:

``` yaml
background:
  primary: black
  secondary: white
  accent: yellow

text:
  primary_on_light: black
  primary_on_dark: white
  secondary: gray

cta:
  primary: yellow
  primary_text: black
```

------------------------------------------------------------------------

# 3. TYPOGRAPHY TOKENS

## Display

Style:

> Ultra-bold condensed sans-serif

Use for:

-   Hero headlines
-   Campaign titles
-   Numbers
-   Service names
-   CTA emphasis

## Body

Style:

> Clean Vietnamese-supported sans-serif

Use for:

-   descriptions
-   details
-   metadata
-   UI
-   long-form copy

## Recommended hierarchy

``` text
Display XL — campaign / hero
Display L  — primary headline
Display M  — section headline
Display S  — card headline
Body L     — important supporting copy
Body M     — standard text
Body S     — metadata
```

## Rules

-   Maximum 2 font families.
-   Minimum practical body size must be preserved for the target
    platform.
-   Never use condensed display font for long paragraphs.
-   Never use thin text over photography unless contrast is excellent.

------------------------------------------------------------------------

# 4. SPACING SYSTEM

Use a consistent spacing rhythm.

Base unit:

> **8 px**

Recommended:

``` text
8
16
24
32
40
48
64
80
96
128
```

Do not randomly space every element.

Use whitespace to establish hierarchy.

------------------------------------------------------------------------

# 5. CORNER / SHAPE LANGUAGE

Default:

> Bold geometric shapes + controlled rounding.

Preferred:

-   rounded rectangles
-   hard-edged blocks
-   angled industrial cuts
-   badges
-   labels

Avoid:

-   excessive pills
-   ornate frames
-   decorative blobs
-   random organic shapes

Yellow blocks may use subtle rounding, but the system should remain
industrial rather than playful.

------------------------------------------------------------------------

# 6. SHADOW / EFFECT SYSTEM

Default:

> **No heavy effects.**

Prefer:

-   flat color
-   subtle depth
-   strong contrast
-   overlap
-   borders when necessary

Avoid:

-   glow
-   neon
-   bevel
-   chrome
-   glassmorphism
-   excessive drop shadows
-   fake 3D logo treatments

------------------------------------------------------------------------

# 7. GRID SYSTEM

## Social

Use a clear margin and content-safe zone.

### 1:1

Recommended conceptual grid:

``` text
┌────────────────────┐
│ margin             │
│   HEADLINE         │
│                    │
│     VISUAL         │
│                    │
│  SUPPORT   CTA     │
│             LOGO   │
└────────────────────┘
```

### 4:5

Use for Facebook/Instagram feed.

Give more vertical space to:

-   problem
-   visual
-   CTA

### 9:16

Use for:

-   Stories
-   Reels
-   vertical ads

Keep critical text away from top/bottom UI zones.

------------------------------------------------------------------------

# 8. LAYOUT LIBRARY

## L01 --- PROBLEM / SOLUTION

Best for:

-   urgent service ads
-   repair services
-   lead generation

Structure:

``` text
PROBLEM
↓
VISUAL OF PROBLEM
↓
SOLUTION
↓
CTA
↓
BRAND
```

Example:

> ĐIỀU HÒA KHÔNG MÁT?

> Có thợ xử lý.

> **GỌI THỢ**

------------------------------------------------------------------------

## L02 --- SERVICE HERO

Best for:

-   service introduction
-   website
-   social

Structure:

``` text
SERVICE NAME
short benefit

large service image

3 supporting points

CTA
```

------------------------------------------------------------------------

## L03 --- BEFORE / AFTER

Best for:

-   repair proof
-   case studies

Structure:

``` text
TRƯỚC       →       SAU

problem             result

short explanation

THỢ ĐẤT MỎ
```

Use real photographs whenever possible.

------------------------------------------------------------------------

## L04 --- CASE STUDY

``` text
CASE THỰC TẾ

[PHOTO]

VẤN ĐỀ
...

XỬ LÝ
...

KẾT QUẢ
...

CTA
```

------------------------------------------------------------------------

## L05 --- SERVICE GRID

Use for:

-   website
-   cover
-   service menu

``` text
┌────────┬────────┐
│ ĐIỆN   │ NƯỚC   │
├────────┼────────┤
│ Đ.LẠNH │ CAMERA │
├────────┼────────┤
│ WI-FI  │ PC     │
└────────┴────────┘
```

Each tile uses one icon.

------------------------------------------------------------------------

## L06 --- TESTIMONIAL

``` text
“Khách hàng nói gì?”

[quote]

Tên / khu vực nếu được phép

BADGE
```

Keep the quote short.

Never invent testimonials.

------------------------------------------------------------------------

## L07 --- PRICE / OFFER

``` text
DỊCH VỤ

GIÁ / ƯU ĐÃI LỚN

Điều kiện ngắn

CTA
```

Price must be supplied by the user/business.

Never fabricate price.

------------------------------------------------------------------------

## L08 --- EDUCATIONAL

``` text
CÓ NÊN...?

01
short answer

02
short answer

03
short answer

THỢ ĐẤT MỎ
```

Use bold numbers and concise copy.

------------------------------------------------------------------------

## L09 --- LOCAL SERVICE

``` text
CẨM PHẢ

CẦN THỢ?

[REAL LOCAL IMAGE]

Điện • Nước • Điều hòa • Camera...

GỌI THỢ
```

------------------------------------------------------------------------

## L10 --- PROMOTION

Use sparingly.

``` text
ƯU ĐÃI

[OFFER]

[DATE / CONDITION]

GỌI NGAY
```

Promotion must not overwhelm the brand.

------------------------------------------------------------------------

# 9. COMPONENT LIBRARY

## C01 --- Brand Header

Contains:

-   logo
-   optional descriptor
-   optional CTA

Never overcrowd.

------------------------------------------------------------------------

## C02 --- CTA Button

Primary:

> **GỌI THỢ**

Secondary:

> **NHẬN TƯ VẤN**

Use black text on yellow for primary CTA whenever contrast and context
allow.

------------------------------------------------------------------------

## C03 --- Service Card

``` text
[ICON]

ĐIỆN

Mô tả ngắn

XEM DỊCH VỤ →
```

Do not put paragraphs inside cards.

------------------------------------------------------------------------

## C04 --- Trust Strip

Possible content:

-   Báo giá rõ
-   Có thợ địa phương
-   Hỗ trợ tận nơi
-   Bảo hành theo hạng mục

Only use claims the business can actually fulfill.

------------------------------------------------------------------------

## C05 --- Local Badge

Example:

> CẨM PHẢ

or

> QUẢNG NINH

Use as contextual information, not as a second logo.

------------------------------------------------------------------------

## C06 --- Service Tag

Examples:

> ĐIỆN

> NƯỚC

> CAMERA

> ĐIỀU HÒA

Use uppercase when space permits.

------------------------------------------------------------------------

## C07 --- Number Block

Use for:

-   process
-   tips
-   statistics
-   steps

Large black or yellow number.

------------------------------------------------------------------------

## C08 --- Contact Block

``` text
CẦN THỢ?

[PHONE]

[CTA]

THỢ ĐẤT MỎ
```

Keep extremely simple.

------------------------------------------------------------------------

# 10. SERVICE VISUAL LIBRARY

## Điện

Visual cues:

-   technician
-   wiring
-   breaker
-   socket
-   electrical cabinet
-   tools

Color accent: yellow/black.

Avoid dangerous or visibly incorrect wiring demonstrations.

------------------------------------------------------------------------

## Nước

Visual cues:

-   pipe
-   faucet
-   valve
-   leak
-   pump
-   technician hands

------------------------------------------------------------------------

## Điện lạnh

Visual cues:

-   split AC
-   filter
-   outdoor unit
-   gauges
-   cleaning
-   technician inspection

Avoid impossible equipment configurations.

------------------------------------------------------------------------

## Máy tính

Visual cues:

-   laptop
-   desktop
-   router
-   diagnostics
-   cable management
-   repair bench

------------------------------------------------------------------------

## Camera

Visual cues:

-   CCTV camera
-   installation
-   cable
-   monitoring screen
-   mounting

Avoid implying surveillance of private people without context.

------------------------------------------------------------------------

## Wi-Fi / mạng

Visual cues:

-   router
-   access point
-   ethernet
-   signal
-   network cabinet

------------------------------------------------------------------------

## Solar

Visual cues:

-   rooftop panels
-   inverter
-   technician
-   wiring
-   sunlight

Do not make technical performance claims without supplied evidence.

------------------------------------------------------------------------

## Bảo trì

Visual cues:

-   inspection
-   cleaning
-   checklist
-   tools
-   technician

------------------------------------------------------------------------

# 11. PHOTOGRAPHY TEMPLATE

Every photo brief should specify:

``` yaml
subject:
environment:
action:
camera_angle:
lighting:
composition:
brand_role:
```

Example:

``` yaml
subject: technician cleaning split AC
environment: Vietnamese home in Cẩm Phả
action: actual maintenance
camera_angle: medium close-up
lighting: natural daylight
composition: technician on right, negative space on left
brand_role: trustworthy technical service
```

------------------------------------------------------------------------

# 12. IMAGE COMPOSITION RULES

## Rule A

Leave intentional negative space for text.

## Rule B

Technician should be doing something, not merely posing.

## Rule C

Show tools when they help prove expertise.

## Rule D

Use environment to establish locality.

## Rule E

Avoid over-polished advertising photography.

Preferred feeling:

> documentary commercial realism.

------------------------------------------------------------------------

# 13. SOCIAL TEMPLATE SYSTEM

## Template S01 --- Urgent problem

``` text
[BLACK / YELLOW]

ĐIỀU HÒA
KHÔNG MÁT?

[PHOTO]

THỢ XỬ LÝ TẠI CẨM PHẢ

[GỌI THỢ]

BADGE
```

------------------------------------------------------------------------

## Template S02 --- Service introduction

``` text
ĐIỆN

Lắp đặt • Sửa chữa • Kiểm tra

[PHOTO]

GỌI THỢ

THỢ ĐẤT MỎ
```

------------------------------------------------------------------------

## Template S03 --- Real case

``` text
CASE THỰC TẾ

[BEFORE] [AFTER]

Vấn đề:
...

Đã xử lý:
...

[GỌI THỢ]
```

------------------------------------------------------------------------

## Template S04 --- Tip

``` text
03 DẤU HIỆU
ĐIỀU HÒA CẦN VỆ SINH

01 ...
02 ...
03 ...

THỢ ĐẤT MỎ
```

------------------------------------------------------------------------

## Template S05 --- Testimonial

``` text
KHÁCH HÀNG NÓI

“...”

CẨM PHẢ

BADGE
```

------------------------------------------------------------------------

# 14. AD TEMPLATE SYSTEM

## A01 --- Emergency lead ad

Headline:

> \[PROBLEM\]?

Visual:

> Real service situation

Proof:

> \[real service benefit\]

CTA:

> **GỌI THỢ**

------------------------------------------------------------------------

## A02 --- Local lead ad

Headline:

> CẦN THỢ TẠI CẨM PHẢ?

Support:

> Điện • Nước • Điều hòa • Camera • Wi-Fi...

CTA:

> **GỌI THỢ**

------------------------------------------------------------------------

## A03 --- Service-specific

Headline:

> \[SERVICE\]

Support:

> \[specific customer benefit\]

Visual:

> real technician

CTA:

> **NHẬN TƯ VẤN**

------------------------------------------------------------------------

# 15. WEBSITE COMPONENT SYSTEM

## Hero

Required:

-   short headline
-   one supporting line
-   primary CTA
-   real/local visual

## Service section

Use service cards.

## Trust section

Use real proof.

## Process

Default:

``` text
01 GỌI / NHẮN
↓
02 MÔ TẢ VIỆC
↓
03 KẾT NỐI THỢ
↓
04 XỬ LÝ
```

Only claim operational steps that actually exist.

## Final CTA

Large, simple:

> **CẦN THỢ?**

> **GỌI THỢ ĐẤT MỎ**

------------------------------------------------------------------------

# 16. COVER SYSTEM

Facebook/Zalo cover should communicate:

``` text
THỢ ĐẤT MỎ

Việc kỹ thuật, có Thợ Đất Mỏ.

Điện • Nước • Điều hòa • Camera • Wi-Fi • Máy tính

CẨM PHẢ • QUẢNG NINH
```

Optional:

> Hotline

Do not use every available service if it makes the cover unreadable.

------------------------------------------------------------------------

# 17. AVATAR SYSTEM

Preferred:

> THỢ / ĐẤT MỎ badge

Rules:

-   high contrast
-   centered
-   no tiny tagline
-   no long descriptor
-   works at small size

------------------------------------------------------------------------

# 18. BUSINESS DOCUMENT SYSTEM

## Quote

``` text
THỢ ĐẤT MỎ
BÁO GIÁ DỊCH VỤ

Khách hàng:
Hạng mục:
Mô tả:
Chi phí:
Thời gian:
Bảo hành:

Tổng:
```

## Job completion

``` text
THỢ ĐẤT MỎ
PHIẾU BÀN GIAO

Mã đơn:
Hạng mục:
Ngày:
Kết quả:
Ghi chú:
Bảo hành:
```

Use clean typography and yellow header accents.

------------------------------------------------------------------------

# 19. WARRANTY SYSTEM

Warranty sticker:

``` text
THỢ ĐẤT MỎ

MÃ ĐƠN
DM-XXXX

HOÀN THÀNH
DD/MM/YYYY

BẢO HÀNH
X THÁNG

HOTLINE
XXXXXXXX
```

Only use actual warranty periods.

------------------------------------------------------------------------

# 20. UNIFORM SYSTEM

## Front

Preferred:

> Badge at chest.

Optional:

> THỢ ĐẤT MỎ wordmark.

## Back

Large:

> THỢ ĐẤT MỎ

Secondary:

> DỊCH VỤ KỸ THUẬT

Optional service line:

> ĐIỆN • NƯỚC • ĐIỀU HÒA • CAMERA

Do not overload with icons.

------------------------------------------------------------------------

# 21. VEHICLE SYSTEM

Minimum readable hierarchy:

``` text
THỢ ĐẤT MỎ

DỊCH VỤ KỸ THUẬT

ĐIỆN • NƯỚC • ĐIỀU HÒA • CAMERA

HOTLINE
```

Use large type.

No tiny website URL unless there is enough space.

------------------------------------------------------------------------

# 22. SIGNAGE SYSTEM

Primary:

> THỢ ĐẤT MỎ

Secondary:

> DỊCH VỤ KỸ THUẬT

Optional:

> Điện • Nước • Điều hòa • Camera • Wi-Fi

Contrast must remain strong from street distance.

------------------------------------------------------------------------

# 23. ICON GRID

All icons should share:

-   same optical size
-   same visual weight
-   same corner language
-   same perspective
-   same fill/line treatment

Do not mix:

``` text
line camera
+
3D wrench
+
emoji lightning
```

------------------------------------------------------------------------

# 24. RESPONSIVE SYSTEM

## Desktop

More whitespace.

Larger imagery.

Multi-column layouts.

## Tablet

Reduce columns.

Maintain hierarchy.

## Mobile

Prioritize:

1.  headline
2.  visual
3.  CTA
4.  essential information
5.  brand

Never shrink desktop layout until unreadable.

------------------------------------------------------------------------

# 25. ACCESSIBILITY / LEGIBILITY

Minimum principles:

-   high contrast
-   adequate font size
-   avoid text over busy images
-   do not rely on color alone
-   CTA clearly distinguishable
-   Vietnamese characters must render correctly

------------------------------------------------------------------------

# 26. EXPORT SYSTEM

## Digital

Prefer:

-   PNG for graphics/transparency
-   JPG/WebP for photos
-   SVG for vector where supported

## Print

Master artwork should be vector where possible.

Use CMYK production files when required by printer.

## Logo master

Keep:

-   SVG
-   PDF
-   PNG transparent
-   monochrome
-   reverse

------------------------------------------------------------------------

# 27. FILE NAMING

Use:

``` text
THO-DAT-MO_[ASSET]_[PLATFORM]_[SIZE]_v01
```

Examples:

``` text
THO-DAT-MO_AD_DIEU-HOA_FB_4x5_v01
THO-DAT-MO_COVER_FACEBOOK_v01
THO-DAT-MO_AVATAR_BADGE_v01
THO-DAT-MO_STICKER_BAOHANH_v01
```

Do not use:

``` text
final-final-new-2.png
```

------------------------------------------------------------------------

# 28. TEMPLATE NAMING

``` text
L01_PROBLEM_SOLUTION
L02_SERVICE_HERO
L03_BEFORE_AFTER
L04_CASE_STUDY
L05_SERVICE_GRID
L06_TESTIMONIAL
L07_PRICE_OFFER
L08_EDUCATIONAL
L09_LOCAL_SERVICE
L10_PROMOTION
```

This allows an AI or designer to say:

> "Use L03 for this case."

and immediately understand the intended structure.

------------------------------------------------------------------------

# 29. CAMPAIGN SYSTEM

Every campaign gets:

``` yaml
campaign_name:
objective:
audience:
service:
offer:
message:
visual_direction:
cta:
duration:
platforms:
```

Campaigns may change:

-   headline
-   photo
-   offer
-   layout emphasis

but retain:

-   brand colors
-   logo system
-   typography DNA
-   visual tone

------------------------------------------------------------------------

# 30. DESIGN VARIATION RULE

Variation should happen through:

-   photography
-   crop
-   composition
-   headline
-   yellow/black balance
-   graphic geometry
-   CTA placement

Not through:

-   new logo
-   new palette
-   random font
-   unrelated illustration style

------------------------------------------------------------------------

# 31. COMPONENT REUSE RULE

If a component already exists, reuse it.

Do not redesign:

> CTA button

ten different ways.

Do not redesign:

> service card

for every campaign.

Consistency compounds brand recognition.

------------------------------------------------------------------------

# 32. CONTENT DENSITY

Default:

> **Less information, stronger hierarchy.**

If a design feels crowded:

1.  remove secondary copy
2.  shorten headline
3.  simplify icons
4.  increase whitespace
5.  enlarge the primary message

Do not solve crowding by shrinking everything.

------------------------------------------------------------------------

# 33. AI ASSET SELECTION RULE

When approved assets are available:

> **Use existing asset \> generate replacement**

For example:

-   approved logo → use it
-   approved icon → use it
-   real technician photo → prefer it
-   existing template → adapt it

AI generation should fill gaps, not continuously replace the library.

------------------------------------------------------------------------

# 34. AI MOCKUP RULE

Mockups should show believable deployment:

-   shirt worn by technician
-   decal on realistic local vehicle
-   sign on plausible storefront
-   warranty sticker on actual equipment
-   website on a realistic phone

Avoid impossible perspectives and fake environments.

------------------------------------------------------------------------

# 35. PROOF SYSTEM

Trust should be demonstrated visually.

Preferred proof:

-   real job photo
-   before/after
-   customer feedback
-   completed job
-   technician identity
-   service process
-   warranty documentation

Avoid invented awards, badges or statistics.

------------------------------------------------------------------------

# 36. DESIGN REVIEW BOARD

Before approving a new component, test:

``` text
Does it look like THỢ ĐẤT MỎ?
Can it be reused?
Can it scale?
Can it print?
Can it work on mobile?
Does it improve understanding?
Does it improve conversion?
```

If not, simplify.

------------------------------------------------------------------------

# 37. MASTER COMPONENT PRIORITY

When time is limited, build in this order:

``` text
01 Logo
02 Avatar
03 Cover
04 CTA
05 Service Card
06 Social Post
07 Ad
08 Case Study
09 Testimonial
10 Quote
11 Warranty
12 Uniform
13 Vehicle
14 Signage
```

------------------------------------------------------------------------

# 38. MVP DESIGN SYSTEM

Before spending time on advanced brand assets, the minimum usable kit
is:

``` text
✓ Primary logo
✓ Badge
✓ Black/yellow/white palette
✓ Typography
✓ 8 service icons
✓ Facebook avatar
✓ Facebook cover
✓ 5 social templates
✓ 3 ad templates
✓ Basic website components
✓ Quote template
✓ Warranty template
```

Everything else can be layered on later.

------------------------------------------------------------------------

# 39. DESIGN SYSTEM GOLDEN RULE

> **Build once. Reuse many times.**

The goal is not to create 100 beautiful designs.

The goal is to create:

> **10 strong components that can produce 1,000 consistent designs.**

------------------------------------------------------------------------

# 40. FINAL SYSTEM COMMAND

``` text
When designing for THỢ ĐẤT MỎ:

1. Identify the business objective.
2. Select the correct design mode.
3. Select the correct layout from the library.
4. Use existing approved assets whenever available.
5. Apply the core tokens.
6. Create one dominant message.
7. Build hierarchy before decoration.
8. Use real/local visual context.
9. Keep CTA obvious.
10. Run brand + legibility + business QA.
11. Simplify anything unnecessary.
12. Deliver a reusable system, not a one-off artwork.
```

------------------------------------------------------------------------

# 41. NORTH STAR

> **THỢ ĐẤT MỎ**
>
> **THỰC TẾ • TIN CẬY • ĐỊA PHƯƠNG • CÓ NGHỀ**
>
> **Việc kỹ thuật, có Thợ Đất Mỏ.**
>
> **BLACK + MINING YELLOW**
>
> **REAL WORK. REAL PEOPLE. REAL LOCAL SERVICE.**

------------------------------------------------------------------------

# END OF DESIGN SYSTEM

**Version 1.0**
