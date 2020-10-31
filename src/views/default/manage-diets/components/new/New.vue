<template>
  <section class="dg-container dg-container-large new-diet">
    <h1>Cadastrar nova dieta</h1>
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
        >Salvar 🥳
      </Button>
      <Alert v-if="errorMessage" :error="errorMessage" />
    </form>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { createNamespacedHelpers } from 'vuex'

import Input from '@/components/input/Input.vue'
import Button from '@/components/button/Button.vue'
import Alert from '@/components/alert/Alert.vue'
import {
  ManageDietsMutations,
  MANAGE_DIETS_NAMESPACE,
} from '@/store/manage-diets/types'

const error = 'Desculpe, poderia tentar novamente mais tarde? 🙌'

const { mapActions } = createNamespacedHelpers(MANAGE_DIETS_NAMESPACE)

export default defineComponent({
  name: 'New',
  components: {
    Input,
    Button,
    Alert,
  },
  setup() {
    const name = ref('')
    const proteinAmount = ref('')
    const calAmount = ref('')
    const isLoading = ref(false)
    const errorMessage = ref('')
    const loading = () => {
      isLoading.value = !isLoading.value
    }
    const isInvalid = computed(
      () => !name.value || !proteinAmount.value || !calAmount.value
    )

    return {
      name,
      proteinAmount,
      calAmount,
      isInvalid,
      isLoading,
      loading,
      errorMessage,
    }
  },
  methods: {
    ...mapActions({
      postDiet: ManageDietsMutations.POST_DIETS,
    }),
    async save() {
      this.loading()

      const response = await this.postDiet({
        name: this.name,
        proteinAmount: this.proteinAmount,
        calAmount: this.calAmount,
      })

      this.errorMessage = !response ? '' : error
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
