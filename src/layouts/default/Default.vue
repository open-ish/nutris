<template>
  <header class="center">
    Default Header
    <router-link :to="Paths.home">Home</router-link>
    <router-link :to="Paths.about">About</router-link>
  </header>
  <main class="default">
    <router-view />
  </main>
  <footer class="center">Default footer</footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Paths } from '@/router/default/enums'

export default class LDefault extends Vue {
  Paths = Paths
}
</script>

<style scoped lang="scss">
.center,
.default {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.default {
  justify-content: center;
  min-height: 500px;
  color: var(--orange-3);
}
</style>
