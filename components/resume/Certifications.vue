<script setup lang="ts">
import { resumeData } from '~/data/resume'

const certifications = resumeData.certifications
</script>

<template>
  <section>
    <UiSectionHeader
      icon="mdi-certificate"
      title="專業證照"
    />

    <v-row>
      <v-col
        v-for="cert in certifications"
        :key="cert.code"
        cols="12"
        sm="6"
      >
        <v-card class="h-100 pa-6 cert-card">
          <div class="d-flex align-center mb-4">
            <v-avatar color="primary" size="44" class="mr-4">
              <v-icon color="white" size="24">mdi-medal</v-icon>
            </v-avatar>
            <div>
              <div class="text-subtitle-1 font-weight-bold">{{ cert.code }}</div>
              <div class="text-caption text-medium-emphasis">{{ cert.issuer }}</div>
            </div>
          </div>

          <p class="text-body-2 mb-4">{{ cert.name }}</p>

          <v-btn
            v-if="cert.url"
            :href="cert.url"
            target="_blank"
            variant="text"
            color="primary"
            size="small"
          >
            <v-icon start size="16">mdi-open-in-new</v-icon>
            View Certificate
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.cert-card {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.cert-card:hover {
  border-color: rgb(var(--v-theme-primary)) !important;
  box-shadow: 0 4px 16px rgb(var(--v-theme-primary) / 0.1);
}
</style>
