<template>
  <div class="calculator">
    <Button
      class="btn-cancel"
      @click="close"
      variant="text"
      color="primary"
      startIcon="nutris-cancel"
    >
    </Button>
    <div class="info">
      <h3>Calculadora</h3>
      <p v-if="patient">Paciente: {{ patient.anonymousIdentifier }}</p>
    </div>
    <Select
      class="calculator-input"
      label="Dieta base"
      :objectInstead="true"
      :options="
        diets.map((diet) => {
          return { ...diet, text: diet.name }
        })
      "
      v-model:value="diet"
    />
    <Input
      class="calculator-input"
      v-model:value="currentBody"
      type="number"
      label="Massa corporal/peso atual (em kg)"
    />
    <Input
      class="calculator-input"
      v-model:value="calGoal"
      type="number"
      label="Meta calórica (em kcal/kg)"
    />
    <Input
      class="calculator-input"
      v-model:value="proteinGoal"
      type="number"
      label="Meta protéica (em gPTN/kg)"
    />
    <Input
      class="calculator-input"
      v-model:value="volumeReceived"
      type="number"
      label="Volume de dieta recebido (em mL)"
    />
    <Button
      :isLoading="isLoading"
      class="btn-calculate"
      @click="calculate"
      color="primary"
    >
      Calcular
    </Button>
    <Alert v-if="errorMessage" :error="errorMessage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { createNamespacedHelpers } from 'vuex'
import { parenteral } from '@open-ish/nutris-roles'

import { postCalculationHistory } from '@/services/calculate.service'
import { Patient } from '@/models/Patient'
import {
  ManageDietsGetters,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'
import {
  PatientsActions,
  PatientsGetters,
  PATIENTS_NAMESPACE,
} from '@/store/patients/types'
import Alert from '@/components/alert/Alert.vue'
import Input from '@/components/form/input/Input.vue'
import Select from '@/components/form/select/Select.vue'
import Button from '@/components/form/button/Button.vue'
import { Diet } from '@/models/Diet'
import { timestamp } from '@/helpers/date/date'
import { CalculatorIntermediate } from '@/models/CalculationHistory'
import {
  PopupMessageActions,
  POPUP_MESSAGE_NAMESPACE,
} from '@/store/popup-message/types'

const DIETS_MAPS = createNamespacedHelpers(MANAGE_DIETS_NAMESPACE)
const PATIENTS_MAPS = createNamespacedHelpers(PATIENTS_NAMESPACE)
const POPUP_MAPS = createNamespacedHelpers(POPUP_MESSAGE_NAMESPACE)

const error = 'Desculpe, poderia tentar novamente mais tarde? 🙌'
const success = 'Salvamos esse cálculo pra você ❤️'

export default defineComponent({
  name: 'Calculator',
  props: {
    id: {
      type: String,
    },
    patient: {
      type: Object as PropType<Patient>,
    },
  },
  components: {
    Alert,
    Input,
    Select,
    Button,
  },
  emits: ['close'],
  setup() {
    const currentBody = ref('')
    const diet = ref({} as Diet)
    const calGoal = ref('')
    const proteinGoal = ref('')
    const volumeReceived = ref('')
    const isLoading = ref(false)
    const errorMessage = ref('')
    const calculatorLoading = () => (isLoading.value = !isLoading.value)
    return {
      currentBody,
      calGoal,
      proteinGoal,
      volumeReceived,
      diet,
      isLoading,
      calculatorLoading,
      errorMessage,
    }
  },
  computed: {
    ...DIETS_MAPS.mapGetters({
      diets: ManageDietsGetters.DIETS,
    }),
    ...PATIENTS_MAPS.mapGetters({
      findPatient: PatientsGetters.FIND_PATIENT,
    }),
  },
  methods: {
    ...POPUP_MAPS.mapActions({
      showMessage: PopupMessageActions.SHOW_MESSAGE,
    }),
    ...PATIENTS_MAPS.mapActions({
      updateHistoryLocally: PatientsActions.UPDATE_HISTORY_LOCALLY,
    }),
    close() {
      this.$emit('close')
    },
    dataHandled() {
      return {
        parenteralResult: null,
        patient: {
          body: Number(this.currentBody),
          currentBody: Number(this.currentBody),
          calGoal: Number(this.calGoal),
          proteinGoal: Number(this.proteinGoal),
          volumeReceived: Number(this.volumeReceived),
        },
        diet: {
          ...this.diet,
          cal: Number(this.diet.calAmount),
          calAmount: Number(this.diet.calAmount),
          protein: Number(this.diet.proteinAmount),
          proteinAmount: Number(this.diet.proteinAmount),
        },
        createdAt: timestamp(),
      }
    },
    async calculate() {
      this.calculatorLoading()
      const data: CalculatorIntermediate = this.dataHandled()

      data.parenteralResult = parenteral(data)
      delete data.patient.body
      delete data.diet.cal
      delete data.diet.protein

      if (!this.id) return this.calculatorLoading()

      const response = await postCalculationHistory({
        historyId: this.id,
        data,
      })

      this.errorMessage = !response.error ? '' : error

      this.calculatorLoading()

      if (this.errorMessage) return
      this.updateHistoryLocally({
        historyId: this.id,
        history: data,
      })
      this.showMessage({ message: success, time: 2000, mode: 'success' })
      this.close()
    },
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';

.calculator {
  z-index: var(--zindex-100);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.btn-cancel {
  position: absolute;
  right: calc(var(--space-sm) * -1);
  padding: 0;
}

.info {
  align-self: flex-start;
  margin-bottom: var(--space-sm);
}

.btn-calculate {
  margin-top: var(--space-sm);
}

.calculator-input {
  width: 100%;
  max-width: 300px;
  margin-bottom: var(--space-sm);

  @media screen and (min-width: $screen-sm) {
    width: 300px;
  }
}
</style>
