<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
const route = useRoute()

const menuItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Resume', icon: 'mdi-account', to: '/Resume' },
  { title: 'Projects', icon: 'mdi-folder-multiple', to: '/Projects' },
  { title: 'Contact', icon: 'mdi-email', to: '/Contact' },
]

const isActiveRoute = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>

<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="surface"
      class="nav-bar anim-slide-down anim-delay-400"
      height="72"
    >
      <v-container class="d-flex align-center h-100 px-4 px-md-6">
        <!-- Logo -->
        <NuxtLink to="/" class="logo-link d-flex align-center ga-3">
          <div class="logo-icon">
            <span class="logo-text">H</span>
          </div>
          <span class="text-h6 font-weight-bold text-primary d-none d-sm-block">
            Sheng Han Hu
          </span>
        </NuxtLink>

        <v-spacer />

        <!-- Desktop Navigation -->
        <nav v-if="smAndUp" class="d-flex align-center ga-1">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.title"
            :to="item.to"
            class="nav-link"
          >
            <v-btn
              :variant="isActiveRoute(item.to) ? 'tonal' : 'text'"
              :color="isActiveRoute(item.to) ? 'primary' : 'default'"
              class="nav-btn"
              size="small"
            >
              <v-icon start size="18">{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </NuxtLink>
        </nav>

        <!-- Mobile Menu -->
        <v-menu v-else location="bottom end" :close-on-content-click="true">
          <template #activator="{ props }">
            <v-btn
              icon
              variant="text"
              v-bind="props"
              size="small"
            >
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list class="py-2 mobile-menu" min-width="200">
            <v-list-item
              v-for="item in menuItems"
              :key="item.title"
              :to="item.to"
              :active="isActiveRoute(item.to)"
              active-color="primary"
              class="mobile-menu-item"
            >
              <template #prepend>
                <v-icon size="20">{{ item.icon }}</v-icon>
              </template>
              <v-list-item-title class="font-weight-medium">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>

    <v-main>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </v-main>

    <!-- Footer -->
    <v-footer class="footer py-6">
      <v-container>
        <div class="d-flex flex-column flex-sm-row align-center justify-space-between ga-4">
          <span class="text-body-2 text-medium-emphasis">
            &copy; {{ new Date().getFullYear() }} Sheng Han Hu. All rights reserved.
          </span>
          <div class="d-flex ga-2">
            <v-btn
              href="https://github.com/show812223"
              target="_blank"
              icon
              variant="text"
              size="small"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-btn
              href="https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/"
              target="_blank"
              icon
              variant="text"
              size="small"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-footer>
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

/* Cursor pointer for interactive elements */
.cursor-pointer {
  cursor: pointer;
}
</style>

<style scoped>
.nav-bar {
  border-bottom: 1px solid #E0D8D0 !important;
  backdrop-filter: blur(12px);
  background: rgb(var(--v-theme-surface) / 0.95) !important;
}

.logo-link {
  text-decoration: none;
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logo-icon:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgb(var(--v-theme-primary) / 0.3);
}

.logo-text {
  color: white;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Noto Serif JP', serif;
}

.nav-link {
  text-decoration: none;
}

.nav-btn {
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  transform: translateY(-1px);
}

.mobile-menu {
  border-radius: 12px !important;
  box-shadow: 0 8px 32px rgb(0 0 0 / 0.12) !important;
}

.mobile-menu-item {
  border-radius: 8px;
  margin: 4px 8px;
}

.footer {
  background: rgb(var(--v-theme-surface));
  border-top: 1px solid #E0D8D0;
}
</style>
