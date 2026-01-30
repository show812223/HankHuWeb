<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mb-8">
    <div class="d-flex align-center ga-3 mb-2">
      <span v-if="$slots.icon" class="d-flex align-center">
        <slot name="icon" />
      </span>
      <h2 class="text-h6 font-weight-medium font-heading">
        {{ title }}
      </h2>
    </div>
    <p v-if="subtitle" class="text-body-2 text-medium-emphasis ml-10" style="max-width: 600px;">
      {{ subtitle }}
    </p>
    <div class="section-divider mt-4" />
  </div>
</template>

<style scoped>
.section-divider {
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(78, 69, 64, 0.3),
    rgba(78, 69, 64, 0.1),
    transparent
  );
  max-width: 200px;
}

.font-heading {
  font-family: 'Noto Serif JP', 'Noto Serif TC', serif;
}
</style>
