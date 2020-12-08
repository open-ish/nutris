<template>
  <nav class="nav">
    <div v-for="(item, index) in navOptions" :key="index" class=" g-center--y">
      <div
        class="item loading"
        v-if="item.hasOwnProperty('loading') && item.loading"
      >
        <Spinner color="primary" size="22" />
        <p>{{ $t(item.fallback, language) }}</p>
      </div>
      <router-link
        v-else
        class="item g-center--y"
        exact-active-class="active"
        :to="item.path"
      >
        <i :class="item.icon"></i>
        <p>{{ $t(item.i18n, language) }}</p>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import { navMenu } from './navMenu'

import Spinner from '@/components/spinner/Spinner.vue'
import { I18nGetters } from '@/store/i18n/types'
import { PatientsActions, PATIENTS_NAMESPACE } from '@/store/patients/types'
import {
  ManageDietsActions,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'
import storage from '@/helpers/localStorage/localStorage'
import { storageKey } from '@/enums/storageKeys'

const I18N_MAPS = createNamespacedHelpers('i18n')
const PATIENTS_MAPS = createNamespacedHelpers(PATIENTS_NAMESPACE)
const MANAGE_DIETS_MAPS = createNamespacedHelpers(MANAGE_DIETS_NAMESPACE)

export default defineComponent({
  name: 'welcome',
  components: {
    Spinner,
  },
  mounted() {
    !storage.get(storageKey.diets) && this.diets()
  },
  computed: {
    ...I18N_MAPS.mapGetters({
      language: I18nGetters.LANGUAGE,
    }),
  },
  methods: {
    ...PATIENTS_MAPS.mapActions({
      getPatients: PatientsActions.GET_PATIENTS,
    }),
    ...MANAGE_DIETS_MAPS.mapActions({
      getDiets: ManageDietsActions.GET_DIETS,
    }),
    async diets() {
      this.dietsToggle()
      await this.getDiets()
      this.dietsToggle()
    },
    dietsToggle() {
      const dietsIndex = 2
      this.navOptions[dietsIndex].loading = !this.navOptions[dietsIndex].loading
    },
  },
  setup() {
    const loadingDiets = ref(false)
    const isLoadingDiets = () => (loadingDiets.value = !loadingDiets.value)
    const { navOptions } = navMenu()
    return { navOptions, loadingDiets, isLoadingDiets }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/screen.scss';

$nav-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);

.nav {
  background-color: var(--white);
  bottom: 0;
  box-shadow: $nav-shadow;
  display: flex;
  left: 0;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  font: var(--typography-caption-font);
  z-index: var(--zindex-100);

  @media screen and (min-width: $screen-sm) {
    background-color: transparent;
    box-shadow: none;
    justify-content: flex-end;
    margin-left: auto;
    position: initial;
    width: auto;
    z-index: initial;
  }
}
.item {
  padding: var(--space-xs);
  text-align: center;
  flex-grow: 1;

  [class^='nutris-'] {
    font-size: 24px;
  }

  @media screen and (min-width: $screen-sm) {
    flex-grow: initial;
    color: var(--white);
    margin-right: var(--space-xs);

    &:hover:not(.loading) {
      color: var(--primary-color-lighten);
    }
  }

  @media screen and (min-width: $screen-sm) {
    margin-right: var(--space-sm);
  }
}

.active {
  color: var(--primary-color-lighten);
}

.loading {
  opacity: 0.6;
}
</style>
