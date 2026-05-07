# Mrs Saint Delafield Font Implementation (Draft)

This is the exact pattern used in this app to make **Mrs Saint Delafield** render consistently.

Use this when you want a reliable cursive accent font in another Next.js app.

## 1) Load the font with `next/font/google` in `layout.tsx`

Import `Mrs_Saint_Delafield` and register it with a CSS variable:

```tsx
import { DM_Sans, Mrs_Saint_Delafield, Sansation } from "next/font/google";

const scriptAccent = Mrs_Saint_Delafield({
  variable: "--font-script-face",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
```

Then inject the variable on the `<html>` class list:

```tsx
<html
  lang="en"
  className={`${titleFace.variable} ${sans.variable} ${scriptAccent.variable} h-full scroll-smooth antialiased`}
>
```

Why this matters:
- `variable` exposes a CSS custom property from the font loader.
- Putting it on `<html>` makes the font available app-wide.
- `display: "swap"` avoids invisible text while the font file loads.

## 2) Map the loaded variable to a semantic font token in `globals.css`

Inside your theme variables, map the font face variable to a reusable script token:

```css
@theme inline {
  --font-script: var(--font-script-face), "Brush Script MT", cursive;
}
```

Why this matters:
- `--font-script-face` comes from `next/font`.
- The fallback chain keeps text readable if the webfont fails.
- A semantic token (`--font-script`) decouples component code from loader details.

## 3) Use the script font via utility class in components

Apply `font-script` where you want cursive accents (not long paragraphs):

```tsx
<p className="font-script mt-10 text-[clamp(1.38rem,3.2vw,2rem)] leading-snug text-[color:var(--ink)]">
  Strategy, story, execution: growth you can measure.
</p>
```

## 4) Recommended usage pattern

- Use `font-script` for short accents: taglines, pull-lines, highlighted phrases.
- Keep body and dense content on your primary sans/serif font.
- Pair with slightly larger sizes and relaxed line-height (`leading-snug`) for legibility.

## 5) Common reasons agents fail to reproduce this correctly

If it does not render like the source app, check these in order:

1. Font import typo  
   - Must be exactly `Mrs_Saint_Delafield` from `next/font/google`.

2. Variable not attached to `<html>`  
   - If `${scriptAccent.variable}` is missing on `<html>`, the CSS variable is never exposed.

3. CSS token mismatch  
   - `--font-script` must reference `--font-script-face` exactly.

4. Wrong class in JSX  
   - Components must use `font-script`, not `font-title`/`font-sans`.

5. Cached old CSS/font assets  
   - Restart dev server and hard refresh browser.

## 6) Copy-paste minimal reference

### `app/layout.tsx`

```tsx
import { Mrs_Saint_Delafield } from "next/font/google";

const scriptAccent = Mrs_Saint_Delafield({
  variable: "--font-script-face",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${scriptAccent.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### `app/globals.css`

```css
@import "tailwindcss";

@theme inline {
  --font-script: var(--font-script-face), "Brush Script MT", cursive;
}
```

### Example component

```tsx
export function AccentLine() {
  return <p className="font-script text-3xl leading-snug">Your cursive line</p>;
}
```

---

If you want, this draft can be turned into a team-facing runbook with two variants:
- **Next.js + Tailwind v4** (current setup)
- **Next.js + plain CSS modules** (no Tailwind token dependency)
