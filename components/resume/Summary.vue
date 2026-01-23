<script setup lang="ts">
import { resumeData } from '~/data/resume'

const summary = resumeData.summary
</script>

<template>
  <section>
    <UiSectionHeader
      icon="mdi-account"
      title="關於我"
    />

    <v-card class="pa-6">
      <p class="text-body-1" style="line-height: 1.8;">
        {{ summary }}
      </p>
    </v-card>
  </section>
</template>
