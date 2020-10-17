<template>
  <EmptyState v-if="!diets.length" @action="action">
    <h1>{{ $t(manageDietsI18nPath.emptyStateTitle, language) }} 😁</h1>
    <template v-slot:btn>
      {{ $t(manageDietsI18nPath.emptyStateAction, language) }}
    </template>
  </EmptyState>
  <section v-else data-testid="manage-diets">
    <FixedBtn
      mode="insert"
      startIcon="nutris-plus"
      :aria-label-icon="
        $t(manageDietsI18nPath.ariaLabelAddNewDietIcon, language)
      "
      :aria-label-btn="$t(manageDietsI18nPath.ariaLabelAddNewDietBtn, language)"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

import EmptyState from '@/components/empty-state/EmptyState.vue'
import FixedBtn from '@/components/button/FixedBtn.vue'
import { I18nGetters, I18N_NAMESPACE } from '@/store/i18n/types'
import {
  ManageDietsGetters,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'
import { manageDietsI18nPath } from './ManageDiets.i18n'

// const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'ManageDiets',
  components: {
    EmptyState,
    FixedBtn,
  },
  setup() {
    return { manageDietsI18nPath }
  },
  computed: {
    ...mapGetters(I18N_NAMESPACE, {
      language: I18nGetters.LANGUAGE,
    }),
    ...mapGetters(MANAGE_DIETS_NAMESPACE, {
      diets: ManageDietsGetters.DIETS,
    }),
  },
  methods: {
    action() {
      console.log('fs')
    },
  },
})
</script>
<style lang="scss" scoped>
@import '@/layouts/default/Default-class.scss';
@import '@/layouts/default/Default-variables.scss';
</style>
