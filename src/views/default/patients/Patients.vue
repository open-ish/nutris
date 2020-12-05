<template>
  <EmptyState
    v-if="!patients.length"
    @action="$router.push({ path: Paths.patients + '/new' })"
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
      @click="$router.push({ path: Paths.patients + '/new' })"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespacedHelpers } from 'vuex'

// import Input from '@/components/form/input/Input.vue'
import EmptyState from '@/components/empty-state/EmptyState.vue'
import FixedBtn from '@/components/form/button/FixedBtn.vue'
import Patient from './components/patient/Patient.vue'
import { Paths, Names } from '@/router/default/enums'
import { PatientsGetters, PATIENTS_NAMESPACE } from '@/store/patients/types'

const PATIENTS_MAPS = createNamespacedHelpers(PATIENTS_NAMESPACE)

export default defineComponent({
  name: 'Patients',
  components: {
    // Input,
    EmptyState,
    FixedBtn,
    Patient,
  },
  setup() {
    return { Paths, Names }
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
