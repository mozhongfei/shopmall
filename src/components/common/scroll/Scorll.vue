<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scorll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    fetchData() {
      // console.log(11);
        this.scroll && this.scroll.refresh();
    },
  },
  watch: {
    //   刷新页面能正确计算高度
    scroll() {
      setTimeout(() => {
        this.fetchData();
        // console.log("监听执行refresh方法");
      }, 300);
    },
  },
  components: {},
  mounted() {
    //  创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // 监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
};
</script>

<style scoped>
.wrapper{
  overflow: hidden;
}
.content:after{ content:''; clear:both; display:block; visibility:hidden; height:0px;}
</style>
