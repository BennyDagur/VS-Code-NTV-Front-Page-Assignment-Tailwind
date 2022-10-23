/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html","public/programming-list-page.html", "public/programming-details-page.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Slab"'],
        montserrat: ['"Montserrat"']
      }
    },
  },
  plugins: [],
}
