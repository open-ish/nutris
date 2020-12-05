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
      <EmptyState
        v-if="!patient.calculationHistory.length"
        @action="$router.push({ name: Names.patientsNew })"
      >
        <p>Ainda não há registros para esse paciente.</p>
        <template v-slot:btn>
          Fazer cálculo
        </template>
      </EmptyState>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { createNamespacedHelpers } from 'vuex'

// import Input from '@/components/form/input/Input.vue'

import EmptyState from '@/components/empty-state/EmptyState.vue'
import { getAge } from '@/helpers/date/date'
import { Patient } from '@/models/Patient'
import { PatientsGetters, PATIENTS_NAMESPACE } from '@/store/patients/types'

const PATIENTS_MAPS = createNamespacedHelpers(PATIENTS_NAMESPACE)

export default defineComponent({
  name: 'patientDetail',
  props: {
    id: {
      type: String,
    },
  },
  components: {
    EmptyState,
  },
  setup() {
    const patient = reactive({} as Patient)
    return { getAge, patient }
  },
  computed: {
    ...PATIENTS_MAPS.mapGetters({
      findPatient: PatientsGetters.FIND_PATIENT,
    }),
  },
  created() {
    this.patient = this.findPatient(this.id)
  },
  // setup() {
  //   return {  }
  // },
})
</script>
<style lang="scss" scoped>
.identifier {
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--gray-2);
  .gender {
    margin-left: var(--space-xs);
  }
}
</style>
