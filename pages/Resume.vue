<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen relative">
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 -->
    <section class="py-16 relative z-10">
      <v-container style="max-width: 1200px;">
        <div class="text-center anim-fade-in">
          <p class="text-overline text-medium-emphasis mb-3">RESUME</p>
          <h1 class="text-h4 font-weight-bold text-primary mb-2 font-heading">履歷</h1>
          <p class="text-body-1 text-medium-emphasis">專業背景與技術能力</p>
        </div>
      </v-container>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 主要內容 -->
    <v-container class="py-12" style="max-width: 1200px;">
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
.deco-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid rgba(78, 69, 64, 0.04);
  top: -150px;
  right: -150px;
}

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
