<script setup lang="ts">

</script>

<template>
  <v-card class="text-center pa-8">
    <!-- 直式排版姓名 -->
    <div class="d-flex justify-center mb-6">
      <div class="vertical-name text-h4 font-weight-bold text-primary">
        胡聖翰
      </div>
    </div>

    <v-avatar
      size="180"
      class="mb-6"
    >
      <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
    </v-avatar>

    <v-card-title class="text-h5 font-weight-bold pb-1">
      Sheng Han Hu
    </v-card-title>
    <v-card-subtitle class="text-body-1 pb-4">
      Front-end Developer
    </v-card-subtitle>

    <v-card-actions class="d-flex align-center justify-center ga-2 pt-2">
      <v-btn
        icon="mdi-linkedin"
        variant="text"
        color="primary"
        size="large"
      />
      <v-btn
        icon="mdi-github"
        variant="text"
        color="primary"
        size="large"
      />
      <v-btn
        icon="mdi-facebook"
        variant="text"
        color="primary"
        size="large"
      />
    </v-card-actions>
  </v-card>
</template>

<style scoped>
/* 直式排版 */
.vertical-name {
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.3em;
}
</style>
