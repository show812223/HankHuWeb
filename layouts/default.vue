<script setup lang="ts">
const route = useRoute()
const drawer = ref(false)

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
  drawer.value = false
}
</script>

<template>
  <v-app>
    <!-- 導航列 -->
    <v-app-bar elevation="0" class="nav-bar">
      <v-container class="d-flex align-center py-0" style="max-width: 1200px;">
        <NuxtLink to="/" class="text-decoration-none">
          <span class="text-h6 font-weight-bold text-primary" style="letter-spacing: 0.1em;">胡聖翰</span>
        </NuxtLink>

        <v-spacer />

        <!-- Desktop Navigation -->
        <nav class="d-none d-md-flex ga-6">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.key"
            :to="item.key"
            class="nav-link"
            :class="{ 'nav-link--active': activeKey === item.key }"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <v-btn icon="mdi-menu" variant="text" class="d-md-none" @click="drawer = true" />
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" location="right" temporary width="280">
      <v-list-item title="選單" />
      <v-divider />
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.key"
          :active="activeKey === item.key"
          @click="handleMenuSelect(item.key)"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
          <template #append>
            <span class="text-medium-emphasis text-body-2">{{ item.titleJa }}</span>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />

      <!-- Footer -->
      <v-footer class="bg-transparent py-8">
        <v-container style="max-width: 1200px;">
          <div class="d-flex flex-column align-center ga-4">
            <!-- 社交連結 -->
            <div class="d-flex ga-3">
              <v-btn
                icon="mdi-github"
                variant="outlined"
                size="small"
                href="https://github.com/show812223"
                target="_blank"
              />
              <v-btn
                icon="mdi-linkedin"
                variant="outlined"
                size="small"
                href="https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/"
                target="_blank"
              />
            </div>
            <p class="text-body-2 text-medium-emphasis">
              &copy; {{ new Date().getFullYear() }} Sheng Han Hu
            </p>
          </div>
        </v-container>
      </v-footer>
    </v-main>
  </v-app>
</template>

<style scoped>
.nav-bar {
  background: rgba(250, 235, 215, 0.9) !important;
  backdrop-filter: blur(8px);
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: rgb(var(--v-theme-on-background));
  font-size: 0.875rem;
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

.nav-link:hover,
.nav-link--active {
  color: rgb(var(--v-theme-primary));
}

.nav-link:hover::after,
.nav-link--active::after {
  width: 100%;
}
</style>
