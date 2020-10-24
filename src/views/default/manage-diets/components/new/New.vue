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
        size="large"
        >Salvar 🥳
      </Button>
    </form>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

import Input from '@/components/input/Input.vue'
import Button from '@/components/button/Button.vue'

export default defineComponent({
  name: 'New',
  components: {
    Input,
    Button,
  },
  setup() {
    const name = ref('')
    const proteinAmount = ref('')
    const calAmount = ref('')
    const save = () => {
      console.log(name.value)
    }
    const isInvalid = computed(
      () => !name.value || !proteinAmount.value || !calAmount.value
    )

    return { name, proteinAmount, calAmount, save, isInvalid }
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
