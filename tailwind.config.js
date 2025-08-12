/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Industry 4.0 Color Palette from PRD
        'industry-dark': '#1F2937', // Deep gray for backgrounds - industrial strength
        'industry-blue': '#1D4ED8', // Electric blue for tech/AI elements
        'industry-orange': '#F97316', // Energy orange for machinery CTAs
        'industry-light': '#F3F4F6', // Light gray for cards/sections
        'industry-white': '#FFFFFF', // Pure white for readability
        
        // Extended palette for more flexibility
        'industry-gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        'industry-accent': {
          blue: '#1D4ED8',
          orange: '#F97316',
          green: '#10B981', // For success states
          red: '#EF4444', // For error states
          yellow: '#F59E0B', // For warnings
        },
        
        // Legacy support for existing components
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          600: '#1D4ED8',
          900: '#1E3A8A',
        },
        secondary: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          600: '#4B5563',
          700: '#374151',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
      },
      fontSize: {
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'circuit-pattern': "url('/circuit-pattern.svg')",
        'tech-gradient': 'linear-gradient(135deg, #1F2937 0%, #1D4ED8 100%)',
        'industry-gradient': 'linear-gradient(135deg, #1F2937 0%, #374151 50%, #1D4ED8 100%)',
      },
      boxShadow: {
        'industry': '0 10px 25px -5px rgba(31, 41, 55, 0.1), 0 10px 10px -5px rgba(31, 41, 55, 0.04)',
        'industry-lg': '0 20px 25px -5px rgba(31, 41, 55, 0.1), 0 10px 10px -5px rgba(31, 41, 55, 0.04)',
      },
    },
  },
  plugins: [],
};