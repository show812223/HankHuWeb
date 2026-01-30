<script setup lang="ts">
const skills = [
  { icon: 'mdi-vuejs', name: 'Vue / Nuxt', desc: '前端框架' },
  { icon: 'mdi-language-typescript', name: 'TypeScript', desc: '型別安全' },
  { icon: 'mdi-cloud', name: 'Azure', desc: '雲端服務' },
  { icon: 'mdi-docker', name: 'Docker', desc: '容器技術' },
]
</script>

<template>
  <div class="home-page min-h-screen relative overflow-hidden">
    <!-- 日式裝飾元素 -->
    <div class="zen-decoration fixed inset-0 pointer-events-none z-0">
      <div class="zen-circle zen-circle-1" />
      <div class="zen-circle zen-circle-2" />
      <div class="zen-line zen-line-1" />
    </div>

    <!-- Hero Section -->
    <section class="relative z-10">
      <v-container class="py-16" style="max-width: 1200px;">
        <div class="d-flex flex-column flex-md-row align-center justify-center ga-12 ga-md-16">
          <HomeAvatarCard class="flex-shrink-0" />
          <HomeAboutMe />
        </div>
      </v-container>
    </section>

    <!-- 簡約分隔線 -->
    <div class="zen-divider relative z-10">
      <span class="zen-divider-dot" />
    </div>

    <!-- 技術展示區 -->
    <section class="py-16 relative z-10">
      <v-container style="max-width: 1200px;">
        <div class="text-center mb-12 anim-fade-in">
          <p class="text-overline text-medium-emphasis mb-2">EXPERTISE</p>
          <h2 class="text-h5 font-weight-bold text-primary font-heading">專業領域</h2>
        </div>

        <v-row justify="center">
          <v-col
            v-for="(skill, index) in skills"
            :key="skill.name"
            cols="6"
            sm="3"
          >
            <div
              class="skill-item text-center cursor-pointer pa-6"
              :style="{ animationDelay: `${300 + index * 150}ms` }"
            >
              <v-avatar size="72" variant="outlined" class="mb-4 skill-icon">
                <v-icon :icon="skill.icon" size="32" />
              </v-avatar>
              <div class="text-body-2 font-weight-bold mb-1">{{ skill.name }}</div>
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
  background: linear-gradient(to bottom, transparent, rgba(78, 69, 64, 0.08), transparent);
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

.skill-icon {
  transition: all 0.3s ease;
}

.skill-item:hover .skill-icon {
  border-color: rgba(78, 69, 64, 0.3);
  background: rgba(78, 69, 64, 0.08);
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
