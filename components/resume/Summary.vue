<script setup lang="ts">
import { resumeData } from '~/data/resume'

const summary = resumeData.summary
</script>

<template>
  <section class="anim-fade-in">
    <!-- 區塊標題 -->
    <div class="mb-6 pl-4 position-relative section-header">
      <p class="text-overline text-medium-emphasis mb-2">ABOUT</p>
      <h2 class="text-h6 font-weight-bold text-primary font-heading">關於我</h2>
    </div>

    <!-- 簡介內容 -->
    <div class="pl-4 summary-content">
      <p class="text-body-1 mb-0" style="line-height: 1.8;">
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

.summary-content {
  border-left: 1px solid rgba(78, 69, 64, 0.1);
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
