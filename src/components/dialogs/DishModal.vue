<template>

  <q-card name="dishInfo" class="bg-grey-2">

    <q-bar name="dishInfoHeader" class="bg-white q-py-lg" style="margin-left: -10px;">
      <q-btn class="text-red-5" size="lg" dense flat icon="las la-angle-left" v-close-popup/>
      <div name="dishInfoDiv" class="text-red-5 app-font-medium" style="font-size: 1.2em;">INFORMAÇÕES</div>
    </q-bar>

    <q-img :src="dish.itemImage" :ratio="16/9" basic/>

    <q-card-section>
      <div class="text-h5 app-font-medium text-red-5">{{ dish.itemName }}</div>
      <div name="dishInfoDiv" class="text-caption app-font text-grey-7 q-mt-sm">{{ dish.itemDescription }}</div>
    </q-card-section>

    <q-separator inset spaced />

    <q-card-section class="row">
      <q-icon size="sm" name="las la-leaf" class="on-left text-red-5 col-auto" />
      <div name="dishInfoDiv" class="app-font-medium text-grey-7 flex flex-center col-auto">Vegetariano:</div>
      <q-icon size="sm" name="las la-check" class="on-right text-green col-auto" />
    </q-card-section>

    <q-card-section class="row">
      <q-icon size="sm" name="las la-seedling" class="on-left text-red-5 col-auto" />
      <div name="dishInfoDiv" class="app-font-medium text-grey-7 flex flex-center col-auto">Vegano:</div>
      <q-icon size="sm" name="las la-times" class="on-right text-red col-auto" />
    </q-card-section>

    <q-card-section>
      <div class="row">
        <q-icon size="sm" name="las la-clipboard-list" class="on-left text-red-5 col-auto" />
        <div name="dishInfoDiv" class="app-font-medium text-grey-7 flex flex-center col-auto">Contém:</div>
      </div>
      <q-list dense class="list-items">
        <q-item v-for="(have, index) in dish.itemHave" :key=index>
          <q-item-section name="dishInfoDiv" class="text-caption app-font text-grey-7 q-ml-xl">
            <q-item-label>{{have}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-separator inset spaced />

    <q-card-section>
      <div name="dishInfoDiv" class="app-font-medium text-grey-7">Avaliação média dos usuários:</div>
      <q-rating
        style="margin-left: -5px;"
        @click.prevent
        v-model="rating"
        readonly
        :max="5"
        size="2.3em"
        color="red-5"
        :icon="icons" />
        <div class="text-caption text-grey-7">
          Total de avaliações: {{totalRating}}
        </div>
    </q-card-section>
  </q-card>

</template>

<script>
  export default {
    name: 'PageIndex',

    props: ["dish", "totalRating", "ratingAvg"],

    data() {
      return {
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

    mounted () {
      this.rating = this.ratingAvg
    }
  }

</script>
