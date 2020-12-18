<template>
  <Paper class="patient">
    <div class="identifier">
      <i class="nutris-emo-coffee" aria-label="emoji sorrindo"></i>
      <h2 title="Identificação anonima deste paciente">
        {{ patient.anonymousIdentifier }}
      </h2>
    </div>
    <div class="info">
      <div>
        <div class="data">
          <p>
            {{ `${patient.currentBody}kg` }}
          </p>
          <hr class="divider" />
          <p class="born-age">
            {{ `${formatDate(patient.born)}` }}
            <span>{{ `(${getAge(patient.born)} anos)` }}</span>
          </p>
          <hr class="divider" />
          <i
            :class="patient.gender === 'M' ? 'nutris-male' : 'nutris-female'"
            :aria-label="
              patient.gender === 'M' ? 'Sexo masculino' : 'Sexo feminino'
            "
            :title="patient.gender === 'M' ? 'Sexo masculino' : 'Sexo feminino'"
          ></i>
        </div>
      </div>
      <Button
        @click="
          $router.push({
            name: Names.patientsHistory,
            params: { id: patient.id },
          })
        "
        color="primary"
        title="Veja mais detalhes sobre o paciente"
        >Detalhes</Button
      >
      <p class="last-updated">
        {{ `Último registro: ${formatDate(patient.lastUpdated)}` }}
      </p>
    </div>
  </Paper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
// import { createNamespacedHelpers } from 'vuex'

import Button from '@/components/form/button/Button.vue'
import Paper from '@/components/paper/Paper.vue'
import { Names } from '@/router/default/enums'
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
    return { formatDate, getAge, Names }
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';

.patient {
  display: flex;
  max-width: 350px;
  justify-content: space-around;
  flex-direction: column;
  padding: var(--space-xs);
  width: 100%;

  @media screen and (min-width: $screen-sm) {
    max-width: 310px;
  }
}

.identifier {
  display: flex;
  gap: var(--space-sm);
}

.info {
  display: flex;
  gap: var(--space-sm);
  align-items: baseline;
  position: relative;
  justify-content: space-around;
}

h2 {
  font: var(--typography-subheader-font);
  margin-bottom: var(--space-xs);
}

.data {
  display: flex;
  align-items: baseline;
  margin-bottom: var(--space-sm);
  width: min-content;
}

.last-updated {
  font: var(--typography-caption-font);
  color: var(--text-color-lighten);
  bottom: 0;
  right: 0;
  position: absolute;
  white-space: nowrap;
}

.divider {
  margin-right: var(--space-xs);
  margin-left: var(--space-xs);
  border: 1px solid var(--gray-2);
  height: 12px;
}

.born-age {
  line-height: var(--space-sm);

  span {
    font: var(--typography-caption-font);
    color: var(--text-color-lighten);
    white-space: nowrap;
  }
}

.nutris {
  &-emo-coffee {
    margin-left: calc(-1 * var(--space-xs));
  }

  &-male,
  &-female {
    font-size: 14px;
    &::before {
      margin: 0;
    }
  }
}
</style>
