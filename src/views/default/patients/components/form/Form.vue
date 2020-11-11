<template>
  <h1>Novo Paciente</h1>
  <form @submit.prevent class="patient-form">
    <Input autofocus label="Nome da nova dieta" />
    <Input type="number" label="Concentração protéica (em g/mL)" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { createNamespacedHelpers } from 'vuex'

import Input from '@/components/input/Input.vue'

// const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'NewPatient',
  components: {
    Input,
  },
  // setup() {
  //   return {  }
  // },
})
</script>
<style lang="scss" scoped>
@import '@/layouts/default/Default-class.scss';
@import '@/layouts/default/Default-variables.scss';
</style>
