<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="section-header mb-8">
    <div class="d-flex align-center ga-3 mb-2">
      <span
        v-if="$slots.icon"
        class="section-icon text-h5 d-flex align-center"
      >
        <slot name="icon" />
      </span>
      <h2 class="section-title text-h5 font-weight-medium font-heading">
        {{ title }}
      </h2>
    </div>
    <p
      v-if="subtitle"
      class="section-subtitle text-body-1 text-muted ms-10"
    >
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
