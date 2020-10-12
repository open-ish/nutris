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
  border-radius: var(--border-radius);
  background-color: var(--white);
  padding: var(--space-sm);
}
</style>
