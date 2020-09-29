<template>
  <div>
    <i18n-d tag="p" :value="new Date()" format="long" locale="en-US"></i18n-d>
    <i18n-t tag="p" class="name" keypath="message.named"> </i18n-t>
  </div>
</template>

<script lang="ts">
import { Vue, setup } from 'vue-class-component'
import { useI18n } from 'vue-i18n'

export default class I18n extends Vue {
  setup() {
    return useI18n()
  }
}
</script>
