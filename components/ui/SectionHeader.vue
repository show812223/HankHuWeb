<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="section-header mb-8">
    <div class="flex items-center gap-3 mb-2">
      <span v-if="$slots.icon" class="section-icon text-2xl flex items-center">
        <slot name="icon" />
      </span>
      <h2 class="section-title text-2xl font-medium font-heading">
        {{ title }}
      </h2>
    </div>
    <p v-if="subtitle" class="section-subtitle text-base text-muted ml-10">
      {{ subtitle }}
    </p>
    <div class="section-divider mt-4" />
  </div>
</template>

<style scoped>
.section-header {
  position: relative;
}

.section-title {
  letter-spacing: 0.5px;
  line-height: 1.3;
}

.section-subtitle {
  line-height: 1.6;
  max-width: 600px;
}

.section-icon {
  opacity: 0.9;
}

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
