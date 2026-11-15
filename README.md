# Supplies and Works — website

Marketing site for **Supplies and Works**, a technology partner based in Douala, Cameroon.
Production domain: **https://suppliesandworks.com**.

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · GSAP + ScrollTrigger + SplitText · Lenis · a 2D-canvas globe (no WebGL needed)
- **Pages:** the 24 pages of the sitemap, plus `/credits` and an animated 404. Every page is statically generated.
- **Copy:** taken verbatim from `3-WEBSITE-COPY.md`. `[BRACKETS]` render as yellow dashed placeholder chips. The full list is in [`docs/PLACEHOLDERS.md`](docs/PLACEHOLDERS.md).

## Run it

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

Copy `.env.example` to `.env.local` and adjust:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (default `https://suppliesandworks.com`) |
| `FORMS_WEBHOOK_URL` | Optional. Where form submissions are POSTed (Zapier, Make, n8n, Slack…) |

## Where things live

```
app/[lang]/…                 one folder per route (English is served at "/", see i18n below)
app/api/{contact,newsletter,apply}   form endpoints → lib/forms.ts
content/                     ALL text and data (typed). Edit here, never in components.
  site.ts                    header, menus, footer, contact details, cookie banner, siteConfig
  shared.ts                  the five studios + Build · Run · Protect
  pages/*.ts                 copy per page
  work.ts                    case studies (each one gets /work/<slug>)
  images.ts                  GENERATED from content/data/unsplash.json
components/
  layout/                    header + mega-menu, mobile command menu, footer, loader, cursor, page transition…
  hero/                      home hero + interactive globe
  interactive/               studios scroller, Build·Run·Protect, maps, sliders, product mockups…
  sections/                  reusable blocks (PageHero, FeatureGrid, ProcessSteps, DataTable, FaqSection, CtaBand…)
  motion/                    MotionDirector (declarative scroll animations) + Lenis
  ui/                        Button, MagneticButton, Marquee, TiltCard, Stats, Accordion, Photo, Logo…
lib/                         i18n, routes, SEO, JSON-LD, motion helpers, hooks
scripts/                     build-geo, build-images, build-logo, report
```

### Editing text

Open the matching file in `content/pages/` and change the string. Formatting conventions:

- `*words*` → serif italic emphasis with the yellow highlighter
- `**words**` → bold
- `[WORDS]` → placeholder chip (remove the brackets once you have the real text)

Run `pnpm report` to refresh `docs/PLACEHOLDERS.md`.

### Adding a case study

Copy an entry in `content/work.ts`, give it a unique `slug`, fill the fields, and pick an `image` key. The page `/work/<slug>`, the `/work` grid, the home carousel and the sitemap all pick it up automatically.

### Swapping images

1. Find a photo on Unsplash. Copy its CDN id (the `photo-1234567890123-abc123def456` part of an `images.unsplash.com` URL).
2. Edit the entry in `content/data/unsplash.json` (id, alt text, photographer, links).
3. Run `pnpm images`. This regenerates `content/images.ts` with a new blur-up preview.

Photographers are credited automatically on `/credits` (and in [`docs/IMAGE-CREDITS.md`](docs/IMAGE-CREDITS.md) after `pnpm report`).

### Swapping the logo

The logo comes from **your file**, `brand/logo-source.png`. To change it, replace that file and run `pnpm logo`. This regenerates:

- `public/logo.png` (transparent background, for the light theme)
- `public/logo-dark.png` (same, with a white "AND", for the dark theme)
- `app/icon.png` and `app/apple-icon.png` (favicons)

Every place that shows the logo uses the single component `components/ui/logo-placeholder.tsx` (`<Logo />`, also exported as `<LogoPlaceholder />`). To use an SVG later, change the two paths in that file. The Open Graph image (`app/opengraph-image.tsx`) reads `public/logo-dark.png`.

### Forms

