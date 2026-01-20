<script setup lang="ts">
import { resumeData } from '~/data/resume'

const certifications = resumeData.certifications
</script>

<template>
  <section class="py-6">
    <div class="d-flex align-center mb-8">
      <v-icon
        size="32"
        color="primary"
        class="mr-4"
      >
        mdi-certificate
      </v-icon>
      <h2 class="text-h4 font-weight-bold">
        專業證照
      </h2>
    </div>

    <v-row class="ga-4">
      <v-col
        v-for="cert in certifications"
        :key="cert.code"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="h-100 pa-6">
          <div class="d-flex align-center mb-4">
            <v-avatar
              color="primary"
              size="44"
              class="mr-4"
            >
              <v-icon
                color="white"
                size="24"
              >
                mdi-medal
              </v-icon>
            </v-avatar>
            <div>
              <div class="text-subtitle-1 font-weight-bold">
                {{ cert.code }}
              </div>
              <div class="text-caption text-medium-emphasis">
                {{ cert.issuer }}
              </div>
            </div>
          </div>

          <p class="text-body-2 mb-3">
            {{ cert.name }}
          </p>
          <p
            v-if="cert.date"
            class="text-caption text-medium-emphasis mb-4"
          >
            取得日期：{{ cert.date }}
          </p>

          <v-btn
            v-if="cert.url"
            :href="cert.url"
            target="_blank"
            variant="outlined"
            color="primary"
            size="small"
            class="mt-auto"
          >
            <v-icon
              class="mr-1"
              size="16"
            >
              mdi-open-in-new
            </v-icon>
            查看證照
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>

</style>
