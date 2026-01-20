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
  // 這裡可以接入實際的表單處理邏輯
  console.log('Form submitted:', form)
  submitted.value = true
}
</script>

<template>
  <v-container class="py-8">
    <h1 class="text-h3 font-weight-bold mb-2">
      <v-icon class="mr-2">mdi-email-outline</v-icon>
      聯絡我
    </h1>
    <p class="text-body-1 text-grey mb-8">
      歡迎透過以下方式與我聯繫
    </p>

    <v-row>
      <!-- 聯絡資訊 -->
      <v-col cols="12" md="5">
        <h2 class="text-h5 font-weight-bold mb-4">聯絡資訊</h2>
        <v-list>
          <v-list-item
            v-for="info in contactInfo"
            :key="info.title"
            :href="info.href"
            target="_blank"
            class="px-0"
          >
            <template #prepend>
              <v-avatar color="primary" size="40">
                <v-icon color="white">{{ info.icon }}</v-icon>
              </v-avatar>
            </template>
            <v-list-item-title class="font-weight-bold">
              {{ info.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ info.value }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>

      <!-- 聯絡表單 -->
      <v-col cols="12" md="7">
        <v-card variant="outlined" class="pa-6">
          <h2 class="text-h5 font-weight-bold mb-4">發送訊息</h2>

          <v-alert
            v-if="submitted"
            type="success"
            variant="tonal"
            class="mb-4"
          >
            感謝您的訊息！我會盡快回覆您。
          </v-alert>

          <v-form v-else @submit.prevent="handleSubmit">
            <v-text-field
              v-model="form.name"
              label="姓名"
              variant="outlined"
              required
              class="mb-2"
            />
            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              variant="outlined"
              required
              class="mb-2"
            />
            <v-textarea
              v-model="form.message"
              label="訊息內容"
              variant="outlined"
              rows="4"
              required
              class="mb-4"
            />
            <v-btn
              type="submit"
              color="primary"
              size="large"
              block
            >
              <v-icon class="mr-2">mdi-send</v-icon>
              發送訊息
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
