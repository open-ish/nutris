<template>
  <header>
    <router-link :to="Paths.home">Home</router-link> |
    <router-link :to="Paths.about">About</router-link>
    header
  </header>
  <router-view />
  <footer>footer</footer>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Paths } from '@/router/default/enums'

export default class LDefault extends Vue {
  Paths = Paths
}
</script>
