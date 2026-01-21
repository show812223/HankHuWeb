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
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 -->
    <section class="page-header py-16">
      <v-container>
        <div class="text-center anim-fade-in">
          <p class="text-overline text-medium-emphasis mb-3 letter-spacing-wide">CONTACT</p>
          <h1 class="text-h2 font-weight-bold text-primary mb-2">聯絡</h1>
          <p class="text-body-1 text-medium-emphasis">歡迎與我聯繫</p>
        </div>
      </v-container>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 主要內容 -->
    <v-container class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
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
                  <v-icon size="24" color="primary">{{ info.icon }}</v-icon>
                </div>
                <p class="text-caption text-medium-emphasis mb-1">{{ info.title }}</p>
                <p class="text-body-2 font-weight-medium">{{ info.value }}</p>
              </a>
            </div>
          </div>

          <!-- 聯絡表單 -->
          <v-card class="contact-form-card pa-8 pa-md-10 anim-fade-in anim-delay-400">
            <!-- 區塊標題 -->
            <div class="section-header mb-8 text-center">
              <p class="text-overline text-medium-emphasis mb-2 letter-spacing-wide">MESSAGE</p>
              <h2 class="text-h5 font-weight-bold text-primary">發送訊息</h2>
            </div>

            <!-- 成功訊息 -->
            <v-expand-transition>
              <div v-if="submitted" class="text-center py-8">
                <v-icon size="48" color="success" class="mb-4">mdi-check-circle-outline</v-icon>
                <p class="text-h6 font-weight-bold mb-2">訊息已送出</p>
                <p class="text-body-2 text-medium-emphasis">感謝您的來信，我會盡快回覆。</p>
              </div>
            </v-expand-transition>

            <!-- 表單 -->
            <v-form v-if="!submitted" @submit.prevent="handleSubmit">
              <v-row>
                <v-col cols="12" sm="6">
                  <div class="form-group mb-6">
                    <label class="form-label text-caption text-medium-emphasis mb-2 d-block">姓名</label>
                    <v-text-field
                      v-model="form.name"
                      placeholder="請輸入您的姓名"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                    />
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <div class="form-group mb-6">
                    <label class="form-label text-caption text-medium-emphasis mb-2 d-block">Email</label>
                    <v-text-field
                      v-model="form.email"
                      placeholder="your@email.com"
                      type="email"
                      variant="outlined"
                      density="comfortable"
                      hide-details
                    />
                  </div>
                </v-col>
              </v-row>

              <div class="form-group mb-8">
                <label class="form-label text-caption text-medium-emphasis mb-2 d-block">訊息</label>
                <v-textarea
                  v-model="form.message"
                  placeholder="請輸入您想說的話..."
                  variant="outlined"
                  rows="5"
                  hide-details
                />
              </div>

              <div class="text-center">
                <v-btn
                  type="submit"
                  color="primary"
                  variant="flat"
                  size="large"
                  class="submit-btn px-8"
                >
                  送出
                  <v-icon end size="18">mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  position: relative;
}

/* 頁面裝飾 */
.page-decoration {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.deco-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid rgb(var(--v-theme-primary) / 0.04);
  top: 50%;
  right: -200px;
  transform: translateY(-50%);
}

/* 頁面標題 */
.page-header {
  position: relative;
  z-index: 1;
}

.letter-spacing-wide {
  letter-spacing: 0.3em;
}

/* 日式分隔線 */
.zen-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  position: relative;
  z-index: 1;
}

.zen-divider::before,
.zen-divider::after {
  content: '';
  flex: 1;
  max-width: 100px;
  height: 1px;
  background: linear-gradient(
    to var(--direction, right),
    transparent,
    rgb(var(--v-theme-primary) / 0.15)
  );
}

.zen-divider::before {
  --direction: right;
}

.zen-divider::after {
  --direction: left;
}

.zen-divider-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary) / 0.25);
  margin: 0 0.75rem;
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
  border: 1px solid rgb(var(--v-theme-border));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon-wrapper {
  border-color: rgb(var(--v-theme-primary) / 0.3);
  background: rgb(var(--v-theme-primary) / 0.05);
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

/* 表單卡片 */
.contact-form-card {
  position: relative;
  z-index: 1;
}

.section-header {
  position: relative;
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
</style>
