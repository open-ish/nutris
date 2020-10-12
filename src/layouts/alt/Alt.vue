<template>
  <header class="center">
    Alt Header
    <router-link :to="Paths.someAlt">someAlt</router-link>
    <router-link :to="LayoutsPaths.alt">Alt</router-link>
  </header>
  <section class="alt">
    <router-view />
  </section>
  <footer class="center">Alt footer</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Paths } from '@/router/alt/enums'
import { LayoutsPaths } from '@/router/enums'

export default defineComponent({
  name: 'LAlt',
  setup() {
    return { Paths, LayoutsPaths }
  },
})
</script>

<style scoped lang="scss">
.center,
.alt {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.alt {
  justify-content: center;
  min-height: 500px;
  color: var(--blue-3);
}
</style>
