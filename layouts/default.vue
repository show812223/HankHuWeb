<script setup lang="ts">

</script>

<template>
  <v-app>
    <v-app-bar app flat class="border-b">
      <div class="px-4 d-flex align-center ga-4 ">
        <p class="text-h5 font-weight-black ">Sheng Han Hu</p>
        <span>|</span>
        <p> 胡聖翰</p>
        <span>|</span>
        <p> Front-end Developer</p>
      </div>
      <v-spacer/>
      <NuxtLink to="/" class="mr-4">
        <v-btn text>
          Home
        </v-btn>
      </NuxtLink>
      <NuxtLink to="/Resume" class="mr-4">
        <v-btn text>
          Resume
        </v-btn>
      </NuxtLink>

    </v-app-bar>
    <v-main class="" >
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
