import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        header: 'var(--color-header)',
        footer: 'var(--color-footer)',
        forest: {
          DEFAULT: 'var(--color-forest)',
          deep: 'var(--color-forest-deep)',
        },
        seal: {
          DEFAULT: 'var(--color-seal)',
          deep: 'var(--color-seal-deep)',
        },
        paper: 'var(--color-bg-paper)',
        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
        },
        cream: 'var(--color-bg-cream)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent-blue)',
      },
      fontFamily: {
        serif: ['var(--font-noto-serif-sc)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3rem', { lineHeight: '1.15', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
