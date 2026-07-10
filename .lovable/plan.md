# Vestige — Signature Wow Pack (Phase 1 of 4)

Building items **1, 2, 6, 10, 20** from your list. Real WebGL where it earns its weight; Lenis + GSAP everywhere else. Everything reuses the existing Bone/Ink/Sage design tokens — no visual rebrand, just a new depth of craft.

## What ships

### 1. Cinematic WebGL hero (item 1)
- New `HeroCanvas` (react-three-fiber) replaces the current homepage hero image.
- A floating hero object (blackened-oak vessel primitive built from `<Cylinder>` + subtle displacement) drifts on an invisible plinth.
- Mouse position rotates the object (±12°, damped via `lerp`); a soft spotlight tracks the cursor.
- Grain shader overlay + vignette in a fullscreen post-process pass.
- Framer Motion staggers the eyebrow → serif headline → subcopy reveal on mount.
- On scroll-down, the canvas fades and scales as the next section rises (GSAP ScrollTrigger).
- Reduced-motion + no-WebGL fallback → current static hero image.

### 2. Bento product categories (item 2)
Replaces the equal 3-tile category grid on the homepage with an asymmetric bento:

```text
┌──────────────────────┬─────────────┐
│                      │   Ceramics  │
│      Furniture       ├─────────────┤
│      (tall hero)     │   Textiles  │
├──────────┬───────────┴─────────────┤
│  Object  │        New arrivals     │
│  of the  │        (wide card)      │
│  week    │                         │
└──────────┴─────────────────────────┘
```
- CSS grid with named areas; collapses to stacked on mobile.
- Hover: image scale 1.06 (1400ms ease-out), tonal wash shift, category label slides up, custom cursor morphs to "View →".

### 6. Product cards that feel alive (item 6)
Upgrades the shared `ProductCard`:
- Hover tilts the image 6° on the Y axis (Framer `useMotionValue` + `transform-style: preserve-3d`).
- Deeper layered shadow + sage glow ring fades in.
- Price row slides up 8px; "Quick View" pill fades in from below.
- Wishlist heart (new) with fill animation on click; state stored in `useWishlist` Zustand store (persist).
- Applies everywhere `ProductCard` is used — homepage, `/shop`, `/collections/*`.

### 10. Storytelling sections (item 10)
Adds two new homepage sections between hero and best-sellers:
- **Manifesto scene** — full-viewport photograph, huge Playfair headline pinned while a shorter body paragraph and pull-quote parallax past it (GSAP pin + `translateY`).
- **Material study** — split editorial: left column oversized number ("01 · Clay"), right column silent close-up crop; three panels scroll horizontally (item 14 preview) inside a pinned track.
- Reused type scale + existing eyebrow utility — no new tokens.

### 20. Signature museum-gallery moment (item 20)
The identity piece. A dedicated homepage act between manifesto and best-sellers:
- A r3f scene renders a dim gallery corridor: three plinths, warm rim lights, camera on a scroll-driven dolly track.
- As the user scrolls the pinned section, the camera glides past each plinth; the active product's name + tagline fades in beside it.
- Clicking a plinth triggers a shared-element transition: the product "lifts" off the plinth (scale + translate + FLIP) and the route pushes to `/product/$slug`. The PDP mounts with the hero image already in position, so the handoff feels continuous.
- Gallery uses the three current best-sellers, pulled via existing `fetchProducts` in the loader.
- Fallback for reduced-motion / no-WebGL: a static three-up editorial row with the same click-through.

## Technical details

**New dependencies**
- `three`, `@react-three/fiber`, `@react-three/drei` — WebGL scenes.
- `@react-three/postprocessing` — grain + vignette.
- `gsap` + `@gsap/react` — ScrollTrigger, pin, horizontal scroll.
- `lenis` — smooth scroll, mounted once in `SiteLayout`.

**New files**
- `src/components/hero/hero-canvas.tsx` — r3f hero scene.
- `src/components/hero/hero-fallback.tsx` — static fallback.
- `src/components/home/bento-categories.tsx`.
- `src/components/home/manifesto-scene.tsx`.
- `src/components/home/material-study.tsx` (horizontal-scroll pinned track).
- `src/components/home/gallery-signature.tsx` — museum gallery scene.
- `src/components/site/smooth-scroll-provider.tsx` — Lenis mount (client-only, `useHydrated` guarded).
- `src/hooks/use-hydrated.ts`, `src/hooks/use-prefers-reduced-motion.ts`.
- `src/stores/wishlist.ts` — Zustand persist store.

**Modified**
- `src/components/site/site-layout.tsx` — wraps children in `SmoothScrollProvider`.
- `src/components/site/product-card.tsx` — tilt, glow, quick-view, wishlist.
- `src/routes/index.tsx` — new section composition (hero → bento → manifesto → material study → gallery signature → best-sellers).
- `src/routes/product.$slug.tsx` — reads a shared-element handoff key from router state to skip the intro fade when arriving from the gallery.

**SSR / perf guardrails**
- All r3f components dynamic-imported and rendered only after `useHydrated()` returns true — no `window` in SSR (per `tanstack-execution-model`).
- Lenis mounted client-only; disabled when `prefers-reduced-motion: reduce`.
- Canvases use `dpr={[1, 1.5]}`, `frameloop="demand"` on gallery (only redraws on scroll), and `<Suspense>` around scene contents.
- Hero object is procedural geometry — no external GLB, no extra asset weight.
- Grain overlay is a single 256×256 PNG (~4KB) tiled, not a fragment shader on the main thread.

## Out of scope (later phases)

Explicitly not in this build — logged for the roadmap you already approved:
- Phase 2 (Interaction polish): items 3, 4, 5, 7, 13, 19.
- Phase 3 (Editorial & PDP): items 8, 14 full, 15, 17.
- Phase 4 (Utility): items 9, 11, 12, 16, 18.

Approve and I'll build Phase 1.
