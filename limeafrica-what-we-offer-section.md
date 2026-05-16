# Agent prompt: Port “What we offer” masonry grid section (DMZ Care → Lime Africa)

Use this document as the **full implementation brief** for an AI coding agent working in the **limeafrica** project. Reproduce the **About page “What we offer”** block from DMZ Care (`WhatWeOfferGrid`), not the homepage sticky scroll deck (`ServicesPreview`).

---

## 1. Goal

Build a **responsive CSS Grid masonry-style section** with:

- A white **intro panel** (eyebrow, heading, body copy).
- **7 service tiles** with solid brand “plate” backgrounds by default.
- On **hover/focus-within**: full-bleed photo fades in, dark gradient overlay, large watermark number, title/body flip to white.
- Section background: **vertical gradient** (white → soft gray) + **subtle logo pattern** bottom-right.
- Optional footer link: **“VIEW ALL SERVICES”** (uppercase, small, underlined).
- **No** sticky stacking deck, **no** scroll-driven scale animation, **no** “Request a ride” button inside the intro panel.

Reference implementation (source of truth):

| Piece | DMZ Care path |
|-------|----------------|
| React component | `src/components/services/WhatWeOfferGrid.tsx` |
| Grid CSS | `src/app/globals.css` → `.services-preview-grid` |
| Usage on About | `src/app/about/page.tsx` → `<WhatWeOfferGrid />` after Our Mission |
| Offerings data | `src/lib/site.ts` → `SERVICE_OFFERINGS` |
| Per-tile images | `src/lib/card-images.ts` |

---

## 2. What this is NOT

Do **not** copy these (different UX):

- **`ServicesPreview`** — homepage sticky card stack with `deck-stack`, scroll-driven `--deck-scale`, layered image + bullet list + CTA per card.
- **`GuidingPrinciplesSlider`** — horizontal snap carousel of tall cards (similar hover photo, different layout).

Only port the **flat CSS grid** pattern described below.

---

## 3. Visual design tokens (map to Lime Africa brand)

DMZ Care uses Tailwind theme tokens. **Replace** with limeafrica equivalents; keep the **same roles**:

| Role | DMZ Care | Use for |
|------|----------|---------|
| Dark plate | `#1a1a1a` / `bg-dmz-dark` | Tile bg, white text |
| Accent plate | `#caf402` / `bg-dmz-accent` | Tile bg, dark text |
| Soft gray plate | `#f5f5f5` / `bg-dmz-soft` | Tile bg |
| White plate | `#ffffff` / `bg-dmz-white` | Tile bg, intro panel |
| Orange plate | `#ff6600` / `bg-dmz-orange` | Tile bg, white text |
| Muted body | `#666666` / `text-dmz-text` | Intro + default tile body |
| Border | `#eaeaea` / `border-dmz-border` | Optional dividers |
| Heading font | `font-heading` | Titles, watermark numbers |

Section shell:

- `bg-gradient-to-b from-{white} to-{soft-gray}`
- Pattern watermark: `opacity-5` (5%), **~2×** AboutSummary size, anchored `bottom-0 right-0`, `object-contain object-bottom object-right`

Grid wrapper shadow (around the tile block only):

```txt
shadow-[0_28px_64px_-28px_rgba(26,26,26,0.35)]
```

---

## 4. Section structure (DOM)

```txt
<section>                          ← gradient bg, overflow-hidden, aria-labelledby
  <motion.div pattern watermark>   ← absolute, z-0, pointer-events-none
  <motion.div content z-10>        ← max-w-7xl, padding
    <motion.div shadow wrapper>
      <motion.div.services-preview-grid>
        IntroPanel                   ← grid-area: intro
        OfferCard × 7                ← grid-area: c01, c03, c04, c02, c07, c05, c06
      </motion.div>
    </motion.div>
    [optional] footer link
  </motion.div>
</section>
```

---

## 5. CSS Grid layout (critical)

