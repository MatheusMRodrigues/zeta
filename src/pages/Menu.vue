<template>
  <q-page class="bg-grey-2">

    <router-view v-if="!isLoading"/>
    
    <div v-else>
      <q-inner-loading showing>
        <q-spinner size="3em" color="primary" />
      </q-inner-loading>
    </div>

    <q-footer>
      <q-tabs
        name="dateTab"
        v-model="tabs"
        dense
        align="justify"
        indicator-color="#ef5350"
        class="bg-white text-red-5 shadow-up-5"
        :breakpoint="0">
        <q-route-tab to="/today" name="today" label="HOJE" icon="las la-calendar-check" />
        <q-route-tab to="/tomorrow" name="tomorrow" label="AMANHÃ" icon="las la-clock" />
      </q-tabs>
    </q-footer>

  </q-page>
</template>

<script>

import { mapActions } from "vuex";
import { LocalStorage } from "quasar"

export default {
  name: 'PageMenu',

  data () {
    return{
      dialog: null,
      isLoading: true,
      tabs: 'today',
      rating: 0
    }
  },

  mounted (){
   this.loadMenu()
  },

  methods: {
    ...mapActions("auth", ["handleAuthLoggedStateChange"]),
    ...mapActions("dish", ["bindDishes", "bindBreakfast", "bindLunch", "bindDinner"]),

    async loadMenu () {
      
      if(await Promise.allSettled([this.bindDishes(), this.bindBreakfast(), this.bindLunch(), this.bindDinner()])){
        this.isLoading = false
        this.$router.push('/today').catch(err => {})
      }
    }
  }

}
</script>
