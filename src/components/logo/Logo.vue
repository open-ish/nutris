<template>
  <router-link :to="Paths.home" role="logo">
    <div class="logo">
      <img src="@/../public/img/icons/nutrisicon.png" alt="Logo da Nutris" />
      <span>
        Nutris
      </span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Paths } from '@/router/default/enums'

export default defineComponent({
  name: 'Btn',
  setup() {
    return { Paths }
  },
})
</script>

<style lang="scss" scoped>
@import '@/layouts/default/Default-variables.scss';
$logo-height: 44px;
$logo-font-size: 24px;
$logo-gap: -14px;

[role='logo'] {
  color: var(--brand-color-contrast);

  .logo {
    display: flex;
    align-items: center;

    span {
      font-size: $logo-font-size;
    }

    img {
      height: $logo-height;
      margin-top: $logo-gap;
    }
  }
}
</style>
