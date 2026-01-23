<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="section-header mb-8">
    <div class="d-flex align-center ga-3 mb-2">
      <v-icon
        v-if="icon"
        :icon="icon"
        size="24"
        color="primary"
      />
      <h2 class="text-h5 font-weight-bold">
        {{ title }}
      </h2>
    </div>
    <p v-if="subtitle" class="text-body-2 text-medium-emphasis" :class="{ 'ml-9': icon }">
      {{ subtitle }}
    </p>
    <div class="section-divider mt-4" />
  </div>
</template>

<style scoped>
.section-divider {
  height: 2px;
  background: linear-gradient(
    to right,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-primary) / 0.3),
    transparent
  );
  max-width: 120px;
}
</style>
