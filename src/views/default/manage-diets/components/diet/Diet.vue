<template>
  <Paper class="paper">
    <h2>{{ diet.name }}</h2>
    <div class="info">
      <div class="cal">
        <h3>Calorias</h3>
        <p>{{ diet.calAmount }} kcal/mL</p>
      </div>
      <hr class="divider" />
      <div class="protein">
        <h3>Proteínas</h3>
        <p>{{ diet.proteinAmount }} g/mL</p>
      </div>
    </div>
    <Button color="primary" size="small">Editar</Button>
  </Paper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mapGetters } from 'vuex'

import Paper from '@/components/paper/Paper.vue'
import Button from '@/components/button/Button.vue'
import { I18nGetters, I18N_NAMESPACE } from '@/store/i18n/types'
import {
  ManageDietsGetters,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'
import { Diet } from '@/models/Diet'

// const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'Diets',
  components: {
    Button,
    Paper,
  },
  props: {
    diet: {
      type: Object as PropType<Diet>,
      required: true,
    },
  },
  computed: {
    ...mapGetters(I18N_NAMESPACE, {
      language: I18nGetters.LANGUAGE,
    }),
    ...mapGetters(MANAGE_DIETS_NAMESPACE, {
      diets: ManageDietsGetters.DIETS,
    }),
  },
})
</script>
<style lang="scss" scoped>
.paper {
  padding: var(--space-sm);
  height: fit-content;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
}

.info {
  display: flex;
  justify-content: center;
  margin: var(--space-sm) 0 var(--space-xs);
}

.cal,
.protein {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2,
h3 {
  color: var(--black);
}

h2 {
  font: var(--typography-subheader-font);
  text-transform: capitalize;
}

h3 {
  font: var(--typography-body-font);
  margin-bottom: var(--space-xxs);
  color: var(--gray-3);
}

p {
  font: var(--typography-body-font);
}

.divider {
  margin-right: var(--space-sm);
  margin-left: var(--space-sm);
  border-left: 1px solid var(--gray-2);
}

.button {
  margin: auto;
}
</style>
