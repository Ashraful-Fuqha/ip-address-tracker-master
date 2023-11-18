/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/js/script.js', './app/**/*{html,js}'],
  theme: {
    extend: {
      colors: {
        Dark_Gray: 'hsl(0, 0%, 59%)',
        Very_Dark_Gray: 'hsl(0, 0%, 17%)',
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      backgroundImage: {
        'desktop_pattern': "url('../../images/pattern-bg-desktop.png')",
        'mobile_pattern': "url('../../images/pattern-bg-mobile.png')",
        'arrow_img' : "url('../../images/icon-arrow.svg')",
      },
    },
  },
  plugins: [],
}

