<template>
  <header class="header dg-container dg-container-large">
    <Logo />
    <img
      class="user-imagem"
      src="https://lh3.googleusercontent.com/a-/AAuE7mBJom5F4cC9cujzyz3IM9VVvMWHfs4RCSJjOr8d"
      aria-label="Imagem do usuário"
    />
  </header>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import Logo from '@/components/logo/Logo.vue'

@Options({
  components: {
    Logo,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/layouts/default/Default-variables.scss';

.header {
  align-items: center;
  background-color: var(--brand-color);
  display: flex;
  justify-content: space-between;
  height: $header-height-small;
  padding-top: var(--space-xs);
  padding-bottom: var(--space-xs);
}

.user-imagem {
  max-height: 100%;
  border-radius: 50%;
}
</style>
