import Icons from 'unplugin-icons/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 全域 CSS
  css: ['~/assets/css/animations.css', '~/assets/css/main.css'],

  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Vite 配置 - unplugin-icons
  vite: {
    plugins: [
      Icons({
        compiler: 'vue3',
        autoInstall: true,
      }),
    ],
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
  ssr: false,

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋',
    },
  },

  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})
