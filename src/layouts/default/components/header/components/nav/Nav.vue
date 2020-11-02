<template>
  <nav class="nav">
    <router-link
      v-for="(item, index) in navOptions"
      :key="index"
      class="item g-center--y"
      exact-active-class="active"
      :to="item.path"
    >
      <i :class="item.icon"></i>
      <span>{{ $t(item.i18n, language) }}</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import { createNamespacedHelpers } from 'vuex'

import { I18nGetters } from '@/store/i18n/types'
import { navOptions } from './navMenu'

const { mapGetters } = createNamespacedHelpers('i18n')

@Options({
  computed: {
    ...mapGetters({
      language: I18nGetters.LANGUAGE,
    }),
  },
})
export default class Nav extends Vue {
  navOptions = navOptions
}
</script>

<style lang="scss" scoped>
@import '@/layouts/default/Default-variables.scss';
$nav-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);

.nav {
  background-color: var(--white);
  bottom: 0;
  box-shadow: $nav-shadow;
  display: flex;
  left: 0;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  font: var(--typography-caption-font);
  z-index: var(--zindex-100);

  @media screen and (min-width: $screen-sm) {
    background-color: transparent;
    box-shadow: none;
    justify-content: flex-end;
    margin-left: auto;
    position: initial;
    width: auto;
    z-index: initial;
  }
}
.item {
  padding: var(--space-xs);
  text-align: center;
  flex-grow: 1;

  [class^='nutris-'] {
    font-size: 24px;
  }

  @media screen and (min-width: $screen-sm) {
    flex-grow: initial;
    color: var(--white);
    margin-right: var(--space-xs);

    &:hover {
      color: var(--primary-color-lighten);
    }
  }

  @media screen and (min-width: $screen-sm) {
    margin-right: var(--space-sm);
  }
}

.active {
  color: var(--primary-color-lighten);
}
</style>
