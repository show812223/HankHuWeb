<script setup lang="ts">
const contactInfo = [
  {
    icon: 'mdi-email-outline',
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
  <div class="min-h-screen relative">
    <!-- 日式裝飾 -->
    <div class="page-decoration">
      <div class="deco-circle" />
    </div>

    <!-- 頁面標題 -->
    <section class="py-16 relative z-10">
      <v-container style="max-width: 1200px;">
        <div class="text-center anim-fade-in">
          <p class="text-overline text-medium-emphasis mb-3">CONTACT</p>
          <h1 class="text-h4 font-weight-bold text-primary mb-2 font-heading">聯絡</h1>
          <p class="text-body-1 text-medium-emphasis">歡迎與我聯繫</p>
        </div>
      </v-container>
    </section>

    <!-- 日式分隔線 -->
    <div class="zen-divider">
      <span class="zen-divider-dot" />
    </div>

    <!-- 主要內容 -->
    <v-container class="py-12" style="max-width: 800px;">
      <!-- 聯絡資訊 -->
      <div class="mb-12 anim-fade-in anim-delay-200">
        <div class="d-flex flex-wrap justify-center ga-8 ga-md-12">
          <a
            v-for="(info, index) in contactInfo"
            :key="info.title"
            :href="info.href"
            target="_blank"
            class="contact-item text-center text-decoration-none"
            :style="{ animationDelay: `${300 + index * 100}ms` }"
          >
            <v-avatar size="56" variant="outlined" class="mb-3 contact-icon">
              <v-icon :icon="info.icon" />
            </v-avatar>
            <p class="text-caption text-medium-emphasis mb-1">{{ info.title }}</p>
            <p class="text-body-2 font-weight-medium text-on-background">{{ info.value }}</p>
          </a>
        </div>
      </div>

      <!-- 聯絡表單 -->
      <v-card class="pa-8 pa-md-10 anim-fade-in anim-delay-400">
        <!-- 區塊標題 -->
        <div class="text-center mb-8">
          <p class="text-overline text-medium-emphasis mb-2">MESSAGE</p>
          <h2 class="text-h6 font-weight-bold text-primary font-heading">發送訊息</h2>
        </div>

        <!-- 成功訊息 -->
        <Transition name="fade">
          <div v-if="submitted" class="text-center py-8">
            <v-icon icon="mdi-check-circle" size="64" color="success" class="mb-4" />
            <h3 class="text-h6 font-weight-bold mb-2">訊息已送出</h3>
            <p class="text-body-2 text-medium-emphasis">感謝您的來信，我會盡快回覆。</p>
          </div>
        </Transition>

        <!-- 表單 -->
        <form v-if="!submitted" @submit.prevent="handleSubmit">
          <v-row class="mb-2">
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.name"
                label="姓名"
                placeholder="請輸入您的姓名"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.email"
                label="Email"
                placeholder="your@email.com"
                type="email"
              />
            </v-col>
          </v-row>

          <v-textarea
            v-model="form.message"
            label="訊息"
            placeholder="請輸入您想說的話..."
            rows="5"
            class="mb-6"
          />

          <div class="text-center">
            <v-btn type="submit" color="primary" size="large" prepend-icon="mdi-send">
              送出
            </v-btn>
          </div>
        </form>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
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

.contact-item {
  opacity: 0;
  animation: gentleFadeIn 400ms ease forwards;
  min-width: 140px;
  transition: opacity 0.3s ease;
  color: inherit;
}

.contact-item:hover {
  opacity: 0.7;
}

.contact-icon {
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
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
