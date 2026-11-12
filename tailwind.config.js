/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0a0c',
          900: '#111114',
          800: '#1a1a1e',
          700: '#25252b',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        brand: {
          orange: '#f97316',
          green: '#22c55e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
