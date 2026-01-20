<script setup lang="ts">
import { resumeData } from '~/data/resume'

const languages = resumeData.languages
</script>

<template>
  <v-container class="py-8">
    <h2 class="text-h4 font-weight-bold mb-6">
      <v-icon class="mr-2">mdi-translate</v-icon>
      語言能力
    </h2>

    <v-row>
      <v-col
        v-for="lang in languages"
        :key="lang.name"
        cols="6"
        sm="4"
        md="3"
      >
        <v-card variant="outlined" class="text-center pa-4">
          <v-icon :icon="lang.icon || 'mdi-translate'" size="36" color="primary" class="mb-2" />
          <div class="text-h6 font-weight-bold">{{ lang.name }}</div>
          <v-chip size="small" color="primary" variant="tonal" class="mt-2">
            {{ lang.level }}
          </v-chip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
