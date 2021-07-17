<template>
  <div class="detail">
    <detail-nav-bar @itemClick="itemClick" ref="nav"></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @ImageLoaded="ImageLoaded"
      ></detail-goods-info>
      <param-info :paramInfo="paramInfo" ref="params"></param-info>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list
        :goods="recommends"
        class="goods-list"
        ref="recommend"
      ></goods-list>
    </scroll>
    <detail-bottom-bar
      @addCart="addToCart"
      @toCart="toCart"
    ></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import ParamInfo from "./childComps/ParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scorll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { debounce } from "common/utils";
import { backTopMixin } from "common/mixin";

import { Toast } from 'vant'


import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getGoodsRecommend,
} from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getPositionY: {},
      refresh: {},
      currentIndex: 0,
      getCart: {},
    };
  },
  mixins: [backTopMixin],
  mounted() {
    // 通过事件总线监听每一张图片加载完成，刷新scroll动态计算滚动高度,并应用防抖
    const refresh1 = debounce(this.$refs.scroll.fetchData, 500);
    this.$bus.$on("detailImgLoaded", () => {
      refresh1();
    });

    this.refresh = debounce(this.$refs.scroll.fetchData, 500);
  },
  methods: {
    ImageLoaded() {
      //加载完一张图片重新计算滚动区域高度

      this.refresh();
      //加载完成计算点击导航滑动距离
      this.$nextTick(
        this.getPositionY()
      )
    },

    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      const positoinY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positoinY >= this.themeTopYs[i] &&
            positoinY < this.themeTopYs[i + 1]) ||
            (i === length - 1 && positoinY >= this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 显示回到顶部按钮
      this.isShow = Math.abs(position.y) > 1000;
    },
    addToCart() {
      this.getCart()
      Toast("加入购物车成功")
    },
    toCart() {
      this.getCart()
      this.$router.push("/cart");
    },
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    ParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
  created() {
    // 获取iid
    this.iid = this.$route.params.id;
    // 获取详情信息
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      //   获取顶部图片
      this.topImages = res.result.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);
      // 获取商品详情
      this.detailInfo = data.detailInfo;
      // 获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 获取评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 获取推荐信息
    getGoodsRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    });
    // 标题防抖
    this.getPositionY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      // console.log(this.themeTopYs);
    }, 500);

    this.getCart = () => {
      // 1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.oldprice = this.goods.oldPrice;
      product.iid = this.iid;
      //将商品添加到购物车
      //mutations里面不适合做复杂操作，推荐放到action里面
      // this.$store.commit('addCart',product)
      this.$store.dispatch("addCart", product);
    };
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 10;
  background: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
.goods-list {
  margin-top: 15px;
}
</style>
