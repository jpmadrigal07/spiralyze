const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '250px',
      'md': '360px',
      'lg': '768px',
      'xl': '1440px',
      '2xl': '1600px',
    },
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    extend: {},
    colors: {
      primary: "#5BC8AF",
      "primary-dark": "#297C6B",
      accent: "#194D44",
      dark: "#333",
      light: "#EAEAEA",
      white: "#FFFFFF",
    },
  },
  variants: {
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
    paintOrder: ['responsive'],
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
  ],
}
