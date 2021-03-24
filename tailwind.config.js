const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['helvetica', 'sans-serif'],
    },   
    extend: {
      colors: {
        primary: '#374963',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// npx tailwindcss build style.css -o output.css