Use a single class, e.g. `.services-preview-grid` or `.offer-masonry-grid`.

### Mobile (`< 1024px`)

Single column. **DOM / `grid-template-areas` order** must match **visual reading order** used for watermark numbers:

```css
grid-template-columns: minmax(0, 1fr);
grid-template-areas:
  "intro"
  "c01"   /* tile 1 – Doctor visits */
  "c03"   /* tile 2 – Physical therapy */
  "c04"   /* tile 3 – Hospital outpatient */
  "c02"   /* tile 4 – Dialysis (wide on desktop) */
  "c07"   /* tile 5 – Adults day care */
  "c05"   /* tile 6 – Behavioral (wide on desktop) */
  "c06";  /* tile 7 – Dental */
gap: 0;
```

### Desktop (`min-width: 1024px`)

4 columns, 3 rows. **Intro spans row 1, columns 1–3.** Tiles placed per this exact template:

```css
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-template-rows: auto auto auto;
grid-template-areas:
  "intro intro intro c01"
  "c03 c04 c02 c02"
  "c07 c05 c05 c06";
```

ASCII layout:

```txt
┌─────────────────────────────┬──────────┐
│  INTRO (cols 1-3)           │ 01 Doctor│
├──────────┬──────────┬───────┴──────────┤
│ 02 PT    │ 03 Hosp  │ 04 Dialysis ×2 │
├──────────┼──────────┴──────────┬───────┤
│ 05 Adults│ 06 Behavioral ×2    │07 Dent│
└──────────┴─────────────────────┴───────┘
```

Each tile sets `style={{ gridArea: 'c01' }}` etc. on its root element.

### Tile → grid area mapping (render order in JSX)

| `visualOrder` | Service (example) | `gridArea` | Notes |
|---------------|-------------------|------------|--------|
| 1 | Doctor visits | `c01` | `lg:min-h-[17rem]` |
| 2 | Physical therapy | `c03` | |
| 3 | Hospital outpatient | `c04` | |
| 4 | Dialysis | `c02` | spans 2 cols row 2 |
| 5 | Adults day care | `c07` | |
| 6 | Behavioral | `c05` | spans 2 cols row 3 |
| 7 | Dental | `c06` | |

**Important:** `visualOrder` is **not** the order in `SERVICE_OFFERINGS` array—it is the **on-screen reading order** (left→right, top→bottom on desktop). Watermark shows `01`–`07` from `visualOrder`.

---

## 6. Intro panel

- `gridArea: intro`
- Background: white plate color
- Padding: `p-8 sm:p-10 lg:p-12`, `lg:min-h-[min(22rem,34vh)]`
- Content:
  - Eyebrow: `text-xs uppercase tracking-[0.28em]` muted
  - H2: `id` for `aria-labelledby` on `<section>`, clamp heading size, bold
  - Body: `text-sm sm:text-base`, max-width ~`2xl`
- **Do not** include a CTA button in the intro (removed in DMZ Care).

Example heading copy (replace for Lime Africa):

- Eyebrow: `What we offer`
- Title: `Medical Transportation For Every Appointment` (or localized equivalent)

---

## 7. Offer card component

Each card is a `<motion.div>` (or `<article>`) with `group` for hover.

### Layers (bottom → top, all `absolute` except text)

1. **Plate** — solid background from `plate` variant (`dark` | `accent` | `gray` | `white` | `orange`).
2. **Photo** (`z-[1]`) — `next/image` or `<img>`, `fill`, `object-cover`, **`opacity-0`**, `group-hover:opacity-100`, `transition-opacity duration-300 ease-out`.
3. **Scrim** (`z-[2]`) — `bg-gradient-to-b from-black/80 via-black/45 to-black/10`, same opacity transition as photo.
4. **Watermark number** (`z-[3]`) — `01`–`07`, huge `font-heading`, `text-white`, `opacity-0` → `group-hover:opacity-[0.2]`, top-right.
5. **Title + description** (`z-[4]`) — default uses plate text colors; on hover `group-hover:text-white` and `group-hover:text-white/85`.

