<template>
  <main class="dg-container dg-container-large home">
    <h1>{{ $t(defaultHomeI18nPath.title, language) }}</h1>
    <img
      class="grape"
      src="https://img.icons8.com/material-rounded/55/006064/grapes.png"
    />
    <p><em>Nutris</em>{{ $t(defaultHomeI18nPath.textOne, language) }}</p>
    <i class="nutris-emo-coffee"></i>
    <p>
      {{ $t(defaultHomeI18nPath.textTwo, language) }}
    </p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import { defaultHomeI18nPath } from '@/views/default/home/homei18n.ts'
import { I18nGetters } from '@/store/i18n/types'

const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'Home',
  setup() {
    return { defaultHomeI18nPath }
  },
  computed: {
    ...mapGetters({
      language: I18nGetters.LANGUAGE,
    }),
  },
})
</script>
<style lang="scss" scoped>
@import '@/layouts/default/Default-class.scss';
@import '@/layouts/default/Default-variables.scss';

.home {
  padding-top: var(--space-sm);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  max-width: 700px;
  text-align: center;

  @media screen and (max-width: $screen-md) {
    padding-top: var(--space-md);
  }

  &::before {
    content: '';
    background: url(https://i.pinimg.com/originals/30/d3/2c/30d32c635890ab1b6c3cc40ee620097a.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    left: 0;
  }
}

.grape {
  object-fit: contain;
  color: var(--brand-color);
  margin: var(--space-md);
}

h1 {
  font: var(--typography-panel-font);
  letter-spacing: var(--typography-panel-letter);
}

p:not(:last-of-type) {
  margin-bottom: var(--space-sm);
}
</style>
