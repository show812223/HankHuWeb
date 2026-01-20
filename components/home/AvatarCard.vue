<script setup lang="ts">
const nameChars = ['胡', '聖', '翰']

const socialButtons = [
  { icon: 'mdi-linkedin', label: 'LinkedIn' },
  { icon: 'mdi-github', label: 'GitHub' },
  { icon: 'mdi-facebook', label: 'Facebook' },
]
</script>

<template>
  <v-card class="text-center pa-8 anim-fade-in anim-delay-500">
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

    <!-- 頭像 - 縮放淡入 -->
    <v-avatar
      size="180"
      class="mb-6 anim-scale-in anim-delay-800"
    >
      <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
    </v-avatar>

    <!-- 英文名 - 上滑進場 -->
    <v-card-title class="text-h5 font-weight-bold pb-1 anim-slide-up anim-delay-1000">
      Sheng Han Hu
    </v-card-title>

    <!-- 職稱 - 上滑進場 -->
    <v-card-subtitle class="text-body-1 pb-4 anim-slide-up anim-delay-1100">
      Front-end Developer
    </v-card-subtitle>

    <!-- 社交按鈕 - 交錯彈出 -->
    <v-card-actions class="d-flex align-center justify-center ga-2 pt-2">
      <v-btn
        v-for="(btn, index) in socialButtons"
        :key="btn.icon"
        :icon="btn.icon"
        variant="text"
        color="primary"
        size="large"
        class="social-btn"
        :style="{ animationDelay: `${1200 + index * 100}ms` }"
      />
    </v-card-actions>
  </v-card>
</template>

<style scoped>
/* 直式排版 */
.vertical-name {
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.3em;
  display: flex;
}

/* 姓名逐字淡入 */
.name-char {
  opacity: 0;
  animation: charFadeIn 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
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

/* 社交按鈕彈出 */
.social-btn {
  opacity: 0;
  animation: popIn 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
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
