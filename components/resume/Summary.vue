<script setup lang="ts">
import { resumeData } from '~/data/resume'

const summary = resumeData.summary
</script>

<template>
  <section class="py-6 anim-slide-up">
    <v-card class="pa-8">
      <div class="d-flex align-center mb-6">
        <v-icon
          size="32"
          color="primary"
          class="mr-4"
        >
          mdi-account-circle
        </v-icon>
        <h2 class="text-h4 font-weight-bold">
          關於我
        </h2>
      </div>
      <p
        class="text-body-1"
        style="line-height: 2;"
      >
        {{ summary }}
      </p>
    </v-card>
  </section>
</template>

<style scoped>

</style>
