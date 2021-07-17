<template>
  <div class="goods-base" v-if="Object.keys(goods).length !== 0">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
      </div>
      <div class="info-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-service">
          <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  data() {
    return {};
  },
  props: {
      goods: {
          type: Object,
          default() {
              return {};
          }
      }
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.goods-base{
    margin: 15px 5px;
}
.info-title{
    font-size: 1rem;
    margin: 5px 0;
    font-weight: 600;
    color: #666;
}
.info-price .n-price{
    color: var(--color-high-text);
    font-size: 1.4rem;
    line-height: 3rem;
}
.info-price .o-price{
    text-decoration:line-through; 
    font-size: 0.8rem;
    margin: 0 5px;
    color: #999;
}
.info-price .discount{
    background: var(--color-high-text);
    color: #fff;
    padding: 1px 5px;
    font-size: 0.7rem;
    border-radius: 10px;
    position: relative;
    top: -7px;
}
.info-other{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
}
.info-other span{
    font-size: .8rem;
    color: #999;
}
.info-service{
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    padding: 20px 0;
    font-weight: 600;
    color: #777;
    border-bottom: 5px solid #eee;
}
.info-service img{
    width: .9rem;
    height: .9rem;
    position: relative;
    top: 2px;
}
</style>
