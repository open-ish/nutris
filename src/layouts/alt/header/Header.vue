<template>
  <header class="header altg-container altg-container-large">
    <Logo />
    <SocialLogin />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Logo from '@/components/logo/Logo.vue'
import SocialLogin from './components/social-login/SocialLogin.vue'

export default defineComponent({
  name: 'AltHeader',
  components: {
    Logo,
    SocialLogin,
  },
})
</script>

<style lang="scss" scoped>
@import '@/layouts/alt/Alt-class.scss';
@import '@/layouts/screen.scss';

.header {
  align-items: center;
  background-color: var(--brand-color);
  display: flex;
  justify-content: space-between;
  height: $header-height-small;
  padding-top: var(--space-xs);
  padding-bottom: var(--space-xs);
  margin-bottom: var(--space-md);

  @media screen and (max-width: $screen-md) {
    margin-bottom: var(--space-lg);
  }
}
</style>
