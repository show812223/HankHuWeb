<script setup lang="ts">
  import { resumeData } from '~/data/resume'

  const languages = resumeData.languages
</script>

<template>
  <section class="d-flex flex-column ga-4 anim-slide-up anim-delay-200">
    <UiSectionHeader icon="mdi-translate" title="語言能力" />

    <div class="d-flex ga-3 flex-wrap">
      <v-card
        v-for="(lang, index) in languages"
        :key="lang.name"
        class="text-center pa-6 lang-card card-interactive"
        :style="{ animationDelay: `${300 + index * 100}ms` }"
        width="150"
      >
        <v-icon :icon="lang.icon || 'mdi-translate'" size="40" color="primary" class="mb-4" />
        <div class="text-h6 font-weight-medium mb-3">
          {{ lang.name }}
        </div>
        <v-chip size="small" color="primary">
          {{ lang.level }}
        </v-chip>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
  .lang-card {
    opacity: 0;
    animation: popIn 400ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
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
