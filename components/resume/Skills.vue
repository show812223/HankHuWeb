<script setup lang="ts">
import { resumeData } from '~/data/resume'

const skills = resumeData.skills
</script>

<template>
  <section class="py-6">
    <div class="d-flex align-center mb-8">
      <v-icon
        size="32"
        color="primary"
        class="mr-4"
      >
        mdi-star-circle
      </v-icon>
      <h2 class="text-h4 font-weight-bold">
        技術技能
      </h2>
    </div>

    <v-row class="ga-4">
      <v-col
        v-for="skill in skills"
        :key="skill.category"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card class="h-100 pa-6">
          <div class="d-flex align-center mb-4">
            <v-icon
              class="mr-3"
              color="primary"
              size="24"
            >
              {{ skill.icon }}
            </v-icon>
            <span class="text-h6 font-weight-bold">{{ skill.category }}</span>
          </div>
          <div class="d-flex flex-column ga-4">
            <div
              v-for="item in skill.items"
              :key="item.name"
            >
              <div class="d-flex justify-space-between mb-2">
                <span class="text-body-2">{{ item.name }}</span>
                <span
                  v-if="item.level"
                  class="text-body-2 text-medium-emphasis"
                >
                  {{ item.level }}/5
                </span>
              </div>
              <v-progress-linear
                v-if="item.level"
                :model-value="item.level * 20"
                color="primary"
                height="6"
                rounded
              />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>

</style>
