// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

const lightTheme = {
  dark: false,
  colors: {
    'background': '#F5F5F5',
    'surface': '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#FAFAFA',
    'surface-variant': '#E8EAF6',
    'on-surface-variant': '#424242',
    'primary': '#5C6BC0',
    'primary-darken-1': '#3949AB',
    'primary-lighten-1': '#7986CB',
    'secondary': '#26A69A',
    'secondary-darken-1': '#00897B',
    'secondary-lighten-1': '#4DB6AC',
    'tertiary': '#7E57C2',
    'tertiary-darken-1': '#5E35B1',
    'accent': '#FF7043',
    'error': '#EF5350',
    'info': '#42A5F5',
    'success': '#66BB6A',
    'warning': '#FFA726',
    'on-background': '#212121',
    'on-surface': '#424242',
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    'on-error': '#FFFFFF',
    'on-info': '#FFFFFF',
    'on-success': '#FFFFFF',
    'on-warning': '#212121',
  },
}

const darkTheme = {
  dark: true,
  colors: {
    'background': '#0D1117',
    'surface': '#161B22',
    'surface-bright': '#21262D',
    'surface-light': '#1C2128',
    'surface-variant': '#30363D',
    'on-surface-variant': '#8B949E',
    'primary': '#7986CB',
    'primary-darken-1': '#5C6BC0',
    'primary-lighten-1': '#9FA8DA',
    'secondary': '#4DB6AC',
    'secondary-darken-1': '#26A69A',
    'secondary-lighten-1': '#80CBC4',
    'tertiary': '#B39DDB',
    'tertiary-darken-1': '#9575CD',
    'accent': '#FF8A65',
    'error': '#F44336',
    'info': '#64B5F6',
    'success': '#81C784',
    'warning': '#FFB74D',
    'on-background': '#E6EDF3',
    'on-surface': '#C9D1D9',
    'on-primary': '#000000',
    'on-secondary': '#000000',
    'on-error': '#FFFFFF',
    'on-info': '#000000',
    'on-success': '#000000',
    'on-warning': '#212121',
  },
}

export default defineVuetifyConfiguration({
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
      elevation: 2,
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
