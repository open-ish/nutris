<template>
  <section class="dg-container dg-container-large new-diet">
    <h1 v-once>
      {{ isEditMode ? `Editar dieta ${name}` : 'Cadastrar nova dieta' }}
    </h1>
    <form @submit.prevent class="new-form">
      <Input autofocus v-model:value="name" label="Nome da nova dieta" />
      <Input
        v-model:value="proteinAmount"
        type="number"
        label="Concentração protéica (em g/mL)"
      />
      <Input
        v-model:value="calAmount"
        type="number"
        label="Concentração protéica (em kcal/ml)"
      />
      <Button
        @click="!isInvalid && save()"
        color="primary"
        :disabled="isInvalid"
        :isLoading="isLoading"
        size="large"
        >Salvar alterações
      </Button>
      <Alert v-if="errorMessage" :error="errorMessage" />
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { createNamespacedHelpers } from 'vuex'

import { Paths, Names } from '@/router/default/enums'
import { querys, params } from '@/helpers/router/index'
import Input from '@/components/input/Input.vue'
import Button from '@/components/button/Button.vue'
import Alert from '@/components/alert/Alert.vue'
import {
  ManageDietsMutations,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'
import { timestamp } from '@/helpers/date/date'

const error = 'Desculpe, poderia tentar novamente mais tarde? 🙌'

const { mapActions } = createNamespacedHelpers(MANAGE_DIETS_NAMESPACE)

export default defineComponent({
  name: 'Form',
  components: {
    Input,
    Button,
    Alert,
  },
  props: {
    id: {
      type: String,
    },
  },
  setup() {
    const router = useRouter()
    const query = querys(router)
    const { id } = params(router)
    const isEditMode = id

    const name = ref(query.name || '')
    const calAmount = ref(query.values?.[0] || '')
    const proteinAmount = ref(query.values?.[1] || '')
    const isLoading = ref(false)
    const errorMessage = ref('')
    const loading = () => {
      isLoading.value = !isLoading.value
    }
    const isInvalid = computed(
      () => !name.value || !proteinAmount.value || !calAmount.value
    )

    return {
      Paths,
      Names,
      name,
      proteinAmount,
      calAmount,
      isInvalid,
      isLoading,
      loading,
      isEditMode,
      errorMessage,
      router,
    }
  },
  methods: {
    ...mapActions({
      postDiet: ManageDietsMutations.POST_DIETS,
      updateDiet: ManageDietsMutations.UPDATE_DIET,
    }),
    async save() {
      this.loading()

      const response = this.isEditMode
        ? await this.updateDiet({
            id: this.isEditMode,
            name: this.name,
            proteinAmount: this.proteinAmount,
            calAmount: this.calAmount,
          })
        : await this.postDiet({
            name: this.name,
            proteinAmount: this.proteinAmount,
            calAmount: this.calAmount,
            date: timestamp(),
          })

      this.errorMessage = !response ? '' : error

      !this.errorMessage && this.router.replace(Paths.manageDiets)
      this.loading()
    },
  },
})
</script>
<style lang="scss" scoped>
.new-diet {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.new-form {
  & > *:not(:last-child) {
    margin-bottom: var(--space);
  }

  .button {
    margin-top: var(--space-sm);
    width: 100%;
  }
}
</style>
