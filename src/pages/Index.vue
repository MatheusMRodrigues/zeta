<template>
  <q-page padding class="bg-grey-2">

    <div style="margin-top: -10px">

      <div class="dark-text flex flex-left q-my-md q-py-xs row" style="font-size: 1.5em; border-bottom: solid 3px #ef5350">
        <q-icon name="img:statics/icons/breakfast.svg" size="lg" class="ribbon-icon on-left" />
        <div class="q-mt-sm app-font-medium text-grey-7"><p>CAFÉ DA MANHÃ</p></div>
      </div>
      
      <menu-item></menu-item>

      <div class="flex flex-left q-my-md q-py-xs row" style="font-size: 1.5em; border-bottom: solid 3px #ef5350">
        <q-icon name="img:statics/icons/lunch.svg" size="lg"  class="ribbon-icon on-left" />
        <div class="q-mt-sm app-font-medium text-grey-7"><p>ALMOÇO</p></div>
      </div>
      
      <menu-item></menu-item>

      <div class="flex flex-left q-my-md q-py-xs row" style="font-size: 1.5em; border-bottom: solid 3px #ef5350">
        <q-icon name="img:statics/icons/dinner.svg" size="lg"  class="ribbon-icon on-left" />
        <div class="q-mt-sm app-font-medium text-grey-7"><p>JANTAR</p></div>
      </div>
      
      <menu-item></menu-item>

    </div>
    
  </q-page>
  
</template>

<script>
export default {
  name: 'PageIndex',

  data () {
    return{
      tabs: 'today',
      rating: 0
    }
  },

   components: {
      'menu-item': require('components/cards/menu/MenuItem.vue').default,
    },
}
</script>

<style>

</style>
