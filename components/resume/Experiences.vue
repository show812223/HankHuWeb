<script setup lang="ts">
import { NCard, NTag } from 'naive-ui'
import { resumeData } from '~/data/resume'

const experiences = resumeData.experiences
</script>

<template>
  <section class="anim-slide-up anim-delay-200">
    <div class="flex items-center mb-6">
      <span class="text-xl mr-2">💼</span>
      <h2 class="text-xl font-bold font-heading">工作經驗</h2>
    </div>

    <div class="experience-list">
      <NCard
        v-for="(exp, index) in experiences"
        :key="exp.company + exp.startDate"
        class="exp-card p-6 mb-4"
        :class="{ 'exp-card--current': index === 0 }"
        :style="{ animationDelay: `${300 + index * 150}ms` }"
      >
        <!-- Header -->
        <div class="flex flex-wrap justify-between gap-3 mb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <h3 class="text-lg font-bold">
                {{ exp.position }}
              </h3>
              <NTag v-if="index === 0" type="success" size="small" round>
                Current
              </NTag>
            </div>
            <div class="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span class="flex items-center">
                🏢 {{ exp.company }}
              </span>
              <span v-if="exp.location" class="flex items-center">
                📍 {{ exp.location }}
              </span>
            </div>
          </div>
          <NTag size="small" round>
            📅 {{ exp.startDate }} - {{ exp.endDate }}
          </NTag>
        </div>

        <!-- Description -->
        <ul class="description-list mb-5 pl-5">
          <li
            v-for="(desc, descIndex) in exp.description"
            :key="descIndex"
            class="mb-2 text-sm"
          >
            {{ desc }}
          </li>
        </ul>

        <!-- Technologies -->
        <div v-if="exp.technologies?.length" class="flex flex-wrap gap-2">
          <NTag
            v-for="tech in exp.technologies"
            :key="tech"
            size="small"
            round
          >
            {{ tech }}
          </NTag>
        </div>
      </NCard>
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
}

.exp-card--current {
  border-left: 3px solid #6B9B6B !important;
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

.description-list li {
  position: relative;
}

.description-list li::marker {
  color: var(--color-primary);
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
