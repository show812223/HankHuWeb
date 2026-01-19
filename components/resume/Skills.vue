<script setup lang="ts">
import { resumeData } from '~/data/resume'

const skills = resumeData.skills
</script>

<template>
  <v-container class="py-8">
    <h2 class="text-h4 font-weight-bold mb-6">
      <v-icon class="mr-2">mdi-star-circle</v-icon>
      技術技能
    </h2>

    <v-row>
      <v-col
        v-for="skill in skills"
        :key="skill.category"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card class="h-100" variant="outlined">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2" color="primary">{{ skill.icon }}</v-icon>
            {{ skill.category }}
          </v-card-title>
          <v-card-text>
            <div
              v-for="item in skill.items"
              :key="item.name"
              class="mb-3"
            >
              <div class="d-flex justify-space-between mb-1">
                <span>{{ item.name }}</span>
                <span v-if="item.level" class="text-grey">
                  {{ item.level }}/5
                </span>
              </div>
              <v-progress-linear
                v-if="item.level"
                :model-value="item.level * 20"
                color="primary"
                height="8"
                rounded
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
