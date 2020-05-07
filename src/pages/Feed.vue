<template>
  <q-page padding class="bg-grey-2">
    <div style="margin-top: -10px">
      <div class="section-title flex flex-left q-py-sm q-my-md row">
        <q-icon
          name="las la-bullhorn"
          size="lg"
          color="red-5"
          class="ribbon-icon on-left"
        />
        <div name="section-title" class="q-mt-sm app-font-medium text-grey-7">
          AVISOS
        </div>
      </div>
      <feed-item/>
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

export default {
  name: "PageFeed",

  components: {
    "feed-item": require("components/menu/FeedItem.vue").default,
  },

  data() {
    return {
    };
  },

};
</script>
