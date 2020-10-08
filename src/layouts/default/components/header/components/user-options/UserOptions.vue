<template>
  <button @click="change()">Chhange</button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

import { createNamespacedHelpers } from 'vuex'
import { useI18n } from 'vue-i18n'

import { I18nGetters, I18nActions } from '@/store/i18n/types'
import { I18n } from '@/enums/i18n'

const { mapGetters, mapActions } = createNamespacedHelpers('i18n')

@Options({
  computed: {
    ...mapGetters({
      language: I18nGetters.LANGUAGE,
    }),
  },
  methods: {
    ...mapActions({
      changeLanguage: I18nActions.CHANGE_LANGUAGE,
    }),
    change() {
      this.changeLanguage(I18n.en)
    },
  },
})
export default class UserOptions extends Vue {
  setup() {
    return useI18n()
  }
}
</script>

<style lang="scss" scoped>
@import '@/layouts/default/Default-variables.scss';
</style>
