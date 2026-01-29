<script setup lang="ts">
import type { Component } from 'vue'
import { resumeData } from '~/data/resume'
import MdiStar from '~icons/mdi/star'
import MdiVuejs from '~icons/mdi/vuejs'
import MdiLanguageTypescript from '~icons/mdi/language-typescript'
import MdiCloud from '~icons/mdi/cloud'
import MdiDocker from '~icons/mdi/docker'
import MdiSitemap from '~icons/mdi/sitemap'
import MdiPackageVariant from '~icons/mdi/package-variant'

const skills = resumeData.skills

const iconMap: Record<string, Component> = {
  'mdi-vuejs': MdiVuejs,
  'mdi-language-typescript': MdiLanguageTypescript,
  'mdi-cloud': MdiCloud,
  'mdi-docker': MdiDocker,
  'mdi-sitemap': MdiSitemap,
}

const defaultIcon = MdiPackageVariant
</script>

<template>
  <section class="anim-slide-up anim-delay-100">
    <v-card
      class="pa-5"
      variant="outlined"
    >
      <div class="d-flex align-center mb-5">
        <MdiStar class="text-h5 mr-2" />
        <h3 class="text-h6 font-weight-bold font-heading">
          技術技能
        </h3>
      </div>

      <div class="skills-list d-flex flex-column ga-5">
        <div
          v-for="(skill, index) in skills"
          :key="skill.category"
          class="skill-category"
          :style="{ animationDelay: `${200 + index * 80}ms` }"
        >
          <!-- 類別標題 -->
          <div class="d-flex align-center mb-3">
            <component
              :is="iconMap[skill.icon] || defaultIcon"
              class="text-h6 mr-2"
            />
            <span class="text-body-2 font-weight-medium">
              {{ skill.category }}
            </span>
          </div>

          <!-- 技能項目 -->
          <div class="skill-items d-flex flex-column ga-2 pl-6 border-l">
            <div
              v-for="item in skill.items"
              :key="item.name"
              class="skill-item d-flex justify-space-between align-center py-1"
            >
              <span class="text-body-2">
                {{ item.name }}
              </span>
              <div
                v-if="item.level"
                class="d-flex ga-1"
              >
                <span
                  v-for="n in 5"
                  :key="n"
                  class="level-dot"
                  :class="{ 'level-dot--active': n <= item.level }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </section>
</template>

<style scoped>
.skill-category {
  opacity: 0;
  animation: fadeIn 400ms ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.border-l {
  border-left: 1px solid var(--color-border);
}

.level-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-border);
  transition: background 0.3s ease;
}

.level-dot--active {
  background: var(--color-primary);
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
