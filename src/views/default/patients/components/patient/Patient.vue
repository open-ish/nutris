<template>
  <Paper class="patient">
    <i class="nutris-emo-coffee" aria-label="emoji sorrindo"></i>
    <div class="tete">
      <h2>{{ patient.anonymousIdentifier }}</h2>
      <div class="data">
        {{ `${patient.currentBody}kg` }}
        <hr class="divider" />
        {{ `${getAge(patient.born)} anos` }}
        <hr class="divider" />
        {{ patient.gender }}
      </div>
      <p class="last-updated">
        {{ `Último registro: ${formatDate(patient.lastUpdated)}` }}
      </p>
    </div>
    <Button color="primary">teste</Button>
  </Paper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
// import { createNamespacedHelpers } from 'vuex'

import Button from '@/components/form/button/Button.vue'
import Paper from '@/components/paper/Paper.vue'
import { Patient } from '@/models/Patient'
import { formatDate, getAge } from '@/helpers/date/date'

// const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'Patient',
  components: {
    Button,
    Paper,
  },
  props: {
    patient: {
      type: Object as PropType<Patient>,
    },
  },
  setup() {
    return { formatDate, getAge }
  },
})
</script>
<style lang="scss" scoped>
.patient {
  display: flex;
  max-width: 350px;
  gap: var(--space-sm);
  padding: var(--space-xs);
}

h2 {
  font: var(--typography-subheader-font);
  margin-bottom: var(--space-xs);
}

.data {
  display: flex;
  align-items: baseline;
  margin-bottom: var(--space-sm);
}

.last-updated {
  font: var(--typography-caption-font);
  color: var(--text-color-lighten);

  position: absolute;
  bottom: 0;
  white-space: nowrap;
}

.button {
  align-self: center;
}

.divider {
  margin-right: var(--space-xs);
  margin-left: var(--space-xs);
  border: 1px solid var(--gray-2);
  height: 12px;
}

.tete {
  position: relative;
}
</style>
