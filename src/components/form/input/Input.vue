<template>
  <div :class="[`container ${error && 'invalid'}`, $attrs.class]">
    <label v-if="label" :for="label" class="label">
      {{ label }}
    </label>
    <input
      v-bind="inputAttrs"
      class="field"
      :type="type"
      :value="value"
      @input="updateInput($event.target.value)"
    />
    <div v-if="error" class="error nutris-alert">
      {{ error }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

type AttrsInput = {
  id: string
  placeholder: string
}

export default defineComponent({
  emits: ['update:value'],
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      required: true,
      type: String,
    },
  },
  methods: {
    updateInput(newValue: string | number) {
      this.$emit('update:value', newValue)
    },
  },
  computed: {
    inputAttrs(): AttrsInput {
      return {
        id: this.$attrs.id as string,
        placeholder: this.$attrs.placeholder as string,
      }
    },
  },
})
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: column;
}

.label {
  color: var(--gray-4);
  font: var(--typography-caption-font);
  margin-bottom: var(--space-xs);
}

.field {
  appearance: none;
  border: 1px solid var(--gray-2);
  border-radius: var(--border-radius-lighten);
  color: var(--text-color);
  font: var(--typography-body-font);
  outline: 0;
  padding: var(--space-xs);
  position: relative;
  width: 100%;
  z-index: var(--zindex-1);

  &:disabled,
  &[disabled] {
    background: var(--gray-1);

    &,
    &::placeholder {
      color: var(--disabled-color);
    }
  }

  @at-root .container.invalid #{&} {
    outline: 1px auto var(--danger-color);
  }

  &:focus {
    border-color: var(--secondary-color-lighten);
  }

  &::placeholder {
    color: var(--gray-3);
    font-style: italic;
  }
}

.error {
  color: var(--danger-color);
  display: inherit;
  font: var(--typography-caption-font);
  margin-top: var(--space-xxs);
}
</style>
