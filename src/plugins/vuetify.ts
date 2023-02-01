import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1b75ba',
          secondary: '#666666',
          success: '#41B883',
          light: '#cccccc',
          white: '#ffffff',
          danger: '#ff3a1e',
          dark: '#333333'
        },
      },
      dark: {
        colors: {
          primary: '#1b75ba',
          secondary: '#666666',
          success: '#41B883',
          light: '#cccccc',
          white: '#ffffff',
          danger: '#ff3a1e',
          dark: '#333333'
        }
      }
    },
  },
})
