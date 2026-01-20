<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
const menuItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Resume', icon: 'mdi-account', to: '/Resume' },
  { title: 'Projects', icon: 'mdi-file-document', to: '/Projects' },
  { title: 'Contact', icon: 'mdi-email', to: '/Contact' },
]
</script>

<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="surface"
      class="border-b app-bar-blur"
    >
      <div class="px-4 px-md-6 d-flex align-center ga-4">
        <p class="text-h5 font-weight-bold text-primary">
          Sheng Han Hu
        </p>
      </div>
      <v-spacer />
      <template v-if="smAndUp">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          class="mr-2 mr-md-4 nav-link"
        >
          <v-btn
            variant="text"
            class="text-on-surface font-weight-medium"
          >
            {{ item.title }}
          </v-btn>
        </NuxtLink>
      </template>
      <v-menu v-else>
        <template #activator="{ props }">
          <v-btn
            icon
            variant="text"
            v-bind="props"
            class="mr-2"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list class="py-2">
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :prepend-icon="item.icon"
            @click="() => $router.push(item.to)"
          >
            <v-list-item-title class="font-weight-medium">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style>
/* 日系溫暖極簡風格 */
body {
  font-family: 'Zen Maru Gothic', 'Noto Sans TC', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 標題使用襯線體 */
h1, h2, h3, h4, h5, h6,
.text-h1, .text-h2, .text-h3, .text-h4, .text-h5, .text-h6 {
  font-family: 'Noto Serif JP', 'Noto Serif TC', Georgia, serif;
}

/* 卡片預設邊框 */
.v-card {
  border: 1px solid #E0D8D0 !important;
}

/* 暗色模式邊框 */
.v-theme--darkTheme .v-card {
  border-color: #4A3F38 !important;
}

/* 進度條柔和化 */
.v-progress-linear {
  border-radius: 4px;
}
</style>

<style scoped>
.border-b {
  border-bottom: 1px solid #E0D8D0 !important;
}

.nav-link {
  text-decoration: none;
}
</style>
