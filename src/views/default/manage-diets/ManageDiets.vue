<template>
  <EmptyState
    v-if="!diets.length"
    @action="$router.push({ name: Names.manageDietsNew })"
  >
    <h1>{{ $t(manageDietsI18nPath.emptyStateTitle, language) }} 😁</h1>
    <template v-slot:btn>
      {{ $t(manageDietsI18nPath.emptyStateAction, language) }}
    </template>
  </EmptyState>
  <section
    v-else
    data-testid="manage-diets-list"
    class="dg-container dg-container-large manage-diets"
  >
    <h1>Minhas dietas cadastradas</h1>
    <div class="diets">
      <Diet v-for="diet in diets" :key="diet.name" :diet="diet" />
    </div>

    <!-- fixed  -->
    <FixedBtn
      mode="insert"
      startIcon="nutris-plus"
      :aria-label-icon="
        $t(manageDietsI18nPath.ariaLabelAddNewDietIcon, language)
      "
      :aria-label-btn="$t(manageDietsI18nPath.ariaLabelAddNewDietBtn, language)"
      @click="$router.push({ name: Names.manageDietsNew })"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

import EmptyState from '@/components/empty-state/EmptyState.vue'
import FixedBtn from '@/components/button/FixedBtn.vue'
import Diet from '@/views/default/manage-diets/components/diet/Diet.vue'
import { I18nGetters, I18N_NAMESPACE } from '@/store/i18n/types'
import {
  ManageDietsGetters,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'
import { manageDietsI18nPath } from './ManageDiets.i18n'
import { Names } from '@/router/default/enums'

// const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'ManageDiets',
  components: {
    EmptyState,
    FixedBtn,
    Diet,
  },
  setup() {
    return { manageDietsI18nPath, Names }
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
@import '@/layouts/default/Default-class.scss';
@import '@/layouts/default/Default-variables.scss';

.manage-diets {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.diets {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & > * {
    &:not(:last-of-type) {
      margin-bottom: var(--space-sm);
      margin-right: var(--space-xxs);
    }
  }
}
</style>
