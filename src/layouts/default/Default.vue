<template>
  <Header />
  <div class="dg-default">
    <router-view v-if="!isLoading" />
    <LoadingPage v-else />
  </div>
  <Footer />
  <FixedBtn />
  <PopupMessage v-if="infos.message" />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import FixedBtn from '@/components/form/button/FixedBtn.vue'
import { chunkName } from '@/enums/chunkName'
import Header from '@/layouts/default/components/header/Header.vue'
import Footer from '@/layouts/default/components/footer/Footer.vue'
import {
  PopupMessageGetters,
  POPUP_MESSAGE_NAMESPACE,
} from '@/store/popup-message/types'
import {
  LoadingPageGetters,
  LOADING_PAGE_NAMESPACE,
} from '@/store/loading-page/types'

const LOADING_PAGE_MAPS = createNamespacedHelpers(LOADING_PAGE_NAMESPACE)
const POPUP_MAPS = createNamespacedHelpers(POPUP_MESSAGE_NAMESPACE)
const { loadingPage, popupMessage } = chunkName

export default defineComponent({
  name: 'LDefault',
  components: {
    Header,
    Footer,
    FixedBtn,
    LoadingPage: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "[request]" */ `../../components/loading-page/${loadingPage}.vue`
      )
    ),
    PopupMessage: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "[request]" */ `../../components/popup-message/${popupMessage}.vue`
      )
    ),
  },
  computed: {
    ...POPUP_MAPS.mapGetters({
      infos: PopupMessageGetters.INFOS,
    }),
    ...LOADING_PAGE_MAPS.mapGetters({
      isLoading: LoadingPageGetters.LOADING,
    }),
  },
})
</script>

<style lang="scss">
@import '@/assets/styles/screen.scss';

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
