<template>
  <div class="home">
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control
      class="tab-control"
      ref="tabControl1"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      v-show="isShow"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <div ref="banref">
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
      </div>
      <tab-control
        ref="tabControl2"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>
    
<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

import homeSwiper from "./childComps/homeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import Scroll from "components/common/scroll/Scorll.vue";
import BackTop from "components/content/backTop/BackTop.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    homeSwiper,
    RecommendView,
    FeatureView,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
    };
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    // 切换显示的内容
    tabClick(index) {
      // 切换后重新计算高度
      this.$refs.scroll.fetchData();
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      };
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      //  this.$refs.scroll.scrollTo(0, -this.$refs.banref.offsetHeight, 500);
    },
    // 回到顶部
    backClick() {
      // console.log(this.$refs.scroll.scroll);
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 滑动的高度
    contentScroll(position) {
      // console.log(position, this.$refs.banref.offsetHeight);
      // 超过TAB的高度就显示回到顶部图标
      this.isShow = -position.y > this.$refs.banref.offsetHeight;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.fetchData();
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      // 请求首页头部数据
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 请求商品数据
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 上拉加载后需要执行这个函数才能继续执行上拉加载
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  created() {
    this.getHomeMultidata();
    // 请求流行的数据
    this.getHomeGoods("pop");
    // 请求新款的数据
    this.getHomeGoods("new");
    // 请求精品的数据
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
