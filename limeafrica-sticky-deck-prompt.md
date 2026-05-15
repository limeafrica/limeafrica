# Agent prompt: Port “What we offer” sticky scroll deck to Lime Africa

Use this document as the full implementation brief. Reproduce the **homepage “What we offer” section** from the DMZ Care reference project (`dmzcare`) in the **limeafrica** project. Match the interaction and layout mechanics; adapt copy, images, colors, and header offsets to Lime Africa’s existing design system.

---

## Goal

Build a homepage section (working title: **“What we offer”** or Lime Africa’s equivalent) where **multiple full-width cards stack on scroll**:

1. Each card is `position: sticky` with a slightly lower `top` than the previous card (staggered “deck”).
2. As the user scrolls, newer cards slide up and **cover** older ones.
3. Cards **under** the active stack **scale down** (~10% per card depth) and get a **dark scrim** whose opacity tracks scroll progress.
4. In the **last ~10%** of the deck’s scroll range, **all cards lift upward together** (CSS scroll-driven animation) so the section exits cleanly into the next block.
5. **`prefers-reduced-motion`**: no scale, scrim, or exit lift — sticky stacking only (or plain scroll if simpler).

Do **not** copy DMZ’s medical copy or brand assets. Reuse Lime Africa tokens, typography, header height, and content structure.

---

## Reference source (DMZ Care)

| Piece | Path in reference repo |
|--------|-------------------------|
| Main component | `src/components/home/ServicesPreview.tsx` |
| Global deck CSS | `src/app/globals.css` (`.deck-stack`, `.deck-card`, `@property --deck-exit-shift`, keyframes) |
| Homepage usage | `src/app/page.tsx` → `<ServicesPreview />` |
| Also reused on | `src/app/services/page.tsx` with `serviceAnchors` prop |

**Not** the reference for this effect: `src/components/services/WhatWeOfferGrid.tsx` (that is a static masonry grid on another page).

---

## Visual / UX spec

### Section structure

```
<section>  <!-- section background -->
  <header block>  <!-- centered: eyebrow + h2 (+ optional intro) -->
  <div class="deck-stack">  <!-- ref for JS + scroll timeline -->
    {items.map → (
      <div class="deck-card sticky">  <!-- one per card; min-height slot -->
        <div data-deck-plate>  <!-- fixed-height plate; scale target -->
          <card content: text column + image column on lg>
        </div>
      </div>
    )}
  </div>
  <footer block>  <!-- optional closing paragraph / CTA -->
</section>
```

### Card layout (each plate)

- **Mobile**: single column — text panel on top, image below (`flex-col`).
- **Desktop (`lg+`)**: two columns — text + image (`grid grid-cols-2`), equal height.
- **Fixed plate height** so every sticky card is the same size while stacked:
  - Reference uses:  
    `h-[clamp(44rem,calc(100svh-5rem),52rem)] lg:h-[clamp(34rem,calc(100vh-8rem),38rem)]`
  - Slot wrapper adds ~2.5rem gap: same clamp + `+ 2.5rem` on `min-h`.
- Tune clamps for Lime Africa header height and typical card content (do not shrink text to fit).

### Sticky offsets

Each card `index` (0-based) sets CSS custom property:

```ts
--deck-sticky-nudge: `${index * 18}px`  // DECK_STICKY_STEP_PX = 18
```

Sticky `top` must sit **below the site header** at all breakpoints. Reference Tailwind classes:

```txt
top-[calc(5rem+var(--deck-sticky-nudge,0px))]
sm:top-[calc(5.25rem+var(--deck-sticky-nudge,0px))]
lg:top-[calc(6.5rem+var(--deck-sticky-nudge,0px))]
```

**Action for limeafrica:** Measure the real sticky/fixed header height (including safe-area if needed) and replace `5rem` / `5.25rem` / `6.5rem` with values that match **your** header. Mismatch causes cards to hide under the nav or leave a visible gap.

### Z-index

