/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        getDarker: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        growUp: {
          '0%': { transform: 'scale(0.3)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      maxHeight: {
        'search': 'min((100vh - 96px) - 60px, 734px)',
      },
      animation: {
        getDarker: 'getDarker .2s ease-in',
        growUp: 'growUp .2s linear'
      }

    },
  },
  plugins: [],
}