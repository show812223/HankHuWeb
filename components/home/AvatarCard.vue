<script setup lang="ts">
const socialButtons = [
  { icon: 'mdi-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/' },
  { icon: 'mdi-github', label: 'GitHub', href: 'https://github.com/show812223' },
]
</script>

<template>
  <div class="avatar-card-wrapper">
    <v-card class="avatar-card text-center pa-8">
      <!-- 頭像 -->
      <div class="avatar-wrapper mb-6">
        <v-avatar size="140" class="avatar-main">
          <v-img src="/images/avatar.svg" />
        </v-avatar>
        <div class="status-indicator" />
      </div>

      <!-- 姓名 -->
      <h2 class="text-h5 font-weight-bold mb-1">胡聖翰</h2>
      <p class="text-body-2 text-secondary mb-1">Sheng Han Hu</p>
      <p class="text-caption text-primary font-weight-medium mb-6">Front-end Technical Manager</p>

      <!-- 社交連結 -->
      <div class="d-flex align-center justify-center ga-3">
        <v-btn
          v-for="btn in socialButtons"
          :key="btn.icon"
          :href="btn.href"
          target="_blank"
          :aria-label="btn.label"
          icon
          variant="outlined"
          size="small"
        >
          <v-icon size="20">{{ btn.icon }}</v-icon>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.avatar-card {
  min-width: 280px;
  max-width: 320px;
  background: rgb(var(--v-theme-surface)) !important;
}

/* 頭像 */
.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-main {
  border: 3px solid rgb(var(--v-theme-border));
  transition: border-color 0.2s ease;
}

.avatar-card:hover .avatar-main {
  border-color: rgb(var(--v-theme-primary));
}

/* 在線狀態指示器 */
.status-indicator {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgb(var(--v-theme-success));
  border: 3px solid rgb(var(--v-theme-surface));
}
</style>
