<template>
  <q-page padding class="bg-grey-2">

    <router-view/>

    <q-footer>
      <q-tabs
        name="dateTab"
        v-model="tabs"
        dense
        align="justify"
        indicator-color="#ef5350"
        class="bg-white text-red-5 shadow-up-5"
        :breakpoint="0">
        <q-route-tab to="/menu/today" name="today" label="HOJE" icon="las la-calendar-check" />
        <q-route-tab to="/menu/tomorrow" name="tomorrow" label="AMANHÃ" icon="las la-clock" />
      </q-tabs>
    </q-footer>

  </q-page>
</template>

<script>
export default {
  name: 'PageMenu',

  data () {
    return{
      tabs: 'today',
      rating: 0
    }
  }

}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

</style>
