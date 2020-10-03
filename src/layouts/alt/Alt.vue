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
import { Vue, Options } from 'vue-class-component'
import { Paths } from '@/router/alt/enums'
import { LayoutsPaths } from '@/router/enums'

@Options({
  name: 'LAlt',
})
export default class LAlt extends Vue {
  Paths = Paths
  LayoutsPaths = LayoutsPaths
}
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
