<script setup lang="ts">
const nameChars = ['胡', '聖', '翰']

const socialButtons = [
  { icon: 'mdi-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/' },
  { icon: 'mdi-github', label: 'GitHub', href: 'https://github.com/show812223' },
  { icon: 'mdi-facebook', label: 'Facebook', href: '#' },
]
</script>

<template>
  <div class="avatar-card-wrapper anim-fade-in anim-delay-500">
    <!-- 日式和紙質感卡片 -->
    <v-card class="avatar-card text-center pa-10" elevation="0">
      <!-- 角落裝飾 -->
      <div class="corner-accent corner-accent-tl" />
      <div class="corner-accent corner-accent-br" />

      <!-- 直式排版姓名 -->
      <div class="vertical-name-wrapper mb-8">
        <div class="vertical-name text-h3 font-weight-bold text-primary">
          <span
            v-for="(char, index) in nameChars"
            :key="index"
            class="name-char"
            :style="{ animationDelay: `${600 + index * 200}ms` }"
          >
            {{ char }}
          </span>
        </div>
      </div>

      <!-- 頭像 - 簡約圓形 -->
      <div class="avatar-wrapper mb-8 anim-scale-in anim-delay-900">
        <v-avatar size="160" class="avatar-main">
          <v-img src="~/assets/images/avatar.jpg" />
        </v-avatar>
      </div>

      <!-- 英文名 -->
      <div class="anim-fade-in anim-delay-1100">
        <p class="text-overline text-medium-emphasis mb-1 letter-spacing-wide">SHENG HAN HU</p>
        <p class="text-body-2 text-secondary">Front-end Technical Manager</p>
      </div>

      <!-- 分隔線 -->
      <div class="card-divider my-6" />

      <!-- 社交連結 - 簡約風格 -->
      <div class="d-flex align-center justify-center ga-4">
        <a
          v-for="(btn, index) in socialButtons"
          :key="btn.icon"
          :href="btn.href"
          target="_blank"
          class="social-link"
          :style="{ animationDelay: `${1200 + index * 100}ms` }"
          :aria-label="btn.label"
        >
          <v-icon size="20" color="primary">{{ btn.icon }}</v-icon>
        </a>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.avatar-card-wrapper {
  position: relative;
}

.avatar-card {
  position: relative;
  min-width: 280px;
  max-width: 320px;
  background: rgb(var(--v-theme-surface)) !important;
}

/* 角落裝飾 - 日式 */
.corner-accent {
  position: absolute;
  width: 24px;
  height: 24px;
  pointer-events: none;
}

.corner-accent::before,
.corner-accent::after {
  content: '';
  position: absolute;
  background: rgb(var(--v-theme-primary) / 0.15);
}

.corner-accent-tl {
  top: 16px;
  left: 16px;
}

.corner-accent-tl::before {
  width: 24px;
  height: 1px;
  top: 0;
  left: 0;
}

.corner-accent-tl::after {
  width: 1px;
  height: 24px;
  top: 0;
  left: 0;
}

.corner-accent-br {
  bottom: 16px;
  right: 16px;
}

.corner-accent-br::before {
  width: 24px;
  height: 1px;
  bottom: 0;
  right: 0;
}

.corner-accent-br::after {
  width: 1px;
  height: 24px;
  bottom: 0;
  right: 0;
}

/* 直式排版 */
.vertical-name-wrapper {
  display: flex;
  justify-content: center;
}

.vertical-name {
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.4em;
}

.name-char {
  opacity: 0;
  animation: charFadeIn 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  display: inline-block;
}

@keyframes charFadeIn {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 頭像 */
.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-main {
  border: 3px solid rgb(var(--v-theme-border));
  transition: border-color 0.4s ease;
}

.avatar-card:hover .avatar-main {
  border-color: rgb(var(--v-theme-primary) / 0.3);
}

/* 字母間距 */
.letter-spacing-wide {
  letter-spacing: 0.25em;
}

/* 分隔線 */
.card-divider {
  width: 40px;
  height: 1px;
  background: rgb(var(--v-theme-primary) / 0.2);
  margin-left: auto;
  margin-right: auto;
}

/* 社交連結 */
.social-link {
  opacity: 0;
  animation: gentleFadeIn 400ms ease forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(var(--v-theme-border));
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  border-color: rgb(var(--v-theme-primary) / 0.4);
  background: rgb(var(--v-theme-primary) / 0.05);
}

@keyframes gentleFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
