<script setup lang="ts">

</script>

<template>
  <div
    class="d-flex flex-column ga-6"
    style="max-width: 480px"
  >
    <!-- Hello 標題 - 從左側滑入 -->
    <h1 class="text-h3 font-weight-bold text-primary anim-slide-right anim-delay-600">
      Hello
    </h1>

    <!-- 副標題 - 從左側滑入（延遲） -->
    <p class="text-body-1 text-medium-emphasis anim-slide-right anim-delay-700">
      Here's who I am & what I do
    </p>

    <!-- 按鈕組 - 從下方上滑 -->
    <div class="d-flex ga-3 anim-slide-up anim-delay-800">
      <v-btn
        to="/Resume"
        color="primary"
        variant="flat"
      >
        Resume
      </v-btn>
      <v-btn
        to="/Projects"
        color="primary"
        variant="outlined"
      >
        Projects
      </v-btn>
    </div>

    <!-- 描述文字 - 純淡入 -->
    <p
      class="text-body-1 text-wrap anim-fade-in anim-delay-1000"
      style="line-height: 1.9;"
    >
      一名專注於 Nuxt 3 與前端開發的工程師，擁有豐富的全端開發與雲端部署經驗。我熱衷於技術創新，擅長 Vue、Nuxt、TypeScript 及 Azure CI/CD，並熟悉 Docker 與單體/微服務架構。目前專注於打造高效、可擴展的 Web 應用，並在專案中實踐最佳開發流程。
    </p>
  </div>
</template>

<style scoped>

</style>
