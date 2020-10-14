<template>
  <div
    class="custom-select g-cursor"
    :class="{ active: isOpen, 'has-label': label }"
    @click="toggle"
  >
    <span v-if="isOpen" class="click-outside" />
    <label v-if="label" class="label">
      {{ label }}
    </label>
    {{ value || placeHolder }}
    <div class="items" :class="isOpen ? 'is-active' : ''">
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
  height: 0;
  transform: scaleY(0);
  transform-origin: top left;
  opacity: 0;
  transition: transform var(--transition-duration-speed);

  &.is-active {
    height: auto;
    opacity: 1;
    transform: scaleX(1);
  }
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

.click-outside {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
