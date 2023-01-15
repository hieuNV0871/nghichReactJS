/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        'search': 'min((100vh - 96px) - 60px, 734px)',
      }
    },
  },
  plugins: [],
}