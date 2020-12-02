<template>
  <div class="identifier">
    <p v-if="title" class="title">{{ title }}</p>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NewPatient',
  props: {
    title: { type: String },
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';
$gap-title: 10px;

.identifier {
  padding: var(--space-xs);
  border: 1px solid var(--gray-2);
  position: relative;
  border-radius: var(--border-radius-lighten);
  margin-top: var(--space-sm);

  @media screen and (min-width: $screen-sm) {
    padding: var(--space-sm);
    margin-top: var(--space);
  }

  .title {
    position: absolute;
    left: calc(1px + #{$gap-title});
    top: calc(-1 * #{$gap-title});
    background-color: var(--white);
    padding: 0 var(--space-xxs);
    line-height: var(--space-sm);
  }
}
</style>
