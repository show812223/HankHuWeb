<script setup lang="ts">
import { NCard, NTag } from 'naive-ui'
import { resumeData } from '~/data/resume'
import MdiGithub from '~icons/mdi/github'
import MdiOpenInNew from '~icons/mdi/open-in-new'
import MdiArrowRight from '~icons/mdi/arrow-right'

const projects = resumeData.projects
</script>

<template>
  <div class="projects-page min-h-screen relative">
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 -->
    <section class="page-header py-16 relative z-10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center anim-fade-in">
          <p class="text-xs text-muted mb-3 letter-spacing-wide uppercase">WORKS</p>
          <h1 class="text-4xl font-bold text-primary mb-2 font-heading">作品集</h1>
          <p class="text-base text-muted">參與或獨立開發的專案</p>
        </div>
      </div>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 專案列表 -->
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="projects-list">
        <NCard
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card mb-6"
          :style="{ animationDelay: `${200 + index * 150}ms` }"
        >
          <div class="flex flex-col md:flex-row">
            <!-- 專案編號 -->
            <div class="project-number p-6 flex items-center justify-center">
              <span class="number-text">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>

            <!-- 專案內容 -->
            <div class="flex-grow p-6">
              <h3 class="text-lg font-bold mb-3">{{ project.name }}</h3>
              <p class="text-sm text-muted mb-4 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- 技術標籤 -->
              <div class="flex flex-wrap gap-2 mb-4">
                <NTag
                  v-for="tech in project.technologies"
                  :key="tech"
                  size="small"
                  round
                >
                  {{ tech }}
                </NTag>
              </div>

              <!-- 連結 -->
              <div v-if="project.url || project.github" class="flex gap-4">
                <a
                  v-if="project.url"
                  :href="project.url"
                  target="_blank"
                  class="project-link"
                >
                  <MdiOpenInNew class="w-4 h-4 mr-1" />
                  Demo
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="project-link"
                >
                  <MdiGithub class="w-4 h-4 mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </NCard>
      </div>

      <!-- GitHub CTA -->
      <div class="text-center mt-16 anim-fade-in anim-delay-600">
        <p class="text-sm text-muted mb-4">查看更多專案</p>
        <a
          href="https://github.com/show812223"
          target="_blank"
          class="github-link"
        >
          <MdiGithub class="w-5 h-5 mr-2" />
          GitHub
          <MdiArrowRight class="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 頁面裝飾 */
.deco-circle {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 1px solid rgba(78, 69, 64, 0.04);
  bottom: -100px;
  left: -100px;
}

/* 專案卡片 */
.project-card {
  opacity: 0;
  animation: gentleFadeUp 500ms ease forwards;
  transition: border-color 0.3s ease;
  overflow: hidden;
}

.project-card:hover {
  border-color: rgba(78, 69, 64, 0.2) !important;
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
  border-right: 1px solid var(--color-border);
}

.number-text {
  font-size: 2rem;
  font-weight: 700;
  color: rgba(78, 69, 64, 0.15);
  font-family: 'Noto Serif JP', serif;
}

@media (max-width: 768px) {
  .project-number {
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }
}

/* 專案連結 */
.project-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-primary);
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
  color: var(--color-primary);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(78, 69, 64, 0.2);
  border-radius: 999px;
  transition: all 0.3s ease;
}

.github-link:hover {
  background: rgba(78, 69, 64, 0.05);
  border-color: rgba(78, 69, 64, 0.4);
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
