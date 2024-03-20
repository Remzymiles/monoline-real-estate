/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textColor': {
          'light': '#1E2F4E',
          'dark': '#101929'
        },
        'primaryColor': {
          'light': '#89935ee8',
          'dark': '#6C744A'
        }
      },
      screens: {
        'mobile': {'min':'320px', 'max':'600px'},
        'tablet': {'min':'640px', 'max':'950px'},
        'laptop': '1024px',
      },
    },
  },
  plugins: [],
}