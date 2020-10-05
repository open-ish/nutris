<template>
  <Header />
  <main class="default dg-container dg-container-large">
    <router-view />
  </main>
  <footer class="dg-container dg-container-large">Default footer</footer>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Paths } from '@/router/default/enums'

import Header from '@/layouts/default/components/header/Header.vue'

@Options({
  components: {
    Header,
  },
})
export default class LDefault extends Vue {
  Paths = Paths
}
</script>

<style lang="scss">
@import '@/layouts/default/Default-variables.scss';
@import '@/layouts/default/Default-class.scss';

.default {
  justify-content: center;
  min-height: 500px;
  color: var(--orange-3);
}
</style>
