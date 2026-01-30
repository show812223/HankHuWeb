import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'warmTheme',
      themes: {
        warmTheme: {
          dark: false,
          colors: {
            background: '#FAEBD7',
            surface: '#FFFFFF',
            'surface-variant': '#F5EDE4',
            primary: '#4E4540',
            'primary-darken-1': '#3A3330',
            secondary: '#8B7355',
            'secondary-darken-1': '#6B5740',
            error: '#B00020',
            info: '#6B9B6B',
            success: '#6B9B6B',
            warning: '#D4A04A',
            'on-background': '#4E4540',
            'on-surface': '#4E4540',
            'on-primary': '#FFFFFF',
            'on-secondary': '#FFFFFF',
          },
        },
      },
    },
    defaults: {
      VCard: {
        elevation: 0,
        rounded: 'lg',
      },
      VBtn: {
        rounded: 'lg',
        variant: 'flat',
      },
      VChip: {
        rounded: 'pill',
        size: 'small',
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
