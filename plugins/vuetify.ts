import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

// 日系溫暖極簡主題
const lightTheme = {
  dark: false,
  colors: {
    'background': '#FAEBD7', // Antique White - 主背景
    'surface': '#FFFFFF', // White - 卡片/內容區塊
    'surface-bright': '#FFFFFF',
    'surface-light': '#FFF8F0',
    'surface-variant': '#F5E6D3',
    'on-surface-variant': '#5D4E37',
    'primary': '#4E4540', // 深暖灰色/茶色 - 日系柔和感
    'primary-darken-1': '#3A3330',
    'primary-lighten-1': '#6B6055',
    'secondary': '#8B7355', // 溫暖棕色
    'secondary-darken-1': '#6B5A45',
    'secondary-lighten-1': '#A89070',
    'tertiary': '#6B8E7A', // 柔和綠色
    'accent': '#C4956A',
    'error': '#C75050',
    'info': '#5B8FB9',
    'success': '#6B9B6B',
    'warning': '#D4A04A',
    'on-background': '#4E4540', // 與 primary 統一
    'on-surface': '#4E4540',
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-error': '#FFFFFF',
    'on-info': '#FFFFFF',
    'on-success': '#FFFFFF',
    'on-warning': '#4E4540',
    'border': '#E0D8D0', // 極細邊框色
  },
}

// 暖色深色主題
const darkTheme = {
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
      // 全域預設：去除陰影、使用邊框
      VCard: {
        elevation: 0,
        variant: 'flat',
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
        rounded: 'lg',
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
