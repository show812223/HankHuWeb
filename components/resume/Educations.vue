<script setup lang="ts">
import { resumeData } from '~/data/resume'

const educations = resumeData.educations
</script>

<template>
  <section class="py-6 anim-slide-up anim-delay-300">
    <div class="d-flex align-center mb-8">
      <v-icon
        size="32"
        color="primary"
        class="mr-4"
      >
        mdi-school
      </v-icon>
      <h2 class="text-h4 font-weight-bold">
        教育背景
      </h2>
    </div>

    <v-row class="ga-4">
      <v-col
        v-for="(edu, index) in educations"
        :key="edu.school + edu.degree"
        cols="12"
        md="6"
      >
        <v-card
          class="h-100 pa-6 edu-card"
          :style="{ animationDelay: `${400 + index * 150}ms` }"
        >
          <div class="d-flex align-center mb-3">
            <v-icon
              class="mr-3"
              color="primary"
              size="24"
            >
              mdi-school
            </v-icon>
            <span class="text-h6 font-weight-bold">{{ edu.school }}</span>
          </div>
          <p class="text-body-2 text-medium-emphasis mb-4">
            {{ edu.startDate }} - {{ edu.endDate }}
          </p>
          <div class="d-flex align-center flex-wrap ga-2 mb-3">
            <v-chip
              color="primary"
              size="small"
            >
              {{ edu.degree }}
            </v-chip>
            <span class="text-body-1">{{ edu.major }}</span>
          </div>
          <p
            v-if="edu.description"
            class="text-body-2 text-medium-emphasis"
          >
            {{ edu.description }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.edu-card {
  opacity: 0;
  animation: slideRight 500ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
