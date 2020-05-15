<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<style>

</style>

<script >

import { mapActions } from 'vuex'

export default {
  name: 'App',

  methods: {
    ...mapActions('auth', ['handleAuthLoggedStateChange'])
  },

  mounted () {
    this.handleAuthLoggedStateChange()
  }
}
</script>
