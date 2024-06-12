/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js,css}'],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
  },
  plugins: [],
}

