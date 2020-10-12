<template>
  <Header />
  <main class="dg-default dg-container dg-container-large">
    <router-view />
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/layouts/default/components/header/Header.vue'
import Footer from '@/layouts/default/components/footer/Footer.vue'

export default defineComponent({
  name: 'LDefault',
  components: {
    Header,
    Footer,
  },
})
</script>

<style lang="scss">
@import '@/layouts/default/Default-variables.scss';
@import '@/layouts/default/Default-class.scss';

.dg-default {
  justify-content: center;
  min-height: 500px;
  color: var(--orange-3);
}

.app {
  position: relative;
  overflow: auto;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: $screen-sm) {
    height: calc(100vh - #{$header-height-small});
  }
}
</style>
