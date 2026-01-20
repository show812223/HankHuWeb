<script setup lang="ts">
import { resumeData } from '~/data/resume'

const experiences = resumeData.experiences
</script>

<template>
  <section class="py-6">
    <div class="d-flex align-center mb-8">
      <v-icon
        size="32"
        color="primary"
        class="mr-4"
      >
        mdi-briefcase
      </v-icon>
      <h2 class="text-h4 font-weight-bold">
        工作經驗
      </h2>
    </div>

    <v-timeline
      side="end"
      align="start"
      line-color="primary"
    >
      <v-timeline-item
        v-for="exp in experiences"
        :key="exp.company + exp.startDate"
        dot-color="primary"
        size="small"
      >
        <template #opposite>
          <div class="text-body-2 text-medium-emphasis">
            {{ exp.startDate }} - {{ exp.endDate }}
          </div>
        </template>

        <v-card class="pa-6">
          <h3 class="text-h6 font-weight-bold mb-2">
            {{ exp.position }}
          </h3>
          <div class="d-flex align-center flex-wrap ga-3 mb-4 text-body-2 text-medium-emphasis">
            <span class="d-flex align-center">
              <v-icon
                size="16"
                class="mr-1"
              >
                mdi-domain
              </v-icon>
              {{ exp.company }}
            </span>
            <span class="d-flex align-center">
              <v-icon
                size="16"
                class="mr-1"
              >
                mdi-account-group
              </v-icon>
              {{ exp.department }}
            </span>
          </div>

          <ul class="pl-4 mb-5">
            <li
              v-for="(desc, index) in exp.description"
              :key="index"
              class="mb-2 text-body-2"
              style="line-height: 1.7;"
            >
              {{ desc }}
            </li>
          </ul>

          <div
            v-if="exp.technologies?.length"
            class="d-flex flex-wrap ga-2"
          >
            <v-chip
              v-for="tech in exp.technologies"
              :key="tech"
              size="small"
              color="primary"
            >
              {{ tech }}
            </v-chip>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<style scoped>

</style>
