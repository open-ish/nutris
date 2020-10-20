<template>
  <Header />
  <div class="dg-default">
    <router-view />
  </div>
  <Footer />
  <FixedBtn />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import FixedBtn from '@/components/button/FixedBtn.vue'
import Header from '@/layouts/default/components/header/Header.vue'
import Footer from '@/layouts/default/components/footer/Footer.vue'

export default defineComponent({
  name: 'LDefault',
  components: {
    Header,
    Footer,
    FixedBtn,
  },
})
</script>

<style lang="scss">
@import '@/layouts/default/Default-variables.scss';
@import '@/layouts/default/Default-class.scss';

.dg-default {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 700px;
  margin-bottom: auto;
  overflow: scroll;
}

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
