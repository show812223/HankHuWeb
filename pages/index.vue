<script setup lang="ts">

</script>

<template>
  <div class="home-page">
    <!-- 背景網格裝飾 -->
    <div class="grid-background" />

    <!-- Hero Section -->
    <section class="hero-section">
      <v-container class="py-16 py-md-20">
        <div class="d-flex flex-column flex-md-row align-center justify-center ga-12 ga-md-16">
          <HomeAvatarCard class="flex-shrink-0" />
          <HomeAboutMe />
        </div>
      </v-container>
    </section>

    <!-- 分隔線 -->
    <div class="section-divider">
      <div class="divider-line" />
    </div>

    <!-- 技術堆疊區 -->
    <section class="skills-section py-16">
      <v-container>
        <div class="text-center mb-12">
          <p class="text-overline text-secondary mb-2 tracking-wide">TECH STACK</p>
          <h2 class="text-h4 font-weight-bold">專業技術</h2>
        </div>

        <v-row justify="center">
          <v-col
            v-for="(skill, index) in [
              { icon: 'mdi-vuejs', name: 'Vue / Nuxt', desc: '前端框架', color: '#42B883' },
              { icon: 'mdi-language-typescript', name: 'TypeScript', desc: '型別安全', color: '#3178C6' },
              { icon: 'mdi-microsoft-azure', name: 'Azure', desc: '雲端服務', color: '#0078D4' },
              { icon: 'mdi-docker', name: 'Docker', desc: '容器技術', color: '#2496ED' },
            ]"
            :key="skill.name"
            cols="6"
            sm="3"
          >
            <div class="skill-card text-center pa-6 cursor-pointer">
              <div class="skill-icon-wrapper mb-4" :style="{ '--icon-color': skill.color }">
                <v-icon size="32">{{ skill.icon }}</v-icon>
              </div>
              <div class="text-subtitle-2 font-weight-bold mb-1">{{ skill.name }}</div>
              <div class="text-caption text-medium-emphasis">{{ skill.desc }}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  position: relative;
}

/* 背景網格 */
.grid-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgb(var(--v-theme-border) / 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgb(var(--v-theme-border) / 0.3) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
}

/* Hero 區域 */
.hero-section {
  position: relative;
  z-index: 1;
}

/* 分隔線 */
.section-divider {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  position: relative;
  z-index: 1;
}

.divider-line {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgb(var(--v-theme-primary)), transparent);
  border-radius: 1px;
}

/* 技術區域 */
.skills-section {
  position: relative;
  z-index: 1;
}

.tracking-wide {
  letter-spacing: 0.2em;
}

.skill-card {
  border-radius: 12px;
  border: 1px solid rgb(var(--v-theme-border));
  background: rgb(var(--v-theme-surface));
  transition: all 0.2s ease;
}

.skill-card:hover {
  border-color: rgb(var(--v-theme-primary));
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgb(var(--v-theme-primary) / 0.1);
}

.skill-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: rgb(var(--v-theme-surface-variant));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.2s ease;
  color: var(--icon-color, rgb(var(--v-theme-primary)));
}

.skill-card:hover .skill-icon-wrapper {
  background: var(--icon-color, rgb(var(--v-theme-primary)));
  color: white;
}
</style>
