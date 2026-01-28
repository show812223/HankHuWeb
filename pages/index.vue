<script setup lang="ts">
const skills = [
  { icon: '🟢', name: 'Vue / Nuxt', desc: '前端框架' },
  { icon: '📘', name: 'TypeScript', desc: '型別安全' },
  { icon: '☁️', name: 'Azure', desc: '雲端服務' },
  { icon: '🐳', name: 'Docker', desc: '容器技術' },
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
    <section class="hero-section relative z-10">
      <div class="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          <HomeAvatarCard class="flex-shrink-0" />
          <HomeAboutMe />
        </div>
      </div>
    </section>

    <!-- 簡約分隔線 -->
    <div class="zen-divider relative z-10">
      <span class="zen-divider-dot" />
    </div>

    <!-- 技術展示區 -->
    <section class="skills-section py-16 relative z-10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-12 anim-fade-in">
          <p class="text-xs text-muted mb-2 letter-spacing-wide uppercase">EXPERTISE</p>
          <h2 class="text-2xl font-bold text-primary font-heading">專業領域</h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div
            v-for="(skill, index) in skills"
            :key="skill.name"
            class="skill-item text-center cursor-pointer p-6"
            :style="{ animationDelay: `${300 + index * 150}ms` }"
          >
            <div class="skill-icon-wrapper w-18 h-18 rounded-full border border-[var(--color-border)] flex items-center justify-center mx-auto mb-4 bg-white transition-all duration-300">
              <span class="text-3xl">{{ skill.icon }}</span>
            </div>
            <div class="text-sm font-bold mb-1">{{ skill.name }}</div>
            <div class="text-xs text-muted">{{ skill.desc }}</div>
          </div>
        </div>
      </div>
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

.skill-icon-wrapper {
  width: 72px;
  height: 72px;
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
