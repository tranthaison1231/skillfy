/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#FAFF00'
      },
      height: {
        41: '10.25rem'
      },
      margin: {
        106: '26.5rem',
        62.5: '15.625rem',
        30: '7.5rem'
      },
      padding: {
        13: '3.25rem'
      },
      gap: {
        30: '7.5rem',
        18.75: '4.6875rem'
      }
    }
  },
  plugins: []
}
