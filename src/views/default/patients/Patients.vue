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
  <!-- <Select
    placeHolder="Selecionar cor"
    label="tee"
    v-model:value="color"
    :options="options"
  />{{ color }} -->
  <div class="et"></div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import Input from '@/components/input/Input.vue'
// import Select from '@/components/select/Select.vue'
import { navI18nPath } from '@/layouts/default/components/header/components/nav/nav.i18n'
import { I18nGetters } from '@/store/i18n/types'
import { Paths } from '@/router/default/enums'

const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'Patients',
  components: {
    Input,
    // Select,
  },
  setup() {
    const body = ref('te')
    const color = ref('')
    const tete = ref('')
    const patients = ref({
      calGoal: '',
      // proteinGoal: null,
      // volumeReceived: null,
    })
    const options = reactive([
      { text: 'Yellow', optionId: 'YELLOW' },
      { text: 'Red', optionId: 'Red' },
      { text: 'Red', optionId: 'Red' },
      { text: 'Red', optionId: 'Red' },
      { text: 'Red', optionId: 'Red' },
      { text: 'Red', optionId: 'Red' },
    ])
    return { Paths, navI18nPath, body, patients, options, color, tete }
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

.et {
  min-height: 800px;
  min-width: 500px;
}

.select {
  max-width: 200px;
}
</style>
