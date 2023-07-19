/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens :{
        'max-md' : {'max': '1024px'},
      },
      colors: {
        'blue': '#0085FF',
        'red' : '#FF1818',
        'green' : '#00B612',
        'yellow' : '#FD9902',
        'blue_bg' : '#d5e9ff',
        'red_bg' : '#FFE3E3',
        'green_bg' : '#C3FFBE',
        'yellow_bg' : '#FFEDD2',

        // Light theme colors
        'l_grey' : '#a2a2a2',
        'l_light_grey' : '#E3E1E3',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

