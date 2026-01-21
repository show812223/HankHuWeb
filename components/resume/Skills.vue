<script setup lang="ts">
import { resumeData } from '~/data/resume'

const skills = resumeData.skills
</script>

<template>
  <section class="section anim-slide-up anim-delay-100">
    <UiSectionHeader
      icon="mdi-star-circle"
      title="技術技能"
      subtitle="專業技術與工具"
    />

    <v-row class="ga-4">
      <v-col
        v-for="(skill, index) in skills"
        :key="skill.category"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          class="h-100 pa-6 skill-card card-interactive"
          :style="{ animationDelay: `${200 + index * 100}ms` }"
        >
          <div class="d-flex align-center mb-4">
            <v-icon
              class="mr-3"
              color="primary"
              size="24"
            >
              {{ skill.icon }}
            </v-icon>
            <span class="text-h6 font-weight-medium">{{ skill.category }}</span>
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
                class="progress-animated"
              />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
.skill-card {
  opacity: 0;
  animation: scaleIn 500ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.progress-animated :deep(.v-progress-linear__determinate) {
  transition: width 800ms cubic-bezier(0.22, 0.61, 0.36, 1);
}
</style>
