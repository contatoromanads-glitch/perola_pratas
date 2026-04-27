import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        surface: {
          0: 'hsl(var(--surface-0))',
          1: 'hsl(var(--surface-1))',
          2: 'hsl(var(--surface-2))',
          3: 'hsl(var(--surface-3))',
          light: 'hsl(var(--surface-light))',
        },
        // Texto semântico — todos AA
        primary: 'hsl(var(--text-primary))',
        secondary: 'hsl(var(--text-secondary))',
        tertiary: 'hsl(var(--text-tertiary))',
        muted: 'hsl(var(--text-muted))',
        // Brand
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          hover: 'hsl(var(--accent-hover))',
          soft: 'hsl(var(--accent-soft))',
          on: 'hsl(var(--accent-on))',
        },
        // Bordas (usadas com opacidade no JSX)
        'border-subtle': 'hsl(var(--border-subtle) / 0.10)',
        'border-strong': 'hsl(var(--border-strong) / 0.22)',

        // ─── Aliases legados (compat) ───
        bg: {
          a: 'hsl(var(--bg-a))',
          b: 'hsl(var(--bg-b))',
          c: 'hsl(var(--bg-c))',
        },
        forest: {
          DEFAULT: 'hsl(var(--text-primary))',
          mid: 'hsl(var(--text-secondary))',
          soft: 'hsl(var(--text-secondary))',
        },
        teal: {
          DEFAULT: 'hsl(var(--accent))',
          dark: 'hsl(var(--accent-hover))',
        },
        cream: 'hsl(var(--accent-on))',
        card: 'hsl(var(--surface-2) / 0.85)',
        border: 'hsl(var(--border-subtle) / 0.10)',
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
