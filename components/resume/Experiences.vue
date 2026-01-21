<script setup lang="ts">
import { resumeData } from '~/data/resume'

const experiences = resumeData.experiences
</script>

<template>
  <section class="section anim-slide-up anim-delay-400">
    <UiSectionHeader
      icon="mdi-briefcase"
      title="工作經驗"
      subtitle="職涯發展歷程"
    />

    <v-timeline
      side="end"
      align="start"
      line-color="primary"
    >
      <v-timeline-item
        v-for="(exp, index) in experiences"
        :key="exp.company + exp.startDate"
        dot-color="primary"
        size="small"
        class="exp-item"
        :style="{ animationDelay: `${500 + index * 200}ms` }"
      >
        <template #opposite>
          <div class="text-body-2 text-medium-emphasis d-flex flex-column align-end">
            <span>{{ exp.startDate }}</span>
            <span class="text-caption">至</span>
            <span>{{ exp.endDate }}</span>
          </div>
        </template>

        <v-card class="pa-6 card-interactive">
          <h3 class="text-h6 font-weight-medium mb-2">
            {{ exp.position }}
          </h3>
          <div class="d-flex align-center flex-wrap ga-3 mb-4 text-body-2 text-medium-emphasis">
            <span class="d-flex align-center">
              <v-icon
                size="16"
                class="mr-1"
              >
                mdi-domain
              </v-icon>
              {{ exp.company }}
            </span>
            <span
              v-if="exp.location"
              class="d-flex align-center"
            >
              <v-icon
                size="16"
                class="mr-1"
              >
                mdi-map-marker
              </v-icon>
              {{ exp.location }}
            </span>
          </div>

          <ul class="pl-4 mb-5 description-list">
            <li
              v-for="(desc, descIndex) in exp.description"
              :key="descIndex"
              class="mb-2 text-body-2"
            >
              {{ desc }}
            </li>
          </ul>

          <div
            v-if="exp.technologies?.length"
            class="d-flex flex-wrap ga-2"
          >
            <v-chip
              v-for="tech in exp.technologies"
              :key="tech"
              size="small"
              color="primary"
              class="chip-interactive"
            >
              {{ tech }}
            </v-chip>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<style scoped>
.exp-item {
  opacity: 0;
  animation: fadeSlideUp 600ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.description-list {
  line-height: 1.7;
}

.description-list li::marker {
  color: rgb(var(--v-theme-primary));
}
</style>
