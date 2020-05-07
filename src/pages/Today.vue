<template>

  <q-page class="bg-grey-2">

    <div style="margin-top: -10px">

      <div class="section-title flex flex-left q-py-sm q-my-md row">
        <q-icon name="img:statics/icons/breakfast.svg" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">CAFÉ DA MANHÃ</div>
      </div>

      <div v-for="breakfast in breakfastToday" :key="breakfast.breakfastID">
        <transition-group
          appear
          enter-active-class="animated bounceIn"
          leave-active-class="animated hinge">
          <div class="q-mb-md" v-for="(item, itemKey) in breakfast.items" :key="item.itemID">
            <menu-item :item="item" :itemKey="itemKey"/>
          </div>
        </transition-group>
      </div>

      <div v-if="!breakfastToday.length" class="text-center q-mt-xl animated zoomIn slow delay-2s">
        <q-img src="statics/icons/sadface.svg" style="width: 15vh;" />
        <div class="app-font-medium text-grey-7 q-mt-md no-item">
          Nada aqui!
        </div>
      </div>

      <div class="flex flex-left q-py-sm q-my-md row" style="font-size: 1.5em; border-bottom: solid 3px #ef5350">
        <q-icon name="img:statics/icons/lunch.svg" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">ALMOÇO</div>
      </div>

      <div v-for="lunch in lunchToday" :key="lunch.lunchID">
        <transition-group
          appear
          enter-active-class="animated bounceIn"
          leave-active-class="animated hinge">
          <div class="q-mb-md" v-for="(item, itemKey) in lunch.items" :key="item.itemID">
            <menu-item :item="item" :itemKey="itemKey" />
          </div>
        </transition-group>
      </div>

      <div v-if="!lunchToday.length" class="text-center q-mt-xl animated zoomIn slow delay-2s">
        <q-img src="statics/icons/sadface.svg" style="width: 15vh;" />
        <div class="app-font-medium text-grey-7 q-mt-md no-item">
          Nada aqui!
        </div>
      </div>

      <div class="flex flex-left q-py-sm q-my-md row" style="font-size: 1.5em; border-bottom: solid 3px #ef5350">
        <q-icon name="img:statics/icons/dinner.svg" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">JANTAR</div>
      </div>

      <div v-for="dinner in dinnerToday" :key="dinner.dinnerID">
        <transition-group
          appear
          enter-active-class="animated bounceIn"
          leave-active-class="animated hinge">
          <div class="q-mb-md" v-for="(item, itemKey) in dinner.items" :key="item.itemID">
            <menu-item :item="item" :itemKey="itemKey" />
          </div>
        </transition-group>
      </div>

      <div v-if="!dinnerToday.length" class="text-center q-mt-xl q-mb-lg animated zoomIn slow delay-2s">
        <q-img src="statics/icons/sadface.svg" style="width: 15vh;" />
        <div class="app-font-medium text-grey-7 q-mt-md no-item">
          Nada aqui!
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "PageToday",

    data() {
      return {
        tabs: "today",
        rating: 0
      };
    },

    components: {
      "menu-item": require("components/menu/MenuItem.vue").default
    },

    computed: {
      ...mapGetters("dish", ["breakfastToday", "lunchToday", "dinnerToday"])
    },
    
  };

</script>

<style>
  .section-title {
    font-size: 1.5em;
    border-bottom: solid 3px #ef5350;
  }

</style>
