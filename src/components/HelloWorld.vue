<template>
  <v-container class="fill-height">
    <v-responsive class="text-center">
      <img v-bind:src="monkey" alt="monk">
      <h1 class="text-h2 font-weight-bold text-success">ມີລີງ {{ state.count }} ໂຕ</h1>
      <!-- <h1 class="text-h2 font-weight-bold text-success">ມີເມຍ {{ state.count }} ຄົນ 😏</h1> -->
      <h1 class="text-h2 font-weight-bold text-success">ມີແຟນ {{ state.count }} ຄົນ 😏</h1>
      <!-- <h1 class="text-h2 font-weight-bold text-success">ມີກິກ {{ state.count }} ຄົນ 😏</h1>
      <h1 class="text-h2 font-weight-bold text-success">ມີເງິນ - {{ state.count }} ລ້ານ 🥴</h1> -->
      <v-btn v-if="state.count <=0" color="primary" @click="increment" size="large" elevation="0">
        <!-- <v-icon icon="mdi-speedometer" size="large" start /> -->
        Add
      </v-btn>
      <!-- <v-btn v-if="state.count >= 1" color="danger" @click="decrement" size="large" elevation="0">
        Remove
      </v-btn> -->
      <v-btn v-if="state.count >= 1" color="danger" @click="clear" size="large" elevation="0">
        Clear
      </v-btn>

    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue'

export default defineComponent({
  setup(){
    const state:{count:number} = reactive({ count: 0 })

    const monkey:string = "https://i.kym-cdn.com/entries/icons/original/000/037/043/monkey_sony_walkman.jpg"

    const tt = setInterval(() => {
      increment()
    }, 500)
    
    function increment() {
      state.count++
    }
    function decrement(){
      if (state.count <= 0) {
        return alert("WTF!!!!!!!!!")
      }
      state.count--
    }

    function clear(){
      return clearInterval(tt)
    }

    

  
    return {
      state,
      increment,
      decrement,
      monkey,
      clear
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