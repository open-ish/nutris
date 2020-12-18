<template>
  <section class="details g-container g-container-large">
    <div class="identifier">
      <h1>{{ patient.anonymousIdentifier }}</h1>
      <p>
        <span> {{ `${getAge(patient.born)} anos` }}</span>
        <i
          class="gender"
          :class="patient.gender === 'M' ? 'nutris-male' : 'nutris-female'"
          :aria-label="
            patient.gender === 'M' ? 'Sexo masculino' : 'Sexo feminino'
          "
          :title="patient.gender === 'M' ? 'Sexo masculino' : 'Sexo feminino'"
        ></i>
      </p>
    </div>
    <div class="history">
      <div v-if="isLoadingHistory" class="spinner">
        <Spinner color="primary" />
      </div>
      <EmptyState
        class="empty-remove"
        v-else-if="!patient.calculationHistory.length"
        @action="calculateToggle"
      >
        <p>Ainda não há registros para esse paciente.</p>
        <template v-slot:btn>
          Fazer cálculo
        </template>
      </EmptyState>
      <div v-else class="data">
        {{ patient.calculationHistory }}
        <FixedBtn
          @click="calculateToggle"
          mode="insert"
          startIcon="nutris-calc"
          aria-label-icon="Sinal de calculadora"
          aria-label-btn="Fazer novo cálculo"
        />
      </div>
    </div>
    <Modal @click="calculateToggle" v-if="isCalculate">
      <Calculator :id="id" :patient="patient" />
    </Modal>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, defineAsyncComponent, ref } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import EmptyState from '@/components/empty-state/EmptyState.vue'
import FixedBtn from '@/components/form/button/FixedBtn.vue'
import Spinner from '@/components/spinner/Spinner.vue'
import { chunkName } from '@/enums/chunkName'
import { getAge } from '@/helpers/date/date'
import { Patient } from '@/models/Patient'
import { getCalculationHistory } from '@/services/calculate.ts'
import { PatientsGetters, PATIENTS_NAMESPACE } from '@/store/patients/types'

const PATIENTS_MAPS = createNamespacedHelpers(PATIENTS_NAMESPACE)
const { calculator, modal } = chunkName

export default defineComponent({
  name: 'History',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    EmptyState,
    Spinner,
    Calculator: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "[request]" */ `../../../../../components/calculator/${calculator}.vue`
      )
    ),
    FixedBtn,
    Modal: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "[request]" */ `../../../../../components//modal/${modal}.vue`
      )
    ),
  },
  setup() {
    const patient = reactive({} as Patient)
    const isCalculate = ref(false)
    const isLoadingHistory = ref(false)
    const calculateToggle = () => (isCalculate.value = !isCalculate.value)
    const historyToggle = () =>
      (isLoadingHistory.value = !isLoadingHistory.value)

    return {
      getAge,
      patient,
      isCalculate,
      calculateToggle,
      isLoadingHistory,
      historyToggle,
    }
  },
  computed: {
    ...PATIENTS_MAPS.mapGetters({
      findPatient: PatientsGetters.FIND_PATIENT,
    }),
  },
  async created() {
    this.patient = this.findPatient(this.id)
    this.historyToggle()
    const response = await getCalculationHistory({
      historyId: this.id,
    })
    this.historyToggle()

    if (!response) return

    this.patient.calculationHistory = response
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';

.identifier {
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--gray-2);
  .gender {
    margin-left: var(--space-xs);
  }
}

.history {
  margin-top: var(--space-sm);
}

.spinner {
  margin: var(--space-xlg) auto;
  width: min-content;
}
</style>
