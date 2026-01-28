<script setup lang="ts">
import { NCard, NButton, NAvatar } from 'naive-ui'
import { resumeData } from '~/data/resume'
import MdiTrophy from '~icons/mdi/trophy'
import MdiMedal from '~icons/mdi/medal'
import MdiOpenInNew from '~icons/mdi/open-in-new'

const certifications = resumeData.certifications
</script>

<template>
  <section class="anim-slide-up anim-delay-500">
    <UiSectionHeader
      title="專業證照"
      subtitle="專業認證與資格"
    >
      <template #icon>
        <MdiTrophy />
      </template>
    </UiSectionHeader>

    <div class="flex flex-col gap-4">
      <NCard
        v-for="(cert, index) in certifications"
        :key="cert.code"
        class="p-6 cert-card"
        :style="{ animationDelay: `${600 + index * 100}ms` }"
      >
        <div class="flex items-center mb-4">
          <NAvatar
            :size="44"
            round
            class="mr-4 bg-primary text-white flex items-center justify-center"
          >
            <MdiMedal class="text-xl" />
          </NAvatar>
          <div>
            <div class="text-base font-medium">
              {{ cert.code }}
            </div>
            <div class="text-xs text-muted">
              {{ cert.issuer }}
            </div>
          </div>
        </div>

        <p class="text-sm mb-3 flex-grow">
          {{ cert.name }}
        </p>
        <p
          v-if="cert.date"
          class="text-xs text-muted mb-4"
        >
          取得日期：{{ cert.date }}
        </p>

        <NButton
          v-if="cert.url"
          tag="a"
          :href="cert.url"
          target="_blank"
          size="small"
          secondary
        >
          <template #icon>
            <MdiOpenInNew />
          </template>
          查看證照
        </NButton>
      </NCard>
    </div>
  </section>
</template>

<style scoped>
.cert-card {
  opacity: 0;
  animation: scaleSlideUp 500ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
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

.bg-primary {
  background-color: var(--color-primary);
}
</style>
