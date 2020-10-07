<template>
  <nav class="nav">
    <router-link
      class="item g-center--y"
      active-class="active"
      :to="Paths.calculate"
    >
      <i class="nutris-ticket"></i>
      <span>{{ $t('nav.calculate', language) }}</span>
    </router-link>
    <router-link
      class="item g-center--y"
      active-class="active"
      :to="Paths.manageDiets"
    >
      <i class="nutris-users"></i>
      <span>Meus Pacientes</span>
    </router-link>
    <router-link
      class="item g-center--y"
      active-class="active"
      :to="Paths.patients"
    >
      <i class="nutris-user"></i>
      <span>Novo paciente</span>
    </router-link>

    <button @click="change()">Chhange</button>
  </nav>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import { createNamespacedHelpers } from 'vuex'
import { useI18n } from 'vue-i18n'

import { Paths } from '@/router/default/enums'
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
export default class Nav extends Vue {
  Paths = Paths
  setup() {
    return useI18n()
  }
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
    width: 100%;
    z-index: initial;
  }
}
.item {
  padding: var(--space-xs);
  text-align: center;

  [class^='nutris-'] {
    font-size: 24px;
  }

  span {
    white-space: nowrap;
  }

  @media screen and (min-width: $screen-sm) {
    color: var(--white);
    margin-right: var(--space);

    &:hover {
      color: var(--primary-color-lighten);
    }
  }
}

.active {
  color: var(--primary-color-lighten);
}
</style>
