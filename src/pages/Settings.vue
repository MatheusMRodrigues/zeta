<template>
  <q-page padding>
    <div class=" row">
      <div class="flex flex-center col-auto">
        Modo escuro:
      </div>
      <div class="col-auto">
        <q-toggle
          v-model="darkMode"
          checked-icon="check"
          color="primary"
          unchecked-icon="clear"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      darkMode: true
    }
  },

  watch:{
    darkMode(){
      if (this.darkMode == true){
        this.$q.dark.set(true)
      }else{
        this.$q.dark.set(false)
      }
    }
  }

}
</script>
