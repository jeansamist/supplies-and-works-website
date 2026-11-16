# Supplies and Works — Art direction

> The visual rules of the brand, for social posts, decks, documents, ads and anything new.
> They match the website (suppliesandworks.com), so everything looks like one family.
> Companion file: `KNOWLEDGE.md` (what to say). This file is about how it looks.

---

## 1. The idea in one sentence

**Clean black and white editorial design, one bold yellow, and a proud African point of view.**
The site and posts should feel like a premium tech magazine, not a template: generous white space, big serif headlines, a single yellow accent used with intent, and real African people and places.

Three words: **Confident · Warm · Precise.**

---

## 2. Logo

| File | Use |
|---|---|
| `brand/logo-source.png` | Original logo (master) |
| `public/logo.png` | Transparent background, for **light** backgrounds |
| `public/logo-dark.png` | Same, with a white "AND", for **dark** backgrounds |
| `app/icon.png` / `app/apple-icon.png` | Favicon / app icon (logo on white) |

The logo is two stacked blocks: **SUPPLIES** in black on a yellow band, **WORKS** in yellow on a black block, and a small "AND" between them.

**Rules**
- Clear space around the logo: at least the height of the "AND" block on every side.
- Minimum width: 96 px on screen, 25 mm in print.
- On white or light grey: `logo.png`. On black or dark photos: `logo-dark.png`.
- On a **yellow** background: place the logo on a white rounded chip (radius 12 px, padding 6 px). Never put it directly on yellow, because the SUPPLIES band disappears.
- Never recolor, stretch, rotate, outline, add shadows, or rebuild it in another font.
- In posts, place it in a corner (top-left or bottom-left), small (8 to 12% of the post width).

---

## 3. Colour

The palette comes from a black and white editorial base plus the logo yellow.

### Core palette

| Name | Hex | Role |
|---|---|---|
| **Signal Yellow** | `#FCEE21` | The only accent. CTAs, highlights, key numbers, active states |
| **Ink** | `#0A0A0A` | Dark backgrounds, text on yellow |
| **Paper** | `#FFFFFF` | Light backgrounds |
| **Mist** | `#FAFAFA` | Soft light surfaces |
| **Cloud** | `#F4F4F5` | Cards and blocks on Mist |
| **Graphite** | `#121212` / `#1A1A1A` | Surfaces on dark backgrounds |
| **Bone** | `#EDEDED` | Text on dark backgrounds |
| **Muted (light)** | `#000000` at 60% → `#666666` | Secondary text on light |
| **Muted (dark)** | `#EDEDED` at 70% → `#A6A6A6` | Secondary text on dark |
| **Line** | 10% black / 10% white | Borders, dividers |

Status colours (interfaces only): success `#15803D` (dark `#4ADE80`), danger `#B91C1C` (dark `#F87171`).

### Proportions (the 60 / 30 / 10 rule)
- **60%** Paper or Ink (choose one dominant per post)
- **30%** the opposite neutral plus greys (text, surfaces)
- **10% maximum** Signal Yellow

A fully yellow post is allowed as a statement (CTA posts, announcements), with Ink text only.

### Contrast rules (accessibility)
- ✅ Ink text on Yellow (15.9 : 1) · Yellow text on Ink (15.1 : 1) · Ink on Paper · Bone on Ink.
- ❌ **Never yellow text on white or light grey** (unreadable). On light backgrounds, yellow is only a **fill**: highlighter, pill, shape.
- ❌ Never yellow on mid-tone photos without a dark overlay.

---

## 4. Typography

| Role | Font | Weights | Notes |
|---|---|---|---|
| **Display / headlines** | **Lora** (serif, Google Fonts) | Regular 400 for most of the headline, **SemiBold Italic 600** for the emphasised words | Tight line height (1.0 to 1.1), slightly negative tracking at large sizes |
| **Text / UI** | **DM Sans** (Google Fonts, variable) | 400 body, 500 labels, 600 to 700 buttons and stats | Line height 1.5 for paragraphs |

Fallbacks: Georgia (serif), Helvetica or Arial (sans).

### The signature: the yellow highlighter
In every headline, **one or two key words** are set in *Lora SemiBold Italic* with a yellow highlighter bar behind the lower part of the letters:
- The bar runs from 62% to 92% of the text height (like a marker stroke), Signal Yellow, sharp corners.
- On dark backgrounds there is no bar: the emphasised word is simply **in yellow**.
- Maximum 2 highlighted words per headline. Example: "Your servers are in one room. *Your data should not be.*"

### Small labels ("eyebrows")
DM Sans Medium, UPPERCASE, letter-spacing +4%, 12 to 14 px, muted colour, preceded by a small yellow dot with a soft yellow halo: `● CLOUD STUDIO`.

