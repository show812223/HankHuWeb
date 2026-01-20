<script setup lang="ts">
import { resumeData } from '~/data/resume'

const projects = resumeData.projects
</script>

<template>
  <v-container class="py-8">
    <!-- 標題 - 從左滑入 -->
    <h1 class="text-h3 font-weight-bold mb-2 anim-slide-right">
      <v-icon class="mr-2">
        mdi-folder-multiple
      </v-icon>
      專案作品
    </h1>
    <!-- 副標題 - 延遲淡入 -->
    <p class="text-body-1 text-grey mb-8 anim-fade-in anim-delay-100">
      以下是我參與或獨立開發的專案
    </p>

    <v-row>
      <!-- 專案卡片 - 交錯上滑進場 -->
      <v-col
        v-for="(project, index) in projects"
        :key="project.name"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          class="h-100 d-flex flex-column project-card"
          :style="{ animationDelay: `${200 + index * 100}ms` }"
        >
          <v-card-title class="text-h6 font-weight-bold">
            <v-icon
              class="mr-2"
              color="primary"
            >
              mdi-application-brackets
            </v-icon>
            {{ project.name }}
          </v-card-title>
          <v-card-text class="flex-grow-1">
            <p class="text-body-2 mb-4">
              {{ project.description }}
            </p>
            <div class="d-flex flex-wrap ga-1">
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
          </v-card-text>
          <v-card-actions v-if="project.url || project.github">
            <v-btn
              v-if="project.url"
              :href="project.url"
              target="_blank"
              variant="text"
              color="primary"
              size="small"
            >
              <v-icon class="mr-1">
                mdi-open-in-new
              </v-icon>
              Demo
            </v-btn>
            <v-btn
              v-if="project.github"
              :href="project.github"
              target="_blank"
              variant="text"
              color="grey-darken-3"
              size="small"
            >
              <v-icon class="mr-1">
                mdi-github
              </v-icon>
              GitHub
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.project-card {
  opacity: 0;
  animation: slideUp 500ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
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
</style>
