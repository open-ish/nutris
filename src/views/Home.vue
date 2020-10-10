<template>
  <!-- <Modal @click="teste"> -->
  <h2>Home page</h2>
  <!-- </Modal> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Modal from '@/components/modal/Modal.vue'

@Options({
  components: {
    Modal,
  },
})
export default class Input extends Vue {
  teste() {
    console.log('ss')
  }
}
</script>
