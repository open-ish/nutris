<template>
  <Button
    shape="circle"
    :color="isBackToTopMode ? 'brand' : 'primary'"
    :class="[`${mode}`, isShowElement && 'is-active']"
    :size="!isBackToTopMode ? 'large' : 'medium'"
    @click="isBackToTopMode ? toTop() : $emit('click')"
    aria-label="Voltar pro topo"
  >
    <i
      :class="isBackToTopMode ? 'nutris-angle-up' : $attrs.startIcon"
      :aria-label="ariaLabel"
    ></i>
  </Button>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import Button from '@/components/button/Button.vue'
import { scroll } from '@/helpers/window-listeners/scroll.ts'
const backToTopMode = 'back-to-top'

interface Fixed {
  mode: 'back-to-top' | 'insert'
  ariaLabel: 'Seta apontando pra cima.'
}

export default defineComponent({
  name: 'FixedBtn',
  emits: ['click'],
  inheritAttrs: false,
  components: {
    Button,
  },
  props: {
    mode: {
      default: 'back-to-top',
      type: String as PropType<Fixed['mode']>,
    },
    ariaLabel: {
      default: 'Seta apontando pra cima.',
      type: String as PropType<Fixed['ariaLabel']>,
    },
  },
  setup(props) {
    const isBackToTopMode = ref(props.mode === backToTopMode)

    return { isBackToTopMode, ...scroll() }
  },
})
</script>

<style lang="scss" scoped>
$back-btn: 0 -2px 5px rgba(0, 0, 0, 0.2);
@import '@/layouts/default/Default-variables.scss';

.button {
  position: fixed;
  z-index: var(--zindex-100);
  box-shadow: $back-btn;
  transition: opacity var(--transition-duration-speed);

  &.is-active {
    opacity: 1;
  }
}

.back-to-top {
  left: var(--space-sm);
  bottom: calc(#{$footer-height-small} + var(--space-sm));
  opacity: 0;
}

.insert {
  right: var(--space-sm);
  bottom: calc(#{$footer-height-small} + var(--space-sm));
  opacity: 1;
}

.large {
  font-size: var(--space-md);
}

.nutris-angle-up {
  font-size: var(--space);
}
</style>