### Type scale for social posts (1080 px wide)
| Element | Size | Font |
|---|---|---|
| Hero headline | 96 to 120 px | Lora |
| Headline | 64 to 80 px | Lora |
| Big number / stat | 180 to 260 px | Lora SemiBold |
| Subtitle | 34 to 40 px | DM Sans 400 |
| Body | 28 to 32 px | DM Sans 400 |
| Eyebrow / label | 22 to 24 px | DM Sans 500 uppercase |
| Footer / handle | 20 to 22 px | DM Sans 500 |

---

## 5. Shapes and components

- **Corners:** generously rounded. Cards 24 px, large images 32 px, buttons and tags fully rounded (pill).
- **Buttons / CTA pills:** yellow pill, Ink text in DM Sans SemiBold, with a round Ink chip on the right holding a ↗ arrow in yellow.
- **Tags / chips:** outlined pill (1 px line), or a yellow pill with Ink text for the active or important one.
- **Cards:** white (or Graphite on dark), 1 px line border, 24 px radius, lots of padding. Numbering `01`, `02` in small muted digits.
- **Separators:** the four-point star **✦** or the middle dot **·** (e.g. *Build · Run · Protect*).
- **Lines:** hairlines (1 px at 10% opacity) to structure, never heavy borders.
- **Grain:** a very light film grain on dark backgrounds (3 to 6% opacity) for a premium feel.

---

## 6. Brand motifs

1. **The connected Africa map:** Africa drawn in small dots (grey at about 22% opacity), Cameroon's dots in yellow, a glowing yellow node on **Douala**, thin yellow arcs to the world (Toronto, New York, Paris, London, Lagos, Nairobi, Kigali, Johannesburg, Dubai). Use it for "Built in Africa", international and hiring posts.
2. **The dotted globe:** the same idea as a sphere, with Douala as the origin of the arcs. Hero visuals and covers.
3. **Build · Run · Protect band:** a yellow strip with "Build ✦ Run ✦ Protect" in Lora Italic, Ink colour, as a band at the top or bottom of a visual.
4. **Two clocks:** "Douala 15:00 · New York 09:00" pills with a pulsing yellow dot. Use it for time-zone and remote-work content.
5. **The yellow curtain:** a full-bleed yellow panel with one Lora line, for announcements and transitions in videos.
6. **The Cameroon flag**, only as a small badge with "Built in Africa. Delivered worldwide." Never large, never as a pattern.

Keep motifs **tasteful and modern**: no tribal patterns, no savannah or safari clichés, no "Africa as a texture".

---

## 7. Photography

**Subjects (priority):** real African professionals at work, African cities (Douala, Yaoundé, Lagos, Nairobi, Kigali), workspaces, hands on keyboards, server rooms, network cabling, shops and restaurants (our product users), markets and street life.

**Style:** natural light, authentic moments, real places, people doing real work, diverse ages and genders.

**Treatment (same as the website):**
- Slightly desaturated (about 55% greyscale) with a touch of contrast. Full colour is allowed for hero images and for product or people shots where warmth matters.
- Optional yellow wash: a Signal Yellow layer in *Multiply* mode at 10 to 12%.
- Rounded corners (24 to 32 px) when the photo sits inside a layout. Full-bleed only for cover posts.
- Text over a photo always sits on a dark gradient (Ink 0 → 70%) for legibility.

**Avoid:** handshakes, fake-smile office groups, people pointing at blank screens, generic "cyber" blue-glow imagery, AI-generated people, poverty or charity clichés.

**Credits:** Unsplash photos need the photographer credited where possible (see `docs/IMAGE-CREDITS.md`).

---

## 8. Icons and illustration

- Icons: **Hugeicons** (stroke style, 1.5 to 2 px stroke, rounded caps), in Ink or Bone. Yellow only inside an Ink circle or on an Ink background.
- Product UI mockups: simple "skeleton" interfaces (grey bars, one yellow element), in a browser or phone frame, tilted slightly in 3D, with a soft shadow.
- Diagrams: simple lines and labelled nodes (e.g. Office server → Encrypted tunnel → Cloud storage). One yellow element marks the key step.

---

## 9. Social media formats

| Format | Size | Safe margin |
|---|---|---|
| Instagram / LinkedIn square | 1080 × 1080 | 80 px |
| Instagram portrait (preferred) / carousel | 1080 × 1350 | 80 px |
| Story / Reel / TikTok | 1080 × 1920 | 120 px top and 220 px bottom (UI overlays) |
| LinkedIn / X link image, Open Graph | 1200 × 630 | 64 px |
| LinkedIn company banner | 1128 × 191 | Keep the logo away from the bottom-left (profile photo) |
| YouTube thumbnail | 1280 × 720 | 64 px |

**Grid:** 12 columns, 80 px outer margin on 1080 px. Align text to the left (editorial). Centre only for single-line statements and quotes.

**Every post has:** the logo (small, in a corner), the handle or `suppliesandworks.com` (DM Sans 20 px, muted), and optionally a tiny eyebrow saying the studio (`● CLOUD STUDIO`).

---

