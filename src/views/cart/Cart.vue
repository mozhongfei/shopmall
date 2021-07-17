<template>
  <div class="cart">
    <nav-bar class="cart-bar">
      <div slot="left" @click="titleBack" class="back-img">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center">购物车({{ carLength }})</div>
    </nav-bar>

    <van-notice-bar
      left-icon="volume-o"
      text="向左拖动商品可移除呢= =！，还有好多功能未开发，敬请期待。SorryMaker"
    />
    <scroll class="content" ref="carScroll">
      <cart-list
        v-for="(item, index) in carList"
        :CarListItem="item"
        :key="index"
        @deleteItem="deleteItem"
        @statechange="statechange"
      />
      <div class="hint" v-show="carLength === 0">
        <img src="~assets/img/cart/空购物车.svg" />
        购物车空空的，去
        <span class="toHome" @click="toHome">逛逛</span>
        吧~
      </div>
    </scroll>
    <van-submit-bar
      :price="totalPrice"
      :button-text="totalGoods"
      @submit="onSubmit"
    >
      <van-checkbox v-model="isCheckAll" checked-color="#ee0a24" @click="selectAll"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>
    
<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";

import Scroll from "components/common/scroll/Scorll.vue";
import { Toast } from 'vant'

//getters映射到计算属性中
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    //返回
    titleBack() {
      this.$router.back();
    },
    statechange() {
      this.isCheckAll = !this.carList.filter((item) => !item.checked).length;
    },
    selectAll() {
      if (this.isCheckAll) {
        this.carList.forEach(item => item.checked = false)
      } else {
        this.carList.forEach(item => item.checked = true)
      }
    },
    deleteItem(iid) {
      for (let i = 0; i < this.carLength; i++) {
        if (this.carList[i].iid === iid) {
          this.carList.splice(i, 1);
          Toast({
            message: "好的宝贝再见",
            icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_biaoqing%2F81260391.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621921530&t=7a3c55287fd63c009fe31a719c87ec97",
          });
        } else {
          Toast("前方出现bug，请退出");
        }
      }
    },
    onSubmit() {
      if (this.carList.length === 0) {
        Toast("请先选择商品加入购物车");
        return;
      }
      if (!this.carList.filter((item) => item.checked === true).length) {
        Toast("请选择商品");
      }
    },
  },
  components: {
    NavBar,
    CartList,
    Scroll,
  },
  computed: {
    ...mapGetters(["carLength", "carList"]),
    totalPrice() {
      //先用过滤器返回所有选中商品，再用reduce计算总和
      return (
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.Count;
          }, 0) * 100
      ); //价格（单位分 * 100）插件默认的
    },
    totalGoods() {
      //计算结算商品数量
      return (
        "结算（" +
        this.$store.state.cartList.filter((item) => item.checked).length +
        ")"
      );
    },
    isCheckAll: {
      get: function () {
        if (this.carLength === 0) return false;
        // 使用find
        return !this.carList.find((item) => !item.checked);
      },
      set: function () {},
    },
  },
  activated() {
    this.$refs.carScroll.fetchData();
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.cart-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
.back-img img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.content {
  height: calc(100% - 184px);
  overflow: hidden;
}
.van-submit-bar {
  bottom: 49px;
}
.hint {
  text-align: center;
  position: relative;
  /*top: 100px;*/
  font-size: 18px;
  color: gray;
  /*background-color: red;*/
}
.hint img {
  width: 20px;
  vertical-align: top;
}
.toHome {
  color: blue;
  border-bottom: 1px solid;
}
</style>
