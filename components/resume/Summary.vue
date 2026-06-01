<script setup lang="ts">
import { resumeData } from '~/data/resume'

const { yearsOfExperience } = useExperience()

// 將 summary 中的 {years} 佔位符替換為動態計算的年資
const summary = computed(() =>
  resumeData.summary.replace('{years}', String(yearsOfExperience.value)),
)
</script>

<template>
  <section class="anim-fade-in">
    <!-- 區塊標題 -->
    <div class="section-header mb-6 ps-4 position-relative">
      <p class="text-caption text-muted mb-2 letter-spacing-wider text-uppercase">
        ABOUT
      </p>
      <h2 class="text-h6 font-weight-bold text-primary font-heading">
        關於我
      </h2>
    </div>

    <!-- 簡介內容 -->
    <div class="summary-content ps-4 summary-border">
      <p class="text-body-1 mb-0 summary-text">
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

.summary-border {
  border-left: 1px solid var(--color-border);
}

.summary-text {
  line-height: 2;
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
