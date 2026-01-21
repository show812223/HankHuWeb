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
        size="28"
        color="primary"
        class="section-icon"
      />
      <h2 class="section-title text-h4 font-weight-medium">
        {{ title }}
      </h2>
    </div>
    <p v-if="subtitle" class="section-subtitle text-body-1 text-medium-emphasis ml-10">
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
    rgb(var(--v-theme-primary) / 0.3),
    rgb(var(--v-theme-primary) / 0.1),
    transparent
  );
  max-width: 200px;
}
</style>
