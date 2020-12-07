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
          v-model:value="fields.anonymousText"
          autofocus
          label="Identificação textual (até 6 digitos)"
          placeholder="exemplo: ABCDEF"
          :maxlength="maxlength"
        />
        <Input
          class="box-input"
          v-model:value="fields.anonymousNumber"
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
          v-model:value="fields.currentBody"
          type="number"
          label="Massa corporal/peso atual (em kg)"
        />
        <Input
          class="box-input"
          v-model:value="fields.born"
          type="date"
          label="Data de nascimento"
        />
        <div class="gender">
          <div class="option">
            <label for="female">Feminino</label>
            <input
              type="radio"
              v-model="fields.gender"
              name="gender"
              value="F"
              id="female"
            />
          </div>
          <div class="option">
            <label for="male">Masculino</label>
            <input
              type="radio"
              v-model="fields.gender"
              name="gender"
              value="M"
              id="male"
            />
          </div>
        </div>
      </Box>
      <Button
        @click="!isInvalid && save()"
        :disabled="isInvalid"
        :isLoading="isLoading"
        class="box-btn-submit"
        size="large"
        color="primary"
        >Cadastrar paciente</Button
      >
      <Alert v-if="errorMessage" :error="errorMessage" />
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import Alert from '@/components/alert/Alert.vue'
import Input from '@/components/form/input/Input.vue'
import Box from '@/components/form/box/Box.vue'
import Button from '@/components/form/button/Button.vue'
import { changeToDot } from '@/helpers/form/form.ts'
import { PatientsMutations, PATIENTS_NAMESPACE } from '@/store/patients/types'
import {
  PopupMessageActions,
  POPUP_MESSAGE_NAMESPACE,
} from '@/store/popup-message/types'
import { timestamp } from '@/helpers/date/date'
import { useRouter } from 'vue-router'
import { Paths } from '@/router/default/enums'

const PATIENTS_MAPS = createNamespacedHelpers(PATIENTS_NAMESPACE)
const POPUP_MAPS = createNamespacedHelpers(POPUP_MESSAGE_NAMESPACE)

const error = 'Desculpe, poderia tentar novamente mais tarde? 🙌'
const success = 'Paciente cadastrado com sucesso! 🥳'

export default defineComponent({
  name: 'Form',
  components: {
    Input,
    Box,
    Button,
    Alert,
  },
  setup() {
    const router = useRouter()
    const maxlength = ref(6)
    const isLoading = ref(false)
    const errorMessage = ref('')
    const loading = () => {
      isLoading.value = !isLoading.value
    }
    const fields = reactive({
      anonymousText: '',
      anonymousNumber: '',
      currentBody: '',
      born: '',
      gender: '',
    })
    const anonymousIdentifier = computed(
      () => fields.anonymousText + fields.anonymousNumber
    )
    const isInvalid = computed(() => {
      return Object.values(fields).some((field) => !field)
    })

    return {
      anonymousIdentifier,
      fields,
      isInvalid,
      maxlength,
      isLoading,
      loading,
      errorMessage,
      router,
    }
  },
  methods: {
    ...PATIENTS_MAPS.mapActions({
      postPatient: PatientsMutations.POST_PATIENTS,
    }),
    ...POPUP_MAPS.mapActions({
      showMessage: PopupMessageActions.SHOW_MESSAGE,
    }),
    async save() {
      this.loading()
      const time = timestamp()
      const response = await this.postPatient({
        ...this.fields,
        anonymousIdentifier: this.anonymousIdentifier,
        currentBody: changeToDot(this.fields.currentBody),
        calculationHistory: [],
        createdAt: time,
        lastUpdated: time,
      })

      this.errorMessage = !response ? '' : error

      !this.errorMessage &&
        this.showMessage({ message: success, time: 2000, mode: 'success' }) &&
        this.router.replace(Paths.patients)
      this.loading()
    },
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';
@import '@/components/form/box/BoxStyles.scss';

.patient-form {
  display: flex;
  flex-direction: column;
}

.identifier {
  display: flex;
  flex-direction: column;
}

.anonymous {
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

    &:not(:last-of-type) {
      margin-right: var(--space-sm);
    }
  }
}
</style>
