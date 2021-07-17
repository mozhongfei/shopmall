<template>
  <div id="CategoryContent">
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <div class="right" ref="right">
        <van-grid :column-num="2">
          <van-grid-item
            v-for="(item, index) in contentList"
            :key="index"
            @click.native="gotoLink(item.link)"
          >
            <img v-lazy="item.image" class="img-content" @load="imageLoad" />
            <div class="title-content">{{ item.title }}</div>
          </van-grid-item>
        </van-grid>
      </div>

      <tab-control
        ref="tabControl2"
        :titles="['综合', '新品', '销量']"
        @tabClick="tabClick"
      ></tab-control>

      <tab-content-detail
        :categoryDetail="showCategoryDetail"
      ></tab-content-detail>
    </scroll>

    <tab-control
      class="tab-control"
      ref="tabControl1"
      :titles="['综合', '新品', '销量']"
      @tabClick="tabClick"
      v-show="Show"
    ></tab-control>

    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scorll";
import TabContentDetail from "./TabContentDetail.vue";
import TabControl from "components/content/tabControl/TabControl.vue";

import { Toast } from "vant";
import { debounce } from "common/utils";
import { tabControlMixin, backTopMixin } from "@/common/mixin";
import { POP, SELL, NEW } from "@/common/const";

export default {
  name: "CategoryContent",
  props: {
    contentList: {
      type: Array,
      default() {
        return [];
      },
    },
    categoryDetail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      refresh: "",
      positoinY: '',
      Show: false,
    };
  },
  mixins: [tabControlMixin, backTopMixin],
  computed: {
    showCategoryDetail() {
      return this.categoryDetail[this.currentType];
    },
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    imageLoad() {
      this.refresh();
    },
    gotoLink(link) {
      setTimeout(() => {
        window.location.href = link;
      }, 2000);
      Toast("声明：2s之后将会跳转到蘑菇街的页面！！！");
    },
    contentScroll(position) {
      this.positoinY = -position.y;
      this.isShow =  this.positoinY > 1000;
      this.Show =  this.positoinY > this.$refs.right.offsetHeight;
    },
    backClick() {
        // console.log(this.$refs.scroll.scroll);
        const y = this.$refs.right.offsetHeight
        if ( this.positoinY > y) {
          this.$refs.scroll.scrollTo(0, -y, 500);
        }else{
          this.$refs.scroll.scrollTo(0, 0, 500);
        }
        
      },
  },
  components: {
    Scroll,
    TabControl,
    TabContentDetail,
  },
  mounted() {
    this.$nextTick(function () {
      this.$on("backTop", function () {
        this.$refs.scroll.scrollTo(0, 0, 0);
      });
    });
    this.refresh = debounce(this.$refs.scroll.fetchData, 500);
  },
};
</script>

<style scoped>
.right {
  width: 100%;
  display: flex;
  float: none;
}
.content {
  overflow: hidden;
  height: calc(100vh - 97px);
}
.img-content {
  width: 100%;
}
.title-content {
  font-size: 18px;
  margin-top: 20px;
}
.tab-control {
  position: relative;
  z-index: 9;
  top: -93.4%;
}
</style>