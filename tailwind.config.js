/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Gill Sans','Graphik', 'sans-serifuse']
    },
    colors: {
      black : '#0f172a',
      white: '#f1f5f9',
      lightblack: '#1e293b'
    }
  },
  plugins: [],
  darkMode: 'class'
};
