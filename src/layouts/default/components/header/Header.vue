<template>
  <header role="banner" class="header dg-container dg-container-large">
    <Logo />
    <Nav v-if="isAuth" />
    <UserOptions v-if="isAuth" />
    <SocialLogin v-if="!isAuth" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import Logo from '@/components/logo/Logo.vue'
import Nav from '@/layouts/default/components/header/components/nav/Nav.vue'
import UserOptions from '@/layouts/default/components/header/components/user-options/UserOptions.vue'
import SocialLogin from '@/layouts/default/components/header/components/social-login/SocialLogin.vue'

import { USER_NAMESPACE, UserGetters } from '@/store/user/types'

const { mapGetters } = createNamespacedHelpers(USER_NAMESPACE)

export default defineComponent({
  name: 'Header',
  components: {
    Logo,
    Nav,
    UserOptions,
    SocialLogin,
  },
  computed: {
    ...mapGetters({
      isAuth: UserGetters.IS_AUTH,
    }),
  },
})
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
  margin-bottom: var(--space-md);

  @media screen and (max-width: $screen-md) {
    margin-bottom: var(--space-lg);
  }
}
</style>
