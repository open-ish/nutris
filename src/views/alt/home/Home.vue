<template>
  <main class="g-container g-container-large home">
    <h1>{{ $t(defaultHomeI18nPath.title, language) }}</h1>
    <p class="content">
      <em>Nutris</em>{{ $t(defaultHomeI18nPath.textOne, language) }}.
    </p>
    <i class="nutris-emo-coffee"></i>
    <p class="content">
      {{ $t(defaultHomeI18nPath.textTwo, language) }}
    </p>
    <img aria-hidden="true" class="grape" :src="Statics.grape" />
    <h2 class="purposes">{{ $t(defaultHomeI18nPath.purpose, language) }}</h2>
    <p>
      <em>Nutris</em> {{ $t(defaultHomeI18nPath.purposeText, language) }}
      <Button
        :href="Statics.openIshRepo + '/nutris'"
        target="_blank"
        rel="noopener noreferrer"
        variant="text"
        size="small"
        color="primary"
      >
        {{ $t(defaultHomeI18nPath.purposeButton, language) }}
      </Button>
    </p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import { I18nGetters } from '@/store/i18n/types'
import Button from '@/components/button/Button.vue'
import { Statics } from '@/enums/statics.ts'

import { defaultHomeI18nPath } from './homei18n'

const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'Home',
  components: {
    Button,
  },
  setup() {
    return { defaultHomeI18nPath, Statics }
  },
  computed: {
    ...mapGetters({
      language: I18nGetters.LANGUAGE,
    }),
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.home {
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before {
    content: '';
    background: url(https://i.pinimg.com/originals/30/d3/2c/30d32c635890ab1b6c3cc40ee620097a.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: calc(100% - #{$header-height} - var(--space-md));
    opacity: 0.05;
    left: 0;
  }
}
$image-size: 55px;

.grape {
  object-fit: contain;
  color: var(--brand-color);
  margin: var(--space-md);
  width: $image-size;
  height: $image-size;
  margin: 0 auto;
}

h1 {
  font: var(--typography-panel-font);
  letter-spacing: var(--typography-panel-letter);
}

.content {
  &:not(:last-of-type) {
    margin-bottom: var(--space-sm);
  }
}

.purposes {
  margin-bottom: var(--space);
}
</style>
