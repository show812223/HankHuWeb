// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

const lightTheme = {
    dark: false,
    colors:{
        // main: '#F0E5DE'
    }
}
const darkTheme = {
    dark: true,
    colors:{}
}

export default defineVuetifyConfiguration({
    /* vuetify options */
    theme:{
        defaultTheme: 'lightTheme',
        themes: {
            lightTheme,
            darkTheme
        }
    }
})
