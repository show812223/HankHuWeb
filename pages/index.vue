<script setup lang="ts">

</script>

<template>
  <div class="home-page">
    <!-- Hero Section with subtle gradient background -->
    <div class="hero-section">
      <v-container class="py-12 py-md-16">
        <div class="d-flex flex-wrap align-center justify-center ga-8 ga-md-16">
          <HomeAvatarCard class="flex-shrink-0" />
          <HomeAboutMe />
        </div>
      </v-container>
    </div>

    <!-- Decorative divider -->
    <div class="section-divider-wave">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,80 1200,60 L1200,120 L0,120 Z" class="wave-fill" />
      </svg>
    </div>

    <!-- Skills highlight section -->
    <v-container class="py-10">
      <div class="text-center mb-8 anim-fade-in">
        <h2 class="text-h4 font-weight-bold text-primary mb-2">專業技術</h2>
        <p class="text-body-1 text-medium-emphasis">我專注於以下技術領域</p>
      </div>

      <v-row justify="center" class="ga-4">
        <v-col
          v-for="(skill, index) in [
            { icon: 'mdi-vuejs', name: 'Vue / Nuxt', desc: '前端框架專家' },
            { icon: 'mdi-language-typescript', name: 'TypeScript', desc: '類型安全開發' },
            { icon: 'mdi-microsoft-azure', name: 'Azure', desc: '雲端部署' },
            { icon: 'mdi-docker', name: 'Docker', desc: '容器化技術' },
          ]"
          :key="skill.name"
          cols="6"
          sm="3"
        >
          <v-card
            class="skill-card text-center pa-6 h-100 cursor-pointer"
            :style="{ animationDelay: `${200 + index * 100}ms` }"
          >
            <v-icon size="48" color="primary" class="mb-3">{{ skill.icon }}</v-icon>
            <div class="text-subtitle-1 font-weight-bold">{{ skill.name }}</div>
            <div class="text-caption text-medium-emphasis">{{ skill.desc }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
}

.hero-section {
  position: relative;
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-background)) 0%,
    rgb(var(--v-theme-surface)) 50%,
    rgb(var(--v-theme-background)) 100%
  );
}

.section-divider-wave {
  position: relative;
  height: 60px;
  overflow: hidden;
  margin-top: -1px;
}

.section-divider-wave svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
}

.wave-fill {
  fill: rgb(var(--v-theme-surface));
  opacity: 0.5;
}

.skill-card {
  opacity: 0;
  animation: cardFloat 500ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgb(var(--v-theme-primary) / 0.12);
  border-color: rgb(var(--v-theme-primary) / 0.3);
}

@keyframes cardFloat {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