Each card: `zIndex: index + 1` (inline style or CSS variable) so later cards paint on top.

### Scroll-driven JS (scale + scrim)

Client component (`"use client"` in Next.js). On scroll/resize:

1. `deckRef` → container `.deck-stack`.
2. `cardRefs[]` → each `.deck-card` wrapper.
3. For each card, find inner `[data-deck-plate]` and compute **incoming progress** `0…1`:

```ts
function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

// Per card index i:
const deckTop = deck.getBoundingClientRect().top;
const stickyTop = parseFloat(getComputedStyle(card).top);
const plateHeight = plate.getBoundingClientRect().height;
const naturalCardTop = deckTop + card.offsetTop;
const incomingProgress = clamp01(
  (stickyTop + plateHeight - naturalCardTop) / plateHeight
);
```

4. For card at `index`, **depth** = sum of `incomingProgress` for all cards **after** this one:

```ts
const depth = incomingProgress.slice(index + 1).reduce((sum, p) => sum + p, 0);
const maxDepth = cards.length - 1 - index;
const scale = 1 - Math.min(depth, maxDepth) * 0.1; // DECK_SCALE_STEP = 0.1
card.style.setProperty("--deck-scale", scale.toFixed(4));
card.style.setProperty("--deck-scrim-opacity", Math.min(depth, 1).toFixed(4));
```

5. Use `requestAnimationFrame` throttling on `scroll` (passive) and `resize`.
6. `ResizeObserver` on the deck container.
7. If `prefers-reduced-motion: reduce`, reset `--deck-scale` to `1` and `--deck-scrim-opacity` to `0`.

### CSS variables (per card)

| Variable | Set by | Purpose |
|----------|--------|---------|
| `--deck-sticky-nudge` | React `style` (static per index) | Stagger sticky `top` |
| `--deck-scale` | JS on scroll | `transform: scale(...)` |
| `--deck-scrim-opacity` | JS on scroll | Dark overlay on covered cards |
| `--deck-exit-shift` | CSS scroll animation on `.deck-stack` | Shared upward translate at end |

Initial per-card style helper:

```ts
function deckCardVars(index: number): React.CSSProperties {
  return {
    "--deck-sticky-nudge": `${index * 18}px`,
    "--deck-scale": "1",
    "--deck-scrim-opacity": "0",
    zIndex: index + 1,
  } as React.CSSProperties;
}
```

---

## Required global CSS

Add to global stylesheet (e.g. `globals.css`). Names are **`deck-*`** — keep them to avoid collisions.

```css
/* Shared lift during final scroll segment of the deck */
@property --deck-exit-shift {
  syntax: "<length>";
  inherits: true;
  initial-value: 0px;
}

.deck-stack {
  scroll-timeline-name: --deck-stack;
  scroll-timeline-axis: block;
}

@supports (animation-timeline: scroll()) {
  .deck-stack.deck-stack--exit-lift {
    animation: deck-exit-shift-prop linear both;
    animation-timeline: --deck-stack;
    animation-range: 90% 100%;
  }

  @keyframes deck-exit-shift-prop {
    from {
      --deck-exit-shift: 0px;
    }
    to {
      --deck-exit-shift: min(-36vh, -14rem);
    }
  }
}

.deck-card {
  transform: translateY(var(--deck-exit-shift, 0px))
    scale(var(--deck-scale, 1));
  transform-origin: top center;
  will-change: transform;
}

.deck-card-scrim {
  background: rgba(0, 0, 0, 0.2);
  opacity: var(--deck-scrim-opacity, 0);
  will-change: opacity;
}

@media (prefers-reduced-motion: reduce) {
  .deck-stack.deck-stack--exit-lift {
    animation: none !important;
    --deck-exit-shift: 0px !important;
  }
  .deck-card {
    transform: none !important;
  }
  .deck-card-scrim {
    opacity: 0 !important;
  }
}
```

**Markup:** Inside each plate, add a full-bleed scrim layer:

```html
<div class="deck-card-scrim pointer-events-none absolute inset-0 z-10" aria-hidden />
```

