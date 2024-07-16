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
      padding: '2rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
    keyframes: {
      goyang: {
        '0%, 100%': {
          trasform: 'rotate (-3deg)'
        },
        '50%': {
          trasform: 'rotate (3deg)'
        },
      },
    },
  },
  plugins: [],
}

