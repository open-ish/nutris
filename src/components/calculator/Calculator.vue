<template>
  <div class="calculator">
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
    <Button @click="calculate" color="primary"> Calcular </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { createNamespacedHelpers } from 'vuex'
import { parenteral } from '@open-ish/nutris-roles'

import { postCalculationHistory } from '@/services/calculate.ts'
import { Patient } from '@/models/Patient'
import {
  ManageDietsGetters,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'
import { PatientsGetters, PATIENTS_NAMESPACE } from '@/store/patients/types'
import Input from '@/components/form/input/Input.vue'
import Select from '@/components/form/select/Select.vue'
import Button from '@/components/form/button/Button.vue'
import { Diet } from '@/models/Diet'
import { timestamp } from '@/helpers/date/date'

const DIETS_MAPS = createNamespacedHelpers(MANAGE_DIETS_NAMESPACE)
const PATIENTS_MAPS = createNamespacedHelpers(PATIENTS_NAMESPACE)

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
    Input,
    Select,
    Button,
  },
  setup() {
    const currentBody = ref('')
    const diet = ref({} as Diet)
    const calGoal = ref('')
    const proteinGoal = ref('')
    const volumeReceived = ref('')
    return { currentBody, calGoal, proteinGoal, volumeReceived, diet }
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
    async calculate() {
      const data = {
        patient: {
          currentBody: Number(this.currentBody),
          calGoal: Number(this.calGoal),
          proteinGoal: Number(this.proteinGoal),
          volumeReceived: Number(this.volumeReceived),
        },
        diet: {
          ...this.diet,
          calAmount: Number(this.diet.calAmount),
          proteinAmount: Number(this.diet.proteinAmount),
        },
        createdAt: timestamp(),
      }
      if (!this.id) return
      const response = await postCalculationHistory({
        historyId: this.id,
        data,
      })
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
}

.info {
  align-self: flex-start;
  margin-bottom: var(--space-sm);
}

.button {
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