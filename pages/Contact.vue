<script setup lang="ts">
import { markRaw } from 'vue'
import type { Component } from 'vue'
import MdiEmail from '~icons/mdi/email-outline'
import MdiLinkedin from '~icons/mdi/linkedin'
import MdiGithub from '~icons/mdi/github'

const { getListDelay, intervals } = useAnimationConfig()

interface ContactInfo {
  icon: Component
  title: string
  value: string
  href: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: markRaw(MdiEmail),
    title: 'Email',
    value: 'show812223@gmail.com',
    href: 'mailto:show812223@gmail.com',
  },
  {
    icon: markRaw(MdiLinkedin),
    title: 'LinkedIn',
    value: '聖翰 胡',
    href: 'https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/',
  },
  {
    icon: markRaw(MdiGithub),
    title: 'GitHub',
    value: 'github.com/show812223',
    href: 'https://github.com/show812223',
  },
]

</script>

<template>
  <div class="contact-page position-relative">
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 -->
    <section
      class="page-header py-16 position-relative"
      style="z-index: 10;"
    >
      <v-container style="max-width: 1152px;">
        <div class="text-center anim-fade-in">
          <p
            class="text-caption text-medium-emphasis mb-3"
            style="letter-spacing: 0.3em;"
          >
            CONTACT
          </p>
          <h1 class="text-h3 font-weight-bold text-primary mb-2 font-heading">
            聯絡
          </h1>
          <p class="text-body-1 text-medium-emphasis">
            歡迎與我聯繫
          </p>
        </div>
      </v-container>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 主要內容 -->
    <v-container
      class="py-12"
      style="max-width: 768px;"
    >
      <!-- 聯絡資訊 -->
      <div class="contact-info-section mb-12 anim-fade-in anim-delay-200">
        <div class="d-flex flex-wrap justify-center ga-8 ga-md-12">
          <a
            v-for="(info, index) in contactInfo"
            :key="info.title"
            :href="info.href"
            target="_blank"
            class="contact-item text-center"
            :style="{ animationDelay: getListDelay(index, 300, intervals.normal) }"
          >
            <div class="contact-icon-wrapper mb-3">
              <component
                :is="info.icon"
                class="contact-icon"
              />
            </div>
            <p class="text-caption text-medium-emphasis mb-1">
              {{ info.title }}
            </p>
            <p class="text-body-2 font-weight-medium">
              {{ info.value }}
            </p>
          </a>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
}

.contact-icon {
  width: 24px;
  height: 24px;
}

/* 頁面裝飾 */
.deco-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid rgba(78, 69, 64, 0.04);
  top: 50%;
  right: -200px;
  transform: translateY(-50%);
}

/* 聯絡資訊 */
.contact-item {
  opacity: 0;
  animation: gentleFadeIn 400ms ease forwards;
  text-decoration: none;
  color: inherit;
  min-width: 140px;
  transition: opacity 0.3s ease;
}

.contact-item:hover {
  opacity: 0.7;
}

.contact-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon-wrapper {
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

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
