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
    ...mapActions('auth', ['handleAuthLoggedStateChange']),
    ...mapActions('dish', ['updateFavorites'])
  },

  mounted () {
   this.handleAuthLoggedStateChange()
   this.updateFavorites()
  }
}
</script>
