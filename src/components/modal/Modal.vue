<template>
  <div @click.self="$emit('click')" class="modal" :class="!freeMode && type">
    <div @click.stop class="content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  emits: ['click'],
  props: {
    type: {
      default: 'is-default',
    },
    freeMode: {
      default: false,
    },
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';

.modal {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: var(--bg-darken);
  z-index: var(--zindex-100);
  display: flex;
}

.is-default {
  justify-content: center;
  align-items: center;
}

.content {
  background-color: var(--white);
  padding: var(--space-sm);

  @media screen and (max-width: $screen-sm) {
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: $screen-sm) {
    border-radius: var(--border-radius);
  }
}
</style>
