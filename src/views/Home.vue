<template>
  <!-- <Modal @click="teste"> -->
  <h2>Home page</h2>
  <!-- </Modal> -->
  <!-- <Button>teste</Button> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Modal from '@/components/modal/Modal.vue'
// import Button from '@/components/button/Button.vue'

@Options({
  components: {
    Modal,
    // Button,
  },
})
export default class Input extends Vue {
  teste() {
    console.log('ss')
  }
}
</script>
