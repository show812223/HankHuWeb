<script setup lang="ts">
import { NCard, NInput, NButton, NResult } from 'naive-ui'

const contactInfo = [
  {
    icon: 'email',
    title: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: 'linkedin',
    title: 'LinkedIn',
    value: '聖翰 胡',
    href: 'https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/',
  },
  {
    icon: 'github',
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
              <svg v-if="info.icon === 'email'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <svg v-else-if="info.icon === 'linkedin'" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
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
              送出 →
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
