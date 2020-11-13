<template>
  <router-link :to="Paths.welcome">
    <div class="logo">
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
  name: 'Logo',
  setup() {
    return { Paths }
  },
})
</script>

<style lang="scss" scoped>
$logo-font-size: 24px;

.logo {
  color: var(--brand-color-contrast);
  display: flex;
  align-items: center;

  span {
    font-size: $logo-font-size;
  }
}
</style>
