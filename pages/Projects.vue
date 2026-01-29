<script setup lang="ts">
import { resumeData } from '~/data/resume'

const projects = resumeData.projects
</script>

<template>
  <div class="projects-page">
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 -->
    <section class="page-header py-16">
      <v-container>
        <div class="d-flex flex-column align-center ga-2 anim-fade-in">
          <p class="text-overline text-medium-emphasis mb-0 letter-spacing-wide">WORKS</p>
          <h1 class="text-h2 font-weight-bold text-primary mb-0">作品集</h1>
          <p class="text-body-1 text-medium-emphasis mb-0">參與或獨立開發的專案</p>
        </div>
      </v-container>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 專案列表 -->
    <v-container class="py-12">
      <div class="d-flex flex-column ga-6">
        <v-card
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card"
          :style="{ animationDelay: `${200 + index * 150}ms` }"
        >
          <div class="d-flex flex-column flex-md-row">
            <!-- 專案編號 -->
            <div class="project-number pa-6 d-flex align-center justify-center">
              <span class="number-text">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>

            <!-- 專案內容 -->
            <div class="flex-grow-1 pa-6 d-flex flex-column ga-3">
              <h3 class="text-h6 font-weight-bold mb-0">{{ project.name }}</h3>
              <p class="text-body-2 text-medium-emphasis mb-0" style="line-height: 1.8;">
                {{ project.description }}
              </p>

              <!-- 技術標籤 -->
              <div class="d-flex flex-wrap ga-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- 連結 -->
              <div v-if="project.url || project.github" class="d-flex ga-4">
                <a
                  v-if="project.url"
                  :href="project.url"
                  target="_blank"
                  class="project-link d-flex align-center"
                >
                  <v-icon size="16" class="mr-1">mdi-open-in-new</v-icon>
                  Demo
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="project-link d-flex align-center"
                >
                  <v-icon size="16" class="mr-1">mdi-github</v-icon>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </v-card>
      </div>

      <!-- GitHub CTA -->
      <div class="d-flex flex-column align-center ga-4 mt-16 anim-fade-in anim-delay-600">
        <p class="text-body-2 text-medium-emphasis mb-0">查看更多專案</p>
        <a
          href="https://github.com/show812223"
          target="_blank"
          class="github-link d-flex align-center"
        >
          <v-icon size="20" class="mr-2">mdi-github</v-icon>
          GitHub
          <v-icon size="16" class="ml-1">mdi-arrow-right</v-icon>
        </a>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.projects-page {
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
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 1px solid rgb(var(--v-theme-primary) / 0.04);
  bottom: -100px;
  left: -100px;
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

/* 專案卡片 */
.project-card {
  opacity: 0;
  animation: gentleFadeUp 500ms ease forwards;
  transition: border-color 0.3s ease;
  overflow: hidden;
}

.project-card:hover {
  border-color: rgb(var(--v-theme-primary) / 0.2) !important;
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

/* 專案編號 */
.project-number {
  min-width: 100px;
  border-right: 1px solid rgb(var(--v-theme-border));
}

.number-text {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary) / 0.15);
  font-family: 'Noto Serif JP', serif;
}

@media (max-width: 960px) {
  .project-number {
    border-right: none;
    border-bottom: 1px solid rgb(var(--v-theme-border));
  }
}

/* 技術標籤 */
.tech-tag {
  font-size: 0.75rem;
  color: rgb(var(--v-theme-primary));
  padding: 0.25rem 0.75rem;
  border: 1px solid rgb(var(--v-theme-primary) / 0.2);
  border-radius: 999px;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgb(var(--v-theme-primary) / 0.05);
}

/* 專案連結 */
.project-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.project-link:hover {
  opacity: 0.7;
}

/* GitHub CTA */
.github-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgb(var(--v-theme-primary) / 0.2);
  border-radius: 999px;
  transition: all 0.3s ease;
}

.github-link:hover {
  background: rgb(var(--v-theme-primary) / 0.05);
  border-color: rgb(var(--v-theme-primary) / 0.4);
}
</style>
