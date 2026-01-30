<script setup lang="ts">
import { resumeData } from '~/data/resume'

const languages = resumeData.languages

const iconMap: Record<string, string> = {
  'mdi-ideogram-cjk': 'mdi-ideogram-cjk',
  'mdi-alphabetical': 'mdi-alphabetical',
}
</script>

<template>
  <section class="anim-slide-up anim-delay-200">
    <UiSectionHeader title="語言能力">
      <template #icon>
        <v-icon icon="mdi-translate" />
      </template>
    </UiSectionHeader>

    <v-row dense>
      <v-col
        v-for="(lang, index) in languages"
        :key="lang.name"
        cols="6"
      >
        <v-card
          class="text-center pa-6 lang-card"
          :style="{ animationDelay: `${300 + index * 100}ms` }"
        >
          <v-icon :icon="iconMap[lang.icon] || 'mdi-web'" size="32" class="mb-4" />
          <div class="text-subtitle-1 font-weight-medium mb-3">
            {{ lang.name }}
          </div>
          <v-chip size="small" color="primary">
            {{ lang.level }}
          </v-chip>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.lang-card {
  opacity: 0;
  animation: popIn 400ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  border: 1px solid rgba(78, 69, 64, 0.1);
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
