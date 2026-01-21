<script setup lang="ts">
import { resumeData } from '~/data/resume'

const summary = resumeData.summary
</script>

<template>
  <section class="section anim-slide-up">
    <v-card class="pa-8 card-interactive summary-card">
      <UiSectionHeader
        icon="mdi-account-circle"
        title="關於我"
      />
      <p class="text-body-1 leading-loose summary-text">
        {{ summary }}
      </p>
    </v-card>
  </section>
</template>

<style scoped>
.summary-card {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-surface)) 0%,
    rgb(var(--v-theme-surface-light)) 100%
  );
}

.summary-text {
  max-width: 800px;
}
</style>
