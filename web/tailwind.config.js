/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04151F',
        secondary: '#C7D6D5',
        cust: '#5D737E',
        cusred: '#D81E5B',
      },
    },
  },
  plugins: [],
}
