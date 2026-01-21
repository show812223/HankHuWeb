<script setup lang="ts">

</script>

<template>
  <div class="resume-page">
    <!-- Page Header -->
    <div class="page-header py-10">
      <v-container>
        <div class="d-flex align-center ga-4 anim-slide-right">
          <v-avatar color="primary" size="56">
            <v-icon size="32" color="white">mdi-file-document-outline</v-icon>
          </v-avatar>
          <div>
            <h1 class="text-h3 font-weight-bold text-primary mb-1">履歷</h1>
            <p class="text-body-1 text-medium-emphasis mb-0">我的專業背景與技術能力</p>
          </div>
        </div>
      </v-container>
    </div>

    <!-- Main Content -->
    <v-container class="py-8">
      <v-row>
        <!-- Left Column - Main Content -->
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-8">
            <ResumeSummary />
            <ResumeExperiences />
          </div>
        </v-col>

        <!-- Right Column - Sidebar -->
        <v-col cols="12" lg="4">
          <div class="d-flex flex-column ga-6 sidebar-content">
            <ResumeSkills />
            <ResumeLanguages />
            <ResumeEducations />
            <ResumeCertifications />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.resume-page {
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

@media (min-width: 1280px) {
  .sidebar-content {
    position: sticky;
    top: 80px;
  }
}
</style>
