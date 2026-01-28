<script setup lang="ts">
import {
  NConfigProvider,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
  NButton,
  NIcon,
  NDrawer,
  NDrawerContent,
  darkTheme,
  type GlobalThemeOverrides,
} from 'naive-ui'

const route = useRoute()
const showMobileMenu = ref(false)
const isMobile = ref(false)

// 主題覆寫 - 日系溫暖色調
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#4E4540',
    primaryColorHover: '#3A3330',
    primaryColorPressed: '#3A3330',
    primaryColorSuppl: '#8B7355',
    borderRadius: '8px',
    borderRadiusSmall: '6px',
    fontFamily: '"Zen Maru Gothic", "Noto Sans TC", sans-serif',
  },
  Card: {
    borderRadius: '12px',
  },
  Button: {
    borderRadiusMedium: '8px',
    borderRadiusLarge: '12px',
  },
  Tag: {
    borderRadius: '999px',
  },
}

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

function checkMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <NLayout class="min-h-screen">
      <!-- 導航列 -->
      <NLayoutHeader class="nav-bar h-20 flex items-center px-6 fixed top-0 left-0 right-0 z-50">
        <div class="max-w-6xl mx-auto w-full flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="logo-link flex items-center no-underline">
            <span class="text-xl font-bold text-primary tracking-widest">胡聖翰</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav v-if="!isMobile" class="flex items-center gap-8">
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
          <NButton v-else text @click="showMobileMenu = true">
            <template #icon>
              <span class="text-2xl">☰</span>
            </template>
          </NButton>
        </div>
      </NLayoutHeader>

      <!-- Mobile Drawer -->
      <NDrawer v-model:show="showMobileMenu" placement="right" :width="280">
        <NDrawerContent title="選單" closable>
          <div class="flex flex-col gap-2 py-4">
            <div
              v-for="item in menuItems"
              :key="item.key"
              class="mobile-menu-item px-4 py-3 rounded-lg cursor-pointer flex justify-between items-center"
              :class="{ 'mobile-menu-item--active': activeKey === item.key }"
              @click="handleMenuSelect(item.key)"
            >
              <span>{{ item.label }}</span>
              <span class="text-sm text-muted">{{ item.titleJa }}</span>
            </div>
          </div>
        </NDrawerContent>
      </NDrawer>

      <!-- Main Content -->
      <NLayoutContent class="pt-20">
        <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
      </NLayoutContent>

      <!-- Footer -->
      <NLayoutFooter class="site-footer py-8 border-t border-primary">
        <div class="max-w-6xl mx-auto px-6">
          <div class="flex flex-col items-center gap-4">
            <!-- 社交連結 -->
            <div class="flex gap-4">
              <a
                href="https://github.com/show812223"
                target="_blank"
                class="footer-link"
                aria-label="GitHub"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/"
                target="_blank"
                class="footer-link"
                aria-label="LinkedIn"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            <!-- 版權 -->
            <p class="text-sm text-muted">
              &copy; {{ new Date().getFullYear() }} Sheng Han Hu
            </p>
          </div>
        </div>
      </NLayoutFooter>
    </NLayout>
  </NConfigProvider>
</template>

<style scoped>
/* 導航列 */
.nav-bar {
  background: rgba(250, 235, 215, 0.9);
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

/* Mobile Menu */
.mobile-menu-item {
  transition: background-color 0.2s ease;
}

.mobile-menu-item:hover {
  background-color: rgba(78, 69, 64, 0.05);
}

.mobile-menu-item--active {
  background-color: rgba(78, 69, 64, 0.1);
  color: var(--color-primary);
}

/* Footer */
.site-footer {
  border-color: var(--color-border);
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
