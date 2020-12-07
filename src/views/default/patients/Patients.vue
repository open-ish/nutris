<template>
  <EmptyState
    v-if="!patients.length"
    @action="$router.push({ name: Names.patientsNew })"
  >
    <h1>Meus Pacientes</h1>
    <template v-slot:btn>
      Cadastrar primeiro paciente
    </template>
  </EmptyState>
  <section v-else class="g-container g-container-large">
    <h1>Meus Pacientes</h1>
    <div class="patients">
      <Patient
        v-for="patient in patients"
        :key="patient.id"
        :patient="patient"
      />
    </div>

    <!-- fixed  -->
    <FixedBtn
      mode="insert"
      startIcon="nutris-plus"
      aria-label-icon="Sinal de mais"
      aria-label-btn="Cadastrar novo paciente"
      @click="$router.push({ name: Names.patientsNew })"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import EmptyState from '@/components/empty-state/EmptyState.vue'
import FixedBtn from '@/components/form/button/FixedBtn.vue'
import Patient from './components/patient/Patient.vue'
import { Names } from '@/router/default/enums'
import { PatientsGetters, PATIENTS_NAMESPACE } from '@/store/patients/types'

const PATIENTS_MAPS = createNamespacedHelpers(PATIENTS_NAMESPACE)

export default defineComponent({
  name: 'Patients',
  components: {
    EmptyState,
    FixedBtn,
    Patient,
  },
  setup() {
    return { Names }
  },
  computed: {
    ...PATIENTS_MAPS.mapGetters({
      patients: PatientsGetters.PATIENTS,
    }),
  },
})
</script>
<style lang="scss" scoped>
.patients {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: var(--space-xs);
}
</style>
