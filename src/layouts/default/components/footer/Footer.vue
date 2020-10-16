<template>
  <footer role="contentinfo" class="footer dg-container dg-container-large">
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
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import { I18nGetters } from '@/store/i18n/types'
import Button from '@/components/button/Button.vue'
import { defaultFooterI18nPath } from '@/layouts/default/components/footer/footer.i18n'
import { Statics } from '@/enums/statics.ts'

const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'LFooter',
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

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font: var(--typography-body2-font);
  height: $footer-height-small;
  margin-top: var(--space-md);
  margin-bottom: var(--space-xs);

  @media screen and (max-width: $screen-md) {
    margin-top: var(--space-lg);
    margin-bottom: var(--space-lg);
  }

  .button {
    font: var(--typography-caption-font);
    padding-top: var(--space-xs);
    padding-bottom: var(--space-xs);
    min-width: fit-content;
  }
}
</style>
