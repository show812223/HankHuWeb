<script setup lang="ts">
const { container, spacing } = useLayoutConfig()
</script>

<template>
  <div class="resume-page min-h-screen relative">
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 -->
    <section class="page-header relative z-10">
      <v-container
        :style="container.style"
        :class="[spacing.sectionTitle, spacing.containerPadding]"
      >
        <div class="text-center anim-fade-in">
          <p class="text-xs text-muted mb-3 letter-spacing-wide uppercase">
            RESUME
          </p>
          <h1 class="text-4xl font-bold text-primary mb-2 font-heading">
            履歷
          </h1>
          <p class="text-base text-muted">
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
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- 左欄 - 主要內容 -->
        <div class="lg:col-span-2 flex flex-col gap-10">
          <ResumeSummary />
          <ResumeExperiences />
        </div>

        <!-- 右欄 - 側邊欄 -->
        <div class="flex flex-col gap-8 sidebar-content">
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
