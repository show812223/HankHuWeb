<script setup lang="ts">
const nameChars = ['胡', '聖', '翰']

const socialButtons = [
  { icon: 'mdi-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/' },
  { icon: 'mdi-github', label: 'GitHub', href: 'https://github.com/show812223' },
  { icon: 'mdi-facebook', label: 'Facebook', href: '#' },
]
</script>

<template>
  <div class="anim-fade-in anim-delay-500">
    <v-card class="avatar-card text-center pa-10 position-relative" min-width="280" max-width="320">
      <!-- 角落裝飾 -->
      <div class="corner-accent corner-accent-tl" />
      <div class="corner-accent corner-accent-br" />

      <!-- 直式排版姓名 -->
      <div class="mb-8 d-flex justify-center">
        <div class="vertical-name text-h4 font-weight-bold text-primary">
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

      <!-- 頭像 -->
      <div class="mb-8 anim-scale-in anim-delay-900 d-inline-block">
        <v-avatar size="160" class="avatar-main">
          <v-img src="/images/avatar.svg" />
        </v-avatar>
      </div>

      <!-- 英文名 -->
      <div class="anim-fade-in anim-delay-1100">
        <p class="text-overline text-medium-emphasis mb-1">SHENG HAN HU</p>
        <p class="text-body-2 text-secondary">Front-end Technical Manager</p>
      </div>

      <!-- 分隔線 -->
      <v-divider class="my-6 mx-auto" style="max-width: 40px;" />

      <!-- 社交連結 -->
      <div class="d-flex align-center justify-center ga-3">
        <v-btn
          v-for="(btn, index) in socialButtons"
          :key="btn.label"
          :href="btn.href"
          target="_blank"
          :icon="btn.icon"
          variant="outlined"
          size="small"
          class="social-link"
          :style="{ animationDelay: `${1200 + index * 100}ms` }"
          :aria-label="btn.label"
        />
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.avatar-card {
  border: 1px solid rgba(78, 69, 64, 0.1);
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
  background: rgba(78, 69, 64, 0.15);
}

.corner-accent-tl {
  top: 16px;
  left: 16px;
}

.corner-accent-tl::before {
  width: 24px;
  height: 1px;
}

.corner-accent-tl::after {
  width: 1px;
  height: 24px;
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
.vertical-name {
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.4em;
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
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
.avatar-main {
  border: 3px solid rgba(78, 69, 64, 0.1);
  transition: border-color 0.4s ease;
}

.avatar-card:hover .avatar-main {
  border-color: rgba(78, 69, 64, 0.3);
}

/* 社交連結 */
.social-link {
  opacity: 0;
  animation: gentleFadeIn 400ms ease forwards;
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
