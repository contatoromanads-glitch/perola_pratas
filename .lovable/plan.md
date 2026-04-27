## Diagnosis

The screenshot is the **mobile/tablet layout** rendering (preview frame is under the 768px `md` breakpoint, where the SVG-as-background variant kicks in). The desktop two-column grid is intact in code (`hidden md:flex` on the scene, `md:hidden` on the background layer) — but the mobile background is so visually dominant that it reads as "broken" even on tablet widths.

Specific problems visible:
- The aura rings + orbiting particles sit at the same vertical center as the headline → competing focal points.
- Opacity 0.22 + only a soft radial overlay isn't enough contrast in the corners (CTAs and stats float over moving particles).
- The scene is scaled to 115% width, pushing rings into the safe text area on the sides.
- On true tablet widths (≈700–767px) the single-column layout wastes horizontal space — text is centered in a narrow column while the background fills the full width.

## Fix

### 1. Restrict the SVG-as-background to phones only
Change the gate from `md:hidden` (<768px) to `sm:hidden` (<640px). Tablets (640–767px) will use a compact two-column-style stacked layout instead of the background overlay.

### 2. Add a real tablet/desktop layout at `sm` and `md`
- `sm` (≥640px, <768px): keep stacked, but show the SVG scene **below** the text at reduced size (max-w 360px) — clean separation, no overlap.
- `md+` (≥768px): unchanged 5fr/4fr grid (already working).

### 3. Tame the mobile background (phones only)
- Drop scene scale from `115%` → `90%` and shift it up (`-translate-y-6`) so rings sit behind the headline area, not the CTAs.
- Lower opacity from `0.22` → `0.14`.
- Strengthen the overlay: replace the soft radial with a near-opaque vertical gradient that keeps text crisp top-to-bottom, fading to ~40% only near the headline center where a hint of the animation is welcome.
- Add a subtle `backdrop-blur-[2px]` on the text column so any visible particles are softened behind glyphs.

### 4. Re-center mobile text alignment
Currently text is `text-center` on mobile but the stat row uses `justify-center` with three items + a top border that spans full width — looks awkward. Constrain the stat row to `max-w-sm mx-auto` on mobile so the divider line matches the content width.

### Files
- `src/components/Hero.tsx` — adjust breakpoint gates, scene wrapper sizing, stat row max-width, add tablet stacked variant.

### Out of scope
No changes to `HeroScene` internals, animations, or other components. The desktop (≥768px) layout remains exactly as it is today.
