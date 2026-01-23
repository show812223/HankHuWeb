<script setup lang="ts">
import { resumeData } from '~/data/resume'

const educations = resumeData.educations
</script>

<template>
  <section>
    <UiSectionHeader
      icon="mdi-school"
      title="教育背景"
    />

    <v-row>
      <v-col
        v-for="edu in educations"
        :key="edu.school + edu.degree"
        cols="12"
        md="6"
      >
        <v-card class="h-100 pa-6 edu-card">
          <div class="d-flex align-center mb-3">
            <v-icon class="mr-3" color="primary" size="24">mdi-school</v-icon>
            <span class="text-h6 font-weight-medium">{{ edu.school }}</span>
          </div>
          <p class="text-body-2 text-medium-emphasis mb-3">
            {{ edu.startDate }} - {{ edu.endDate }}
          </p>
          <div class="d-flex align-center flex-wrap ga-2">
            <v-chip color="primary" size="small">
              {{ edu.degree }}
            </v-chip>
            <span class="text-body-2">{{ edu.major }}</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.edu-card {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.edu-card:hover {
  border-color: rgb(var(--v-theme-primary)) !important;
  box-shadow: 0 4px 16px rgb(var(--v-theme-primary) / 0.1);
}
</style>
