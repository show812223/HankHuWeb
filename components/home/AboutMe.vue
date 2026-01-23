<script setup lang="ts">

</script>

<template>
  <div class="about-me-section d-flex flex-column ga-6" style="max-width: 480px">
    <!-- 標題區 -->
    <div>
      <p class="text-overline text-secondary mb-2 tracking-wide">ABOUT ME</p>
      <h1 class="text-h3 font-weight-bold mb-2">
        Hello, I'm Hank
      </h1>
      <p class="text-body-1 text-medium-emphasis">
        Frontend Engineer & Technical Lead
      </p>
    </div>

    <!-- 描述文字 -->
    <div class="about-text">
      <p class="text-body-1 mb-0" style="line-height: 1.8;">
        專注於 <span class="text-primary font-weight-medium">Vue / Nuxt</span> 生態系的前端工程師，擁有豐富的企業級應用開發經驗。擅長 <span class="text-primary font-weight-medium">TypeScript</span> 與 <span class="text-primary font-weight-medium">Azure CI/CD</span>，熱衷於建構高效能、可維護的前端架構。
      </p>
    </div>

    <!-- 經歷摘要 -->
    <div class="stats-row d-flex ga-6">
      <div class="stat-item">
        <p class="text-h4 font-weight-bold text-primary mb-0">6+</p>
        <p class="text-caption text-medium-emphasis">Years Exp.</p>
      </div>
      <div class="stat-divider" />
      <div class="stat-item">
        <p class="text-h4 font-weight-bold text-primary mb-0">10+</p>
        <p class="text-caption text-medium-emphasis">Projects</p>
      </div>
      <div class="stat-divider" />
      <div class="stat-item">
        <p class="text-h4 font-weight-bold text-primary mb-0">TL</p>
        <p class="text-caption text-medium-emphasis">Tech Lead</p>
      </div>
    </div>

    <!-- 行動按鈕 -->
    <div class="d-flex ga-3">
      <v-btn
        to="/Resume"
        color="primary"
        size="large"
      >
        <v-icon start size="18">mdi-file-document</v-icon>
        View Resume
      </v-btn>
      <v-btn
        to="/Projects"
        variant="outlined"
        size="large"
      >
        <v-icon start size="18">mdi-folder-open</v-icon>
        Projects
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.tracking-wide {
  letter-spacing: 0.2em;
}

.about-text {
  padding-left: 1rem;
  border-left: 3px solid rgb(var(--v-theme-primary));
}

/* 統計數據 */
.stats-row {
  padding: 1rem 0;
}

.stat-item {
  text-align: center;
  min-width: 70px;
}

.stat-divider {
  width: 1px;
  background: rgb(var(--v-theme-border));
  align-self: stretch;
}
</style>
