<script setup lang="ts">
import { resumeData } from '~/data/resume'

const languages = resumeData.languages
</script>

<template>
  <section class="py-6">
    <div class="d-flex align-center mb-8">
      <v-icon
        size="32"
        color="primary"
        class="mr-4"
      >
        mdi-translate
      </v-icon>
      <h2 class="text-h4 font-weight-bold">
        語言能力
      </h2>
    </div>

    <v-row class="ga-4">
      <v-col
        v-for="lang in languages"
        :key="lang.name"
        cols="6"
        sm="4"
        md="3"
      >
        <v-card class="text-center pa-6">
          <v-icon
            :icon="lang.icon || 'mdi-translate'"
            size="40"
            color="primary"
            class="mb-4"
          />
          <div class="text-h6 font-weight-bold mb-3">
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

</style>
