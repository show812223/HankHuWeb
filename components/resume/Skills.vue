<script setup lang="ts">
import { NCard } from 'naive-ui'
import { resumeData } from '~/data/resume'

const skills = resumeData.skills

const iconMap: Record<string, string> = {
  'mdi-vuejs': '🟢',
  'mdi-language-typescript': '📘',
  'mdi-cloud': '☁️',
  'mdi-docker': '🐳',
  'mdi-sitemap': '🏗️',
}
</script>

<template>
  <section class="anim-slide-up anim-delay-100">
    <NCard class="p-5">
      <div class="flex items-center mb-5">
        <span class="text-xl mr-2">⭐</span>
        <h3 class="text-lg font-bold font-heading">技術技能</h3>
      </div>

      <div class="skills-list flex flex-col gap-5">
        <div
          v-for="(skill, index) in skills"
          :key="skill.category"
          class="skill-category"
          :style="{ animationDelay: `${200 + index * 80}ms` }"
        >
          <!-- 類別標題 -->
          <div class="flex items-center mb-3">
            <span class="text-lg mr-2">{{ iconMap[skill.icon] || '📦' }}</span>
            <span class="text-sm font-medium">{{ skill.category }}</span>
          </div>

          <!-- 技能項目 -->
          <div class="skill-items flex flex-col gap-2 pl-6 border-l border-[var(--color-border)]">
            <div
              v-for="item in skill.items"
              :key="item.name"
              class="skill-item flex justify-between items-center py-1"
            >
              <span class="text-sm">{{ item.name }}</span>
              <div v-if="item.level" class="flex gap-1">
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
    </NCard>
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
