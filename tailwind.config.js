/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
     fontFamily: {
      'karla': 'karla-regular',
      'karla-bold':" karla-bold"
},

    extend: {
  
        colors: {
          'primary': '#1A1D23',
          'secondary': '#F7F7F7',
          'tertiary': '#FFC107',
          'quaternary': '#FF9800',
        }
        

    },
  },
  plugins: [],
}