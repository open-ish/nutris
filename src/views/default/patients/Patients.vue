<template>
  <h2>{{ $t(navI18nPath.patients, language) }}</h2>
  <Input v-model:value="body" type="number" label="Massa corporal" />
  <!-- <Input
    v-model:value="body"
    type="number"
    required
    label="Meta calórica (kcal/kg)"
  /> -->
  <!-- <Input
    v-model:value="calc"
    type="number"
    required
    label="Meta proteica (gPTN/kg)"
  />
  <Input
    v-model:value="calc"
    type="number"
    required
    label="Volume recebido (mL)"
  /> -->
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import Input from '@/components/input/Input.vue'
import { navI18nPath } from '@/layouts/default/components/header/components/nav/nav.i18n.ts'
import { I18nGetters } from '@/store/i18n/types'
import { Paths } from '@/router/default/enums'

const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'Patients',
  components: {
    Input,
  },
  setup() {
    const body = ref('te')
    const patients = ref({
      calGoal: '',
      // proteinGoal: null,
      // volumeReceived: null,
    })
    return { Paths, navI18nPath, body, patients }
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
</style>
