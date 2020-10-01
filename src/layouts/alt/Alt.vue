<template>
  <header>
    <router-link :to="Paths.someAlt">SomeAlt</router-link>
    <router-link :to="LayoutsPaths.alt">Alt</router-link> headerAlt
  </header>
  <router-view />
  <footer>footerAlt</footer>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Paths } from '@/router/alt/enums'
import { LayoutsName, LayoutsPaths } from '@/router/enums'

@Options({
  name: 'LAlt',
})
export default class LAlt extends Vue {
  Paths = Paths
  LayoutsPaths = LayoutsPaths
}
</script>
