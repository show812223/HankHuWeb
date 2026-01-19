<script setup lang="ts">
import { resumeData } from '~/data/resume'

const certifications = resumeData.certifications
</script>

<template>
  <v-container class="py-8">
    <h2 class="text-h4 font-weight-bold mb-6">
      <v-icon class="mr-2">mdi-certificate</v-icon>
      專業證照
    </h2>

    <v-row>
      <v-col
        v-for="cert in certifications"
        :key="cert.code"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card variant="outlined" class="h-100">
          <v-card-title class="d-flex align-center">
            <v-avatar color="primary" size="40" class="mr-3">
              <v-icon color="white">mdi-medal</v-icon>
            </v-avatar>
            <div>
              <div class="text-subtitle-1 font-weight-bold">{{ cert.code }}</div>
              <div class="text-caption text-grey">{{ cert.issuer }}</div>
            </div>
          </v-card-title>
          <v-card-text>
            <p class="text-body-2 mb-2">{{ cert.name }}</p>
            <p v-if="cert.date" class="text-caption text-grey">
              取得日期：{{ cert.date }}
            </p>
          </v-card-text>
          <v-card-actions v-if="cert.url">
            <v-btn
              :href="cert.url"
              target="_blank"
              variant="text"
              color="primary"
              size="small"
            >
              <v-icon class="mr-1">mdi-open-in-new</v-icon>
              查看證照
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
