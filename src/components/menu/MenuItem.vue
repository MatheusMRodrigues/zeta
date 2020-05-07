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
              Total de avaliações: {{item.totalRating}}
            </div>
          </div>
          <div class="col-auto row no-ripple">
            <q-btn
              @click.stop="() => {checkFavorite(dish.dishID); checkFavorites()}"
              :ripple="false"
              flat
              dense
              round
              size="xl"
              color="white"
              :class="heartBeat"
              :icon= userFavorite
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

<style>
  .my-delay{
    animation-delay: 0.3s;
  }
</style>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "MenuItem",
  components: {
    "dish-info": require("components/dialogs/DishModal.vue").default
  },
  data() {
    return {
      dialog: false,
      dish: {},
      userFavorite: null,
      heartBeat: null,
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
  props: {
    item : {
      type: Object,
      default: null,
      required: true,
    },
    // typeSchedule: {
    //   type: String,
    //   required: true,
    //   validator: function(value) {
    //     return ["breakfast", "lunch", "dinner"].includes(value.toLowerCase());
    //   }
    // },
    // scheduleID: {
    //   type: [Number, String],
    //   required: true,
    // },
    // // typeID : {
    // //   type: Object,
    // //   default: null,
    // //   required: true,
    // // },
    // itemKey : {
    //   type: String,
    //   default: null,
    //   required: true,
    // }
  },

  mounted() {
    this.dish = this.dishFinder(this.item.dishID);
    this.checkFavorites();
    // // Agora tu da um jeito de pegar o useId  
    // this.rating = this.userRatingSchedule(this.scheduleId, this.itemKey, '0001');
  },

  computed: {
    // isBreakfast(){
    //   return this.typeSchedule === "breakfast";
    // },
    // isLunch(){
    //   return this.typeSchedule === "lunch";
    // },
    // isDinner(){
    //   return this.typeSchedule === "dinner";
    // },
    ...mapGetters("dish", [
        "dishes", "dishFinder", 
        "userFavoritesIDs",
        "userRating",
        "userRatingBreakfast", 
        "userRatingLunch", 
        "userRatingDinner"
      ]
    )
  },

  watch: {
    rating (value) {
      this.rating = value;
      this.item.rating = value;
    }
  },

  methods: {
    ...mapActions("dish", ["checkFavorite"]),

    userRatingSchedule(menuScheduleId, itemId, userRatingId){
      if(this.isBreakfast) {
        return this.userRatingBreakfast(menuScheduleId, itemId, userRatingId);
      }
      if(this.isLunch) {
        return this.userRatingLunch(menuScheduleId, itemId, userRatingId);
      }
      if(this.isDinner) {
        return this.userRatingDinner(menuScheduleId, itemId, userRatingId);
      }
    },
    checkFavorites(){
      if (this.userFavoritesIDs.includes(this.item.dishID)){
        this.userFavorite = 'las la-heart'
        this.heartBeat = 'animated heartBeat slower my-delay'
      }
      else{
        this.userFavorite = 'lar la-heart'
        this.heartBeat = 'none'
      }
    }
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
