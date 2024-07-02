import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'primary-dark-900': '#0E0F13',
        'secondary-dark': '#6E6DF9',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(90deg, rgba(110,109,249,1) 0%, rgba(65,64,147,1) 100%)',
        'custom-radial-gradient':
          'radial-gradient(circle, rgba(110,109,249,0.6055672268907564) 0%, rgba(141,140,249,0.5887605042016807) 47%, rgba(50,50,65,0.9921218487394958) 100%)',
      },
      backdropBlur: {
        '600': '600px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
