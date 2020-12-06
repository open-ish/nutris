<template>
  <!-- @click="toggleRemoveModal" v-if="isOpenModal" -->
  <Modal>
    <div class="calculator">
      <div class="info">
        <h3>Calculadora</h3>
        <p>Paciente: NOME</p>
      </div>
      <Select
        class="calculator-input"
        label="Dieta base"
        :options="[{ text: 'um' }, { text: 'dois' }]"
        v-model:value="select"
      />
      <Input
        class="calculator-input"
        v-model:value="input"
        type="number"
        label="Massa corporal/peso atual (em kg)"
      />
      <Input
        class="calculator-input"
        v-model:value="input"
        type="number"
        label="Meta calórica (em kcal/kg)"
      />
      <Input
        class="calculator-input"
        v-model:value="input"
        type="number"
        label="Meta protéica (em gPTN/kg)"
      />
      <Input
        class="calculator-input"
        v-model:value="input"
        type="number"
        label="Volume de dieta recebido (em mL)"
      />
      <Button color="primary"> Calcular </Button>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { createNamespacedHelpers } from 'vuex'

// import { getAge } from '@/helpers/date/date'
import { Patient } from '@/models/Patient'
import { PatientsGetters, PATIENTS_NAMESPACE } from '@/store/patients/types'

import Modal from '@/components/modal/Modal.vue'
import Input from '@/components/form/input/Input.vue'
import Select from '@/components/form/select/Select.vue'
import Button from '@/components/form/button/Button.vue'

const PATIENTS_MAPS = createNamespacedHelpers(PATIENTS_NAMESPACE)

export default defineComponent({
  name: 'Calculator',
  props: {
    id: {
      type: String,
    },
  },
  components: {
    Input,
    Select,
    Button,
    Modal,
  },
  setup() {
    const patient = reactive({} as Patient)
    const select = ref('')
    const input = ref('')
    return { patient, select, input }
  },
  computed: {
    ...PATIENTS_MAPS.mapGetters({
      findPatient: PatientsGetters.FIND_PATIENT,
    }),
  },
  created() {
    // this.patient = this.findPatient(this.id)
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
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
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
