<script setup lang="ts">
const highlights = [
  { icon: 'mdi-calendar-clock', text: '6+ 年開發經驗' },
  { icon: 'mdi-account-group', text: '團隊技術領導' },
  { icon: 'mdi-cloud-check', text: '雲端架構專家' },
]
</script>

<template>
  <div
    class="about-me-section d-flex flex-column ga-5"
    style="max-width: 520px"
  >
    <!-- Hello 標題 - 從左側滑入 -->
    <div class="anim-slide-right anim-delay-600">
      <span class="greeting-label text-overline text-secondary mb-1 d-block">歡迎來到我的作品集</span>
      <h1 class="text-h2 font-weight-bold gradient-text">
        Hello
      </h1>
    </div>

    <!-- 副標題 - 從左側滑入（延遲） -->
    <p class="text-h6 text-medium-emphasis anim-slide-right anim-delay-700" style="font-weight: 400;">
      Here's who I am & what I do
    </p>

    <!-- 亮點標籤 -->
    <div class="d-flex flex-wrap ga-2 anim-fade-in anim-delay-750">
      <v-chip
        v-for="(item, index) in highlights"
        :key="item.text"
        variant="outlined"
        color="primary"
        size="small"
        class="highlight-chip"
        :style="{ animationDelay: `${800 + index * 100}ms` }"
      >
        <v-icon start size="small">{{ item.icon }}</v-icon>
        {{ item.text }}
      </v-chip>
    </div>

    <!-- 按鈕組 - 從下方上滑 -->
    <div class="d-flex ga-3 anim-slide-up anim-delay-900">
      <v-btn
        to="/Resume"
        color="primary"
        variant="flat"
        size="large"
        class="px-6"
      >
        <v-icon start>mdi-account-details</v-icon>
        Resume
      </v-btn>
      <v-btn
        to="/Projects"
        color="primary"
        variant="outlined"
        size="large"
        class="px-6"
      >
        <v-icon start>mdi-folder-multiple</v-icon>
        Projects
      </v-btn>
    </div>

    <!-- 描述文字 - 純淡入 -->
    <v-card variant="tonal" class="pa-5 about-card anim-fade-in anim-delay-1000">
      <p class="text-body-1 text-wrap mb-0" style="line-height: 1.9;">
        一名專注於 <strong class="text-primary">Nuxt 3</strong> 與前端開發的工程師，擁有豐富的全端開發與雲端部署經驗。我熱衷於技術創新，擅長 <strong class="text-primary">Vue、TypeScript</strong> 及 <strong class="text-primary">Azure CI/CD</strong>，並熟悉 Docker 與單體/微服務架構。目前專注於打造高效、可擴展的 Web 應用，並在專案中實踐最佳開發流程。
      </p>
    </v-card>
  </div>
</template>

<style scoped>
.about-me-section {
  position: relative;
}

.greeting-label {
  letter-spacing: 0.15em;
}

.gradient-text {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)) 0%,
    rgb(var(--v-theme-secondary)) 50%,
    rgb(var(--v-theme-tertiary)) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.highlight-chip {
  opacity: 0;
  animation: chipFadeIn 400ms ease forwards;
}

@keyframes chipFadeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.about-card {
  border-left: 3px solid rgb(var(--v-theme-primary));
  background: rgb(var(--v-theme-surface)) !important;
}

.about-card strong {
  font-weight: 600;
}
</style>
