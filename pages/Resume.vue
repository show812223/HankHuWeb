<script setup lang="ts">

</script>

<template>
  <div class="resume-page">
    <!-- 背景網格 -->
    <div class="grid-background" />

    <!-- 頁面標題 -->
    <section class="page-header py-16">
      <v-container>
        <div class="text-center">
          <p class="text-overline text-secondary mb-2 tracking-wide">RESUME</p>
          <h1 class="text-h2 font-weight-bold mb-2">履歷</h1>
          <p class="text-body-1 text-medium-emphasis">專業背景與技術能力</p>
        </div>
      </v-container>
    </section>

    <!-- 分隔線 -->
    <div class="section-divider">
      <div class="divider-line" />
    </div>

    <!-- 主要內容 - 單欄布局 -->
    <v-container class="py-12" style="max-width: 900px;">
      <div class="d-flex flex-column ga-12">
        <ResumeSummary />
        <ResumeExperiences />
        <ResumeSkills />
        <ResumeEducations />
        <ResumeCertifications />
        <ResumeLanguages />
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.resume-page {
  min-height: 100vh;
  position: relative;
}

/* 背景網格 */
.grid-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgb(var(--v-theme-border) / 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgb(var(--v-theme-border) / 0.2) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
}

.page-header {
  position: relative;
  z-index: 1;
}

.tracking-wide {
  letter-spacing: 0.2em;
}

/* 分隔線 */
.section-divider {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  position: relative;
  z-index: 1;
}

.divider-line {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgb(var(--v-theme-primary)), transparent);
  border-radius: 1px;
}
</style>
