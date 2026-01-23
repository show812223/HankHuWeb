<script setup lang="ts">
import { resumeData } from '~/data/resume'

const languages = resumeData.languages
</script>

<template>
  <section>
    <UiSectionHeader
      icon="mdi-translate"
      title="語言能力"
    />

    <v-row>
      <v-col
        v-for="lang in languages"
        :key="lang.name"
        cols="6"
        sm="4"
        md="3"
      >
        <v-card class="text-center pa-6 lang-card">
          <v-icon
            :icon="lang.icon || 'mdi-translate'"
            size="32"
            color="primary"
            class="mb-3"
          />
          <div class="text-subtitle-1 font-weight-bold mb-2">{{ lang.name }}</div>
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
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.lang-card:hover {
  border-color: rgb(var(--v-theme-primary)) !important;
  box-shadow: 0 4px 16px rgb(var(--v-theme-primary) / 0.1);
}
</style>
