<template>
  <Header />
  <section>
    <router-view />
  </section>
  <Footer layout="alt" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Paths } from '@/router/alt/enums'
import { LayoutsPaths } from '@/router/enums'
import Header from '@/layouts/alt/header/Header.vue'
import Footer from '@/layouts/default/components/footer/Footer.vue'

export default defineComponent({
  name: 'LAlt',
  components: {
    Header,
    Footer,
  },
  setup() {
    return { Paths, LayoutsPaths }
  },
})
</script>

<style lang="scss">
@import '@/layouts/screen.scss';

// .dg-alt {
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   width: 100%;
//   max-width: 1000px;
//   margin-bottom: auto;
//   overflow: auto;
// }

.app {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
}

h1 {
  font: var(--typography-panel-font);
  letter-spacing: var(--typography-panel-letter);
  padding-bottom: var(--space-md);
}
</style>
