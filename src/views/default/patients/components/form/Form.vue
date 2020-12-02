<template>
  <section class="g-container g-container-large">
    <h1>Novo Paciente</h1>
    <form @submit.prevent class="patient-form">
      <Box title="Identificação anônima">
        <p>
          Para identificar seu paciente, sugerimos que faça uma combinação entre
          letras (identificação textual) e números (identificação numérica).
          Mas, caso prefira, também há possibilidade de usar apenas uma das
          duas.
        </p>
        <Input
          class="input-box-space"
          v-model:value="anonymousText"
          autofocus
          label="Identificação textual (até 6 digitos)"
          placeholder="exemplo: ABCDEF"
          maxlength="6"
        />
        <Input
          class="input-box-space"
          v-model:value="anonymousNumber"
          type="number"
          label="Identificação numérica (até 6 digitos)"
          placeholder="exemplo: 123456"
        />
        <p>Este paciente será identificado como: {{ anonymousIdentifier }}</p>
      </Box>
      <!-- <Input type="number" label="Concentração protéica (em g/mL)" />
      <Input type="number" label="Concentração protéica (em g/mL)" />
      <Input type="number" label="Concentração protéica (em g/mL)" /> -->
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
// import { createNamespacedHelpers } from 'vuex'

import Input from '@/components/form/input/Input.vue'
import Box from '@/components/form/box/Box.vue'

// const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'NewPatient',
  components: {
    Input,
    Box,
  },
  setup() {
    const anonymousNumber = ref('')
    const anonymousText = ref('')
    const anonymousIdentifier = computed(
      () => anonymousText.value + anonymousNumber.value
    )
    return { anonymousIdentifier, anonymousText, anonymousNumber }
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';

.input-box-space {
  margin: var(--space-sm) 0;

  @media screen and (min-width: $screen-sm) {
    margin: var(--space) 0;
  }
}
</style>
