/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        jayllow: {
          50: '#f5f7ff',
          100: '#f5e299',
          200: '#f1d466',
          300: '#ecc533',
          400: '#e9be1a',
          500: '#e7b700', // Primary color
          600: '#d0a500',
          700: '#a28000',
          800: '#745c00',
          900: '#453700',
        },
        jayge: {
          50: '#fbfaf8',
          100: '#F6F5ED',
          200: '#f0ece1',
          300: '#e8e2d2',
          400: '#e1d9c3',
          500: '#d9cfb4', // Secondary color
          600: '#aea690',
          700: '#6d685a',
          800: '#413e36',
          900: '#161512',
        },
        // Add more custom colors here
      },
      gridTemplateColumns:
      {
        '40/60': '40% 60%'
      }
    },
  },
  plugins: [],
}

