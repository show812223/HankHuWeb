<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()
const route = useRoute()

const menuItems = [
  { title: 'Home', titleJa: 'ホーム', to: '/' },
  { title: 'Resume', titleJa: '履歴', to: '/Resume' },
  { title: 'Projects', titleJa: '作品', to: '/Projects' },
  { title: 'Contact', titleJa: '連絡', to: '/Contact' },
]

const isActiveRoute = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}
</script>

<template>
  <v-app>
    <!-- 日式簡約導航 -->
    <v-app-bar
      app
      flat
      color="transparent"
      class="nav-bar anim-fade-in"
      height="80"
    >
      <v-container class="d-flex align-center h-100">
        <!-- Logo -->
        <NuxtLink to="/" class="logo-link d-flex align-center">
          <span class="logo-text text-h6 font-weight-bold text-primary">胡聖翰</span>
        </NuxtLink>

        <v-spacer />

        <!-- Desktop Navigation -->
        <nav v-if="smAndUp" class="d-flex align-center ga-6">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.title"
            :to="item.to"
            class="nav-link"
            :class="{ 'nav-link--active': isActiveRoute(item.to) }"
          >
            <span class="nav-link-text">{{ item.title }}</span>
          </NuxtLink>

          <!-- 主題切換器 -->
          <UiThemeSwitcher />
        </nav>

        <!-- Mobile: Theme Switcher + Menu -->
        <div v-else class="d-flex align-center ga-1">
          <UiThemeSwitcher />
          <v-menu location="bottom end" :close-on-content-click="true">
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
            <v-list class="py-2 mobile-menu" min-width="180">
              <v-list-item
                v-for="item in menuItems"
                :key="item.title"
                :to="item.to"
                :active="isActiveRoute(item.to)"
                active-color="primary"
                class="mobile-menu-item"
              >
                <v-list-item-title class="d-flex align-center justify-space-between">
                  <span>{{ item.title }}</span>
                  <span class="text-caption text-medium-emphasis">{{ item.titleJa }}</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </v-main>

    <!-- 日式簡約頁尾 -->
    <footer class="site-footer py-8">
      <v-container>
        <div class="d-flex flex-column align-center ga-4">
          <!-- 社交連結 -->
          <div class="d-flex ga-4">
            <a
              href="https://github.com/show812223"
              target="_blank"
              class="footer-link"
              aria-label="GitHub"
            >
              <v-icon size="20">mdi-github</v-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/"
              target="_blank"
              class="footer-link"
              aria-label="LinkedIn"
            >
              <v-icon size="20">mdi-linkedin</v-icon>
            </a>
          </div>

          <!-- 版權 -->
          <p class="text-caption text-medium-emphasis">
            &copy; {{ new Date().getFullYear() }} Sheng Han Hu
          </p>
        </div>
      </v-container>
    </footer>
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

/* 卡片邊框顏色跟隨主題 */
.v-card {
  border-color: rgb(var(--v-theme-border)) !important;
}

/* 進度條柔和化 */
.v-progress-linear {
  border-radius: 4px;
}

/* Cursor pointer */
.cursor-pointer {
  cursor: pointer;
}

/* 頁面過渡 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

<style scoped>
/* 導航列 */
.nav-bar {
  background: rgb(var(--v-theme-background) / 0.9) !important;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.logo-link {
  text-decoration: none;
}

.logo-text {
  letter-spacing: 0.1em;
}

/* 導航連結 - 日式簡約 */
.nav-link {
  position: relative;
  text-decoration: none;
  color: rgb(var(--v-theme-on-surface));
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: rgb(var(--v-theme-primary));
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary));
}

.nav-link:hover::after,
.nav-link--active::after {
  width: 100%;
}

.nav-link--active {
  color: rgb(var(--v-theme-primary));
}

/* 手機選單 */
.mobile-menu {
  border-radius: 8px !important;
  border: 1px solid rgb(var(--v-theme-border));
}

.mobile-menu-item {
  margin: 4px 8px;
  border-radius: 6px;
}

/* 頁尾 */
.site-footer {
  border-top: 1px solid rgb(var(--v-theme-border) / 0.5);
}

.footer-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(var(--v-theme-border));
  color: rgb(var(--v-theme-on-surface));
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: rgb(var(--v-theme-primary));
  border-color: rgb(var(--v-theme-primary) / 0.3);
  background: rgb(var(--v-theme-primary) / 0.05);
}
</style>
