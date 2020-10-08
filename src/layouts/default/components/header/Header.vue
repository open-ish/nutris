<template>
  <header class="header dg-container dg-container-large">
    <Logo />
    <Nav />
    <UserOptions />
  </header>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import Logo from '@/components/logo/Logo.vue'
import Nav from '@/layouts/default/components/header/components/nav/Nav.vue'
import UserOptions from '@/layouts/default/components/header/components/user-options/UserOptions.vue'

@Options({
  components: {
    Logo,
    Nav,
    UserOptions,
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
</style>
