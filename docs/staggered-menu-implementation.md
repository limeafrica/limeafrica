# Staggered side menu — implementation notes

This document describes how the animated **right-side navigation drawer** works on LimeAfrica: architecture, GSAP behavior, CSS layering, and how to reuse or extend it.

## Stack

- **React** — `StaggeredMenu` is a `forwardRef` component (`src/components/ui/StaggeredMenu.tsx`).
- **GSAP** — open/close timelines, staggered pre-layers, link label entrance, optional toggle icon/text (when built-in header is used).
- **Next.js** — `Link` for internal routes; plain `<a>` for external URLs.
- **CSS** — `src/components/ui/StaggeredMenu.css` (panel geometry, pre-layers, optional built-in header styles).

## High-level architecture

1. **`SiteHeader`** (`src/components/site/SiteHeader.tsx`)  
   - Desktop: centered inline nav at `min-width: 1300px`.  
   - Narrower: inline nav hidden; a **fixed** top-right button (`#nav-menu-toggle`) opens the menu via `staggeredMenuRef.current?.toggle()`.

2. **Backdrop**  
   - When open, a semi-transparent `fixed inset-0` layer at `z-[44]` dims the page (sibling to the menu stack, not inside `StaggeredMenu`).

3. **Menu stack**  
   - Wrapper `#staggered-mobile-nav`: `pointer-events-none fixed inset-0 z-[45]` so only the panel receives clicks.  
   - **`StaggeredMenu`** with `isFixed` + `hideHeader`: no built-in logo/toggle; the real toggle lives in the header file.

4. **Toggle button**  
   - Fixed `top-0 right-0` at `z-[60]` so it stays above the drawer and backdrop.  
   - Passed to the menu as **`externalToggleRef`** so “click outside to close” does not treat the toggle as outside.

5. **Scroll lock**  
   - `document.body.style.overflow = "hidden"` only when the menu is open **and** viewport is below `1300px`, so desktop layout does not shift when the scrollbar disappears.

6. **Content**  
   - Nav items: `mainNav` from `src/content/site.ts`, mapped to `{ label, ariaLabel, link }`.  
   - Socials: `menuSocialLinks`.

## GSAP behavior (`StaggeredMenu.tsx`)

### Initial state (`useLayoutEffect` + `gsap.context`)

- Panel and each `.sm-prelayer` start off-screen: `xPercent: 100` (right) or `-100` (left), depending on `position`.
- Optional built-in header: plus icon and Menu/Close text initial transforms (when `hideHeader` is false).

### Open timeline (`buildOpenTimeline` → `playOpen`)

1. **Pre-layers** — Colored strips (from `colors` prop, processed to avoid a duplicate middle color when ≥3 colors). Each layer tweens `xPercent` from offset to `0` with **stagger** (`~0.07s` between layers), `ease: power4.out`.
2. **Main panel** — Slides in after pre-layers with `duration ~0.65`, `power4.out`.
3. **Nav labels** — `.sm-panel-itemLabel` elements start at `yPercent: 140`, `rotate: 10`; tween to `0` with **stagger** (`each: 0.1`).
4. **Numbering** (if `displayItemNumbering`) — CSS variable `--sm-num-opacity` on `.sm-panel-item` from `0` → `1` with stagger.
5. **Socials** — Title opacity; links from `y: 25, opacity: 0` to neutral with stagger.

### Close (`playClose`)

- Kills open timeline; tweens **pre-layers + panel** together off-screen (`power3.in`, ~0.32s).
- Resets label/social DOM state for the next open.

### Ref API (`useImperativeHandle`)

- **`toggle()`** — Opens or closes with full animation sequence.
- **`close()`** — Idempotent close when open.

### Other interactions

- **Escape** — `window` keydown closes when open.
- **Click away** — If `closeOnClickAway` and click target is outside `panelRef` and not inside `externalToggleRef` or internal toggle, `closeMenu()` runs.

## CSS layering (`StaggeredMenu.css`)

| Layer | Role |
|--------|------|
| `.staggered-menu-wrapper` | Default: relative; with `.fixed-wrapper`: `fixed` full viewport, `pointer-events: none`, `overflow: hidden`. |
| `.sm-prelayers` | Same width band as panel (`clamp(340px, 52vw, 720px)`), `z-index: 5`, `pointer-events: none`. |
| `.staggered-menu-panel` | White panel, full height, scrollable, `z-index: 10`, **`pointer-events: auto`**. |

Panel width matches pre-layers so the stagger reads as one sliding column.

## Site-specific props (`SiteHeader`)

```tsx
<StaggeredMenu
  ref={staggeredMenuRef}
  isFixed
  hideHeader
  externalToggleRef={menuToggleRef}
  position="right"
  items={staggeredMenuItems}
  socialItems={staggeredSocialItems}
  displaySocials
  displayItemNumbering
  colors={["#ebbd45", "#1a1612"]}
  accentColor="#ebbd45"
  menuButtonColor="#1a1612"
  openMenuButtonColor="#1a1612"
  changeMenuColorOnOpen={false}
  onMenuOpen={() => setStaggeredOpen(true)}
  onMenuClose={() => setStaggeredOpen(false)}
/>
```

- **`hideHeader`** — Logo + Menu/Close UI inside `StaggeredMenu` is omitted; header uses its own hamburger.
- **`externalToggleRef`** — The fixed `#nav-menu-toggle` button ref.
- **`colors`** — Pre-layer stripe colors (brand yellow + ink).

## Accessibility & focus

- Toggle: `aria-expanded`, `aria-controls="staggered-menu-panel"`.
- Panel: `aria-hidden={!open}` when closed logic is tied to open state.
- Global focus styles for `#staggered-mobile-nav` and `#nav-menu-toggle` in `src/app/globals.css` (`:focus-visible` with `--brand-yellow`).

## Files to read or change

| File | Purpose |
|------|---------|
| `src/components/ui/StaggeredMenu.tsx` | GSAP logic, markup, ref API |
| `src/components/ui/StaggeredMenu.css` | Layout and stacking |
| `src/components/site/SiteHeader.tsx` | Backdrop, toggle, scroll lock, wiring |
| `src/content/site.ts` | `mainNav`, `menuSocialLinks` |
| `src/app/globals.css` | Focus rings for nav overlay |

## Prompt draft (for reimplementation elsewhere)

Build a full-viewport **right-side drawer** for mobile/tablet breakpoints: **GSAP** animates 1–2 **pre-layers** (colored strips) sliding in with **stagger**, then a **white panel** (`clamp` width, full height). **Nav link titles** animate from below with rotation and **stagger**. Optional numbering and social links fade/slide in after. **React** `forwardRef` exposes `toggle` and `close`. **Pointer-events:** wrapper `none`, panel `auto`; external hamburger **excluded** from click-away. **Escape** closes. **Next.js** `Link` for internal `href`. **CSS:** fixed wrapper, pre-layers same width as panel, z-index stacking. Pass nav + social data from config.

---

*Last aligned with the codebase structure described above; adjust line references if files move.*
