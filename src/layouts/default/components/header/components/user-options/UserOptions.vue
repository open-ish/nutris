<template>
  <div class="mask" @click="toggleMenu" v-if="isOpen"></div>
  <div class="user-options">
    <ul class="menu" v-if="isOpen">
      <li class="item g-cursor" role="button" @click="change()">
        traducao
      </li>
      <li class="item g-cursor" role="button">Sair</li>
      <li class="item g-cursor" role="button">Perfil</li>
    </ul>
    <img
      @click="toggleMenu"
      role="button"
      class="user-imagem g-cursor"
      src="https://lh3.googleusercontent.com/a-/AAuE7mBJom5F4cC9cujzyz3IM9VVvMWHfs4RCSJjOr8d"
      aria-label="Imagem do usuário"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { createNamespacedHelpers } from 'vuex'
import { useI18n } from 'vue-i18n'

import { I18nGetters, I18nActions } from '@/store/i18n/types'
import { I18n } from '@/enums/i18n'
import { getCssVariableValue } from '@/helpers/styles.ts'

const { mapGetters, mapActions } = createNamespacedHelpers('i18n')

export default defineComponent({
  setup() {
    const isOpen = ref(false)
    function toggleMenu() {
      isOpen.value = !isOpen.value
    }
    return { useI18n, toggleMenu, isOpen }
  },
  created() {
    window.addEventListener('resize', () => {
      this.isOpen =
        `${window.outerWidth}px` < getCssVariableValue('--screen-sm')
    })
  },
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
      this.changeLanguage(I18n.br)
    },
  },
})
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

  @media screen and (min-width: $screen-sm) {
    display: none;
  }
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

  @media screen and (min-width: $screen-sm) {
    display: flex;
    align-items: center;
    height: 100%;
  }
}

.menu {
  z-index: var(--zindex-1000);
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: $screen-sm) {
    margin-right: calc(10px * -1);
    margin-top: calc(10px * -1);
  }

  @media screen and (min-width: $screen-sm) {
    position: initial;
    flex-direction: row;
    background-color: transparent;
  }
}

.item {
  padding: var(--space-xs);

  @media screen and (min-width: $screen-sm) {
    color: var(--white);
    margin-right: var(--space);

    &:hover {
      color: var(--primary-color-lighten);
    }
  }
}
</style>
