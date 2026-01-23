import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// 專業工程師風格主題 - 現代科技感
const lightTheme = {
  dark: false,
  colors: {
    'background': '#FAFBFC', // GitHub 風格淺灰背景
    'surface': '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#F6F8FA',
    'surface-variant': '#F0F3F6',
    'on-surface-variant': '#57606A',
    'primary': '#0969DA', // GitHub Blue - 專業科技藍
    'primary-darken-1': '#0550AE',
    'primary-lighten-1': '#218BFF',
    'secondary': '#6E7781', // 中性灰
    'secondary-darken-1': '#57606A',
    'secondary-lighten-1': '#8C959F',
    'tertiary': '#8250DF', // 紫色強調
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

// 深色主題 - 開發者友好
const darkTheme = {
  dark: true,
  colors: {
    'background': '#0D1117', // GitHub Dark
    'surface': '#161B22',
    'surface-bright': '#21262D',
    'surface-light': '#161B22',
    'surface-variant': '#21262D',
    'on-surface-variant': '#8B949E',
    'primary': '#58A6FF', // 亮藍色
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

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: false,
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme,
        darkTheme,
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
