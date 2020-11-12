<template>
  <EmptyState @action="() => {}">
    <h1>Pacientess</h1>
    <template v-slot:btn>
      teste
    </template>
  </EmptyState>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { createNamespacedHelpers } from 'vuex'

// import Input from '@/components/input/Input.vue'
import EmptyState from '@/components/empty-state/EmptyState.vue'

// const { mapGetters } = createNamespacedHelpers('i18n')

export default defineComponent({
  name: 'Patients',
  components: {
    // Input,
    EmptyState,
  },
  // setup() {
  //   return {  }
  // },
})
</script>
<style lang="scss" scoped>
@import '@/layouts/default/Default-variables.scss';
</style>
