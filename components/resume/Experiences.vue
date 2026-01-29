<script setup lang="ts">
import { resumeData } from '~/data/resume'
import MdiBriefcase from '~icons/mdi/briefcase'
import MdiOfficeBuilding from '~icons/mdi/office-building'
import MdiMapMarker from '~icons/mdi/map-marker'
import MdiCalendar from '~icons/mdi/calendar'

const { getListDelay } = useAnimationConfig()

const experiences = resumeData.experiences
</script>

<template>
  <section class="anim-slide-up anim-delay-200">
    <div class="d-flex align-center mb-6">
      <MdiBriefcase class="text-h5 mr-2" />
      <h2 class="text-h5 font-weight-bold font-heading">
        工作經驗
      </h2>
    </div>

    <div class="experience-list">
      <v-card
        v-for="(exp, index) in experiences"
        :key="exp.company + exp.startDate"
        class="exp-card pa-6 mb-4"
        :class="{ 'exp-card--current': index === 0 }"
        :style="{ animationDelay: getListDelay(index, 300) }"
        variant="outlined"
      >
        <!-- Header -->
        <div class="d-flex flex-wrap justify-space-between ga-3 mb-4">
          <div>
            <div class="d-flex align-center ga-2 mb-1">
              <h3 class="text-h6 font-weight-bold">
                {{ exp.position }}
              </h3>
              <v-chip
                v-if="index === 0"
                color="success"
                size="small"
              >
                Current
              </v-chip>
            </div>
            <div class="d-flex flex-wrap align-center ga-3 text-body-2 text-medium-emphasis">
              <span class="d-flex align-center ga-1">
                <MdiOfficeBuilding class="text-body-1" />
                {{ exp.company }}
              </span>
              <span
                v-if="exp.location"
                class="d-flex align-center ga-1"
              >
                <MdiMapMarker class="text-body-1" />
                {{ exp.location }}
              </span>
            </div>
          </div>
          <v-chip size="small">
            <template #prepend>
              <MdiCalendar class="text-body-2 mr-1" />
            </template>
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
        <div
          v-if="exp.technologies?.length"
          class="d-flex flex-wrap ga-2"
        >
          <v-chip
            v-for="tech in exp.technologies"
            :key="tech"
            size="small"
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
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.exp-card:hover {
  transform: translateX(4px);
}

.exp-card--current {
  border-left: 3px solid #6b9b6b !important;
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
