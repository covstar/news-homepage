/** @type {import('tailwindcss').Config} */
const colors = require ('tailwindcss/colors');

module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '100%': '100%',
      '16': '6rem',
    },
    
    extend: {
      // font family
      fontFamily: {
        Inter: ['Inter'],
        
      },
      // colors 
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Soft_orange': 'hsl(35, 77%, 62%)',
      'Soft_red': 'hsl(5, 85%, 63%)',
      'Off-white': 'hsl(36, 100%, 99%)',
      'Grayish_blue': 'hsl(233, 8%, 79%)',
      'Dark_grayish_blue': 'hsl(236, 13%, 42%)',
      'Very_dark_blue': 'hsl(240, 100%, 5%)',
      
    },
      dropShadow: {
        red: '0 1px 2px rgb(185, 28, 28)',
        black: '0 3px 2px rgb(0, 0, 0)',
      },
      padding: {
        '3%': '3%',
        '5%': '5%',
        '8%': '8%',
        '10%': '10%',
        '12%': '12%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
      },
      margin: {
        '3%': '3%',
        '5%': '5%',
        '8%': '8%',
        '10%': '10%',
        '12%': '12%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '22%': '22%',
        '27%': '27%',
        '25%': '25%',
        '24%': '24%',
        '30%': '30%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '60%': '60%',
      },

      // media quries
      screens: {
        xs: {max: '375px'},
        sm: {max: '720px'},
        // => @media (max-width: 639px) { ... }
        tb: {min: '721px', max: '1111px'},
        // => @media (min-width: 768px and max-width: 1023px)
        md: '722px',
        // => @media (min-width: 768px) { ... }
      },
      backgroundImage: {
        'img': "url('../images/bg-pattern.svg')",
        'headImg': "url('https://covstar.sirv.com/Portfolio_imgs/code.jfif')",

      },
    },
  },
  plugins: [],
};
