<script setup lang="ts">
  import { resumeData } from '~/data/resume'

  const certifications = resumeData.certifications
</script>

<template>
  <section class="section anim-slide-up anim-delay-500">
    <UiSectionHeader icon="mdi-certificate" title="專業證照" subtitle="專業認證與資格" />

    <div class="d-flex ga-2 flex-wrap">
      <v-card
        v-for="(cert, index) in certifications"
        :key="cert.code"
        class="h-100 pa-6 cert-card card-interactive d-flex flex-column"
        :style="{ animationDelay: `${600 + index * 100}ms` }"
      >
        <div class="d-flex align-center mb-4">
          <v-avatar color="primary" size="44" class="mr-4">
            <v-icon color="white" size="24"> mdi-medal </v-icon>
          </v-avatar>
          <div>
            <div class="text-subtitle-1 font-weight-medium">
              {{ cert.code }}
            </div>
            <div class="text-caption text-medium-emphasis">
              {{ cert.issuer }}
            </div>
          </div>
        </div>

        <p class="text-body-2 mb-3 flex-grow-1">
          {{ cert.name }}
        </p>
        <p v-if="cert.date" class="text-caption text-medium-emphasis mb-4">
          取得日期：{{ cert.date }}
        </p>

        <v-btn
          v-if="cert.url"
          :href="cert.url"
          target="_blank"
          variant="outlined"
          color="primary"
          size="small"
        >
          <v-icon class="mr-1" size="16"> mdi-open-in-new </v-icon>
          查看證照
        </v-btn>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
  .cert-card {
    opacity: 0;
    animation: scaleSlideUp 500ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  }

  @keyframes scaleSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
</style>
