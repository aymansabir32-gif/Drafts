# HYLIOX — Templates Landing Page

A single-page, cinematic dark portfolio landing page built with
React + Vite + TypeScript + Tailwind CSS + GSAP + Framer Motion + hls.js.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## What's inside

| Section | Component | Notes |
|---|---|---|
| Loading screen | `LoadingScreen.tsx` | 3s monogram shimmer, ease-out fade, skipped under reduced motion |
| Hero | `Hero.tsx` | Full-bleed hls.js video bg, dust layer, staggered Framer Motion entrance |
| Templates | `BentoGrid.tsx` | 8-tile asymmetric bento, GSAP scroll reveal |
| How it works | `HowItWorks.tsx` | 3 steps, alternating layout, GSAP ScrollTrigger pin on desktop (≥1024px) |
| Social proof | `SocialProof.tsx` | Stats + testimonial wall |
| Pricing | `Pricing.tsx` | 3 tiers, lime-highlighted middle card |
| FAQ | `FAQ.tsx` | Accessible accordion (Framer Motion height/opacity transition) |
| Final CTA | `FinalCTA.tsx` | Radial lime glow + infinite marquee |
| Footer | `Footer.tsx` | 3 columns + brand mark |

Shared content (copy, template list, pricing, FAQ) lives in `src/data/content.ts`
— edit that file to change page copy without touching component markup.

## Swapping the hero video

`Hero.tsx` points `useHls` at a public demo stream:

```ts
const HERO_VIDEO_SRC = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
```

Replace this with your own `.m3u8` manifest URL. `hls.js` is dynamically
imported, so it only loads once the hero mounts and never blocks the
initial bundle.

## Design system

Restyled with an **Amundi Asset Management–inspired** palette: a deep
institutional navy (`#060B16`) in place of pure black, and a bright/navy
duotone blue accent (`#0092D0` / `#00294D`) in place of acid lime — evoking
the trust-and-clarity register of a major European asset manager rather
than the original neon dev-tool aesthetic. This is a mood reference, not
an official Amundi asset: no Amundi logo, wordmark, or exact brand hex
values are used. All tokens live in `tailwind.config.ts` under `obsidian`,
`accent`, and `accent-deep` — swap those three values to retheme the whole
page again. Fonts are loaded from Google Fonts in `index.html`:
Instrument Serif (display), Inter (Geist fallback), JetBrains Mono (Geist
Mono fallback). Swap in real Geist / Geist Mono via `@fontsource/geist`
if you have a license/preference for the exact family.

## Accessibility & performance

- Keyboard-reachable interactive elements, visible 2px lime focus rings
- `prefers-reduced-motion` disables the loader, GSAP scroll effects, and
  Framer Motion animations (via `MotionConfig reducedMotion="user"`)
- Below-the-fold sections render as static gradient placeholders instead
  of images — swap in AVIF/WebP assets with `loading="lazy"` when real
  template screenshots are available
- `hls.js`, GSAP, and Framer Motion are each split into their own chunk
  (`vite.config.ts` → `build.rollupOptions.output.manualChunks`)
