<template>

  <q-page padding class="bg-grey-2">

    <div style="margin-top: -10px">

      <q-pull-to-refresh :bg-color="refreshColor" @refresh="refresh">

        <div v-if="!isOnline" class="flex flex-center q-mt-lg" style="height: 78vh;">
          <div>
            <div class="text-center"><q-icon name="img:statics/icons/cryingface.svg" size="5rem"/></div>
            <div class="app-font-medium text-grey-7 q-mt-md no-item">Internet... cadê você?</div>
          </div>
        </div>

      <div v-if="!isLoading && isOnline">

      <div class="section-title flex flex-left q-py-sm q-my-md row">
        <q-icon name="img:statics/icons/breakfast.svg" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">CAFÉ DA MANHÃ</div>
      </div>

      <div v-for="breakfast in breakfastTomorrow" :key="breakfast.breakfastID">
        <transition-group
          appear
          enter-active-class="animated bounceIn"
          leave-active-class="animated hinge"
        >
          <div class="q-mb-md" v-for="(item, itemKey) in breakfast.items" :key="item.itemID">
            <menu-item :item="item" :itemKey="itemKey" />
          </div>
        </transition-group>
      </div>

      <div v-if="!breakfastTomorrow.length" class="text-center q-mt-xl animated zoomIn">
        <q-img src="statics/icons/sadface.svg" style="width: 10vh;" />
        <div class="app-font-medium text-grey-7 q-mt-md no-item">
          Nada aqui!
        </div>
      </div>

      <div class="flex flex-left q-py-sm q-my-md row" style="font-size: 1.5em; border-bottom: solid 3px #ef5350">
        <q-icon name="img:statics/icons/lunch.svg" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">ALMOÇO</div>
      </div>

      <div v-for="lunch in lunchTomorrow" :key="lunch.breakfastID">
        <transition-group
          appear
          enter-active-class="animated bounceIn"
          leave-active-class="animated hinge"
        >
          <div class="q-mb-md" v-for="(item, itemKey) in lunch.items" :key="item.itemID">
            <menu-item :item="item" :itemKey="itemKey" />
          </div>
        </transition-group>
      </div>

      <div v-if="!lunchTomorrow.length" class="text-center q-mt-xl animated zoomIn">
        <q-img src="statics/icons/sadface.svg" style="width: 10vh;" />
        <div class="app-font-medium text-grey-7 q-mt-md no-item">
          Nada aqui!
        </div>
      </div>

      <div class="flex flex-left q-py-sm q-my-md row" style="font-size: 1.5em; border-bottom: solid 3px #ef5350">
        <q-icon name="img:statics/icons/dinner.svg" size="lg" class="ribbon-icon on-left" />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">JANTAR</div>
      </div>

      <div v-for="dinner in dinnerTomorrow" :key="dinner.breakfastID">
        <div class="q-mb-md" v-for="(item, itemKey) in dinner.items" :key="item.itemID">
          <menu-item :item="item" :itemKey="itemKey" />
        </div>
      </div>

      <div v-if="!dinnerTomorrow.length" class="text-center q-mt-xl q-mb-lg animated zoomIn">
        <q-img src="statics/icons/sadface.svg" style="width: 10vh;" />
        <div class="app-font-medium text-grey-7 q-mt-md no-item">
          Nada aqui!
        </div>
      </div>

      </div>

      </q-pull-to-refresh>

    </div>
  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "PageTomorrow",

    data() {
      return {
        isLoading: false,
        isOnline: navigator.onLine,
        refreshColor: null,
        tabs: "today",
        rating: 0
      };
    },

    components: {
      "menu-item": require("components/menu/MenuItem.vue").default
    },

    computed: {
      ...mapGetters("dish", ["breakfastTomorrow", "lunchTomorrow", "dinnerTomorrow"])
    },

    mounted() {
      if(this.$q.dark.isActive){
        this.refreshColor = 'dark'
      }
      else{
        this.refreshColor = 'white'
      }

      window.addEventListener('online', this.updateConnectionStatus);
      window.addEventListener('offline', this.updateConnectionStatus);
    },

    methods: {
      
      ...mapActions("dish", ["bindDishes", "bindBreakfast", "bindLunch", "bindDinner"]),
            
      async refresh (done){
        this.isLoading = true
        try{
          if (!this.isOnline) {
          }
          await Promise.allSettled([this.bindDishes(), this.bindBreakfast(), this.bindLunch(), this.bindDinner()])
          this.isLoading = false
          done()
        }catch(error){
          // this.isLoading = false
          done()
        }
      
      }
    }
  };

</script>

<style>
  .section-title {
    font-size: 1.5em;
    border-bottom: solid 3px #ef5350;
  }
  .no-item{
    font-size: 1.5em;
  }

</style>
