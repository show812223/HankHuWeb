<script setup lang="ts">
const contactInfo = [
  {
    icon: 'mdi-email',
    title: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    color: '#EA4335',
  },
  {
    icon: 'mdi-linkedin',
    title: 'LinkedIn',
    value: '聖翰 胡',
    href: 'https://www.linkedin.com/in/%E8%81%96%E7%BF%B0-%E8%83%A1-b435b9285/',
    color: '#0A66C2',
  },
  {
    icon: 'mdi-github',
    title: 'GitHub',
    value: 'github.com/show812223',
    href: 'https://github.com/show812223',
    color: '#333',
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
    <!-- Page Header -->
    <div class="page-header py-10">
      <v-container>
        <div class="d-flex align-center ga-4 anim-slide-right">
          <v-avatar color="primary" size="56">
            <v-icon size="32" color="white">mdi-email-outline</v-icon>
          </v-avatar>
          <div>
            <h1 class="text-h3 font-weight-bold text-primary mb-1">聯絡我</h1>
            <p class="text-body-1 text-medium-emphasis mb-0">歡迎透過以下方式與我聯繫</p>
          </div>
        </div>
      </v-container>
    </div>

    <!-- Main Content -->
    <v-container class="py-10">
      <v-row>
        <!-- Contact Info Cards -->
        <v-col cols="12" md="5" lg="4">
          <div class="d-flex flex-column ga-4">
            <v-card
              v-for="(info, index) in contactInfo"
              :key="info.title"
              :href="info.href"
              target="_blank"
              class="contact-card pa-5 cursor-pointer"
              :style="{ animationDelay: `${200 + index * 100}ms` }"
            >
              <div class="d-flex align-center ga-4">
                <div class="contact-icon-wrapper" :style="{ background: `${info.color}15` }">
                  <v-icon :color="info.color" size="24">{{ info.icon }}</v-icon>
                </div>
                <div class="flex-grow-1">
                  <div class="text-overline text-medium-emphasis mb-1">{{ info.title }}</div>
                  <div class="text-body-2 font-weight-medium">{{ info.value }}</div>
                </div>
                <v-icon size="20" color="grey">mdi-arrow-right</v-icon>
              </div>
            </v-card>

            <!-- Availability Status -->
            <v-card class="pa-5 availability-card anim-fade-in anim-delay-500">
              <div class="d-flex align-center ga-3 mb-3">
                <div class="status-dot" />
                <span class="text-subtitle-2 font-weight-bold">目前狀態</span>
              </div>
              <p class="text-body-2 text-medium-emphasis mb-0">
                開放新機會討論，歡迎聯繫！
              </p>
            </v-card>
          </div>
        </v-col>

        <!-- Contact Form -->
        <v-col cols="12" md="7" lg="8">
          <v-card class="contact-form-card pa-8 anim-slide-up anim-delay-300">
            <div class="d-flex align-center mb-6">
              <v-icon color="primary" class="mr-2">mdi-message-text</v-icon>
              <h2 class="text-h5 font-weight-bold mb-0">發送訊息</h2>
            </div>

            <!-- Success Message -->
            <v-expand-transition>
              <v-alert
                v-if="submitted"
                type="success"
                variant="tonal"
                class="mb-6"
                prominent
              >
                <template #prepend>
                  <v-icon size="32">mdi-check-circle</v-icon>
                </template>
                <div class="text-subtitle-1 font-weight-bold mb-1">訊息已送出！</div>
                <div class="text-body-2">感謝您的來信，我會盡快回覆您。</div>
              </v-alert>
            </v-expand-transition>

            <!-- Form -->
            <v-form v-if="!submitted" @submit.prevent="handleSubmit">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.name"
                    label="姓名"
                    placeholder="請輸入您的姓名"
                    prepend-inner-icon="mdi-account"
                    required
                    hide-details="auto"
                    class="mb-4"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    placeholder="your@email.com"
                    type="email"
                    prepend-inner-icon="mdi-email"
                    required
                    hide-details="auto"
                    class="mb-4"
                  />
                </v-col>
              </v-row>

              <v-textarea
                v-model="form.message"
                label="訊息內容"
                placeholder="請輸入您想說的話..."
                prepend-inner-icon="mdi-message"
                rows="5"
                required
                hide-details="auto"
                class="mb-6"
              />

              <v-btn
                type="submit"
                color="primary"
                size="x-large"
                block
                class="submit-btn"
              >
                <v-icon start>mdi-send</v-icon>
                發送訊息
              </v-btn>
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
}

.page-header {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-background)) 0%,
    rgb(var(--v-theme-surface)) 100%
  );
  border-bottom: 1px solid rgb(var(--v-theme-border) / 0.5);
}

.contact-card {
  opacity: 0;
  animation: fadeSlideRight 400ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.contact-card:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 24px rgb(var(--v-theme-primary) / 0.1);
  border-color: rgb(var(--v-theme-primary) / 0.3);
}

.contact-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.availability-card {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-success) / 0.08) 0%,
    rgb(var(--v-theme-surface)) 100%
  );
  border-left: 3px solid rgb(var(--v-theme-success));
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(var(--v-theme-success));
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

@keyframes fadeSlideRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.contact-form-card {
  position: relative;
  overflow: hidden;
}

.contact-form-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-secondary)),
    rgb(var(--v-theme-tertiary))
  );
}

.submit-btn {
  font-weight: 600;
  letter-spacing: 0.05em;
}
</style>
