<script setup lang="ts">
  import { resumeData } from '~/data/resume'

  const educations = resumeData.educations
</script>

<template>
  <section class="section anim-slide-up anim-delay-300">
    <UiSectionHeader icon="mdi-school" title="教育背景" subtitle="學歷與專業培訓" />

    <div class="d-flex flex-column ga-2">
      <v-card
        v-for="(edu, index) in educations"
        :key="edu.school + edu.degree"
        class="h-100 pa-6 edu-card card-interactive"
        :style="{ animationDelay: `${400 + index * 150}ms` }"
      >
        <div class="d-flex align-center mb-3">
          <v-icon class="mr-3" color="primary" size="24"> mdi-school </v-icon>
          <span class="text-h6 font-weight-medium">{{ edu.school }}</span>
        </div>
        <p class="text-body-2 text-medium-emphasis mb-4">{{ edu.startDate }} - {{ edu.endDate }}</p>
        <div class="d-flex align-center flex-wrap ga-2 mb-3">
          <v-chip color="primary" size="small">
            {{ edu.degree }}
          </v-chip>
          <span class="text-body-1">{{ edu.major }}</span>
        </div>
        <p v-if="edu.description" class="text-body-2 text-medium-emphasis leading-relaxed">
          {{ edu.description }}
        </p>
      </v-card>
    </div>
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
