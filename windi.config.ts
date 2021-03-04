import { defineConfig } from 'vite-plugin-windicss'

import colors from 'windicss/colors'
import typographyPlugin from 'windicss/plugin/typography'
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'
import aspectRatioPlugin from 'windicss/plugin/aspect-ratio'

export default defineConfig({
  darkMode: 'class',
  container: {
    center: true,
    padding: {
      DEFAULT: '1.25rem',
    },
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
  plugins: [typographyPlugin(), scrollSnapPlugin, aspectRatioPlugin],
})
