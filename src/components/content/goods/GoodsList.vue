<template>
  <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  name: "GoodsList",
  data() {
    return {};
  },
  props: {
      goods: {
          type: Array,
          default() {
              return [];
          }
      }
  },
  methods: {},
  components: {
      GoodsListItem
  },
};
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>