### Default (non-hover) styles per plate

Implement a `plateClasses(plate)` helper returning `{ panel, title, body }` class strings—mirror DMZ Care switch in `WhatWeOfferGrid.tsx`.

### Interaction

- `hover:shadow-[0_22px_44px_-18px_rgba(26,26,26,0.18)]`
- `min-h-[13rem]` base, `lg:min-h-[15.5rem]`, padding `p-8` → `lg:p-10`
- `id={block.slug}` for deep links / footer anchors
- `scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36` when used as hash targets

### Reduced motion

For `prefers-reduced-motion: reduce`:

- Photo: stay `opacity-0` (or optionally always show at low opacity—match reference: hidden until hover but transition disabled).
- Use Tailwind `motion-reduce:` variants on opacity transitions like reference.

### Image loading

- `priority={true}` only for `visualOrder === 1`.
- Decorative hover images: `alt=""`, `aria-hidden` on image.

---

## 8. Section background pattern

Match **AboutSummary** pattern placement, scaled for this section:

```tsx
const PATTERN_SRC = "/your-logo-pattern.webp"; // URL-encode spaces in path

<div
  className="pointer-events-none absolute bottom-0 right-0 z-0
    h-[min(620px,100vw)] w-[min(760px,160vw)] opacity-5
    sm:h-[min(720px,88vw)] sm:w-[min(880px,144vw)]
    lg:h-[min(800px,80vw)] lg:w-[min(1000px,96vw)]"
  aria-hidden
>
  <Image src={PATTERN_SRC} alt="" fill unoptimized
    className="object-contain object-bottom object-right"
    sizes="(max-width: 1024px) 160vw, 1000px" />
</div>
```

Content wrapper: `relative z-10`.

---

## 9. Footer link (optional)

Prop: `hideFooterServicesLink?: boolean` (hide when section already lives on services page).

```tsx
<Link
  href="/services"
  className="text-xs font-semibold uppercase tracking-[0.18em]
    text-{dark} underline decoration-{border} underline-offset-4
    hover:decoration-{dark}"
>
  View all services
</Link>
```

Parent: `text-center`, `mt-12 lg:mt-14`, no `text-sm` on wrapper (size lives on link).

---

## 10. Data model

```ts
type Plate = "dark" | "accent" | "gray" | "white" | "orange";

type OfferTile = {
  slug: string;           // kebab-case, used as id + /services#slug
  title: string;
  description: string;
  plate: Plate;
  image: string;          // path under /public
};

// Central list (order can differ from visual grid order)
const OFFERINGS: { slug: string; label: string }[] = [ ... ];

const TILES: OfferTile[] = [
  { slug, title: label, description, plate, image },
  // ...
];
```

Assign **`visualOrder` explicitly** in JSX when rendering—do not derive from array index if grid order differs.

Example plate assignment (customize per brand):

| Tile | Suggested plate |
|------|-----------------|
| Doctor visits | dark |
| Dialysis | accent |
| Physical therapy | gray |
| Hospital outpatient | white |
| Behavioral | dark |
| Adults day care | accent |
| Dental | orange |

---

## 11. Suggested file layout (limeafrica)

```txt
src/
  components/
    offers/
      WhatWeOfferGrid.tsx      # section + IntroPanel + OfferCard
  lib/
    offerings.ts               # OFFERINGS slugs + labels
    offer-images.ts            # image path constants
  app/
    globals.css                # .services-preview-grid rules
    about/page.tsx             # <WhatWeOfferGrid /> after mission section
public/
  …                          # one webp/jpg per tile + pattern asset
```

Framework: **Next.js App Router** + **Tailwind CSS v4** (or v3 with equivalent utilities). Use `next/image` if already in project.

---

## 12. Implementation steps (agent checklist)

