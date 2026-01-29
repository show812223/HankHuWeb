<script setup lang="ts">
import type { Component } from 'vue'
import { resumeData } from '~/data/resume'
import MdiTranslate from '~icons/mdi/translate'
import MdiIdeogramCjk from '~icons/mdi/ideogram-cjk'
import MdiAlphabetical from '~icons/mdi/alphabetical'
import MdiWeb from '~icons/mdi/web'

const languages = resumeData.languages

const iconMap: Record<string, Component> = {
  'mdi-ideogram-cjk': MdiIdeogramCjk,
  'mdi-alphabetical': MdiAlphabetical,
}

const defaultIcon = MdiWeb
</script>

<template>
  <section class="anim-slide-up anim-delay-200">
    <UiSectionHeader title="語言能力">
      <template #icon>
        <MdiTranslate />
      </template>
    </UiSectionHeader>

    <v-row>
      <v-col
        v-for="(lang, index) in languages"
        :key="lang.name"
        cols="6"
      >
        <v-card
          class="text-center pa-6 lang-card"
          :style="{ animationDelay: `${300 + index * 100}ms` }"
          variant="outlined"
        >
          <component
            :is="iconMap[lang.icon] || defaultIcon"
            class="text-h4 mb-4 mx-auto"
          />
          <div class="text-h6 font-weight-medium mb-3">
            {{ lang.name }}
          </div>
          <v-chip
            size="small"
            color="primary"
          >
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
