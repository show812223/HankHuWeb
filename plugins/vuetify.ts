import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// ============================================
// 專業工程師風格主題 (Professional / Tech)
// ============================================
const proLight = {
  dark: false,
  colors: {
    'background': '#FAFBFC',
    'surface': '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#F6F8FA',
    'surface-variant': '#F0F3F6',
    'on-surface-variant': '#57606A',
    'primary': '#0969DA',
    'primary-darken-1': '#0550AE',
    'primary-lighten-1': '#218BFF',
    'secondary': '#6E7781',
    'secondary-darken-1': '#57606A',
    'secondary-lighten-1': '#8C959F',
    'tertiary': '#8250DF',
    'accent': '#0969DA',
    'error': '#CF222E',
    'info': '#0969DA',
    'success': '#1A7F37',
    'warning': '#9A6700',
    'on-background': '#1F2328',
    'on-surface': '#1F2328',
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-error': '#FFFFFF',
    'on-info': '#FFFFFF',
    'on-success': '#FFFFFF',
    'on-warning': '#FFFFFF',
    'border': '#D0D7DE',
    'outline-variant': '#D0D7DE',
  },
}

const proDark = {
  dark: true,
  colors: {
    'background': '#0D1117',
    'surface': '#161B22',
    'surface-bright': '#21262D',
    'surface-light': '#161B22',
    'surface-variant': '#21262D',
    'on-surface-variant': '#8B949E',
    'primary': '#58A6FF',
    'primary-darken-1': '#388BFD',
    'primary-lighten-1': '#79C0FF',
    'secondary': '#8B949E',
    'secondary-darken-1': '#6E7681',
    'secondary-lighten-1': '#B1BAC4',
    'tertiary': '#A371F7',
    'accent': '#58A6FF',
    'error': '#F85149',
    'info': '#58A6FF',
    'success': '#3FB950',
    'warning': '#D29922',
    'on-background': '#E6EDF3',
    'on-surface': '#E6EDF3',
    'on-primary': '#0D1117',
    'on-secondary': '#0D1117',
    'on-error': '#FFFFFF',
    'on-info': '#0D1117',
    'on-success': '#0D1117',
    'on-warning': '#0D1117',
    'border': '#30363D',
    'outline-variant': '#30363D',
  },
}

// ============================================
// 日系溫暖風格主題 (Japanese / Warm)
// ============================================
const japanLight = {
  dark: false,
  colors: {
    'background': '#FAEBD7',
    'surface': '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#FFF8F0',
    'surface-variant': '#F5E6D3',
    'on-surface-variant': '#5D4E37',
    'primary': '#4E4540',
    'primary-darken-1': '#3A3330',
    'primary-lighten-1': '#6B6055',
    'secondary': '#8B7355',
    'secondary-darken-1': '#6B5A45',
    'secondary-lighten-1': '#A89070',
    'tertiary': '#6B8E7A',
    'accent': '#C4956A',
    'error': '#C75050',
    'info': '#5B8FB9',
    'success': '#6B9B6B',
    'warning': '#D4A04A',
    'on-background': '#4E4540',
    'on-surface': '#4E4540',
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-error': '#FFFFFF',
    'on-info': '#FFFFFF',
    'on-success': '#FFFFFF',
    'on-warning': '#4E4540',
    'border': '#E0D8D0',
    'outline-variant': '#E0D8D0',
  },
}

const japanDark = {
  dark: true,
  colors: {
    'background': '#1A1512',
    'surface': '#2D2520',
    'surface-bright': '#3D3530',
    'surface-light': '#252018',
    'surface-variant': '#3D3530',
    'on-surface-variant': '#A89B8B',
    'primary': '#D4A574',
    'primary-darken-1': '#B8896A',
    'primary-lighten-1': '#E5C09A',
    'secondary': '#89A899',
    'secondary-darken-1': '#6B8E7A',
    'secondary-lighten-1': '#A5C4B5',
    'tertiary': '#B8A5C0',
    'accent': '#E0B088',
    'error': '#E07070',
    'info': '#7AAED4',
    'success': '#8BBB8B',
    'warning': '#E4B86A',
    'on-background': '#E8DFD5',
    'on-surface': '#D9CFC5',
    'on-primary': '#1A1512',
    'on-secondary': '#1A1512',
    'on-error': '#FFFFFF',
    'on-info': '#1A1512',
    'on-success': '#1A1512',
    'on-warning': '#1A1512',
    'border': '#4A3F38',
    'outline-variant': '#4A3F38',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: false,
    theme: {
      defaultTheme: 'proLight',
      themes: {
        proLight,
        proDark,
        japanLight,
        japanDark,
      },
    },
    defaults: {
      VCard: {
        elevation: 0,
        variant: 'outlined',
        rounded: 'lg',
      },
      VBtn: {
        elevation: 0,
        variant: 'flat',
        rounded: 'lg',
      },
      VChip: {
        elevation: 0,
        variant: 'tonal',
        rounded: 'pill',
      },
      VTextField: {
        variant: 'outlined',
        rounded: 'lg',
      },
      VSelect: {
        variant: 'outlined',
        rounded: 'lg',
      },
    },
  })
  app.vueApp.use(vuetify)
})
