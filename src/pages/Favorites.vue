<template>
  <q-page padding class="bg-grey-2">
    <div style="margin-top: -10px">
      <div class="section-title flex flex-left q-py-sm q-my-md row">
        <q-icon
          name="lar la-heart"
          size="lg"
          color="red-5"
          class="ribbon-icon on-left"
        />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">
          FAVORITOS
        </div>
      </div>
      
      <transition-group
        appear
        enter-active-class="animated bounceIn"
        leave-active-class="animated zoomOutRight"
      >
        <div class="q-mb-md" v-for="item in userFavorites.slice().reverse()" :key="item.dishID">
          <menu-item :item="item"/>
        </div>
      </transition-group>

      <div v-if="!userFavorites.length" class="text-center absolute-center">
        <div class="animated zoomIn slow delay-2s">
          <q-img src="statics/icons/nofavorites.svg" style="width: 15vh;" />
          <div class="app-font-medium text-center text-grey-7 q-mt-md">
            Você não possui favoritos!
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
.section-title {
  font-size: 1.5em;
  border-bottom: solid 3px #ef5350;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PageFavorites",

  data() {
    return {};
  },

  components: {
    "menu-item": require("components/menu/MenuItem.vue").default
  },

  computed: {
    ...mapGetters("dish", ["userFavorites"])
  },
  mounted() {
    console.log("userFavorites", this.userFavorites);
  }
};
</script>
