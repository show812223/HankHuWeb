<script setup lang="ts">
const { container, spacing } = useLayoutConfig()
</script>

<template>
  <div class="resume-page position-relative">
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 -->
    <section class="page-header position-relative z-above">
      <v-container
        :style="container.style"
        :class="[spacing.sectionTitle, spacing.containerPadding]"
      >
        <div class="text-center anim-fade-in">
          <p class="text-caption text-muted mb-3 letter-spacing-wide text-uppercase">
            RESUME
          </p>
          <h1 class="text-h3 font-weight-bold text-primary mb-2 font-heading">
            履歷
          </h1>
          <p class="text-body-1 text-muted">
            專業背景與技術能力
          </p>
        </div>
      </v-container>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 主要內容 -->
    <v-container
      :style="container.style"
      :class="[spacing.sectionContent, spacing.containerPadding]"
    >
      <div class="resume-grid">
        <!-- 左欄 - 主要內容 -->
        <div class="resume-main d-flex flex-column ga-10">
          <ResumeSummary />
          <ResumeExperiences />
        </div>

        <!-- 右欄 - 側邊欄 -->
        <div class="d-flex flex-column ga-8 sidebar-content">
          <ResumeSkills />
          <ResumeLanguages />
          <ResumeEducations />
          <ResumeCertifications />
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.resume-page {
  min-height: 100vh;
}

.z-above {
  z-index: 10;
}

/* 響應式網格 */
.resume-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 1024px) {
  .resume-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .resume-main {
    grid-column: span 2;
  }
}

/* 頁面裝飾 */
.deco-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid rgba(78, 69, 64, 0.04);
  top: -150px;
  right: -150px;
}

/* 側邊欄固定 */
@media (min-width: 1024px) {
  .sidebar-content {
    position: sticky;
    top: 100px;
  }
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
