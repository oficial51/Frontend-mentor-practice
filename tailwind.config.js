/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');



module.exports = {

  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xl: '1.39rem'
      },
      fontFamily: {
        Outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],},
      },
      
        colors:{
          grayText: '#a0a3aa',
          blueText: '#202c42',
          white:  '#ffffff',
        background: '#d5e1ef'
      },
      
    
  plugins: [],
  }
}
