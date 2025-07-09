/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003B73', // CMF Blue
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CCFF',
          300: '#66B2FF',
          400: '#3399FF',
          500: '#007FFF',
          600: '#0066CC',
          700: '#004D99',
          800: '#003B73',
          900: '#002A52',
        },
        accent: {
          DEFAULT: '#FF6B35', // Safety Orange
          50: '#FFF4F2',
          100: '#FFEBE5',
          200: '#FFD6CC',
          300: '#FFC2B3',
          400: '#FFAD99',
          500: '#FF9980',
          600: '#FF8566',
          700: '#FF704D',
          800: '#FF6B35',
          900: '#E55A2B',
        },
        industrial: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#80868B',
          700: '#5F6368',
          800: '#3C4043',
          900: '#202124',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        industrial: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}