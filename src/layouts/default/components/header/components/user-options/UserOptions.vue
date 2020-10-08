<template>
  <!-- <button @click="change()">Chhange</button> -->
  <div class="mask"></div>

  <div class="user-options">
    <img
      role="button"
      class="user-imagem g-cursor"
      src="https://lh3.googleusercontent.com/a-/AAuE7mBJom5F4cC9cujzyz3IM9VVvMWHfs4RCSJjOr8d"
      aria-label="Imagem do usuário"
    />
    <div class="menu">
      <ul>
        <li>te</li>
        <li>te</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import { createNamespacedHelpers } from 'vuex'
import { useI18n } from 'vue-i18n'

import { I18nGetters, I18nActions } from '@/store/i18n/types'
import { I18n } from '@/enums/i18n'

const { mapGetters, mapActions } = createNamespacedHelpers('i18n')

@Options({
  computed: {
    ...mapGetters({
      language: I18nGetters.LANGUAGE,
    }),
  },
  methods: {
    ...mapActions({
      changeLanguage: I18nActions.CHANGE_LANGUAGE,
    }),
    change() {
      this.changeLanguage(I18n.en)
    },
  },
})
export default class UserOptions extends Vue {
  setup() {
    return useI18n()
  }
}
</script>

<style lang="scss" scoped>
@import '@/layouts/default/Default-variables.scss';

.mask {
  background: var(--bg-darken);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: var(--zindex-100);
}

.user-imagem {
  max-height: 100%;
  border-radius: 50%;
  opacity: 0.8;
  height: calc(#{$header-height-small} - var(--space-sm));

  &:hover {
    opacity: 1;
  }
}

.user-options {
  position: relative;

  > .menu {
    z-index: var(--zindex-1000);
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--white);
    padding: var(--space);
  }
}
</style>
