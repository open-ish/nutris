<template>
  <section class="g-container g-container-large">
    <h1>Novo Paciente</h1>
    <form @submit.prevent class="patient-form">
      <Box class="identifier" boxTitle="Identificação anônima 👀">
        <p class="box-description">
          Para identificar seu paciente, sugerimos que faça uma combinação entre
          letras (identificação textual) e números (identificação numérica).
          Mas, caso prefira, também há possibilidade de usar apenas uma das
          duas.
          <strong>
            É recomendado que defina uma regra padrão de identificação de seus
            pacientes.</strong
          >
        </p>
        <Input
          class="box-input"
          v-model:value="anonymousText"
          autofocus
          label="Identificação textual (até 6 digitos)"
          placeholder="exemplo: ABCDEF"
          :maxlength="maxlength"
        />
        <Input
          class="box-input"
          v-model:value="anonymousNumber"
          :maxlength="maxlength"
          type="number"
          label="Identificação numérica (até 6 digitos)"
          placeholder="exemplo: 123456"
        />
        <p>
          Este paciente será identificado como:
          <span class="anonymous">
            {{ anonymousIdentifier }}
          </span>
        </p>
      </Box>
      <Box boxTitle="Dados 📁">
        <Input
          class="box-input"
          v-model:value="body"
          type="number"
          label="Massa corporal/peso atual (em kg)"
        />
        <Input
          class="box-input"
          v-model:value="born"
          type="date"
          label="Data de nascimento"
        />
        <div class="gender">
          <div class="option">
            <label for="female">Feminino</label>
            <input
              type="radio"
              v-model="gender"
              name="gender"
              value="F"
              id="female"
            />
          </div>
          <div class="option">
            <label for="male">Masculino</label>
            <input
              type="radio"
              v-model="gender"
              name="gender"
              value="M"
              id="male"
            />
          </div>
        </div>
      </Box>
      <Button
        @click="sendData"
        class="box-btn-submit"
        size="large"
        color="primary"
        >Cadastrar paciente</Button
      >
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
// import { createNamespacedHelpers } from 'vuex'

import Input from '@/components/form/input/Input.vue'
import Box from '@/components/form/box/Box.vue'
import Button from '@/components/form/button/Button.vue'
import { changeToDot } from '@/helpers/form/form.ts'

// const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'NewPatient',
  components: {
    Input,
    Box,
    Button,
  },
  setup() {
    const anonymousNumber = ref('')
    const anonymousText = ref('')
    const body = ref('')
    const born = ref('')
    const gender = ref('')
    const maxlength = ref(6)
    const anonymousIdentifier = computed(
      () => anonymousText.value + anonymousNumber.value
    )

    const sendData = () =>
      console.log({
        anonymousIdentifier,
        anonymousText,
        anonymousNumber,
        body: changeToDot(body.value),
        born,
        gender,
      })

    return {
      anonymousIdentifier,
      anonymousText,
      anonymousNumber,
      body,
      born,
      gender,
      sendData,
      maxlength,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';
@import '@/components/form/box/BoxStyles.scss';

.patient-form {
  font: var(--typography-body2-font);
  display: flex;
  flex-direction: column;
}

.identifier {
  display: flex;
  flex-direction: column;
}

.anonymous {
  font: var(--typography-body-font);
  font-style: italic;
  font-weight: 500;
}

.box-input {
  max-width: 300px;
  &:not(:last-of-type) {
    margin-right: var(--space-sm);
  }
}

.gender {
  display: flex;
  justify-content: flex-start;
  margin-top: var(--space-sm);

  .option {
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      cursor: pointer;
    }

    label {
      margin-bottom: var(--space-xs);
    }

    &:not(:last-of-type) {
      margin-right: var(--space-sm);
    }
  }
}
</style>
