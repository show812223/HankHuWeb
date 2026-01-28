<script setup lang="ts">
import {
  NConfigProvider,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NButton,
  NDrawer,
  NDrawerContent,
  type GlobalThemeOverrides,
} from 'naive-ui'
import MdiMenu from '~icons/mdi/menu'
import MdiGithub from '~icons/mdi/github'
import MdiLinkedin from '~icons/mdi/linkedin'

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
              <MdiMenu class="text-2xl" />
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
