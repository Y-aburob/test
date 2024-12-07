/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        lightwhite: 'rgba(255, 255, 255, .4)',
        lightwhiteHover: 'rgba(255, 255, 255, .7)',
      }
    },
  },
  plugins: [],
}

