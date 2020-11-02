<template>
  <div class="paper" :role="isClickable ? 'button' : ''">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Paper',
  props: {
    isClickable: {
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.paper {
  background: var(--white);
  border: 1px solid var(--gray-1);
  border-radius: var(--border-radius);

  &[role='button'] {
    box-shadow: 0 1px 2px rgba(121, 121, 121, 0.2);
    transition: box-shadow var(--transition-duration);
    will-change: box-shadow;

    &:hover {
      box-shadow: 0 1px 4px rgba(121, 121, 121, 0.4);
      cursor: pointer;
    }
  }
}
</style>
