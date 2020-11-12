<template>
  <transition name="slide-left">
    <div class="popup-message" :class="infos.mode">
      {{ infos.message }}
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import {
  PopupMessageGetters,
  POPUP_MESSAGE_NAMESPACE,
} from '@/store/popup-message/types'

const { mapGetters } = createNamespacedHelpers(POPUP_MESSAGE_NAMESPACE)

type PopupMessage = {
  mode: 'default' | 'success' | 'danger'
}

export default defineComponent({
  name: 'PopupMessage',
  props: {
    mode: {
      default: 'default',
      type: String as PropType<PopupMessage['mode']>,
    },
  },
  computed: {
    ...mapGetters({
      infos: PopupMessageGetters.INFOS,
    }),
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.popup-message {
  position: fixed;
  top: calc(var(--space-sm) + #{$header-height-small});
  right: var(--space-sm);
  padding: var(--space-sm);
  border-radius: var(--border-radius-lighten);
  z-index: var(--zindex-10);
}

.default {
  background-color: var(--default-color);
  color: var(--default-color-contrast);
}

.success {
  background-color: var(--success-color);
  color: var(--success-color-contrast);
}

.danger {
  background-color: var(--danger-color);
  color: var(--danger-color-contrast);
}
</style>
