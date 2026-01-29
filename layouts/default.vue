<script setup lang="ts">
import MdiMenu from '~icons/mdi/menu'
import MdiGithub from '~icons/mdi/github'
import MdiLinkedin from '~icons/mdi/linkedin'

const route = useRoute()
const showMobileMenu = ref(false)

const menuItems = [
  { label: 'Home', key: '/', titleJa: 'ホーム' },
  { label: 'Resume', key: '/Resume', titleJa: '履歴' },
  { label: 'Projects', key: '/Projects', titleJa: '作品' },
  { label: 'Contact', key: '/Contact', titleJa: '連絡' },
]

const activeKey = computed(() => {
  if (route.path === '/') return '/'
  return menuItems.find(item => route.path.startsWith(item.key) && item.key !== '/')?.key || '/'
})

function handleMenuSelect(key: string) {
  navigateTo(key)
  showMobileMenu.value = false
}
</script>

<template>
  <v-layout class="min-h-screen flex-column">
    <!-- 導航列 -->
    <v-app-bar
      class="nav-bar"
      elevation="0"
      height="80"
    >
      <v-container
        class="d-flex align-center justify-space-between"
        style="max-width: 1152px;"
      >
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="logo-link d-flex align-center text-decoration-none"
        >
          <span
            class="text-h6 font-weight-bold text-primary"
            style="letter-spacing: 0.2em;"
          >胡聖翰</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="d-none d-md-flex align-center ga-8">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.key"
            :to="item.key"
            class="nav-link"
            :class="{ 'nav-link--active': activeKey === item.key }"
          >
            <span class="nav-link-text">{{ item.label }}</span>
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <v-btn
          icon
          variant="text"
          class="d-md-none"
          @click="showMobileMenu = true"
        >
          <MdiMenu class="text-h5" />
        </v-btn>
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer
      v-model="showMobileMenu"
      location="right"
      temporary
      width="280"
    >
      <v-list-item class="py-4">
        <v-list-item-title class="text-h6">
          選單
        </v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.key"
          :active="activeKey === item.key"
          @click="handleMenuSelect(item.key)"
        >
          <template #default>
            <div class="d-flex justify-space-between align-center w-100">
              <span>{{ item.label }}</span>
              <span class="text-caption text-medium-emphasis">{{ item.titleJa }}</span>
            </div>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="pt-20">
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </v-main>

    <!-- Footer -->
    <v-footer class="site-footer py-8 border-t">
      <v-container style="max-width: 1152px;">
        <div class="d-flex flex-column align-center ga-4">
          <!-- 社交連結 -->
          <div class="d-flex ga-4">
            <a
              href="https://github.com/show812223"
              target="_blank"
              class="footer-link"
              aria-label="GitHub"
            >
              <MdiGithub class="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/"
              target="_blank"
              class="footer-link"
              aria-label="LinkedIn"
            >
              <MdiLinkedin class="w-5 h-5" />
            </a>
          </div>

          <!-- 版權 -->
          <p class="text-body-2 text-medium-emphasis">
            &copy; {{ new Date().getFullYear() }} Sheng Han Hu
          </p>
        </div>
      </v-container>
    </v-footer>
  </v-layout>
</template>

<style scoped>
/* 導航列 */
.nav-bar {
  background: rgba(250, 235, 215, 0.9) !important;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.logo-link {
  text-decoration: none;
}

/* 導航連結 */
.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--color-text);
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
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after,
.nav-link--active::after {
  width: 100%;
}

.nav-link--active {
  color: var(--color-primary);
}

/* Footer */
.site-footer {
  background: transparent !important;
  border-color: var(--color-border) !important;
}

.footer-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: var(--color-primary);
  border-color: rgba(78, 69, 64, 0.3);
  background: rgba(78, 69, 64, 0.05);
}
</style>
