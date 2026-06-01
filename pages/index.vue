<script setup lang="ts">
import { markRaw } from 'vue'
import type { Component } from 'vue'
import MdiVuejs from '~icons/mdi/vuejs'
import MdiLanguageTypescript from '~icons/mdi/language-typescript'
import MdiCloud from '~icons/mdi/cloud'
import MdiDocker from '~icons/mdi/docker'

const { container, spacing } = useLayoutConfig()
const { getListDelay } = useAnimationConfig()

interface Skill {
  icon: Component
  name: string
  desc: string
}

const skills: Skill[] = [
  { icon: markRaw(MdiVuejs), name: 'Vue / Nuxt', desc: '前端框架' },
  { icon: markRaw(MdiLanguageTypescript), name: 'TypeScript', desc: '型別安全' },
  { icon: markRaw(MdiCloud), name: 'Azure', desc: '雲端服務' },
  { icon: markRaw(MdiDocker), name: 'Docker', desc: '容器技術' },
]
</script>

<template>
  <div class="home-page position-relative overflow-hidden">
    <!-- 日式裝飾元素 -->
    <div class="zen-decoration">
      <div class="zen-circle zen-circle-1" />
      <div class="zen-circle zen-circle-2" />
      <div class="zen-line zen-line-1" />
    </div>

    <!-- Hero Section -->
    <section class="hero-section position-relative z-above">
      <v-container
        :style="container.style"
        :class="[spacing.sectionTitle, spacing.containerPadding]"
      >
        <div class="d-flex flex-column flex-md-row align-center justify-center ga-12 ga-md-16">
          <HomeAvatarCard class="flex-shrink-0" />
          <HomeAboutMe />
        </div>
      </v-container>
    </section>

    <!-- 簡約分隔線 -->
    <div class="zen-divider position-relative z-above">
      <span class="zen-divider-dot" />
    </div>

    <!-- 技術展示區 -->
    <section class="skills-section position-relative z-above">
      <v-container
        :style="container.style"
        :class="[spacing.sectionContent, spacing.containerPadding]"
      >
        <div class="text-center mb-12 anim-fade-in">
          <p class="text-caption text-muted mb-2 letter-spacing-wide text-uppercase">
            EXPERTISE
          </p>
          <h2 class="text-h5 font-weight-bold text-primary font-heading">
            專業領域
          </h2>
        </div>

        <div class="skill-grid">
          <div
            v-for="(skill, index) in skills"
            :key="skill.name"
            class="skill-item text-center cursor-pointer pa-6"
            :style="{ animationDelay: getListDelay(index, 300) }"
          >
            <div class="skill-icon-wrapper mx-auto mb-4 bg-white">
              <component
                :is="skill.icon"
                class="text-h4"
              />
            </div>
            <div class="text-body-2 font-weight-bold mb-1">
              {{ skill.name }}
            </div>
            <div class="text-caption text-muted">
              {{ skill.desc }}
            </div>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
}

/* 禪意裝飾元素 */
.zen-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(78, 69, 64, 0.06);
}

.zen-circle-1 {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -200px;
}

.zen-circle-2 {
  width: 400px;
  height: 400px;
  bottom: -100px;
  left: -100px;
}

.zen-line {
  position: absolute;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(78, 69, 64, 0.08),
    transparent
  );
}

.zen-line-1 {
  width: 1px;
  height: 200px;
  top: 100px;
  left: 10%;
}

/* 技術項目 */
.skill-item {
  opacity: 0;
  animation: gentleFadeUp 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  transition: transform 0.4s ease;
}

.skill-item:hover {
  transform: translateY(-4px);
}

.skill-item:hover .skill-icon-wrapper {
  border-color: rgba(78, 69, 64, 0.3);
  background: rgba(78, 69, 64, 0.08);
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 600px) {
  .skill-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.skill-icon-wrapper {
  width: 72px;
  height: 72px;
  border-radius: 9999px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

@keyframes gentleFadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
