const colors = require('windicss/colors')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('windicss/plugin/scroll-snap'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
      },
    },
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
}
