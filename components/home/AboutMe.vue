<script setup lang="ts">

</script>

<template>
  <div
    class="d-flex flex-column ga-6"
    style="max-width: 480px"
  >
    <h1 class="text-h3 font-weight-bold text-primary">
      Hello
    </h1>
    <p class="text-body-1 text-medium-emphasis">
      Here's who I am & what I do
    </p>
    <div class="d-flex ga-3">
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
    <p
      class="text-body-1 text-wrap"
      style="line-height: 1.9;"
    >
      一名專注於 Nuxt 3 與前端開發的工程師，擁有豐富的全端開發與雲端部署經驗。我熱衷於技術創新，擅長 Vue、Nuxt、TypeScript 及 Azure CI/CD，並熟悉 Docker 與單體/微服務架構。目前專注於打造高效、可擴展的 Web 應用，並在專案中實踐最佳開發流程。
    </p>
  </div>
</template>

<style scoped>

</style>
