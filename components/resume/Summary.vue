<script setup lang="ts">
import { resumeData } from '~/data/resume'

const summary = resumeData.summary
</script>

<template>
  <section class="anim-slide-up">
    <v-card class="pa-8 summary-card">
      <div class="d-flex align-start ga-4">
        <div class="summary-icon-wrapper flex-shrink-0">
          <v-icon size="28" color="primary">mdi-account-circle</v-icon>
        </div>
        <div>
          <h2 class="text-h5 font-weight-bold mb-4">關於我</h2>
          <p class="text-body-1 summary-text mb-0" style="line-height: 1.9;">
            {{ summary }}
          </p>
        </div>
      </div>

      <!-- Quick Stats -->
      <v-divider class="my-6" />
      <v-row class="text-center">
        <v-col cols="4">
          <div class="stat-number text-h4 font-weight-bold text-primary">6+</div>
          <div class="text-caption text-medium-emphasis">年經驗</div>
        </v-col>
        <v-col cols="4">
          <div class="stat-number text-h4 font-weight-bold text-primary">10+</div>
          <div class="text-caption text-medium-emphasis">專案經歷</div>
        </v-col>
        <v-col cols="4">
          <div class="stat-number text-h4 font-weight-bold text-primary">3</div>
          <div class="text-caption text-medium-emphasis">團隊管理</div>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<style scoped>
.summary-card {
  position: relative;
  overflow: hidden;
}

.summary-card::before {
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

.summary-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgb(var(--v-theme-primary) / 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.summary-text {
  max-width: 100%;
}

.stat-number {
  font-variant-numeric: tabular-nums;
}
</style>
