/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': {
          'light': '#89935ee8',
          'dark': '#6C744A',
          'cream': '#e9ebe0',
          'lightCream': '#f4f5ef'
        },
        'secondaryColor': {
          'light': '#1E2F4E',
          'lighter': '#7e9acd',
          'dark': '#101929'
        }
      },
      screens: {
        'mobile': { 'min': '320px', 'max': '630px' },
        'mobile-above': { 'min': '320px' },
        'tablet-below': { 'max': '950px' },
        'tablet': { 'min': '640px', 'max': '950px' },
        'laptop': '1024px',
      },
    },
  },
  plugins: [],
}