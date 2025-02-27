<script setup lang="ts">
import {useDisplay} from "vuetify"
const {smAndUp} = useDisplay()
const menuItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Resume', icon: 'mdi-account', to: '/Resume' },
  { title: 'Projects', icon: 'mdi-file-document', to: '/Projects' },
  { title: 'Contact', icon: 'mdi-email', to: '/Contact' },
]

</script>

<template>
  <v-app>
    <v-app-bar app flat class="border-b">
      <div class="px-4 d-flex align-center ga-4 ">
        <p class="text-h5 font-weight-black ">Sheng Han Hu</p>
<!--        <span>|</span>-->
<!--        <p> 胡聖翰</p>-->
<!--        <span>|</span>-->
<!--        <p> Front-end Developer</p>-->
      </div>
      <v-spacer></v-spacer>
      <NuxtLink v-if="smAndUp" v-for="item in menuItems" :to="item.to" class="mr-4">
        <v-btn text>
          {{ item.title }}
        </v-btn>
      </NuxtLink>
      <v-menu v-else>
        <template #activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in menuItems" :key="item.title" @click="() => $router.push(item.to)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-main class="" >
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
