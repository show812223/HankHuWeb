<script setup lang="ts">
import { NCard, NTag } from 'naive-ui'
import { resumeData } from '~/data/resume'

const educations = resumeData.educations
</script>

<template>
  <section class="anim-slide-up anim-delay-300">
    <UiSectionHeader
      icon="🎓"
      title="教育背景"
      subtitle="學歷與專業培訓"
    />

    <div class="flex flex-col gap-4">
      <NCard
        v-for="(edu, index) in educations"
        :key="edu.school + edu.degree"
        class="p-6 edu-card"
        :style="{ animationDelay: `${400 + index * 150}ms` }"
      >
        <div class="flex items-center mb-3">
          <span class="text-xl mr-3">🏫</span>
          <span class="text-lg font-medium">{{ edu.school }}</span>
        </div>
        <p class="text-sm text-muted mb-4">
          {{ edu.startDate }} - {{ edu.endDate }}
        </p>
        <div class="flex items-center flex-wrap gap-2 mb-3">
          <NTag size="small" type="primary" round>
            {{ edu.degree }}
          </NTag>
          <span class="text-base">{{ edu.major }}</span>
        </div>
        <p
          v-if="edu.description"
          class="text-sm text-muted leading-relaxed"
        >
          {{ edu.description }}
        </p>
      </NCard>
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
