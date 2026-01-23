<script setup lang="ts">
import { resumeData } from '~/data/resume'

const projects = resumeData.projects
</script>

<template>
  <div class="projects-page">
    <!-- 背景網格 -->
    <div class="grid-background" />

    <!-- 頁面標題 -->
    <section class="page-header py-16">
      <v-container>
        <div class="text-center">
          <p class="text-overline text-secondary mb-2 tracking-wide">PROJECTS</p>
          <h1 class="text-h2 font-weight-bold mb-2">作品集</h1>
          <p class="text-body-1 text-medium-emphasis">參與開發的專案</p>
        </div>
      </v-container>
    </section>

    <!-- 分隔線 -->
    <div class="section-divider">
      <div class="divider-line" />
    </div>

    <!-- 專案列表 -->
    <v-container class="py-12" style="max-width: 900px;">
      <div class="projects-list d-flex flex-column ga-6">
        <v-card
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card"
        >
          <div class="d-flex flex-column flex-md-row">
            <!-- 專案編號 -->
            <div class="project-number pa-6 d-flex align-center justify-center">
              <span class="number-text">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>

            <!-- 專案內容 -->
            <div class="flex-grow-1 pa-6">
              <h3 class="text-h6 font-weight-bold mb-2">{{ project.name }}</h3>
              <p class="text-body-2 text-medium-emphasis mb-4" style="line-height: 1.8;">
                {{ project.description }}
              </p>

              <!-- 技術標籤 -->
              <div class="d-flex flex-wrap ga-2 mb-4">
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  size="small"
                  color="primary"
                  variant="tonal"
                >
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
                  color="primary"
                >
                  <v-icon start size="16">mdi-open-in-new</v-icon>
                  Demo
                </v-btn>
                <v-btn
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  variant="text"
                  size="small"
                  color="primary"
                >
                  <v-icon start size="16">mdi-github</v-icon>
                  GitHub
                </v-btn>
              </div>
            </div>
          </div>
        </v-card>
      </div>

      <!-- GitHub CTA -->
      <div class="text-center mt-12">
        <p class="text-body-2 text-medium-emphasis mb-4">查看更多專案</p>
        <v-btn
          href="https://github.com/show812223"
          target="_blank"
          variant="outlined"
          size="large"
        >
          <v-icon start>mdi-github</v-icon>
          View GitHub Profile
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.projects-page {
  min-height: 100vh;
  position: relative;
}

/* 背景網格 */
.grid-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgb(var(--v-theme-border) / 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgb(var(--v-theme-border) / 0.2) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
}

.page-header {
  position: relative;
  z-index: 1;
}

.tracking-wide {
  letter-spacing: 0.2em;
}

/* 分隔線 */
.section-divider {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  position: relative;
  z-index: 1;
}

.divider-line {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgb(var(--v-theme-primary)), transparent);
  border-radius: 1px;
}

/* 專案卡片 */
.project-card {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.project-card:hover {
  border-color: rgb(var(--v-theme-primary)) !important;
  box-shadow: 0 4px 16px rgb(var(--v-theme-primary) / 0.1);
}

/* 專案編號 */
.project-number {
  min-width: 100px;
  border-right: 1px solid rgb(var(--v-theme-border));
  background: rgb(var(--v-theme-surface-variant) / 0.5);
}

.number-text {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary) / 0.3);
  font-family: 'JetBrains Mono', monospace;
}

@media (max-width: 960px) {
  .project-number {
    border-right: none;
    border-bottom: 1px solid rgb(var(--v-theme-border));
  }
}
</style>
