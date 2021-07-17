<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{ shop.sells | sellCountFilter }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'score-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.shop-info {
  padding: 15px 8px 15px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top{
    line-height: 45px;
    display: flex;
    align-items: center;
}
.shop-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1);
}
.shop-top .title{
    margin-left: 10px;
    vertical-align: middle;
}
.shop-middle{
    margin-top: 15px;
    display: flex;
    align-items: center;
}
.shop-middle-item{
    flex: 1;
}
.shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .1);
}
.sells-count, .goods-count{
    font-size: 1.2rem;
}
.sells-text, .goods-text{
    margin-top: 10px;
    font-size: .8rem;
}
.shop-middle-right{
    color: #333;
    font-size: .8rem;
}
.shop-middle-right table{
    width: 120px;
    margin-left: 30px;
}
.shop-middle-right table td{
    padding: 5px 0;
}
.shop-middle-right .score{
    color: #5ea732;
}
.shop-middle-right .score-better{
    color: #f13e3a;
}
.shop-middle-right .better span{
    background: #5ea732;
    color: #fff;
    text-align: center;
}
.shop-middle-right .score-more span{
    background: #f13e3a;
}
.shop-bottom{
    text-align: center;
}
.enter-shop{
    width: 50%;
    margin: 20px auto;
    padding: 5px 0;
    background: #eee;
    font-size: .9rem;
    border-radius: 10px;
}
</style>
