<template>
  <div @click.self="$emit('click')" class="modal">
    <div @click.stop class="content" :class="type">
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
      default: 'short',
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
  justify-content: center;
  align-items: center;
}

.content {
  align-items: center;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  padding: var(--space-sm);

  &.full {
    @media screen and (max-width: $screen-sm) {
      height: 100%;
      width: 100%;
    }

    @media screen and (min-width: $screen-sm) {
      border-radius: var(--border-radius);
    }
  }

  &.short {
    border-radius: var(--border-radius);
  }
}
</style>
