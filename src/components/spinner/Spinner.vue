<template>
  <svg
    :class="['spinner', color]"
    :style="{ height: `${size}px`, width: `${size}px` }"
    role="progressbar"
    aria-busy="true"
    viewBox="0 0 66 66"
  >
    <circle
      :class="['circle']"
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      cx="33"
      cy="33"
      r="30"
    ></circle>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Spinner',
  props: {
    color: {
      default: 'default',
    },
    size: {
      default: 36,
    },
  },
})
</script>

<style lang="scss" scoped>
$rotation: 270;
$dashoffset: 180;
$animation-time: 1s;

.spinner {
  animation: rotation $animation-time linear infinite;
}

.circle {
  animation: turn $animation-time ease-in-out infinite;
  stroke-dasharray: $dashoffset;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-width: 6;
  transform-origin: center;
}

.default {
  stroke: var(--default-color);
}

.default-contrast {
  stroke: var(--default-color-contrast);
}

.primary {
  stroke: var(--primary-color);
}

.primary-contrast {
  stroke: var(--primary-color-contrast);
}

.secondary {
  stroke: var(--secondary-color);
}

.danger {
  stroke: var(--danger-color);
}

.danger-contrast {
  stroke: var(--danger-contrast-color);
}

.secondary-contrast {
  stroke: var(--secondary-color-contrast);
}

@keyframes rotation {
  100% {
    transform: rotate(#{$rotation}deg);
  }
}

@keyframes turn {
  0% {
    stroke-dashoffset: $dashoffset;
  }

  50% {
    stroke-dashoffset: ($dashoffset / 4);
    transform: rotate(#{$rotation / 2}deg);
  }

  100% {
    stroke-dashoffset: $dashoffset;
    transform: rotate(#{$rotation * 1.65}deg);
  }
}
</style>
