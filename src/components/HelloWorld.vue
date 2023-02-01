<template>
  <v-container class="fill-height">
    <v-responsive class="text-center">
      <img src="https://i.kym-cdn.com/entries/icons/original/000/037/043/monkey_sony_walkman.jpg" alt="monkey" height="200px" width="120px">
      <h1 class="text-h2 font-weight-bold text-success">ມີລີງ {{ state.count }} ໂຕ</h1>
      <v-btn color="primary" @click="increment" size="large" elevation="0">
        <!-- <v-icon icon="mdi-speedometer" size="large" start /> -->
        Add
      </v-btn>
      <v-btn color="danger" @click="decrement" size="large" elevation="0">
        Remove
      </v-btn>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue'

export default defineComponent({
  setup(){
    const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }
    function decrement(){
      state.count--
    }

    setInterval(() => {
      increment()
    },1000)

    return {
      state,
      increment,
      decrement,
    }
  }
})

</script>

<!-- <script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}

</script> -->