The sticky wrapper also needs classes: `deck-card`, `sticky`, slot `min-h`, and stacked `top-[calc(...)]`.

**Container classes:** `deck-stack deck-stack--exit-lift relative isolate` (+ padding bottom as needed).

---

## React component checklist

Create something like `components/home/WhatWeOfferDeck.tsx` (name to match limeafrica conventions):

- [ ] `"use client"` on the file that runs the scroll `useEffect`.
- [ ] `deckRef` on `.deck-stack` div.
- [ ] `cardRefs` array via callback refs in `.map()`.
- [ ] Data array: `{ title, description, bullets?, image, imageAlt, plateVariant }[]`.
- [ ] `LayeredCard` child: outer `[data-deck-plate]`, inner grid, optional CTA link.
- [ ] Plate color variants via a `plateClasses(variant)` map (map to **Lime Africa** theme classes, not `dmz-*`).
- [ ] `next/image` for photos with sensible `sizes`.
- [ ] Section eyebrow + heading above deck; optional footer copy below.
- [ ] Export prop `anchors?: boolean` only if you need hash links per card (`id` + `scroll-mt-*`).

### Optional: anchor IDs

If cards link from elsewhere:

```tsx
id={anchors ? slug : undefined}
className="... scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36"
```

Adjust `scroll-mt-*` to header height + nudge.

---

## Integration in limeafrica

1. **Discover** homepage composition (e.g. `app/page.tsx` or `pages/index.tsx`) and insert the new section where “services / offerings” belongs.
2. **Map design tokens** — replace all `dmz-*` / reference colors with limeafrica CSS variables or Tailwind theme keys.
3. **Header sync** — if header is `sticky top-0`, measure rendered height at `default`, `sm`, `lg` and plug into `calc(...)` for sticky `top`.
4. **Content** — use Lime Africa’s real offerings (3–7 cards is fine; reference uses 7). Keep plate heights consistent even with shorter copy.
5. **Images** — use existing limeafrica assets; maintain `object-cover` on image column.
6. **No duplicate effect** — do not also build the masonry `WhatWeOfferGrid` pattern unless explicitly requested.

---

## Constants (tune if needed)

| Constant | Reference value | Notes |
|----------|-----------------|-------|
| `DECK_STICKY_STEP_PX` | `18` | Visible stack offset between cards |
| `DECK_SCALE_STEP` | `0.1` | 10% shrink per card depth |
| Exit animation range | `90%` → `100%` | Of deck scroll timeline |
| Exit shift end | `min(-36vh, -14rem)` | Shared lift amount |

---

## Acceptance criteria

- [ ] Scrolling through the section stacks cards under the header with a visible stagger (each card’s top slightly lower than the previous).
- [ ] Cards behind the front card scale down smoothly; scrim darkens with depth.
- [ ] Last card can reach full sticky position before the deck exits.
- [ ] Final scroll segment lifts the whole deck upward (in browsers with `animation-timeline: scroll()`).
- [ ] Without scroll-timeline support: sticky + JS scale/scrim still work; exit lift may be absent — acceptable.
- [ ] `prefers-reduced-motion`: no scale/scrim/exit animation.
- [ ] Works on mobile and desktop; no horizontal overflow; images do not collapse plate height incorrectly.
- [ ] No layout shift from missing image dimensions; Lighthouse CLS not regressed noticeably.
- [ ] Section matches limeafrica typography/spacing patterns used elsewhere on the homepage.

---

## Test plan

1. Homepage: scroll slowly through entire deck — verify stack, scale, scrim, and handoff to next section.
2. Resize window and re-scroll — scale/scrim recalculate (ResizeObserver).
3. Toggle OS “Reduce motion” — effects disabled.
4. Chrome + Safari (scroll-timeline varies).
5. Mobile: header does not cover card titles; sticky `top` feels correct.
6. Keyboard: focusable links/buttons inside cards remain usable; scrim is `pointer-events-none`.

