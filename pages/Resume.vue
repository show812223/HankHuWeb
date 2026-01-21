<script setup lang="ts">

</script>

<template>
  <div class="resume-page">
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 - 日式簡約 -->
    <section class="page-header py-16">
      <v-container>
        <div class="text-center anim-fade-in">
          <p class="text-overline text-medium-emphasis mb-3 letter-spacing-wide">RESUME</p>
          <h1 class="text-h2 font-weight-bold text-primary mb-2">履歷</h1>
          <p class="text-body-1 text-medium-emphasis">專業背景與技術能力</p>
        </div>
      </v-container>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 主要內容 -->
    <v-container class="py-12">
      <v-row>
        <!-- 左欄 - 主要內容 -->
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-10">
            <ResumeSummary />
            <ResumeExperiences />
          </div>
        </v-col>

        <!-- 右欄 - 側邊欄 -->
        <v-col cols="12" lg="4">
          <div class="d-flex flex-column ga-8 sidebar-content">
            <ResumeSkills />
            <ResumeLanguages />
            <ResumeEducations />
            <ResumeCertifications />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.resume-page {
  min-height: 100vh;
  position: relative;
}

/* 頁面裝飾 */
.page-decoration {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.deco-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid rgb(var(--v-theme-primary) / 0.04);
  top: -150px;
  right: -150px;
}

/* 頁面標題 */
.page-header {
  position: relative;
  z-index: 1;
}

.letter-spacing-wide {
  letter-spacing: 0.3em;
}

/* 日式分隔線 */
.zen-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  position: relative;
  z-index: 1;
}

.zen-divider::before,
.zen-divider::after {
  content: '';
  flex: 1;
  max-width: 100px;
  height: 1px;
  background: linear-gradient(
    to var(--direction, right),
    transparent,
    rgb(var(--v-theme-primary) / 0.15)
  );
}

.zen-divider::before {
  --direction: right;
}

.zen-divider::after {
  --direction: left;
}

.zen-divider-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary) / 0.25);
  margin: 0 0.75rem;
}

/* 側邊欄固定 */
@media (min-width: 1280px) {
  .sidebar-content {
    position: sticky;
    top: 100px;
  }
}
</style>
