<script setup lang="ts">
import { resumeData } from '~/data/resume'

const summary = resumeData.summary
</script>

<template>
  <v-container class="py-8">
    <v-card variant="tonal" color="primary" class="pa-6">
      <div class="d-flex align-center mb-4">
        <v-avatar color="primary" size="48" class="mr-4">
          <v-icon size="28">mdi-account-circle</v-icon>
        </v-avatar>
        <h2 class="text-h5 font-weight-bold">關於我</h2>
      </div>
      <p class="text-body-1" style="line-height: 1.8;">
        {{ summary }}
      </p>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>
