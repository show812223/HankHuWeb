<script setup lang="ts">
import { resumeData } from '~/data/resume'

const projects = resumeData.projects
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
          <p class="text-overline text-medium-emphasis mb-3">WORKS</p>
          <h1 class="text-h4 font-weight-bold text-primary mb-2 font-heading">作品集</h1>
          <p class="text-body-1 text-medium-emphasis">參與或獨立開發的專案</p>
        </div>
      </v-container>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 專案列表 -->
    <v-container class="py-12" style="max-width: 1200px;">
      <v-card
        v-for="(project, index) in projects"
        :key="project.name"
        class="project-card mb-6"
        :style="{ animationDelay: `${200 + index * 150}ms` }"
      >
        <div class="d-flex flex-column flex-md-row">
          <!-- 專案編號 -->
          <div class="project-number pa-6 d-flex align-center justify-center">
            <span class="number-text">{{ String(index + 1).padStart(2, '0') }}</span>
          </div>

          <!-- 專案內容 -->
          <div class="flex-grow-1 pa-6">
            <h3 class="text-h6 font-weight-bold mb-3">{{ project.name }}</h3>
            <p class="text-body-2 text-medium-emphasis mb-4" style="line-height: 1.8;">
              {{ project.description }}
            </p>

            <!-- 技術標籤 -->
            <div class="d-flex flex-wrap ga-2 mb-4">
              <v-chip v-for="tech in project.technologies" :key="tech" size="small">
                {{ tech }}
              </v-chip>
            </div>

            <!-- 連結 -->
            <div v-if="project.url || project.github" class="d-flex ga-4">
              <v-btn
                v-if="project.url"
                :href="project.url"
                target="_blank"
                variant="text"
                size="small"
                prepend-icon="mdi-open-in-new"
              >
                Demo
              </v-btn>
              <v-btn
                v-if="project.github"
                :href="project.github"
                target="_blank"
                variant="text"
                size="small"
                prepend-icon="mdi-github"
              >
                GitHub
              </v-btn>
            </div>
          </div>
        </div>
      </v-card>

      <!-- GitHub CTA -->
      <div class="text-center mt-16 anim-fade-in anim-delay-600">
        <p class="text-body-2 text-medium-emphasis mb-4">查看更多專案</p>
        <v-btn
          href="https://github.com/show812223"
          target="_blank"
          variant="outlined"
          rounded="pill"
          prepend-icon="mdi-github"
          append-icon="mdi-arrow-right"
        >
          GitHub
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.deco-circle {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 1px solid rgba(78, 69, 64, 0.04);
  bottom: -100px;
  left: -100px;
}

.project-card {
  opacity: 0;
  animation: gentleFadeUp 500ms ease forwards;
  border: 1px solid rgba(78, 69, 64, 0.1);
  overflow: hidden;
}

.project-card:hover {
  border-color: rgba(78, 69, 64, 0.2);
}

@keyframes gentleFadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-number {
  min-width: 100px;
  border-right: 1px solid rgba(78, 69, 64, 0.1);
}

.number-text {
  font-size: 2rem;
  font-weight: 700;
  color: rgba(78, 69, 64, 0.15);
  font-family: 'Noto Serif JP', serif;
}

@media (max-width: 960px) {
  .project-number {
    border-right: none;
    border-bottom: 1px solid rgba(78, 69, 64, 0.1);
  }
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
