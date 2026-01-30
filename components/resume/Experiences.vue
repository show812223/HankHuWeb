<script setup lang="ts">
import { resumeData } from '~/data/resume'

const experiences = resumeData.experiences
</script>

<template>
  <section class="anim-slide-up anim-delay-200">
    <div class="d-flex align-center mb-6">
      <v-icon icon="mdi-briefcase" class="mr-2" />
      <h2 class="text-h6 font-weight-bold font-heading">工作經驗</h2>
    </div>

    <div class="d-flex flex-column">
      <v-card
        v-for="(exp, index) in experiences"
        :key="exp.company + exp.startDate"
        class="exp-card pa-6 mb-4"
        :class="{ 'exp-card--current': index === 0 }"
        :style="{ animationDelay: `${300 + index * 150}ms` }"
      >
        <!-- Header -->
        <div class="d-flex flex-wrap justify-space-between ga-3 mb-4">
          <div>
            <div class="d-flex align-center ga-2 mb-1">
              <h3 class="text-subtitle-1 font-weight-bold">
                {{ exp.position }}
              </h3>
              <v-chip v-if="index === 0" color="success" size="x-small">
                Current
              </v-chip>
            </div>
            <div class="d-flex flex-wrap align-center ga-3 text-body-2 text-medium-emphasis">
              <span class="d-flex align-center ga-1">
                <v-icon icon="mdi-office-building" size="small" />
                {{ exp.company }}
              </span>
              <span v-if="exp.location" class="d-flex align-center ga-1">
                <v-icon icon="mdi-map-marker" size="small" />
                {{ exp.location }}
              </span>
            </div>
          </div>
          <v-chip size="small" prepend-icon="mdi-calendar">
            {{ exp.startDate }} - {{ exp.endDate }}
          </v-chip>
        </div>

        <!-- Description -->
        <ul class="description-list mb-5 pl-5">
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
          <v-chip v-for="tech in exp.technologies" :key="tech" size="small">
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
  border: 1px solid rgba(78, 69, 64, 0.1);
  transition: transform 0.3s ease;
}

.exp-card:hover {
  transform: translateX(4px);
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
  margin: 0;
}

.description-list li::marker {
  color: rgb(var(--v-theme-primary));
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
