<template>
  <div class="loading-page">
    <Spinner color="primary" size="32" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Spinner from '@/components/spinner/Spinner.vue'

export default defineComponent({
  name: 'LoadingSpinner',
  components: {
    Spinner,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.loading-page {
  z-index: var(--zindex-10);
  height: calc(100% - #{$header-height-small});
  width: 100%;
  position: absolute;
  background: var(--bg-lighten);
  top: $header-height-small;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
