/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F4A44',
          50: '#EAF1EF',
          100: '#D2E0DC',
          200: '#A5C1B9',
          300: '#78A296',
          400: '#4B8373',
          500: '#2F4A44',
          600: '#263B36',
          700: '#1D2C29',
          800: '#141E1C',
          900: '#0B1311',
        },
        secondary: {
          DEFAULT: '#D8C6A2',
          50: '#FBF8F1',
          100: '#F5EFE0',
          200: '#EBE0C6',
          300: '#E0D0AB',
          400: '#D8C6A2',
          500: '#C9B283',
          600: '#B8975E',
          700: '#977544',
          800: '#6E5430',
          900: '#46341C',
        },
        accent: {
          DEFAULT: '#C89A52',
          50: '#FBF5EA',
          100: '#F6E9D1',
          200: '#EDD2A2',
          300: '#E4BB73',
          400: '#DCA94F',
          500: '#C89A52',
          600: '#A87D3D',
          700: '#836030',
          800: '#5E4422',
          900: '#3A2A14',
        },
        cream: {
          DEFAULT: '#FAFAF8',
          50: '#FFFFFF',
          100: '#FAFAF8',
          200: '#F4F4F0',
          300: '#EDEDE7',
          400: '#E0E0D8',
        },
        ink: {
          DEFAULT: '#333333',
          light: '#555555',
          muted: '#777777',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2.25rem, 5vw, 4.75rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'section': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(47,74,68,0.04), 0 8px 24px rgba(47,74,68,0.06)',
        'card': '0 2px 4px rgba(47,74,68,0.04), 0 24px 48px -12px rgba(47,74,68,0.12)',
        'float': '0 20px 60px -20px rgba(47,74,68,0.25)',
        'glow': '0 0 0 1px rgba(200,154,82,0.2), 0 12px 40px -8px rgba(200,154,82,0.35)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
