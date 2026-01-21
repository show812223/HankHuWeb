<script setup lang="ts">
import { resumeData } from '~/data/resume'

const projects = resumeData.projects

// 為每個專案分配一個圖標
const projectIcons: Record<string, string> = {
  '個人履歷網站': 'mdi-web',
  '企業前端框架': 'mdi-cube-outline',
  'Azure DevOps CI/CD 流程': 'mdi-pipe',
}
</script>

<template>
  <div class="projects-page">
    <!-- Page Header -->
    <div class="page-header py-10">
      <v-container>
        <div class="d-flex align-center ga-4 anim-slide-right">
          <v-avatar color="primary" size="56">
            <v-icon size="32" color="white">mdi-folder-multiple</v-icon>
          </v-avatar>
          <div>
            <h1 class="text-h3 font-weight-bold text-primary mb-1">專案作品</h1>
            <p class="text-body-1 text-medium-emphasis mb-0">以下是我參與或獨立開發的專案</p>
          </div>
        </div>
      </v-container>
    </div>

    <!-- Projects Grid -->
    <v-container class="py-10">
      <v-row>
        <v-col
          v-for="(project, index) in projects"
          :key="project.name"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="h-100 d-flex flex-column project-card cursor-pointer"
            :style="{ animationDelay: `${200 + index * 100}ms` }"
          >
            <!-- Project Header with gradient -->
            <div class="project-header pa-6 pb-4">
              <div class="project-icon-wrapper mb-4">
                <v-icon size="32" color="white">
                  {{ projectIcons[project.name] || 'mdi-application-brackets' }}
                </v-icon>
              </div>
              <h3 class="text-h6 font-weight-bold text-white">
                {{ project.name }}
              </h3>
            </div>

            <!-- Project Content -->
            <v-card-text class="flex-grow-1 pa-6 pt-4">
              <p class="text-body-2 mb-4" style="line-height: 1.7;">
                {{ project.description }}
              </p>
              <div class="d-flex flex-wrap ga-1">
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  size="x-small"
                  color="primary"
                  variant="tonal"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>

            <!-- Project Actions -->
            <v-card-actions v-if="project.url || project.github" class="pa-6 pt-0">
              <v-btn
                v-if="project.url"
                :href="project.url"
                target="_blank"
                variant="flat"
                color="primary"
                size="small"
                class="mr-2"
              >
                <v-icon start size="16">mdi-open-in-new</v-icon>
                Demo
              </v-btn>
              <v-btn
                v-if="project.github"
                :href="project.github"
                target="_blank"
                variant="outlined"
                color="default"
                size="small"
              >
                <v-icon start size="16">mdi-github</v-icon>
                GitHub
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Call to Action -->
      <div class="text-center mt-12 anim-fade-in anim-delay-600">
        <v-card variant="tonal" class="pa-8 d-inline-block cta-card">
          <v-icon size="48" color="primary" class="mb-4">mdi-github</v-icon>
          <h3 class="text-h6 font-weight-bold mb-2">更多專案</h3>
          <p class="text-body-2 text-medium-emphasis mb-4">
            查看我在 GitHub 上的更多開源專案
          </p>
          <v-btn
            href="https://github.com/show812223"
            target="_blank"
            color="primary"
            variant="flat"
          >
            <v-icon start>mdi-github</v-icon>
            訪問 GitHub
          </v-btn>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.projects-page {
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-background)) 0%,
    rgb(var(--v-theme-surface)) 100%
  );
  border-bottom: 1px solid rgb(var(--v-theme-border) / 0.5);
}

.project-card {
  opacity: 0;
  animation: slideUp 500ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgb(var(--v-theme-primary) / 0.15);
}

.project-card:hover .project-header {
  background-position: right center;
}

.project-header {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)) 0%,
    rgb(var(--v-theme-secondary)) 100%
  );
  background-size: 200% 200%;
  background-position: left center;
  transition: background-position 0.5s ease;
}

.project-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgb(255 255 255 / 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cta-card {
  max-width: 400px;
}
</style>
