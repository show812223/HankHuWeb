<script setup lang="ts">
import { NCard, NTag } from 'naive-ui'
import { resumeData } from '~/data/resume'

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
                  ↗ Demo
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="project-link"
                >
                  <svg class="w-4 h-4 mr-1 inline" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
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
          <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub →
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
