<script setup lang="ts">
const contactInfo = [
  {
    icon: 'mdi-email',
    title: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: 'mdi-linkedin',
    title: 'LinkedIn',
    value: '聖翰 胡',
    href: 'https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/',
  },
  {
    icon: 'mdi-github',
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
  <div class="contact-page">
    <!-- 背景網格 -->
    <div class="grid-background" />

    <!-- 頁面標題 -->
    <section class="page-header py-16">
      <v-container>
        <div class="text-center">
          <p class="text-overline text-secondary mb-2 tracking-wide">CONTACT</p>
          <h1 class="text-h2 font-weight-bold mb-2">聯絡</h1>
          <p class="text-body-1 text-medium-emphasis">歡迎與我聯繫</p>
        </div>
      </v-container>
    </section>

    <!-- 分隔線 -->
    <div class="section-divider">
      <div class="divider-line" />
    </div>

    <!-- 主要內容 -->
    <v-container class="py-12" style="max-width: 800px;">
      <!-- 聯絡資訊 -->
      <div class="contact-info-section mb-12">
        <v-row justify="center">
          <v-col
            v-for="info in contactInfo"
            :key="info.title"
            cols="12"
            sm="4"
          >
            <a
              :href="info.href"
              target="_blank"
              class="contact-item text-center d-block pa-6"
            >
              <div class="contact-icon-wrapper mb-3">
                <v-icon size="24" color="primary">{{ info.icon }}</v-icon>
              </div>
              <p class="text-caption text-secondary mb-1">{{ info.title }}</p>
              <p class="text-body-2 font-weight-medium">{{ info.value }}</p>
            </a>
          </v-col>
        </v-row>
      </div>

      <!-- 聯絡表單 -->
      <v-card class="contact-form-card pa-8">
        <!-- 區塊標題 -->
        <div class="section-header mb-8 text-center">
          <p class="text-overline text-secondary mb-2 tracking-wide">MESSAGE</p>
          <h2 class="text-h5 font-weight-bold">發送訊息</h2>
        </div>

        <!-- 成功訊息 -->
        <v-expand-transition>
          <div v-if="submitted" class="text-center py-8">
            <v-icon size="48" color="success" class="mb-4">mdi-check-circle</v-icon>
            <p class="text-h6 font-weight-bold mb-2">訊息已送出</p>
            <p class="text-body-2 text-medium-emphasis">感謝您的來信，我會盡快回覆。</p>
          </div>
        </v-expand-transition>

        <!-- 表單 -->
        <v-form v-if="!submitted" @submit.prevent="handleSubmit">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.name"
                label="姓名"
                placeholder="請輸入您的姓名"
                variant="outlined"
                density="comfortable"
                hide-details
                class="mb-4"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.email"
                label="Email"
                placeholder="your@email.com"
                type="email"
                variant="outlined"
                density="comfortable"
                hide-details
                class="mb-4"
              />
            </v-col>
          </v-row>

          <v-textarea
            v-model="form.message"
            label="訊息"
            placeholder="請輸入您想說的話..."
            variant="outlined"
            rows="5"
            hide-details
            class="mb-6"
          />

          <div class="text-center">
            <v-btn
              type="submit"
              color="primary"
              size="large"
            >
              <v-icon start size="18">mdi-send</v-icon>
              送出訊息
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  position: relative;
}

/* 背景網格 */
.grid-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgb(var(--v-theme-border) / 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgb(var(--v-theme-border) / 0.2) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
}

.page-header {
  position: relative;
  z-index: 1;
}

.tracking-wide {
  letter-spacing: 0.2em;
}

/* 分隔線 */
.section-divider {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  position: relative;
  z-index: 1;
}

.divider-line {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgb(var(--v-theme-primary)), transparent);
  border-radius: 1px;
}

/* 聯絡資訊 */
.contact-item {
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  border: 1px solid rgb(var(--v-theme-border));
  background: rgb(var(--v-theme-surface));
  transition: all 0.2s ease;
}

.contact-item:hover {
  border-color: rgb(var(--v-theme-primary));
  box-shadow: 0 4px 16px rgb(var(--v-theme-primary) / 0.1);
}

.contact-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgb(var(--v-theme-surface-variant));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.2s ease;
}

.contact-item:hover .contact-icon-wrapper {
  background: rgb(var(--v-theme-primary));
  color: white;
}

.contact-item:hover .contact-icon-wrapper :deep(.v-icon) {
  color: white !important;
}

/* 表單卡片 */
.contact-form-card {
  position: relative;
  z-index: 1;
}
</style>
