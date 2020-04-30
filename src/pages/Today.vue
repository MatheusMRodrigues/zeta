<template>

  <q-page class="bg-grey-2">

    <div style="margin-top: -10px">

      <div class="section-title flex flex-left q-py-sm q-my-md row">
        <q-icon name="img:statics/icons/breakfast.svg" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">CAFÉ DA MANHÃ</div>
      </div>

      <div v-for="(breakfast, key) in breakfastToday" :key="key">
        <div v-for="(item, itemKey) in breakfast.items" :key="itemKey">
          <menu-item :item="item" :itemKey="itemKey" class="q-mb-md" />
        </div>
      </div>

      <div class="flex flex-left q-py-sm q-my-md row" style="font-size: 1.5em; border-bottom: solid 3px #ef5350">
        <q-icon name="img:statics/icons/lunch.svg" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">ALMOÇO</div>
      </div>

      <div v-for="(lunch, key) in lunchToday" :key="key">
        <div v-for="(item, itemKey) in lunch.items" :key="itemKey">
          <menu-item :item="item" :itemKey="itemKey" class="q-mb-md" />
        </div>
      </div>

      <div class="flex flex-left q-py-sm q-my-md row" style="font-size: 1.5em; border-bottom: solid 3px #ef5350">
        <q-icon name="img:statics/icons/dinner.svg" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">JANTAR</div>
      </div>

      <div v-for="(dinner, key) in dinnerToday" :key="key">
        <div v-for="(item, itemKey) in dinner.items" :key="itemKey">
          <menu-item :item="item" :itemKey="itemKey" class="q-mb-md" />
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
  import {
    mapGetters
  } from "vuex";

  export default {
    name: "PageToday",

    data() {
      return {
        tabs: "today",
        rating: 0
      };
    },

    components: {
      "menu-item": require("components/cards/menu/MenuItem.vue").default
    },

    computed: {
      ...mapGetters("dish", ["breakfastToday", "lunchToday", "dinnerToday"])
    }
  };

</script>

<style>
  .section-title {
    font-size: 1.5em;
    border-bottom: solid 3px #ef5350;
  }

</style>
