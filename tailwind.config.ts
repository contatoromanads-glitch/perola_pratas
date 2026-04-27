import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          a: 'var(--bg-a)',
          b: 'var(--bg-b)',
          c: 'var(--bg-c)',
        },
        forest: {
          DEFAULT: 'var(--forest)',
          mid: 'var(--forest-mid)',
          soft: 'var(--forest-soft)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          light: 'var(--muted-light)',
        },
        teal: {
          DEFAULT: 'var(--teal)',
          dark: 'var(--teal-dark)',
        },
        cream: 'var(--cream)',
        card: 'var(--card)',
        'card-border': 'var(--card-border)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
