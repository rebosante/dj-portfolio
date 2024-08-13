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
          100: '#fff5b9',
          200: '#ffef8b',
          300: '#ffe85d',
          400: '#ffe545',
          500: '#e7b700', // Primary color
          600: '#e6c815',
          700: '#ccb212',
          800: '#b39b10',
          900: '#99850e',
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