---

## Pitfalls

| Issue | Fix |
|-------|-----|
| Cards jump or never stick | Slot `min-h` must be ≥ plate height + gap; parent must not have `overflow: hidden` breaking sticky |
| Sticky `top` wrong | Re-measure header; account for `sticky` header vs fixed |
| Scale looks wrong | Ensure `[data-deck-plate]` is the element whose height is used in progress math |
| Exit lift never runs | Parent needs scroll range; `.deck-stack` must be tall enough (sum of card slots) |
| z-index fights | Keep deck `isolate`; card z-index = index + 1 |
| jank on scroll | rAF-throttle; `passive: true` on scroll listener |
| Hydration warnings | Scroll effect only in `useEffect`; initial CSS vars match server render |

---

## Reference implementation snippets (DMZ Care)

### Sticky wrapper (simplified)

```tsx
<div
  ref={deckRef}
  className="deck-stack deck-stack--exit-lift relative isolate pb-2 lg:pb-5"
>
  {items.map((block, index) => (
    <div
      key={block.title}
      ref={(el) => { cardRefs.current[index] = el; }}
      className={`deck-card relative px-4 sm:px-6 lg:px-8 sticky ${STICKY_TOP} ${CARD_SLOT_MIN_HEIGHT}`}
      style={deckCardVars(index)}
    >
      <div className="mx-auto max-w-[70rem]">
        <LayeredCard block={block} priority={index === 0} />
      </div>
    </div>
  ))}
</div>
```

### Scroll effect (core loop)

```tsx
useEffect(() => {
  const deck = deckRef.current;
  if (!deck) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let frame = 0;

  const updateCards = () => {
    frame = 0;
    if (reduceMotion.matches) { /* reset vars */ return; }

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const deckTop = deck.getBoundingClientRect().top;

    const incomingProgress = cards.map((card) => {
      const plate = card.querySelector<HTMLElement>("[data-deck-plate]");
      if (!plate) return 0;
      const stickyTop = Number.parseFloat(getComputedStyle(card).top);
      const plateHeight = plate.getBoundingClientRect().height;
      const naturalCardTop = deckTop + card.offsetTop;
      return clamp01((stickyTop + plateHeight - naturalCardTop) / plateHeight);
    });

    cards.forEach((card, index) => {
      const depth = incomingProgress
        .slice(index + 1)
        .reduce((sum, progress) => sum + progress, 0);
      const maxDepth = cards.length - 1 - index;
      const scale = 1 - Math.min(depth, maxDepth) * 0.1;
      card.style.setProperty("--deck-scale", scale.toFixed(4));
      card.style.setProperty("--deck-scrim-opacity", Math.min(depth, 1).toFixed(4));
    });
  };

  const requestUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(updateCards);
  };

  updateCards();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  reduceMotion.addEventListener("change", requestUpdate);
  const ro = new ResizeObserver(requestUpdate);
  ro.observe(deck);

  return () => {
    if (frame) window.cancelAnimationFrame(frame);
    ro.disconnect();
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
    reduceMotion.removeEventListener("change", requestUpdate);
  };
}, []);
```

---

## Out of scope

- Masonry / hover-reveal grid (`WhatWeOfferGrid` on DMZ `/services` alternate layout).
- Copying DMZ images, medical service list, or `SERVICE_OFFERINGS` slugs unless limeafrica already uses the same IA.
- GSAP or other animation libraries — effect is **CSS sticky + CSS variables + light JS**.

---

## Deliverables

1. New section component with sticky deck behavior.
2. Global CSS for `.deck-stack` / `.deck-card` / scrim / reduced motion.
3. Homepage wired to real limeafrica content and theme.
4. Brief note in PR/commit: header offset values chosen and how to re-tune if nav height changes.

---

*Prompt generated from DMZ Care `ServicesPreview` + `globals.css` deck styles. Copy this file into the limeafrica repo (e.g. `docs/sticky-deck-implementation.md`) and point your agent at it.*
