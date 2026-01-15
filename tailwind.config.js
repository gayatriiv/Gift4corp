/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          white: '#FFFFFF',
          'off-white': '#FAFAFA',
          cream: '#F5F5F0',
        },
        accent: {
          DEFAULT: '#FF4D00',
          hover: '#E64500',
          light: '#FFF0EB',
        },
        text: {
          primary: '#000000',
          secondary: '#666666',
          tertiary: '#999999',
          muted: '#CCCCCC',
        },
        border: {
          light: '#E5E5E5',
          medium: '#D0D0D0',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Anton', 'Impact', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(72px, 15vw, 180px)', { lineHeight: '0.85', letterSpacing: '-0.02em' }],
        h1: ['clamp(32px, 5vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(28px, 4vw, 36px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        nav: ['13px', { lineHeight: '1', letterSpacing: '0.05em' }],
        button: ['14px', { lineHeight: '1', letterSpacing: '0.05em' }],
        caption: ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'fade-in-up': 'fadeInUp 500ms ease-out forwards',
        'slide-in-right': 'slideInRight 300ms ease-out forwards',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

