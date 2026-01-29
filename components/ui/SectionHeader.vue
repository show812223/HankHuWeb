<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="section-header d-flex flex-column ga-2 mb-6">
    <div class="d-flex align-center ga-3">
      <v-icon
        v-if="icon"
        :icon="icon"
        size="24"
        color="primary"
        class="section-icon"
      />
      <h2 class="section-title text-h6 font-weight-bold text-primary mb-0">
        {{ title }}
      </h2>
    </div>
    <p
      v-if="subtitle"
      class="section-subtitle text-body-2 text-medium-emphasis mb-0"
      :class="{ 'ml-9': icon }"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<style scoped>
.section-title {
  letter-spacing: 0.5px;
  line-height: 1.3;
}

.section-subtitle {
  line-height: 1.6;
}

.section-icon {
  opacity: 0.9;
}
</style>
