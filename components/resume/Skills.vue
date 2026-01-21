<script setup lang="ts">
import { resumeData } from '~/data/resume'

const skills = resumeData.skills
</script>

<template>
  <section class="anim-slide-up anim-delay-100">
    <v-card class="pa-5">
      <div class="d-flex align-center mb-4">
        <v-icon color="primary" class="mr-2">mdi-star-circle</v-icon>
        <h3 class="text-h6 font-weight-bold mb-0">技術技能</h3>
      </div>

      <v-expansion-panels variant="accordion" class="skills-panels">
        <v-expansion-panel
          v-for="(skill, index) in skills"
          :key="skill.category"
          class="skill-panel"
          :style="{ animationDelay: `${200 + index * 50}ms` }"
        >
          <v-expansion-panel-title class="py-3">
            <div class="d-flex align-center">
              <v-icon size="20" color="primary" class="mr-2">{{ skill.icon }}</v-icon>
              <span class="text-subtitle-2 font-weight-medium">{{ skill.category }}</span>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div class="d-flex flex-column ga-3 pt-2">
              <div
                v-for="item in skill.items"
                :key="item.name"
              >
                <div class="d-flex justify-space-between mb-1">
                  <span class="text-body-2">{{ item.name }}</span>
                  <div v-if="item.level" class="d-flex ga-1">
                    <v-icon
                      v-for="n in 5"
                      :key="n"
                      size="12"
                      :color="n <= item.level ? 'primary' : 'grey-lighten-2'"
                    >
                      mdi-circle
                    </v-icon>
                  </div>
                </div>
              </div>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </section>
</template>

<style scoped>
.skills-panels {
  --v-expansion-panel-padding: 0;
}

.skill-panel {
  opacity: 0;
  animation: fadeIn 400ms ease forwards;
  border-radius: 8px !important;
  margin-bottom: 4px;
}

.skill-panel::before {
  box-shadow: none !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
