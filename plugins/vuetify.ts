import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'japanese',
      themes: {
        japanese: {
          dark: false,
          colors: {
            'background': '#FAEBD7',
            'surface': '#FFFFFF',
            'primary': '#4E4540',
            'primary-darken-1': '#3A3330',
            'secondary': '#8B7355',
            'secondary-darken-1': '#6B5340',
            'success': '#6B9B6B',
            'warning': '#D4A04A',
            'error': '#C75050',
            'info': '#5C8FB8',
          },
        },
      },
    },
    defaults: {
      VCard: {
        rounded: 'lg',
        elevation: 0,
      },
      VBtn: {
        rounded: 'lg',
      },
      VChip: {
        rounded: 'pill',
      },
      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
      },
      VTextarea: {
        variant: 'outlined',
        density: 'comfortable',
      },
    },
  })
  app.vueApp.use(vuetify)
})
