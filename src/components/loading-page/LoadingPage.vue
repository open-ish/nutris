<template>
  <div v-if="loading" class="loading-page">
    <Spinner color="primary" size="32" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import {
  LoadingPageGetters,
  LOADING_PAGE_NAMESPACE,
} from '@/store/loading-page/types'

const { mapGetters } = createNamespacedHelpers(LOADING_PAGE_NAMESPACE)

import Spinner from '@/components/spinner/Spinner.vue'

export default defineComponent({
  name: 'LoadingSpinner',
  components: {
    Spinner,
  },
  computed: {
    ...mapGetters({
      loading: LoadingPageGetters.LOADING,
    }),
  },
})
</script>

<style lang="scss" scoped>
@import '@/layouts/default/Default-variables.scss';

.loading-page {
  z-index: var(--zindex-1000);
  height: calc(100% - #{$header-height-small});
  width: 100%;
  position: absolute;
  background: var(--bg-darken);
  top: $header-height-small;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