**Ready-made covers** (in `brand/banners/`, rebuild with `pnpm banners`): `facebook-cover.png` (1640×624), `x-twitter-header.png` (1500×500), `linkedin-company-cover.png` (1128×191 @2×), `linkedin-profile-background.png` (1584×396). Each keeps its key content out of the platform's crop and profile-photo zones.

## 10. Post templates

### A. Statement / headline post (light)
```
┌──────────────────────────────┐
│ ● CLOUD STUDIO               │  eyebrow
│                              │
│ Your servers are in          │  Lora 80px, Ink
│ one room. Your data          │
│ ▓should not be.▓             │  Lora SemiBold Italic + yellow bar
│                              │
│ Automatic, encrypted and     │  DM Sans 32px, muted
│ tested backups to the cloud. │
│                              │
│ [LOGO]   suppliesandworks.com│
└──────────────────────────────┘   Paper background
```

### B. Big number (dark)
Ink background, a huge number in Lora SemiBold (Yellow), one line of explanation in Bone, and a grain overlay.
Example: **25** / paying customers run their business on our products.

### C. Quote / testimonial
Mist background, a large opening quote mark “ in muted grey (or Yellow on dark), the quote in Lora 48 to 56 px, then the name, role, company and country in DM Sans. Only approved, real quotes.

### D. Case study carousel (1080 × 1350, 5 to 7 slides)
1. **Cover:** the client logo in white, centred on its brand colour (the same style as the website's Work page), with the project name and one-line result underneath.
2. The challenge (Lora headline + 2 lines).
3. Our approach.
4. Screenshot in a browser frame (rounded, with a soft shadow).
5. Results (only real ones).
6. Stack as outlined pills.
7. **CTA:** a yellow slide with "Have a similar challenge? Let's talk." plus a pill button and the URL.

### E. Tip / educational carousel
Slide 1: a question as the headline with one highlighted word. Slides 2 to 6: one idea per slide, a big number `01` to `05` in Lora, a short sentence. Last slide: the takeaway plus a CTA. Alternate Paper and Mist backgrounds; the last slide is Yellow.

### F. Product post (Badibo / Kira)
A tilted product mockup on Mist, the product name in Lora, the benefit line ("Run your restaurant, not your paperwork."), and a "Request a demo" pill. Real photos of shop or restaurant owners are welcome.

### G. Built in Africa / culture / hiring
Ink background with the dotted Africa map (Douala node glowing), or a real team photo with the photo treatment. Headline in Bone, with the emphasised word in Yellow.

### H. Announcement / CTA (full yellow)
Signal Yellow background, Ink text only, Lora headline, a black pill button, and the logo on its white chip.

---

## 11. Motion (reels, stories, video)

- **Easing:** strong ease-out (expo) for entrances; ease-in-out for transitions.
- **Durations:** 0.2 s micro, 0.5 s elements, 0.9 s sections.
- **Text:** lines reveal from below behind a mask, one after another (stagger of about 0.1 s). Highlight bars draw from left to right after the words appear.
- **Transitions:** a yellow curtain wipes across, showing the next title briefly.
- **Loops:** a slow marquee of "Build ✦ Run ✦ Protect", and globe arcs drawing from Douala.
- **Audio (optional):** minimal, warm electronic or Afro-house textures, never loud stock "corporate" music.

---

## 12. Writing on visuals

- Headlines: 4 to 10 words, one idea, one or two highlighted words.
- Sentence case, never ALL CAPS except eyebrows.
- English first; French version as a separate post or slide, never mixed in one line.
- Use the brand lines: **Built in Africa. Delivered worldwide.** · **Build · Run · Protect.**
- CTA wording: Book a call · Let's talk · Request a demo · See our work · Get a free backup review.
- Numbers only from `KNOWLEDGE.md`.

---

## 13. Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Lots of white (or black) space | Fill every corner |
| One yellow accent, used on purpose | Yellow everywhere, or other bright colours |
| Lora headlines + DM Sans text | Other fonts, script fonts, Impact-style display fonts |
| Real African people and places | Stock clichés, AI-generated faces, safari or tribal motifs |
| Rounded cards, pill buttons, hairlines | Hard drop shadows, gradients in rainbow colours, bevels |
| Real numbers and approved quotes | Invented stats, fake testimonials, unearned certifications |
| Logo small and clean in a corner | Logo stretched, recoloured, or on plain yellow |
| Text on photos over a dark gradient | Text directly on busy photos |

---

## 14. Quick checklist before publishing

- [ ] One dominant background (Paper, Ink or Yellow)
- [ ] Yellow ≤ 10% (unless it's a full-yellow CTA post)
- [ ] No yellow text on a light background
- [ ] Lora headline with at most 2 highlighted words
- [ ] Logo present, correct version, not distorted
- [ ] Margins respected (80 px on 1080 px)
- [ ] Facts and numbers match `KNOWLEDGE.md`
- [ ] Photo credited if from Unsplash
- [ ] Spelling checked in English (and French if bilingual)
