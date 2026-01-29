import Icons from 'unplugin-icons/vite'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 全域 CSS

  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    // Vuetify module hook
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error: Vuetify plugin type
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  ssr: false,

  // https://devtools.nuxt.com
  devtools: { enabled: true },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/animations.css',
    '~/assets/css/main.css',
  ],

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋',
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  // Vite 配置 - unplugin-icons
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      Icons({
        compiler: 'vue3',
        autoInstall: true,
      }),
    ],
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  // Google Fonts - 日系字體
  googleFonts: {
    families: {
      'Noto+Serif+JP': [400, 500, 700],
      'Zen+Maru+Gothic': [400, 500, 700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})
