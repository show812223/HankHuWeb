<script setup lang="ts">
import { resumeData } from '~/data/resume'

const experiences = resumeData.experiences
</script>

<template>
  <v-container class="py-8">
    <h2 class="text-h4 font-weight-bold mb-6">
      <v-icon class="mr-2">mdi-briefcase</v-icon>
      工作經驗
    </h2>

    <v-timeline side="end" align="start">
      <v-timeline-item
        v-for="exp in experiences"
        :key="exp.company + exp.startDate"
        dot-color="primary"
        size="small"
      >
        <template #opposite>
          <div class="text-subtitle-2 text-grey">
            {{ exp.startDate }} - {{ exp.endDate }}
          </div>
        </template>

        <v-card variant="outlined">
          <v-card-title class="pb-1">
            {{ exp.position }}
          </v-card-title>
          <v-card-subtitle class="pb-2">
            <v-icon size="small" class="mr-1">mdi-domain</v-icon>
            {{ exp.company }}
            <span class="ml-2">
              <v-icon size="small" class="mr-1">mdi-account-group</v-icon>
              {{ exp.department }}
            </span>
          </v-card-subtitle>
          <v-card-text>
            <ul class="pl-4 mb-4">
              <li
                v-for="(desc, index) in exp.description"
                :key="index"
                class="mb-2"
              >
                {{ desc }}
              </li>
            </ul>

            <div v-if="exp.technologies?.length" class="d-flex flex-wrap gap-2">
              <v-chip
                v-for="tech in exp.technologies"
                :key="tech"
                size="small"
                color="primary"
                variant="tonal"
              >
                {{ tech }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<style scoped>

</style>
