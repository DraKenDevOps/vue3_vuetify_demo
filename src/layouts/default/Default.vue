<script lang="ts" setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import { ref } from 'vue';
const theme = ref('dark')
</script>
<template>
  <v-app :theme="theme">
    <default-bar/>
    <default-view />
  </v-app>
</template>
