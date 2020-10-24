<template>
  <div class="mask" ref="mask" @click="toggleMenu"></div>
  <div class="user-options">
    <ul class="menu" ref="menu">
      <i
        class="nutris-cancel"
        @click="toggleMenu"
        :aria-label="$t(userOptionsI18nPath.close, language)"
        role="button"
      ></i>
      <li class="item g-cursor" role="button">
        {{ $t(userOptionsI18nPath.profile, language) }}
      </li>
      <li
        :title="labelToggle.label"
        class="item language g-cursor"
        role="button"
        @click="change(labelToggle.short)"
      >
        {{ labelToggle.short }}
      </li>
      <li class="item g-cursor" role="button" @click="logout">
        {{ $t(userOptionsI18nPath.logout, language) }}
      </li>
    </ul>
    <img
      @click="toggleMenu()"
      :role="isSmallScreen() ? 'button' : ''"
      class="user-imagem"
      :src="user?.photoURL"
      aria-label="Imagem do usuário"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { createNamespacedHelpers } from 'vuex'
import { useI18n } from 'vue-i18n'

import { I18nGetters, I18nActions } from '@/store/i18n/types'
import { I18n } from '@/enums/i18n'
import { resize } from './resize'
import { userOptionsI18nPath } from './userOptions.i18n'
import { User } from '@/models/User'
import { logout } from '@/services/auth.service.ts'

const { mapGetters, mapActions } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'UserOptions',
  props: {
    user: {
      type: Object as PropType<User>,
    },
  },
  setup() {
    const { toggleMenu, menu, mask, isSmallScreen } = resize()
    return {
      useI18n,
      toggleMenu,
      menu,
      mask,
      isSmallScreen,
      I18n,
      userOptionsI18nPath,
      logout,
    }
  },
  created() {
    console.log('wewee', this.user)
  },
  computed: {
    ...mapGetters({
      language: I18nGetters.LANGUAGE,
      labelToggle: I18nGetters.LABEL_TOGGLE,
    }),
  },
  methods: {
    ...mapActions({
      changeLanguage: I18nActions.CHANGE_LANGUAGE,
    }),
    change(value: I18n) {
      this.changeLanguage(value)
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
  display: none;
}

.user-imagem {
  max-height: 100%;
  border-radius: 50%;
  height: calc(#{$header-height-small} - var(--space-sm));
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
    display: none;
    width: 100vw;
    padding: var(--space-sm);
  }

  @media screen and (min-width: $screen-sm) {
    position: initial;
    flex-direction: row;
    background-color: transparent;
  }
}

.item {
  padding: var(--space-xs);
  text-align: center;

  @media screen and (max-width: $screen-sm) {
    min-width: 120px;
  }

  @media screen and (min-width: $screen-sm) {
    color: var(--white);
    margin-right: var(--space-xs);

    &:hover {
      color: var(--primary-color-lighten);
    }
  }

  @media screen and (min-width: $screen-md) {
    margin-right: var(--space-sm);
  }
}

.language {
  text-transform: uppercase;
}

.nutris-cancel {
  @media screen and (min-width: $screen-sm) {
    display: none;
  }
  align-self: flex-end;
  padding: var(--space-xs);
  margin-top: calc(var(--space-xs) * -1);
}
</style>
