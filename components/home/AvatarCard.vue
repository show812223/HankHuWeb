<script setup lang="ts">
import { NCard, NAvatar } from 'naive-ui'

const nameChars = ['胡', '聖', '翰']

const socialButtons = [
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/' },
  { icon: 'github', label: 'GitHub', href: 'https://github.com/show812223' },
  { icon: 'facebook', label: 'Facebook', href: '#' },
]
</script>

<template>
  <div class="avatar-card-wrapper anim-fade-in anim-delay-500">
    <!-- 日式和紙質感卡片 -->
    <NCard class="avatar-card text-center p-10 relative" :bordered="true">
      <!-- 角落裝飾 -->
      <div class="corner-accent corner-accent-tl" />
      <div class="corner-accent corner-accent-br" />

      <!-- 直式排版姓名 -->
      <div class="vertical-name-wrapper mb-8 flex justify-center">
        <div class="vertical-name text-3xl font-bold text-primary">
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
      <div class="avatar-wrapper mb-8 anim-scale-in anim-delay-900 inline-block">
        <NAvatar
          :size="160"
          round
          src="/images/avatar.svg"
          class="avatar-main"
        />
      </div>

      <!-- 英文名 -->
      <div class="anim-fade-in anim-delay-1100">
        <p class="text-xs text-muted mb-1 letter-spacing-wider uppercase">SHENG HAN HU</p>
        <p class="text-sm text-secondary">Front-end Technical Manager</p>
      </div>

      <!-- 分隔線 -->
      <div class="card-divider my-6" />

      <!-- 社交連結 -->
      <div class="flex items-center justify-center gap-4">
        <a
          v-for="(btn, index) in socialButtons"
          :key="btn.icon"
          :href="btn.href"
          target="_blank"
          class="social-link"
          :style="{ animationDelay: `${1200 + index * 100}ms` }"
          :aria-label="btn.label"
        >
          <svg v-if="btn.icon === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <svg v-else-if="btn.icon === 'github'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.124-5.864 10.124-11.854z"/>
          </svg>
        </a>
      </div>
    </NCard>
  </div>
</template>

<style scoped>
.avatar-card-wrapper {
  position: relative;
}

.avatar-card {
  min-width: 280px;
  max-width: 320px;
  background: white !important;
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
.avatar-wrapper {
  position: relative;
}

.avatar-main {
  border: 3px solid var(--color-border) !important;
  transition: border-color 0.4s ease;
}

.avatar-card:hover .avatar-main {
  border-color: rgba(78, 69, 64, 0.3) !important;
}

/* 分隔線 */
.card-divider {
  width: 40px;
  height: 1px;
  background: rgba(78, 69, 64, 0.2);
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
  border: 1px solid var(--color-border);
  color: var(--color-text);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  border-color: rgba(78, 69, 64, 0.4);
  background: rgba(78, 69, 64, 0.05);
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
