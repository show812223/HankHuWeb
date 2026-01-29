<script setup lang="ts">
import { markRaw } from 'vue'
import type { Component } from 'vue'
import MdiLinkedin from '~icons/mdi/linkedin'
import MdiGithub from '~icons/mdi/github'
import MdiFacebook from '~icons/mdi/facebook'

const nameChars = ['胡', '聖', '翰']

interface SocialButton {
  icon: Component
  label: string
  href: string
}

const socialButtons: SocialButton[] = [
  { icon: markRaw(MdiLinkedin), label: 'LinkedIn', href: 'https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/' },
  { icon: markRaw(MdiGithub), label: 'GitHub', href: 'https://github.com/show812223' },
  { icon: markRaw(MdiFacebook), label: 'Facebook', href: '#' },
]
</script>

<template>
  <div class="avatar-card-wrapper anim-fade-in anim-delay-500">
    <!-- 日式和紙質感卡片 -->
    <v-card
      class="avatar-card text-center pa-10 position-relative"
      variant="outlined"
    >
      <!-- 角落裝飾 -->
      <div class="corner-accent corner-accent-tl" />
      <div class="corner-accent corner-accent-br" />

      <!-- 直式排版姓名 -->
      <div class="vertical-name-wrapper mb-8 d-flex justify-center">
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
      <div class="avatar-wrapper mb-8 anim-scale-in anim-delay-900 d-inline-block">
        <v-avatar
          size="160"
          image="/images/avatar.jpg"
          class="avatar-main"
        />
      </div>

      <!-- 英文名 -->
      <div class="anim-fade-in anim-delay-1100">
        <p
          class="text-caption text-medium-emphasis mb-1"
          style="letter-spacing: 0.2em;"
        >
          SHENG HAN HU
        </p>
        <p class="text-body-2 text-secondary">
          Front-end Technical Manager
        </p>
      </div>

      <!-- 分隔線 -->
      <div class="card-divider my-6" />

      <!-- 社交連結 -->
      <div class="d-flex align-center justify-center ga-4">
        <a
          v-for="(btn, index) in socialButtons"
          :key="btn.label"
          :href="btn.href"
          target="_blank"
          class="social-link"
          :style="{ animationDelay: `${1200 + index * 100}ms` }"
          :aria-label="btn.label"
        >
          <component
            :is="btn.icon"
            class="w-5 h-5"
          />
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
  min-width: 280px;
  max-width: 320px;
  background: white !important;
  border-color: var(--color-border) !important;
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
  color: var(--color-primary);
  border-color: rgba(78, 69, 64, 0.3);
  background: rgba(78, 69, 64, 0.05);
}

@keyframes gentleFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
