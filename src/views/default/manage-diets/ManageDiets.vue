<template>
  <EmptyState v-if="!diets.length" @action="action">
    <h1>Gostaria de cadastrar sua primeira dieta? 😁</h1>
    <template v-slot:btn>
      Quero Cadastrar!!
    </template>
  </EmptyState>
  <section v-else data-testid="manage-diets">
    <FixedBtn
      mode="insert"
      startIcon="nutris-plus"
      aria-label="Sinal de mais"
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

// const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'ManageDiets',
  components: {
    EmptyState,
    FixedBtn,
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
