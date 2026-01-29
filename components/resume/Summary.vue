<script setup lang="ts">
import { resumeData } from '~/data/resume'

const summary = resumeData.summary
</script>

<template>
  <section class="d-flex flex-column ga-4 anim-fade-in">
    <!-- 區塊標題 -->
    <div class="section-header d-flex flex-column ga-1">
      <p class="text-overline text-medium-emphasis mb-0 letter-spacing-wide">ABOUT</p>
      <h2 class="text-h6 font-weight-bold text-primary mb-0">關於我</h2>
    </div>

    <!-- 簡介內容 -->
    <div class="summary-content">
      <p class="text-body-1 mb-0" style="line-height: 2;">
        {{ summary }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  position: relative;
  padding-left: 1rem;
}

.section-header::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: rgb(var(--v-theme-primary) / 0.3);
}

.letter-spacing-wide {
  letter-spacing: 0.2em;
}

.summary-content {
  padding-left: 1rem;
  border-left: 1px solid rgb(var(--v-theme-border));
}
</style>
