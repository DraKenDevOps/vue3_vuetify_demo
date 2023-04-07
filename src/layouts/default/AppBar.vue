<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup(){
    return {}
  }
})
</script>

<template>
  <v-app-bar flat class="bg-primary">
    <v-app-bar-title>
      <v-icon icon="mdi-pac-man" />
      <router-link to="/" class="text-white text-decoration-none">Monkey Mania</router-link>
    </v-app-bar-title>
    <router-link to="/" class="text-white text-decoration-none px-2 font-weight-light">Home</router-link>
    <router-link to="/apply" class="text-white text-decoration-none px-2 font-weight-light">Apply</router-link>
    <router-link to="/info" class="text-white text-decoration-none px-2 font-weight-light">Information</router-link>
    <router-link to="/about" class="text-white text-decoration-none px-2 font-weight-light">About</router-link>
    <v-spacer></v-spacer>
    <v-btn icon color="white">
      <v-icon icon="mdi-weather-night" />
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped>

</style>