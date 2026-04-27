## Problem

After the mobile-first refactor, the Hero SVG animation is not appearing reliably on tablet (768–1024px) and may feel missing on desktop. Root causes in `src/components/Hero.tsx`:

1. The desktop scene is wrapped in `<div className="hidden md:flex order-2 justify-end items-center w-full">` inside a `md:grid-cols-[5fr_4fr]` grid. At tablet widths the right column collapses to a narrow strip and the SVG (with `aspect-[4/5]` + `w-full`) becomes very small and visually disappears next to the large headline.
2. `justify-end` on a `w-full` child has no effect, so layout intent is unclear.
3. The mobile background scene is gated by `md:hidden`, so between 768px and ~1024px (tablet) we get the desktop layout but with too little room for the scene.

## Fix

Make the animation visibly present on every breakpoint by adjusting the Hero layout in `src/components/Hero.tsx` only (no CSS keyframe changes needed — the animation itself works).

### Changes in `src/components/Hero.tsx`

1. **Use `lg` as the split breakpoint instead of `md`.** Below `lg` (1024px) keep the immersive background-scene treatment used on mobile so the animation stays prominent behind the text on phones AND tablets. At `lg+` switch to the side-by-side grid.
   - Change `md:hidden` background wrapper → `lg:hidden`.
   - Change `hidden md:flex` desktop wrapper → `hidden lg:flex`.
   - Change grid `md:grid-cols-[5fr_4fr]` → `lg:grid-cols-[5fr_4fr]`.
   - Update text-align and items helpers from `md:` → `lg:` accordingly.

2. **Give the desktop scene real room.** Replace `w-full max-w-[520px]` on the inner wrapper with a min-width guarantee and remove the redundant `justify-end` + `w-full` combo. Use `min-w-[380px] w-[clamp(380px,38vw,560px)]` so the SVG always renders at a visible size on `lg` and up.

3. **Slightly stronger background scene on tablet.** Raise opacity from `0.22` to `0.32` and remove the blur for tablet so it reads as an intentional hero visual, not a faint texture. Achieve this with responsive classes: `opacity-[0.28] md:opacity-[0.4] blur-0` and tone the radial overlay down on `md` so the scene is more visible.

4. **Sanity guard.** Ensure the `<HeroScene />` wrapper uses `aspect-[4/5]` and is not constrained by parent flex `items-center` collapsing height — wrap it in a block container with explicit `flex-shrink-0`.

No changes are needed to `src/index.css`, the SVG markup, or any other component.

## Files to edit

- `src/components/Hero.tsx`

## Verification

- Build with `bunx vite build`.
- Visually confirm at three widths: 390px (mobile — animation as background), 820px (tablet — animation as background, more visible), 1280px (desktop — animation as side panel, ~480–520px wide).
