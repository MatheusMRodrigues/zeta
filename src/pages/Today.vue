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
        
        <div v-for="breakfast in breakfastToday" :key="breakfast.breakfastID">
          <transition-group
            appear
            enter-active-class="animated bounceIn"
            leave-active-class="animated hinge">
            <div class="q-mb-md" v-for="(item, itemKey) in breakfast.items" :key="item.itemID">
              <menu-item :item="item" :itemKey="itemKey" :type="'breakfast'" :docID="breakfast.breakfastID" :items="breakfast.items" :key="update" :function="updateComponent"/>
            </div>
          </transition-group>
        </div>

      <div v-if="!breakfastToday.length" class="text-center q-mt-xl animated zoomIn">
        <q-img src="statics/icons/sadface.svg" style="width: 10vh;" />
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
            <menu-item :item="item" :itemKey="itemKey" :type="'lunch'" :docID="lunch.lunchID" :items="lunch.items"/>
          </div>
        </transition-group>
      </div>

      <div v-if="!lunchToday.length" class="text-center q-mt-xl animated zoomIn">
        <q-img src="statics/icons/sadface.svg" style="width: 10vh;" />
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
            <menu-item :item="item" :itemKey="itemKey" :type="'dinner'" :docID="dinner.dinnerID" :items="dinner.items"/>
          </div>
        </transition-group>
      </div>

      <div v-if="!dinnerToday.length" class="text-center q-mt-xl q-mb-lg animated zoomIn">
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
  import { db } from 'boot/firebase'

  export default {
    name: "PageToday",

    components: {
      "menu-item": require("components/menu/MenuItem.vue").default,
    },

    data() {
      return {
        isLoading: false,
        refreshColor: null,
        update: 0,
        isOnline: navigator.onLine,
        tabs: "today",
        rating: 0
      };
    },

    computed: {
      ...mapGetters("dish", ["breakfastToday", "lunchToday", "dinnerToday"])
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

      updateComponent () {
        this.update += 1
      },

      updateConnectionStatus() {
        this.isOnline = navigator.onLine; // this method
      },
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

</style>
