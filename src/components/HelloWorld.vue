<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Button color="primary" size="large">Testeeeee</Button>
    <Button color="primary">Testeeeeeeee</Button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Button from '@/components/button/Button.vue'

@Options({
  props: {
    msg: String,
  },
  components: {
    Button,
  },
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
