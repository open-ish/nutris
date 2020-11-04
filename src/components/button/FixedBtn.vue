<template>
  <Button
    shape="circle"
    :color="isBackToTopMode ? 'brand' : 'primary'"
    :class="[`${mode}`, isShowElement && 'is-active']"
    :size="!isBackToTopMode ? 'large' : 'medium'"
    @click="isBackToTopMode ? toTop() : $emit('click')"
    :aria-label="
      isBackToTopMode
        ? $t(fixedBtnI18nPath.ariaLabelBtn, language)
        : ariaLabelBtn
    "
  >
    <i
      :class="isBackToTopMode ? 'nutris-angle-up' : $attrs.startIcon"
      :aria-label="
        isBackToTopMode
          ? $t(fixedBtnI18nPath.ariaLabelIcon, language)
          : ariaLabelIcon
      "
    ></i>
  </Button>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { createNamespacedHelpers } from 'vuex'
import Button from '@/components/button/Button.vue'
import { scroll } from '@/helpers/window-listeners/scroll.ts'
import { I18nGetters, I18N_NAMESPACE } from '@/store/i18n/types'
import { fixedBtnI18nPath } from './FixedBtn.i18n'

const backToTopMode = 'back-to-top'
const { mapGetters } = createNamespacedHelpers(I18N_NAMESPACE)

interface Fixed {
  mode: 'back-to-top' | 'insert'
  ariaLabelIcon: 'Seta apontando pra cima.'
  ariaLabelBtn: ''
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
    ariaLabelIcon: {
      type: String as PropType<Fixed['ariaLabelIcon']>,
    },
    ariaLabelBtn: {
      type: String as PropType<Fixed['ariaLabelBtn']>,
    },
  },
  setup(props) {
    const isBackToTopMode = ref(props.mode === backToTopMode)

    return { isBackToTopMode, fixedBtnI18nPath, ...scroll() }
  },
  computed: {
    ...mapGetters({ language: I18nGetters.LANGUAGE }),
  },
})
</script>

<style lang="scss" scoped>
$back-btn: 0 -2px 5px rgba(0, 0, 0, 0.2);
@import '@/layouts/default/Default-variables.scss';

.button {
  position: fixed;
  z-index: var(--zindex-10);
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

  @media screen and (min-width: $screen-sm) {
    bottom: var(--space);
  }
}

.insert {
  right: var(--space-sm);
  bottom: calc(#{$footer-height-small} + var(--space-sm));
  opacity: 1;
  @media screen and (min-width: $screen-sm) {
    bottom: var(--space);
  }
}

.large {
  font-size: var(--space-md);
}

.nutris-angle-up {
  font-size: var(--space);
}
</style>
