<script setup lang="ts">
import { NCard, NTag } from 'naive-ui'
import { resumeData } from '~/data/resume'

const languages = resumeData.languages

const iconMap: Record<string, string> = {
  'mdi-ideogram-cjk': '🇹🇼',
  'mdi-alphabetical': '🇺🇸',
}
</script>

<template>
  <section class="anim-slide-up anim-delay-200">
    <UiSectionHeader
      icon="🌐"
      title="語言能力"
    />

    <div class="grid grid-cols-2 gap-4">
      <NCard
        v-for="(lang, index) in languages"
        :key="lang.name"
        class="text-center p-6 lang-card"
        :style="{ animationDelay: `${300 + index * 100}ms` }"
      >
        <span class="text-3xl mb-4 block">{{ iconMap[lang.icon] || '🌍' }}</span>
        <div class="text-lg font-medium mb-3">
          {{ lang.name }}
        </div>
        <NTag size="small" round type="primary">
          {{ lang.level }}
        </NTag>
      </NCard>
    </div>
  </section>
</template>

<style scoped>
.lang-card {
  opacity: 0;
  animation: popIn 400ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transition: transform 0.3s ease;
}

.lang-card:hover {
  transform: translateY(-2px);
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
