<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

// 主題配置
const colorSchemes = [
  { id: 'pro', name: 'Tech', icon: 'mdi-laptop', light: 'proLight', dark: 'proDark', color: '#0969DA' },
  { id: 'japan', name: '日系', icon: 'mdi-flower-outline', light: 'japanLight', dark: 'japanDark', color: '#4E4540' },
]

// 當前狀態
const currentScheme = ref('pro')
const isDark = ref(false)

// 從 localStorage 讀取設定
onMounted(() => {
  const savedScheme = localStorage.getItem('colorScheme') || 'pro'
  const savedDark = localStorage.getItem('isDark') === 'true'
  currentScheme.value = savedScheme
  isDark.value = savedDark
  applyTheme()
})

// 切換配色方案
function setColorScheme(schemeId: string) {
  currentScheme.value = schemeId
  localStorage.setItem('colorScheme', schemeId)
  applyTheme()
}

// 切換深淺模式
function toggleDarkMode() {
  isDark.value = !isDark.value
  localStorage.setItem('isDark', String(isDark.value))
  applyTheme()
}

// 應用主題
function applyTheme() {
  const scheme = colorSchemes.find(s => s.id === currentScheme.value)
  if (scheme) {
    theme.global.name.value = isDark.value ? scheme.dark : scheme.light
  }
}
</script>

<template>
  <div class="theme-switcher d-flex align-center ga-1">
    <!-- 配色方案切換 -->
    <v-btn-toggle
      :model-value="currentScheme"
      mandatory
      density="compact"
      variant="outlined"
      divided
      class="scheme-toggle"
    >
      <v-btn
        v-for="scheme in colorSchemes"
        :key="scheme.id"
        :value="scheme.id"
        size="small"
        @click="setColorScheme(scheme.id)"
      >
        <v-icon size="16" :style="{ color: currentScheme === scheme.id ? scheme.color : undefined }">
          {{ scheme.icon }}
        </v-icon>
      </v-btn>
    </v-btn-toggle>

    <!-- 深淺模式切換 -->
    <v-btn
      icon
      variant="text"
      size="small"
      @click="toggleDarkMode"
    >
      <v-icon size="18">
        {{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
      </v-icon>
    </v-btn>
  </div>
</template>

<style scoped>
.scheme-toggle {
  border-radius: 8px !important;
}

.scheme-toggle :deep(.v-btn) {
  min-width: 36px !important;
}
</style>
