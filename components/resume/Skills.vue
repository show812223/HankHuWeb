<script setup lang="ts">
import { resumeData } from '~/data/resume'

const skills = resumeData.skills
</script>

<template>
  <section>
    <UiSectionHeader
      icon="mdi-code-tags"
      title="技術能力"
    />

    <v-card class="pa-6">
      <v-row>
        <v-col
          v-for="skill in skills"
          :key="skill.category"
          cols="12"
          sm="6"
          md="4"
        >
          <div class="skill-group">
            <div class="d-flex align-center mb-4">
              <v-icon size="20" color="primary" class="mr-2">{{ skill.icon }}</v-icon>
              <span class="text-subtitle-2 font-weight-bold">{{ skill.category }}</span>
            </div>

            <div class="skill-items d-flex flex-column ga-3">
              <div
                v-for="item in skill.items"
                :key="item.name"
                class="skill-item d-flex justify-space-between align-center"
              >
                <span class="text-body-2">{{ item.name }}</span>
                <div v-if="item.level" class="d-flex ga-1">
                  <span
                    v-for="n in 5"
                    :key="n"
                    class="level-bar"
                    :class="{ 'level-bar--active': n <= item.level }"
                  />
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<style scoped>
.skill-group {
  padding-bottom: 1rem;
}

.level-bar {
  width: 16px;
  height: 4px;
  border-radius: 2px;
  background: rgb(var(--v-theme-border));
  transition: background 0.2s ease;
}

.level-bar--active {
  background: rgb(var(--v-theme-primary));
}
</style>
