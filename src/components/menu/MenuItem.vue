<template>
  <div>
    <q-card @click="dialog = true" class="my-card app-font">
      <q-img :src="dish.itemImage" :ratio="16 / 9" basic>
        <div class="absolute-bottom img-caption">
          <div>
            <div class="text-h6 app-font-medium">
              {{ dish.itemName }}
            </div>
            <div class="text-caption">{{ dish.itemType }}</div>
          </div>
        </div>
      </q-img>

      <q-card-section class="card-section q-py-none bg-red-5">
        <div class="row no-wrap items-center rating-section">
          <div class="col">
            <q-rating
              style="margin-left: -5px;"
              @click.stop
              v-model="rating"
              :max="5"
              size="2.3em"
              color="white"
              :icon="icons"
            />
            <div class="text-caption text-white rating-counter">
              Total de avaliações: 23
            </div>
          </div>
          <div class="col-auto row no-ripple">
            <q-btn
              @click.stop=""
              :ripple="false"
              flat
              dense
              round
              size="xl"
              color="white"
              icon="lar la-heart"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-dialog
      v-model="dialog"
      :maximized="true"
      transition-show="scale"
      transition-hide="scale"
    >
      <dish-info :dish = this.dish />
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "MenuItem",

  props: ["item", "itemKey"],

  components: {
    "dish-info": require("components/dialogs/DishModal.vue").default
  },

  data() {
    return {
      dialog: false,
      dish: {},
      rating: 0,
      icons: [
        "sentiment_very_dissatisfied",
        "sentiment_dissatisfied",
        "sentiment_neutral",
        "sentiment_satisfied",
        "sentiment_very_satisfied"
      ]
    };
  },

  mounted() {
    this.dish = this.dishFinder(this.item.dishID);
  },
  computed: {
    ...mapGetters("dish", ["dishes", "dishFinder"])
  },

  methods: {
    ...mapActions("dishes", ["makeFavorite"])
  }
};
</script>

<style>
.img-caption {
  padding-left: 16px !important;
  padding-right: 16px !important;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}
</style>
