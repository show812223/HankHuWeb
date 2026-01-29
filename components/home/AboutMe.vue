<script setup lang="ts">
import { NButton } from 'naive-ui'
</script>

<template>
  <div class="about-me-section flex flex-col gap-8 max-w-md">
    <!-- 標題區 -->
    <div class="anim-fade-in anim-delay-600">
      <p class="text-xs text-muted mb-3 letter-spacing-wide uppercase">ABOUT ME</p>
      <h1 class="text-3xl font-bold text-primary mb-2 font-heading">
        Hello
      </h1>
      <p class="text-base text-muted">
        Here's who I am & what I do
      </p>
    </div>

    <!-- 描述文字 -->
    <div class="about-text anim-fade-in anim-delay-800">
      <p class="text-base mb-0 leading-loose">
        一名專注於 <span class="text-primary font-medium">Nuxt 3</span> 與前端開發的工程師，擁有豐富的全端開發與雲端部署經驗。擅長 <span class="text-primary font-medium">Vue、TypeScript</span> 及 <span class="text-primary font-medium">Azure CI/CD</span>，並熟悉容器化與微服務架構。
      </p>
    </div>

    <!-- 經歷摘要 -->
    <div class="experience-summary flex gap-8 anim-fade-in anim-delay-900 py-6">
      <div class="exp-item text-center min-w-[60px]">
        <p class="text-2xl font-bold text-primary mb-1">6+</p>
        <p class="text-xs text-muted">年經驗</p>
      </div>
      <div class="exp-divider w-px bg-[var(--color-border)] self-stretch" />
      <div class="exp-item text-center min-w-[60px]">
        <p class="text-2xl font-bold text-primary mb-1">10+</p>
        <p class="text-xs text-muted">專案數</p>
      </div>
      <div class="exp-divider w-px bg-[var(--color-border)] self-stretch" />
      <div class="exp-item text-center min-w-[60px]">
        <p class="text-2xl font-bold text-primary mb-1">TL</p>
        <p class="text-xs text-muted">技術領導</p>
      </div>
    </div>

    <!-- 行動按鈕 -->
    <div class="flex gap-4 anim-fade-in anim-delay-1000">
      <NButton type="primary" size="large" tag="a" href="/Resume" class="action-btn">
        履歷
        <template #icon>
          <span class="ml-2">→</span>
        </template>
      </NButton>
      <NButton size="large" tag="a" href="/Projects" class="action-btn" secondary>
        作品集
        <template #icon>
          <span class="ml-2">→</span>
        </template>
      </NButton>
    </div>
  </div>
</template>

<style scoped>
.about-me-section {
  position: relative;
}

.about-text {
  position: relative;
  padding-left: 1rem;
  border-left: 2px solid rgba(78, 69, 64, 0.15);
}

/* 行動按鈕 */
.action-btn {
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateX(4px);
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
