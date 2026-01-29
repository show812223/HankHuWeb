<script setup lang="ts">
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
  <div class="contact-page min-h-screen position-relative">
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
            :style="{ animationDelay: `${300 + index * 100}ms` }"
          >
            <div class="contact-icon-wrapper mb-3">
              <component
                :is="info.icon"
                class="w-6 h-6"
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

      <!-- 聯絡表單 -->
      <v-card
        class="contact-form-card pa-8 pa-md-10 anim-fade-in anim-delay-400"
        variant="outlined"
      >
        <!-- 區塊標題 -->
        <div class="section-header mb-8 text-center">
          <p
            class="text-caption text-medium-emphasis mb-2"
            style="letter-spacing: 0.3em;"
          >
            MESSAGE
          </p>
          <h2 class="text-h5 font-weight-bold text-primary font-heading">
            發送訊息
          </h2>
        </div>

        <!-- 成功訊息 -->
        <Transition name="fade">
          <div
            v-if="submitted"
            class="text-center py-8"
          >
            <v-icon
              color="success"
              size="64"
              class="mb-4"
            >
              mdi-check-circle
            </v-icon>
            <h3 class="text-h6 mb-2">
              訊息已送出
            </h3>
            <p class="text-body-2 text-medium-emphasis">
              感謝您的來信，我會盡快回覆。
            </p>
          </div>
        </Transition>

        <!-- 表單 -->
        <v-form
          v-if="!submitted"
          @submit.prevent="handleSubmit"
        >
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <label class="form-label text-caption text-medium-emphasis mb-2 d-block">姓名</label>
              <v-text-field
                v-model="form.name"
                placeholder="請輸入您的姓名"
                density="comfortable"
                hide-details
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <label class="form-label text-caption text-medium-emphasis mb-2 d-block">Email</label>
              <v-text-field
                v-model="form.email"
                placeholder="your@email.com"
                type="email"
                density="comfortable"
                hide-details
              />
            </v-col>
          </v-row>

          <div class="mt-6 mb-8">
            <label class="form-label text-caption text-medium-emphasis mb-2 d-block">訊息</label>
            <v-textarea
              v-model="form.message"
              placeholder="請輸入您想說的話..."
              rows="5"
              density="comfortable"
              hide-details
            />
          </div>

          <div class="text-center">
            <v-btn
              color="primary"
              size="large"
              type="submit"
              class="submit-btn px-8"
            >
              <template #prepend>
                <MdiSend />
              </template>
              送出
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-container>
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
