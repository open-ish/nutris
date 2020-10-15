<template>
  <EmptyState @action="action">
    <h3>Gostaria de cadastrar sua primeira dieta? 😁</h3>
    <template v-slot:btn>
      Quero Cadastrar!!
    </template>
  </EmptyState>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import EmptyState from '@/components/empty-state/EmptyState.vue'
import { I18nGetters } from '@/store/i18n/types'

const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'ManageDiets',
  components: {
    EmptyState,
  },
  computed: {
    ...mapGetters({
      language: I18nGetters.LANGUAGE,
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
