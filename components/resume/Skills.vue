<script setup lang="ts">
import { resumeData } from '~/data/resume'

const skills = resumeData.skills
</script>

<template>
  <section class="anim-slide-up anim-delay-100">
    <v-card class="pa-5">
      <div class="d-flex align-center mb-5">
        <v-icon color="primary" class="mr-2">mdi-star-circle</v-icon>
        <h3 class="text-h6 font-weight-bold mb-0">技術技能</h3>
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
            <v-icon size="18" color="primary" class="mr-2">{{ skill.icon }}</v-icon>
            <span class="text-subtitle-2 font-weight-medium">{{ skill.category }}</span>
          </div>

          <!-- 技能項目 -->
          <div class="skill-items d-flex flex-column ga-2 pl-6">
            <div
              v-for="item in skill.items"
              :key="item.name"
              class="skill-item d-flex justify-space-between align-center"
            >
              <span class="text-body-2">{{ item.name }}</span>
              <div v-if="item.level" class="d-flex ga-1">
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

.skill-items {
  border-left: 1px solid rgb(var(--v-theme-border));
}

.skill-item {
  padding: 0.25rem 0;
}

.level-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgb(var(--v-theme-border));
  transition: background 0.3s ease;
}

.level-dot--active {
  background: rgb(var(--v-theme-primary));
}
</style>
