<template>
  <div @click.self="$emit('click')" class="modal" :class="!freeMode && type">
    <div @click.stop class="content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
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
export default class Modal extends Vue {}
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
