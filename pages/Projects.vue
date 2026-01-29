<script setup lang="ts">
import { resumeData } from '~/data/resume'
import MdiGithub from '~icons/mdi/github'
import MdiOpenInNew from '~icons/mdi/open-in-new'
import MdiArrowRight from '~icons/mdi/arrow-right'

const { getListDelay } = useAnimationConfig()

const projects = resumeData.projects
</script>

<template>
  <div class="projects-page min-h-screen position-relative">
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 -->
    <section
      class="page-header py-16 position-relative"
      style="z-index: 10;"
    >
      <v-container style="max-width: 1152px;">
        <div class="text-center anim-fade-in">
          <p
            class="text-caption text-medium-emphasis mb-3"
            style="letter-spacing: 0.3em;"
          >
            WORKS
          </p>
          <h1 class="text-h3 font-weight-bold text-primary mb-2 font-heading">
            作品集
          </h1>
          <p class="text-body-1 text-medium-emphasis">
            參與或獨立開發的專案
          </p>
        </div>
      </v-container>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 專案列表 -->
    <v-container
      class="py-12"
      style="max-width: 1152px;"
    >
      <div class="projects-list">
        <v-card
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card mb-6"
          :style="{ animationDelay: getListDelay(index, 200) }"
          variant="outlined"
        >
          <div class="d-flex flex-column flex-md-row">
            <!-- 專案編號 -->
            <div class="project-number pa-6 d-flex align-center justify-center">
              <span class="number-text">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>

            <!-- 專案內容 -->
            <div class="flex-grow-1 pa-6">
              <h3 class="text-h6 font-weight-bold mb-3">
                {{ project.name }}
              </h3>
              <p
                class="text-body-2 text-medium-emphasis mb-4"
                style="line-height: 1.6;"
              >
                {{ project.description }}
              </p>

              <!-- 技術標籤 -->
              <div class="d-flex flex-wrap ga-2 mb-4">
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  size="small"
                >
                  {{ tech }}
                </v-chip>
              </div>

              <!-- 連結 -->
              <div
                v-if="project.url || project.github"
                class="d-flex ga-4"
              >
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
        </v-card>
      </div>

      <!-- GitHub CTA -->
      <div class="text-center mt-16 anim-fade-in anim-delay-600">
        <p class="text-body-2 text-medium-emphasis mb-4">
          查看更多專案
        </p>
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
    </v-container>
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

@media (max-width: 960px) {
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
