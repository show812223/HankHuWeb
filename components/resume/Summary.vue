<script setup lang="ts">
import { resumeData } from '~/data/resume'

const summary = resumeData.summary
</script>

<template>
  <section class="anim-fade-in">
    <!-- 區塊標題 -->
    <div class="section-header mb-6 pl-4 relative">
      <p class="text-xs text-muted mb-2 letter-spacing-wider uppercase">
        ABOUT
      </p>
      <h2 class="text-xl font-bold text-primary font-heading">
        關於我
      </h2>
    </div>

    <!-- 簡介內容 -->
    <div class="summary-content pl-4 border-l border-[var(--color-border)]">
      <p class="text-base mb-0 leading-loose">
        {{ summary }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.section-header::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: rgba(78, 69, 64, 0.3);
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
