<template>
  <nav class="nav">
    <router-link class="item g-center--y" :to="Paths.calculate">
      <i class="nutris-ticket"></i>
      <span>Cálculo avulso</span>
    </router-link>
    <router-link class="item g-center--y" :to="Paths.manageDiets">
      <i class="nutris-users"></i>
      <span>Meus Pacientes</span>
    </router-link>
    <router-link class="item g-center--y" :to="Paths.patients">
      <i class="nutris-user"></i>
      <span>Novo paciente</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import { Paths } from '@/router/default/enums'

@Options({})
export default class Nav extends Vue {
  Paths = Paths
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

  @media screen and (min-width: $screen-sm) {
    background-color: transparent;
    box-shadow: none;
    justify-content: flex-end;
    margin-left: auto;
    position: initial;
    width: 100%;
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
</style>
