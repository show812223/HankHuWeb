import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Warm, Minimalist, Clean theme with Antique White accent
const lightTheme = {
  dark: false,
  colors: {
    'background': '#FAEBD7', // Antique White - 主背景
    'surface': '#FFFFFF', // White - 卡片/內容區塊
    'surface-bright': '#FFFFFF',
    'surface-light': '#FFF8F0', // 淺暖白色
    'surface-variant': '#F5E6D3', // 暖色調變體
    'on-surface-variant': '#5D4E37', // 暖棕色
    'primary': '#8B7355', // 溫暖棕色
    'primary-darken-1': '#6B5A45',
    'primary-lighten-1': '#A89070',
    'secondary': '#6B8E7A', // 柔和綠色
    'secondary-darken-1': '#557565',
    'secondary-lighten-1': '#89A899',
    'tertiary': '#9C8AA5', // 柔和紫色
    'tertiary-darken-1': '#7D6E85',
    'accent': '#C4956A', // 暖橙色
    'error': '#C75050',
    'info': '#5B8FB9',
    'success': '#6B9B6B',
    'warning': '#D4A04A',
    'on-background': '#333333', // 深灰色文字
    'on-surface': '#333333', // 深灰色文字
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-error': '#FFFFFF',
    'on-info': '#FFFFFF',
    'on-success': '#FFFFFF',
    'on-warning': '#333333',
  },
}

// Warm dark theme
const darkTheme = {
  dark: true,
  colors: {
    'background': '#1A1512', // 暖色調深色背景
    'surface': '#2D2520', // 暖棕色表面
    'surface-bright': '#3D3530',
    'surface-light': '#252018',
    'surface-variant': '#3D3530',
    'on-surface-variant': '#A89B8B',
    'primary': '#D4A574', // 暖金色
    'primary-darken-1': '#B8896A',
    'primary-lighten-1': '#E5C09A',
    'secondary': '#89A899', // 柔和綠色
    'secondary-darken-1': '#6B8E7A',
    'secondary-lighten-1': '#A5C4B5',
    'tertiary': '#B8A5C0', // 柔和紫色
    'tertiary-darken-1': '#9C8AA5',
    'accent': '#E0B088', // 暖橙色
    'error': '#E07070',
    'info': '#7AAED4',
    'success': '#8BBB8B',
    'warning': '#E4B86A',
    'on-background': '#E8DFD5', // 暖白色文字
    'on-surface': '#D9CFC5', // 暖白色文字
    'on-primary': '#1A1512',
    'on-secondary': '#1A1512',
    'on-error': '#FFFFFF',
    'on-info': '#1A1512',
    'on-success': '#1A1512',
    'on-warning': '#1A1512',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme,
        darkTheme,
      },
    },
    defaults: {
      global: {
        ripple: true,
      },
      VAppBar: {
        elevation: 0,
        density: 'comfortable',
      },
      VBtn: {
        variant: 'flat',
        rounded: 'lg',
        elevation: 0,
      },
      VCard: {
        rounded: 'lg',
        elevation: 1, // 極簡風格 - 減少陰影
        variant: 'elevated',
      },
      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
        rounded: 'lg',
        hideDetails: 'auto',
      },
      VTextarea: {
        variant: 'outlined',
        density: 'comfortable',
        rounded: 'lg',
        hideDetails: 'auto',
      },
      VSelect: {
        variant: 'outlined',
        density: 'comfortable',
        rounded: 'lg',
        hideDetails: 'auto',
      },
      VChip: {
        rounded: 'lg',
        size: 'small',
      },
      VList: {
        rounded: 'lg',
      },
      VListItem: {
        rounded: 'lg',
      },
      VSheet: {
        rounded: 'lg',
      },
      VDialog: {
        rounded: 'lg',
      },
      VAvatar: {
        rounded: 'lg',
      },
      VTimeline: {
        density: 'comfortable',
      },
      VDivider: {
        class: 'my-4',
      },
    },
  })
  app.vueApp.use(vuetify)
})