Contact, newsletter and job applications post to `/api/*`. Each route validates the input and calls `deliver()` in **`lib/forms.ts`**. That is where you plug in email (Resend, SES…), a CRM (HubSpot, Pipedrive…), or a webhook (set `FORMS_WEBHOOK_URL`; it is already wired). Until then, submissions are only logged on the server. CV files are validated (5 MB maximum) but not stored yet; see the comment in `app/api/apply/route.ts`.

Booking: set `siteConfig.bookingUrl` in `content/site.ts` to a Calendly or Cal.com link and it is embedded on `/contact#book`.

### Adding French (`/fr`)

The structure is ready:

1. In `lib/i18n.ts`, add `"fr"` to `enabledLocales`.
2. In each `content/**` file, add a `fr: { … }` object next to `en`. Missing pages fall back to English.
3. In `components/layout/language-switcher.tsx`, turn the FR pill into a link (the comment there explains how).

English stays at the root (`/about`), and French lives at `/fr/about`. The proxy (`proxy.ts`) rewrites root URLs to `app/[lang]` and redirects `/en/*` to the clean URL.

## Design system

The base comes from the **jeansamist portfolio**:

- **Fonts:** Lora (serif display, italic emphasis) and DM Sans (text).
- **Palette:** pure white and near-black (`#0a0a0a` / `#ededed`), soft grey surfaces, alpha-based muted text.
- **Shapes:** rounded-full pill buttons with an icon chip; cards with a glow that follows the cursor.
- **Motion:** expo-out reveals.

On top of that comes the logo yellow, **`#FCEE21`**, as the single accent.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#ffffff` | `#0a0a0a` |
| `--surface` / `--surface-2` | `#fafafa` / `#f4f4f5` | `#121212` / `#1a1a1a` |
| `--text` / `--text-muted` | `#000` / `#00000099` | `#ededed` / `#edededb3` |
| `--accent` / `--accent-ink` | `#FCEE21` / `#0a0a0a` | same |
| `--border` | `#0000001a` | `#ffffff1a` |

- **Yellow is never used for text on light backgrounds.** In light mode it only fills: buttons, highlighter marks, chips. In dark mode it can be used as text (15:1 contrast).
- **Type scale:** fluid `clamp()` tokens: `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead`.
- **Motion tokens:** 0.2 s (micro), 0.5 s (elements), 0.9 s (sections), with `expo.out` for entrances and `power2.inOut` for transitions.
- **Reduced motion:** with `prefers-reduced-motion`, everything falls back to simple fades. Lenis, the cursor, the loader and the globe animation are disabled.

### Scroll animation attributes (server components can use them)

| Attribute | Effect |
|---|---|
| `data-reveal` | Fades and rises in when it enters the viewport |
| `data-reveal="stagger"` | Same, applied to each child in turn |
| `data-reveal="clip"` | Image mask reveal with a slight zoom |
| `data-split` | Heading revealed line by line |
| `data-words` | Paragraph that lights up word by word while scrolling |
| `data-parallax="0.12"` | Parallax on its `[data-parallax-inner]` child |
| `data-count` | Number counts up (placeholders such as `[X]` are left alone) |
| `data-cursor="view"`, `"drag"` or `"link"` | Custom cursor state |

## Deploy on Vercel

1. Push the folder to a Git repository and import it in Vercel (framework: Next.js; the defaults work).
2. Set `NEXT_PUBLIC_SITE_URL=https://suppliesandworks.com` (and `FORMS_WEBHOOK_URL` if used).
3. Add the domain `suppliesandworks.com` (and `www`) in **Project → Domains**, then point DNS as Vercel instructs.

## Housekeeping scripts

| Command | What it does |
|---|---|
| `pnpm images` | Rebuild `content/images.ts` (with blur previews) from `content/data/unsplash.json` |
| `pnpm logo` | Rebuild the logo PNGs and favicons from `brand/logo-source.png` |
| `pnpm geo` | Rebuild the dot maps (world, Africa, Cameroon) in `lib/geo/` |
| `pnpm report` | Refresh `docs/PLACEHOLDERS.md` and `docs/IMAGE-CREDITS.md` |
