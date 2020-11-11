<template>
  <div class="alert" :class="alertClass">
    <i :class="error ? 'nutris-cancel' : 'nutris-icon-warning'"></i>
    {{ error || warning }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

type Alert = {
  mode: 'block' | 'fixed'
  error: string
  warning: string
}

export default defineComponent({
  name: 'Alert',
  props: {
    mode: { default: 'block', type: String as PropType<Alert['mode']> },
    error: { default: '', type: String as PropType<Alert['error']> },
    warning: { default: '', type: String as PropType<Alert['warning']> },
  },
  setup(props) {
    const alertClass = computed(() => (props.error ? 'error' : 'warning'))

    return { alertClass }
  },
})
</script>

<style lang="scss" scoped>
@import '@/layouts/screen.scss';

.alert {
  border-radius: var(--border-radius-lighten);
  padding: var(--space-xs);

  @media screen and (min-width: $screen-sm) {
    padding: var(--space-sm);
  }
}

.error {
  border: 1px solid var(--danger-color-lighten);
  color: var(--danger-color-darken);
}

.warning {
  border: 1px solid var(--primary-color-lighten);
  color: var(--primary-color-lighten);
}
</style>
