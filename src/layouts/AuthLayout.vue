<template>
  
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>

</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      
    }
  }
}
</script>

<style>
  .app-name{
    font-size: 2em;
  }
</style>
