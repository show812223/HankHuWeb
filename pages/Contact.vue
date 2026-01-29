<script setup lang="ts">
import { NCard, NInput, NButton, NResult } from 'naive-ui'
import { markRaw } from 'vue'
import type { Component } from 'vue'
import MdiEmail from '~icons/mdi/email-outline'
import MdiLinkedin from '~icons/mdi/linkedin'
import MdiGithub from '~icons/mdi/github'
import MdiSend from '~icons/mdi/send'

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
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
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

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  console.log('Form submitted:', form)
  submitted.value = true
}
</script>

<template>
  <div class="contact-page min-h-screen relative">
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 -->
    <section class="page-header py-16 relative z-10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center anim-fade-in">
          <p class="text-xs text-muted mb-3 letter-spacing-wide uppercase">CONTACT</p>
          <h1 class="text-4xl font-bold text-primary mb-2 font-heading">聯絡</h1>
          <p class="text-base text-muted">歡迎與我聯繫</p>
        </div>
      </div>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 主要內容 -->
    <div class="max-w-3xl mx-auto px-6 py-12">
      <!-- 聯絡資訊 -->
      <div class="contact-info-section mb-12 anim-fade-in anim-delay-200">
        <div class="flex flex-wrap justify-center gap-8 md:gap-12">
          <a
            v-for="(info, index) in contactInfo"
            :key="info.title"
            :href="info.href"
            target="_blank"
            class="contact-item text-center"
            :style="{ animationDelay: `${300 + index * 100}ms` }"
          >
            <div class="contact-icon-wrapper mb-3">
              <component :is="info.icon" class="w-6 h-6" />
            </div>
            <p class="text-xs text-muted mb-1">{{ info.title }}</p>
            <p class="text-sm font-medium">{{ info.value }}</p>
          </a>
        </div>
      </div>

      <!-- 聯絡表單 -->
      <NCard class="contact-form-card p-8 md:p-10 anim-fade-in anim-delay-400">
        <!-- 區塊標題 -->
        <div class="section-header mb-8 text-center">
          <p class="text-xs text-muted mb-2 letter-spacing-wide uppercase">MESSAGE</p>
          <h2 class="text-xl font-bold text-primary font-heading">發送訊息</h2>
        </div>

        <!-- 成功訊息 -->
        <Transition name="fade">
          <div v-if="submitted" class="text-center py-8">
            <NResult status="success" title="訊息已送出" description="感謝您的來信，我會盡快回覆。" />
          </div>
        </Transition>

        <!-- 表單 -->
        <form v-if="!submitted" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div class="form-group">
              <label class="form-label text-xs text-muted mb-2 block">姓名</label>
              <NInput v-model:value="form.name" placeholder="請輸入您的姓名" size="large" />
            </div>
            <div class="form-group">
              <label class="form-label text-xs text-muted mb-2 block">Email</label>
              <NInput v-model:value="form.email" placeholder="your@email.com" type="email" size="large" />
            </div>
          </div>

          <div class="form-group mb-8">
            <label class="form-label text-xs text-muted mb-2 block">訊息</label>
            <NInput
              v-model:value="form.message"
              placeholder="請輸入您想說的話..."
              type="textarea"
              :rows="5"
              size="large"
            />
          </div>

          <div class="text-center">
            <NButton type="primary" size="large" attr-type="submit" class="submit-btn px-8">
              <template #icon>
                <MdiSend />
              </template>
              送出
            </NButton>
          </div>
        </form>
      </NCard>
    </div>
  </div>
</template>

<style scoped>
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

/* 表單標籤 */
.form-label {
  letter-spacing: 0.1em;
}

/* 送出按鈕 */
.submit-btn {
  font-weight: 500;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateX(4px);
}

/* 過渡動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
