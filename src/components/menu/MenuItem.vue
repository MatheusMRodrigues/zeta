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
            <div class="app-font text-caption text-white">
              Avalie o prato:
            </div>
            <q-rating
              style="margin-left: -5px;"
              @click.stop = "rateDish"
              v-model="ratingUser"
              :max="5"
              size="2.3em"
              color="white"
              :icon="icons"
            />
          </div>
          <div class="col-auto row no-ripple">
            <q-btn
              @click.stop="() => {checkFavorite(dish.dishID); checkFavorites();}"
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
      <dish-info :dish = this.dish :totalRating = this.totalRating :ratingAvg = this.ratingAvg />
    </q-dialog>
  </div>
</template>

<style>
  .my-delay{
    animation-delay: 0.1s;
  }
</style>

<script>
import { mapActions } from "vuex"
import { mapGetters } from "vuex"
import { LocalStorage } from "quasar"
import { db } from "boot/firebase"

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
      ratingUser: 0,
      ratingAvg: null,
      totalRating: null,
      rating: {},
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
    docID : {
      type: String,
      default: null,
      required: true,
    },
    items : {
      default: null,
      required: true,
    },
    type : {
      type: String,
      default: null,
      required: true,
    },
    function : {
      type: Function,
      default: null,
      required: false,
    }
  },
  

  mounted() {
    this.dish = this.dishFinder(this.item.dishID)
    this.checkFavorites()
    for (let rating in this.item.userRating) {
      if (this.item.userRating[rating].userID === LocalStorage.getItem('loggedUserID')) this.ratingUser = this.item.userRating[rating].rating
      this.ratingAvg += this.item.userRating[rating].rating
    }
    this.totalRating = Object.keys(this.item.userRating).length;
    this.ratingAvg = this.ratingAvg / Object.keys(this.item.userRating).length;
  },

  computed: {

    ...mapGetters("dish", [
        "dishes", "dishFinder", 
        "userFavoritesIDs"
      ]
    )
  },

  watch: {

  },

  methods: {
    ...mapActions("dish", ["checkFavorite", "updateFavorites"]),

    rateDish () {

      this.rating = {userID: LocalStorage.getItem('loggedUserID'), rating: this.ratingUser}

      const itemsOriginal = JSON.stringify(this.item)

      for (var rating in this.item.userRating) {
        if (rating === this.rating.userID) this.item.userRating[rating] = this.rating
      }
      if (itemsOriginal === JSON.stringify(this.item)) this.item.userRating[this.rating.userID] = this.rating
      
      db.collection('menu').doc(this.type+'s').collection(this.type).doc(this.docID).update({
        items: this.items
      })
      .then(response => {
        this.function()
        console.log('foi')
      })
      .catch(error => {
        console.log(error)
      })


    },

    checkFavorites(){
      if (this.userFavoritesIDs.includes(this.item.dishID)){
        this.userFavorite = 'las la-heart'
        this.heartBeat = 'animated heartBeat my-delay'
      }
      else{
        this.userFavorite = 'lar la-heart'
        this.heartBeat = 'none'
      }
    },
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
