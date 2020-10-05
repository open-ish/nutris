<template>
  <div :class="`container ${error && 'invalid'}`">
    <label v-if="label" :for="label" class="label">
      {label}
    </label>
    <input
      v-bind="$attrs"
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
import { Options, Vue } from 'vue-class-component'

@Options({
  emits: ['input', 'update:value'],
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
})
export default class Input extends Vue {
  updateInput(newValue: string | number) {
    this.$emit('update:value', newValue)
  }
}
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
  color: var(--default-color);
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
}

.error {
  color: var(--danger-color);
  display: inherit;
  font: var(--typography-caption-font);
  margin-top: var(--space-xxs);
}
</style>
