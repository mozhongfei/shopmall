<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="ImgShow" alt=""  @load="ImgLoaded"/>
    <div class="goods-info">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <span class="collect">{{ goodsitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    itemClick() {
      this.$router.push("/detail/" + this.goodsitem.iid);
    },
    ImgLoaded() {
      if( this.$route.path.indexOf('home') === 1){
        this.$bus.$emit('homeitemImgLoaded')
      }
      else if( this.$route.path.indexOf('details') === 1) {
        this.$bus.$emit('detailImgLoaded')
      }
    },
  },
  computed: {
    ImgShow() {
      //关于组件数据一些不重合的地方可用计算属性
      if (this.goodsitem.img) return this.goodsitem.img
      return this.goodsitem.image || this.goodsitem.show.img 
    },
  },
  components: {},
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 46%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  right: 0;
  left: 0;
  text-align: center;
  overflow: hidden;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
