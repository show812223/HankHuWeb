<script setup lang="ts">
import { resumeData } from '~/data/resume'

const certifications = resumeData.certifications
</script>

<template>
  <section class="anim-slide-up anim-delay-500">
    <UiSectionHeader title="專業證照" subtitle="專業認證與資格">
      <template #icon>
        <v-icon icon="mdi-trophy" />
      </template>
    </UiSectionHeader>

    <div class="d-flex flex-column ga-4">
      <v-card
        v-for="(cert, index) in certifications"
        :key="cert.code"
        class="pa-6 cert-card"
        :style="{ animationDelay: `${600 + index * 100}ms` }"
      >
        <div class="d-flex align-center mb-4">
          <v-avatar size="44" color="primary" class="mr-4">
            <v-icon icon="mdi-medal" color="white" />
          </v-avatar>
          <div>
            <div class="text-body-1 font-weight-medium">
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
        <p v-if="cert.date" class="text-caption text-medium-emphasis mb-4">
          取得日期：{{ cert.date }}
        </p>

        <v-btn
          v-if="cert.url"
          :href="cert.url"
          target="_blank"
          variant="outlined"
          size="small"
          prepend-icon="mdi-open-in-new"
        >
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
  border: 1px solid rgba(78, 69, 64, 0.1);
  transition: transform 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-2px);
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
