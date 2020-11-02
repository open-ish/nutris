<template>
  <Header />
  <div class="dg-default">
    <router-view />
  </div>
  <Footer />
  <FixedBtn />
  <PopupMessage v-if="infos.message" />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import FixedBtn from '@/components/button/FixedBtn.vue'
import Header from '@/layouts/default/components/header/Header.vue'
import Footer from '@/layouts/default/components/footer/Footer.vue'

import {
  PopupMessageGetters,
  POPUP_MESSAGE_NAMESPACE,
} from '@/store/popup-message/types'

const { mapGetters } = createNamespacedHelpers(POPUP_MESSAGE_NAMESPACE)

export default defineComponent({
  name: 'LDefault',
  components: {
    Header,
    Footer,
    FixedBtn,
    PopupMessage: defineAsyncComponent(() =>
      import('../../components/popup-message/PopupMessage.vue')
    ),
  },
  computed: {
    ...mapGetters({
      infos: PopupMessageGetters.INFOS,
    }),
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
  width: 100%;
  max-width: 1000px;
  margin-bottom: auto;
  overflow: auto;
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
