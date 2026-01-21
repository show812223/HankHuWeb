<script setup lang="ts">
const nameChars = ['胡', '聖', '翰']

const socialButtons = [
  { icon: 'mdi-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/', color: '#0A66C2' },
  { icon: 'mdi-github', label: 'GitHub', href: 'https://github.com/show812223', color: '#333' },
  { icon: 'mdi-facebook', label: 'Facebook', href: '#', color: '#1877F2' },
]
</script>

<template>
  <v-card class="avatar-card text-center pa-8 anim-fade-in anim-delay-500">
    <!-- 裝飾性背景圓圈 -->
    <div class="decorative-circle decorative-circle-1" />
    <div class="decorative-circle decorative-circle-2" />

    <!-- 直式排版姓名 - 逐字淡入 -->
    <div class="d-flex justify-center mb-6">
      <div class="vertical-name text-h4 font-weight-bold text-primary">
        <span
          v-for="(char, index) in nameChars"
          :key="index"
          class="name-char"
          :style="{ animationDelay: `${600 + index * 150}ms` }"
        >
          {{ char }}
        </span>
      </div>
    </div>

    <!-- 頭像 - 縮放淡入，帶環形裝飾 -->
    <div class="avatar-wrapper mb-6 anim-scale-in anim-delay-800">
      <div class="avatar-ring" />
      <v-avatar size="180" class="avatar-main">
        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
      </v-avatar>
    </div>

    <!-- 英文名 - 上滑進場 -->
    <v-card-title class="text-h5 font-weight-bold pb-1 anim-slide-up anim-delay-1000">
      Sheng Han Hu
    </v-card-title>

    <!-- 職稱標籤 - 上滑進場 -->
    <div class="anim-slide-up anim-delay-1100 mb-4">
      <v-chip color="primary" variant="tonal" size="small" class="px-4">
        <v-icon start size="small">mdi-code-tags</v-icon>
        Front-end Technical Manager
      </v-chip>
    </div>

    <!-- 社交按鈕 - 交錯彈出 -->
    <v-card-actions class="d-flex align-center justify-center ga-2 pt-2">
      <v-tooltip
        v-for="(btn, index) in socialButtons"
        :key="btn.icon"
        :text="btn.label"
        location="bottom"
      >
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            :icon="btn.icon"
            :href="btn.href"
            target="_blank"
            variant="tonal"
            color="primary"
            size="large"
            class="social-btn"
            :style="{ animationDelay: `${1200 + index * 100}ms` }"
          />
        </template>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.avatar-card {
  position: relative;
  overflow: hidden;
  min-width: 280px;
}

/* 裝飾性背景圓圈 */
.decorative-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.08;
  background: rgb(var(--v-theme-primary));
}

.decorative-circle-1 {
  width: 200px;
  height: 200px;
  top: -80px;
  right: -60px;
}

.decorative-circle-2 {
  width: 150px;
  height: 150px;
  bottom: -50px;
  left: -40px;
}

/* 直式排版 */
.vertical-name {
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.3em;
  display: flex;
  position: relative;
  z-index: 1;
}

/* 姓名逐字淡入 */
.name-char {
  opacity: 0;
  animation: charFadeIn 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  transition: color 0.3s ease;
}

.name-char:hover {
  color: rgb(var(--v-theme-secondary));
}

@keyframes charFadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 頭像區域 */
.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px dashed rgb(var(--v-theme-primary) / 0.3);
  animation: rotateRing 20s linear infinite;
}

.avatar-main {
  position: relative;
  z-index: 1;
  border: 4px solid rgb(var(--v-theme-surface));
  box-shadow: 0 8px 32px rgb(var(--v-theme-primary) / 0.15);
}

@keyframes rotateRing {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 社交按鈕彈出 */
.social-btn {
  opacity: 0;
  animation: popIn 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 6px 20px rgb(var(--v-theme-primary) / 0.25);
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
