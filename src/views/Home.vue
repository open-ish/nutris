<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="toggleModalState">teste</button>
    <p>{{ modalOpen?.toString() }}</p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const modalOpen = ref(false)
    const toggleModalState = () => {
      modalOpen.value = !modalOpen.value
    }
    return {
      modalOpen,
      toggleModalState,
    }
  },
})
</script>
