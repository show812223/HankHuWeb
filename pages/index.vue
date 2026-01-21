<script setup lang="ts">

</script>

<template>
  <div class="home-page">
    <!-- 日式裝飾元素 -->
    <div class="zen-decoration">
      <div class="zen-circle zen-circle-1" />
      <div class="zen-circle zen-circle-2" />
      <div class="zen-line zen-line-1" />
    </div>

    <!-- Hero Section - 大量留白 -->
    <section class="hero-section">
      <v-container class="py-16 py-md-20">
        <div class="d-flex flex-column flex-md-row align-center justify-center ga-12 ga-md-16">
          <HomeAvatarCard class="flex-shrink-0" />
          <HomeAboutMe />
        </div>
      </v-container>
    </section>

    <!-- 簡約分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 技術展示區 - 日式卡片 -->
    <section class="skills-section py-16">
      <v-container>
        <div class="text-center mb-12 anim-fade-in">
          <p class="text-overline text-secondary mb-2 letter-spacing-wide">EXPERTISE</p>
          <h2 class="text-h4 font-weight-bold text-primary">專業領域</h2>
        </div>

        <v-row justify="center">
          <v-col
            v-for="(skill, index) in [
              { icon: 'mdi-vuejs', name: 'Vue / Nuxt', desc: '前端框架' },
              { icon: 'mdi-language-typescript', name: 'TypeScript', desc: '型別安全' },
              { icon: 'mdi-microsoft-azure', name: 'Azure', desc: '雲端服務' },
              { icon: 'mdi-docker', name: 'Docker', desc: '容器技術' },
            ]"
            :key="skill.name"
            cols="6"
            sm="3"
          >
            <div
              class="skill-item text-center cursor-pointer"
              :style="{ animationDelay: `${300 + index * 150}ms` }"
            >
              <div class="skill-icon-wrapper mb-4">
                <v-icon size="32" color="primary">{{ skill.icon }}</v-icon>
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
  overflow: hidden;
}

/* 禪意裝飾元素 */
.zen-decoration {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.zen-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgb(var(--v-theme-primary) / 0.06);
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
    rgb(var(--v-theme-primary) / 0.08),
    transparent
  );
}

.zen-line-1 {
  width: 1px;
  height: 200px;
  top: 100px;
  left: 10%;
}

/* Hero 區域 */
.hero-section {
  position: relative;
  z-index: 1;
}

/* 日式分隔線 */
.zen-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: relative;
  z-index: 1;
}

.zen-divider::before,
.zen-divider::after {
  content: '';
  flex: 1;
  max-width: 120px;
  height: 1px;
  background: linear-gradient(
    to var(--direction, right),
    transparent,
    rgb(var(--v-theme-primary) / 0.2)
  );
}

.zen-divider::before {
  --direction: right;
}

.zen-divider::after {
  --direction: left;
}

.zen-divider-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary) / 0.3);
  margin: 0 1rem;
}

/* 技術區域 */
.skills-section {
  position: relative;
  z-index: 1;
}

.letter-spacing-wide {
  letter-spacing: 0.3em;
}

.skill-item {
  opacity: 0;
  animation: gentleFadeUp 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  padding: 1.5rem;
  transition: transform 0.4s ease;
}

.skill-item:hover {
  transform: translateY(-4px);
}

.skill-item:hover .skill-icon-wrapper {
  border-color: rgb(var(--v-theme-primary) / 0.3);
  background: rgb(var(--v-theme-primary) / 0.08);
}

.skill-icon-wrapper {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid rgb(var(--v-theme-border));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.4s ease;
  background: rgb(var(--v-theme-surface));
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
</style>
