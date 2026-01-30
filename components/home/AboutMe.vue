<script setup lang="ts">
</script>

<template>
  <div class="d-flex flex-column ga-8" style="max-width: 400px;">
    <!-- 標題區 -->
    <div class="anim-fade-in anim-delay-600">
      <p class="text-overline text-medium-emphasis mb-3">ABOUT ME</p>
      <h1 class="text-h4 font-weight-bold text-primary mb-2 font-heading">
        Hello
      </h1>
      <p class="text-body-1 text-medium-emphasis">
        Here's who I am & what I do
      </p>
    </div>

    <!-- 描述文字 -->
    <div class="about-text anim-fade-in anim-delay-800">
      <p class="text-body-1 mb-0" style="line-height: 1.8;">
        一名專注於 <span class="text-primary font-weight-medium">Nuxt 3</span> 與前端開發的工程師，擁有豐富的全端開發與雲端部署經驗。擅長 <span class="text-primary font-weight-medium">Vue、TypeScript</span> 及 <span class="text-primary font-weight-medium">Azure CI/CD</span>，並熟悉容器化與微服務架構。
      </p>
    </div>

    <!-- 經歷摘要 -->
    <div class="d-flex ga-8 anim-fade-in anim-delay-900 py-6">
      <div class="text-center" style="min-width: 60px;">
        <p class="text-h5 font-weight-bold text-primary mb-1">6+</p>
        <p class="text-caption text-medium-emphasis">年經驗</p>
      </div>
      <v-divider vertical />
      <div class="text-center" style="min-width: 60px;">
        <p class="text-h5 font-weight-bold text-primary mb-1">10+</p>
        <p class="text-caption text-medium-emphasis">專案數</p>
      </div>
      <v-divider vertical />
      <div class="text-center" style="min-width: 60px;">
        <p class="text-h5 font-weight-bold text-primary mb-1">TL</p>
        <p class="text-caption text-medium-emphasis">技術領導</p>
      </div>
    </div>

    <!-- 行動按鈕 -->
    <div class="d-flex ga-4 anim-fade-in anim-delay-1000">
      <v-btn color="primary" size="large" href="/Resume" append-icon="mdi-arrow-right">
        履歷
      </v-btn>
      <v-btn variant="outlined" size="large" href="/Projects" append-icon="mdi-arrow-right">
        作品集
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.about-text {
  position: relative;
  padding-left: 1rem;
  border-left: 2px solid rgba(78, 69, 64, 0.15);
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