1. Add CSS grid rules to global stylesheet (mobile + `@media (min-width: 1024px)`).
2. Create `WhatWeOfferGrid` (or `OfferMasonrySection`) with section gradient + pattern.
3. Implement `plateClasses()` and `OfferCard` with hover layers exactly as specified.
4. Implement `IntroPanel` with `gridArea: intro`.
5. Wire 7 tiles with correct `gridArea` + `visualOrder` 1–7 (see table §5).
6. Add offerings constants and image paths; use Lime Africa copy and assets.
7. Mount on About page after mission block; pass `hideFooterServicesLink` if duplicate on `/services`.
8. Verify footer `/services#slug` links scroll to correct tiles (`id={slug}`).
9. Test: mobile stack order, desktop 4×3 layout, hover states, keyboard focus-visible, reduced motion.
10. Lint + build; no drive-by refactors outside this feature.

---

## 13. Acceptance criteria

- [ ] Desktop: intro occupies **row 1, columns 1–3**; layout matches §5 ASCII.
- [ ] Mobile: single column; order intro → tiles 01–07 per §5.
- [ ] Each tile: solid plate default; hover reveals photo + scrim + faint `01`–`07` watermark; title/body turn white.
- [ ] No pan/zoom on hover photo—**opacity crossfade only** (300ms ease-out).
- [ ] Section: white-to-gray gradient + bottom-right pattern at ~5% opacity.
- [ ] No intro CTA button; optional uppercase “View all services” footer link.
- [ ] Watermark numbers match **visual** order, not CMS array order.
- [ ] `prefers-reduced-motion` does not break layout.
- [ ] Brand colors/fonts adapted to Lime Africa design system.

---

## 14. Reference snippets (copy-adapt)

### Grid CSS (globals)

```css
.services-preview-grid {
  display: grid;
  gap: 0;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "intro"
    "c01"
    "c03"
    "c04"
    "c02"
    "c07"
    "c05"
    "c06";
}

@media (min-width: 1024px) {
  .services-preview-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "intro intro intro c01"
      "c03 c04 c02 c02"
      "c07 c05 c05 c06";
  }
}
```

### Card hover photo classes

```txt
object-cover object-center opacity-0 transition-opacity duration-300 ease-out
group-hover:opacity-100
motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-200
motion-reduce:group-hover:opacity-100
```

### Scrim

```txt
bg-gradient-to-b from-black/80 via-black/45 to-black/10
opacity-0 group-hover:opacity-100
(same motion-reduce pattern as photo)
```

### Watermark

```txt
font-heading text-[clamp(3.5rem,14vw,6.5rem)] leading-none text-white
opacity-0 group-hover:opacity-[0.2]
motion-reduce:opacity-[0.12] motion-reduce:group-hover:opacity-[0.2]
```

---

## 15. Lime Africa–specific inputs (fill before coding)

| Field | Value |
|-------|--------|
| Project repo | `limeafrica` |
| Page route | e.g. `/about` |
| Pattern asset path | |
| Tile images (7) | |
| Copy: intro eyebrow / title / body | |
| Footer link URL | e.g. `/services` |
| Brand color mapping | dark / accent / soft / orange hex |
| Number of tiles | 7 (or adjust grid if fewer—redesign `grid-template-areas`) |

---

## 16. Agent instructions (summary)

> Implement the **What we offer** section for Lime Africa by porting DMZ Care’s `WhatWeOfferGrid` behavior: CSS Grid masonry layout (4×3 desktop, stacked mobile), intro panel row 1 cols 1–3, seven hover-reveal photo tiles with plate colors and `01`–`07` watermarks in visual order, section gradient white→gray, subtle bottom-right logo pattern, optional uppercase footer link. Do **not** implement the homepage sticky `ServicesPreview` deck. Follow acceptance criteria in §13. Adapt tokens and copy to Lime Africa. Read reference files in DMZ Care if the repo is available; otherwise use this document as sole spec.

---

*Generated from DMZ Care `WhatWeOfferGrid` as of port date. Update §5 if tile positions change in source.*
