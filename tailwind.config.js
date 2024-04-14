const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(235, 24%, 19%)',
      },
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'mobile-light': 'url(./src/images/bg-mobile-light.jpg)',
        'mobile-dark': 'url(./src/images/bg-mobile-dark.jpg)',
        'desktop-light': 'url(./src/images/bg-desktop-light.jpg)',
        'desktop-dark': 'url(./src/images/bg-desktop-dark.jpg)',
      },
    },
  },
  plugins: [],
};
