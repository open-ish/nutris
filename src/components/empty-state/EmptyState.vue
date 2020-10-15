<template>
  <div class="empty-state dg-container dg-container-large">
    <slot />
    <Button color="primary" @click="$emit('action')" size="large">
      <slot name="btn" />
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Button from '@/components/button/Button.vue'

export default defineComponent({
  name: 'EmptyState',
  emits: ['action'],
  components: {
    Button,
  },
})
</script>

<style lang="scss" scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  &:first-child {
    font: var(--typography-subheader-font);
    color: var(--text-color);
  }
}

.button {
  margin-top: var(--space-md);
}
</style>
