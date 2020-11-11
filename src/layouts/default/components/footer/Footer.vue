<template>
  <footer
    role="contentinfo"
    class="footer dg-container dg-container-large"
    :class="layout"
  >
    <p class="title">{{ new Date().getFullYear() }} Nutris</p>
    <p>
      {{ $t(defaultFooterI18nPath.madeWithlove, language) }}
      <Button
        :href="Statics.openIshRepo"
        target="_blank"
        rel="noopener noreferrer"
        variant="text"
        size="small"
        color="primary"
        >Open-ish</Button
      >
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import { I18nGetters } from '@/store/i18n/types'
import Button from '@/components/button/Button.vue'
import { defaultFooterI18nPath } from '@/layouts/default/components/footer/footer.i18n'
import { Statics } from '@/enums/statics.ts'

const { mapGetters } = createNamespacedHelpers('i18n')

type Footer = {
  layout: 'default' | 'alt'
}

export default defineComponent({
  name: 'LFooter',
  props: {
    layout: {
      type: String as PropType<Footer['layout']>,
      default: 'default',
    },
  },
  components: {
    Button,
  },
  setup() {
    return { defaultFooterI18nPath, Statics }
  },
  computed: {
    ...mapGetters({
      language: I18nGetters.LANGUAGE,
    }),
  },
})
</script>

<style lang="scss" scoped>
@import '@/layouts/default/Default-variables.scss';
@import '@/layouts/screen.scss';

.default {
  margin-bottom: var(--space-xs);

  @media screen and (max-width: $screen-md) {
    margin-top: var(--space-lg);
    margin-bottom: $footer-height-small;
  }
}

.alt {
  margin-top: var(--space-md);

  @media screen and (min-width: $screen-xs) {
    margin-top: auto;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font: var(--typography-body2-font);
  height: $footer-height-small;

  .button {
    font: var(--typography-caption-font);
    padding-top: var(--space-xs);
    padding-bottom: var(--space-xs);
    min-width: fit-content;
  }
}
</style>
