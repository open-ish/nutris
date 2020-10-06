<template>
  <footer class="footer dg-container dg-container-large">
    <p class="title">{{ new Date().getFullYear() }} Nutris</p>
    <p>
      Feito com ❤️ por
      <Button
        href="https://github.com/open-ish"
        target="_blank"
        rel="noopener noreferrer"
        variant="text"
        size="small"
        color="primary"
        >Open-ish</Button
      >
    </p>
  </footer>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import Button from '@/components/button/Button.vue'

@Options({
  components: {
    Button,
  },
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/layouts/default/Default-variables.scss';

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font: var(--typography-body2-font);
  height: $footer-height-small;

  @media screen and (max-width: $screen-sm) {
    position: absolute;
    bottom: calc(-1 * #{$header-height-small});
  }
  .button {
    font: var(--typography-caption-font);
    padding-top: var(--space-xs);
    padding-bottom: var(--space-xs);
    min-width: fit-content;
  }
}
</style>
