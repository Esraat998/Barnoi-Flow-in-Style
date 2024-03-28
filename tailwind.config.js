/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      '2xs': '390px',
      'xs': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'tangelo-orange': '#f04a00',
        'royal-blue': '#002366',
        'carolina-blue': '#4b9cd3',
        'ghost-white': '#F9FAFB',
        'anti-flash-white': '#f3f4f6'
      },
      fontFamily: {
        damion: ['Damion', 'cursive'],
        avita: ['Avita','sans-serif'],
        caveat: ['Caveat', 'cursive'],
        julee: ['Julee', 'cursive']
      },
      backgroundImage: {
        'bgi-img-1': "url('/assets/images/bg-1.png')",
        'bgi-img-2': "url('/assets/images/bg-2.png')",
      }
    },
  },
  plugins: [],
}