<template>
  <q-page padding class="bg-grey-2">
    <div style="margin-top: -10px">
    <div class="section-title flex flex-left q-py-sm q-my-md row">
      <q-icon name="las la-tools" size="lg" color="red-5" class="ribbon-icon on-left" />
      <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">CONFIGURAÇÕES</div>
    </div>
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
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      darkMode: false
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
