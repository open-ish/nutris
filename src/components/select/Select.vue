<template>
  <div
    class="custom-select g-cursor"
    :class="{ active: isOpen, 'has-label': label }"
    @click="toggle"
  >
    <label v-if="label" class="label">
      {{ label }}
    </label>
    {{ value || placeHolder }}
    <div class="items" v-if="isOpen">
      <span
        class="item"
        v-for="(option, index) of options"
        :key="index"
        @click="select(option.text)"
      >
        {{ option.text }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Select',
  emits: ['update:value'],
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    placeHolder: {
      type: String,
      default: 'Selecione',
    },
  },
  setup(props, { emit }) {
    const isOpen = ref(false)
    const toggle = () => (isOpen.value = !isOpen.value)
    const select = (newValue: string) => {
      emit('update:value', newValue)
    }
    return { isOpen, toggle, select }
  },
  // data() {
  //   return {
  //     isOpen: false,
  //   }
  // },
  // methods: {
  //   toggle() {
  //     this.isOpen = !this.isOpen
  //   },
  //   select(newValue: string) {
  //     this.$emit('update:value', newValue)
  //   },
  // },
})
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: column;
}

.custom-select {
  position: relative;
  padding: var(--space-xs);
  background-color: var(--white);
  text-align: left;
  outline: none;
  border: 1px solid var(--gray-2);
  border-radius: var(--border-radius-lighten);

  &.active {
    border-color: transparent;
  }

  &.has-label {
    margin-top: var(--space);
  }
}

.items {
  position: absolute;
  border: 1px solid var(--gray-2);
  border-radius: var(--border-radius-lighten);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  width: 100%;
  left: 0;
  top: 0;
}

.item {
  padding: var(--space-xs);

  &:hover {
    background-color: var(--gray-1);
  }
}

.label {
  position: absolute;
  bottom: 100%;
  left: 0;
}
</style>
