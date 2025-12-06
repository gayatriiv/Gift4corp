/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'site-bg': '#FAF7F2',
        'section-bg': '#F3F3F3',
      },
      backgroundColor: {
        'default': '#FAF7F2',
      }
    },
  },
  plugins: [],
}

