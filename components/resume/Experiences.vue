<script setup lang="ts">
import { resumeData } from '~/data/resume'

const experiences = resumeData.experiences
</script>

<template>
  <section class="anim-slide-up anim-delay-200">
    <div class="d-flex align-center mb-6">
      <v-icon color="primary" class="mr-2">mdi-briefcase</v-icon>
      <h2 class="text-h5 font-weight-bold mb-0">工作經驗</h2>
    </div>

    <div class="experience-list">
      <v-card
        v-for="(exp, index) in experiences"
        :key="exp.company + exp.startDate"
        class="exp-card pa-6 mb-4"
        :class="{ 'exp-card--current': index === 0 }"
        :style="{ animationDelay: `${300 + index * 150}ms` }"
      >
        <!-- Header -->
        <div class="d-flex align-start justify-space-between flex-wrap ga-3 mb-4">
          <div>
            <div class="d-flex align-center ga-2 mb-1">
              <h3 class="text-h6 font-weight-bold mb-0">
                {{ exp.position }}
              </h3>
              <v-chip
                v-if="index === 0"
                color="success"
                variant="flat"
                size="x-small"
              >
                Current
              </v-chip>
            </div>
            <div class="d-flex align-center flex-wrap ga-3 text-body-2 text-medium-emphasis">
              <span class="d-flex align-center">
                <v-icon size="16" class="mr-1">mdi-domain</v-icon>
                {{ exp.company }}
              </span>
              <span v-if="exp.location" class="d-flex align-center">
                <v-icon size="16" class="mr-1">mdi-map-marker</v-icon>
                {{ exp.location }}
              </span>
            </div>
          </div>
          <v-chip
            variant="outlined"
            size="small"
            class="date-chip"
          >
            <v-icon start size="14">mdi-calendar</v-icon>
            {{ exp.startDate }} - {{ exp.endDate }}
          </v-chip>
        </div>

        <!-- Description -->
        <ul class="description-list mb-5">
          <li
            v-for="(desc, descIndex) in exp.description"
            :key="descIndex"
            class="mb-2 text-body-2"
          >
            {{ desc }}
          </li>
        </ul>

        <!-- Technologies -->
        <div v-if="exp.technologies?.length" class="d-flex flex-wrap ga-2">
          <v-chip
            v-for="tech in exp.technologies"
            :key="tech"
            size="x-small"
            color="primary"
            variant="tonal"
          >
            {{ tech }}
          </v-chip>
        </div>
      </v-card>
    </div>
  </section>
</template>

<style scoped>
.exp-card {
  opacity: 0;
  animation: fadeSlideUp 600ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.exp-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgb(var(--v-theme-primary) / 0.1);
}

.exp-card--current {
  border-left: 3px solid rgb(var(--v-theme-success));
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.description-list {
  line-height: 1.8;
  padding-left: 20px;
  margin: 0;
}

.description-list li {
  position: relative;
  padding-left: 8px;
}

.description-list li::marker {
  color: rgb(var(--v-theme-primary));
}

.date-chip {
  flex-shrink: 0;
}
</style>
