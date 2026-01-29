<script setup lang="ts">
import { resumeData } from '~/data/resume'
import MdiSchool from '~icons/mdi/school'
import MdiDomain from '~icons/mdi/domain'

const { getListDelay } = useAnimationConfig()

const educations = resumeData.educations
</script>

<template>
  <section class="anim-slide-up anim-delay-300">
    <UiSectionHeader
      title="教育背景"
      subtitle="學歷與專業培訓"
    >
      <template #icon>
        <MdiSchool />
      </template>
    </UiSectionHeader>

    <div class="d-flex flex-column ga-4">
      <v-card
        v-for="(edu, index) in educations"
        :key="edu.school + edu.degree"
        class="pa-6 edu-card"
        :style="{ animationDelay: getListDelay(index, 400) }"
        variant="outlined"
      >
        <div class="d-flex align-center mb-3">
          <MdiDomain class="text-h5 mr-3" />
          <span class="text-h6 font-weight-medium">
            {{ edu.school }}
          </span>
        </div>
        <p class="text-body-2 text-medium-emphasis mb-4">
          {{ edu.startDate }} - {{ edu.endDate }}
        </p>
        <div class="d-flex align-center flex-wrap ga-2 mb-3">
          <v-chip
            size="small"
            color="primary"
          >
            {{ edu.degree }}
          </v-chip>
          <span class="text-body-1">
            {{ edu.major }}
          </span>
        </div>
        <p
          v-if="edu.description"
          class="text-body-2 text-medium-emphasis"
          style="line-height: 1.6;"
        >
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
  transition: transform 0.3s ease;
}

.edu-card:hover {
  transform: translateX(4px);
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
