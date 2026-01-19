<script setup lang="ts">
import { resumeData } from '~/data/resume'

const educations = resumeData.educations
</script>

<template>
  <v-container class="py-8">
    <h2 class="text-h4 font-weight-bold mb-6">
      <v-icon class="mr-2">mdi-school</v-icon>
      教育背景
    </h2>

    <v-row>
      <v-col
        v-for="edu in educations"
        :key="edu.school + edu.degree"
        cols="12"
        md="6"
      >
        <v-card variant="outlined" class="h-100">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2" color="primary">mdi-school</v-icon>
            {{ edu.school }}
          </v-card-title>
          <v-card-subtitle>
            {{ edu.startDate }} - {{ edu.endDate }}
          </v-card-subtitle>
          <v-card-text>
            <div class="d-flex align-center mb-2">
              <v-chip color="primary" variant="tonal" size="small" class="mr-2">
                {{ edu.degree }}
              </v-chip>
              <span class="text-body-1">{{ edu.major }}</span>
            </div>
            <p v-if="edu.description" class="text-body-2 text-grey">
              {{ edu.description }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
