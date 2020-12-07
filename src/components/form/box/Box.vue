<template>
  <div class="identifier">
    <p v-if="boxTitle" class="boxtitle">{{ boxTitle }}</p>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NewPatient',
  props: {
    boxTitle: { type: String },
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';
$gap-boxtitle: 10px;

.identifier {
  padding: var(--space-xs);
  border: 1px solid var(--gray-2);
  position: relative;
  border-radius: var(--border-radius-lighten);
  margin-top: var(--space);
  width: 100%;

  @media screen and (min-width: $screen-sm) {
    padding: var(--space-sm);
    margin-top: var(--space-md);
  }

  .boxtitle {
    position: absolute;
    left: calc(1px + #{$gap-boxtitle});
    top: calc(-1 * #{$gap-boxtitle});
    background-color: var(--white);
    padding: 0 var(--space-xxs);
    line-height: var(--space-sm);
    font-weight: 900;
  }
}
</style>
