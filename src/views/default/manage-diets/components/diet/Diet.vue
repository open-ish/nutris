<template>
  <Paper class="paper">
    <h2>{{ diet.name }}</h2>
    <Button
      @click="toggleRemoveModal()"
      class="remove"
      variant="text"
      color="danger"
    >
      <i class="nutris-cancel" aria-label="Excluir dieta"></i>
    </Button>
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
    <Button
      color="primary"
      size="small"
      @click="
        $router.push({
          name: Names.manageDietsEdit,
          params: { id: diet.id },
          query: {
            name: diet.name,
            values: [diet.calAmount, diet.proteinAmount],
          },
        })
      "
      >Editar</Button
    >
  </Paper>
  <Modal @click="toggleRemoveModal" v-if="isOpenModal">
    <div class="remove-modal">
      <p>
        Quer realmente apagar a dieta <strong>{{ diet.name }}</strong> 🙁 ?
      </p>
      <Button
        variant="text"
        color="danger"
        @click="removeDiet"
        :isLoading="isLoading"
        >Sim, quero deletar</Button
      >
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { mapGetters, mapActions } from 'vuex'

import Paper from '@/components/paper/Paper.vue'
import Button from '@/components/button/Button.vue'
import Modal from '@/components/modal/Modal.vue'

import { I18nGetters, I18N_NAMESPACE } from '@/store/i18n/types'
import {
  ManageDietsActions,
  ManageDietsGetters,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'
import { Diet } from '@/models/Diet'
import { Names } from '@/router/default/enums'

export default defineComponent({
  name: 'Diet',
  components: {
    Button,
    Paper,
    Modal,
  },
  props: {
    diet: {
      type: Object as PropType<Diet>,
      required: true,
    },
  },
  setup() {
    const isOpenModal = ref(false)
    const isLoading = ref(false)
    const toggleRemoveModal = () => (isOpenModal.value = !isOpenModal.value)
    const toggleLoading = () => (isLoading.value = !isLoading.value)
    return { Names, isOpenModal, toggleRemoveModal, isLoading, toggleLoading }
  },
  computed: {
    ...mapGetters(I18N_NAMESPACE, {
      language: I18nGetters.LANGUAGE,
    }),
    ...mapGetters(MANAGE_DIETS_NAMESPACE, {
      diets: ManageDietsGetters.DIETS,
    }),
  },
  methods: {
    ...mapActions(MANAGE_DIETS_NAMESPACE, {
      deleteDiet: ManageDietsActions.DELETE_DIET,
    }),
    async removeDiet() {
      this.toggleLoading()
      await this.deleteDiet(this.diet.id)

      this.toggleLoading()
    },
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
  position: relative;
  margin-top: var(--space-sm);
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

.remove {
  position: absolute;
  right: 0;
  padding: var(--space-sm) var(--space-xs);
  top: var(--space-xs);
}

.remove-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button {
    margin-top: var(--space-sm);
  }
}
</style>
