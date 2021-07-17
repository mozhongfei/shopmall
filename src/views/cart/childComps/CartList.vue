<template>
  <van-swipe-cell :before-close="beforeClose">
    <div class="Cart-Item">
      <van-checkbox v-model="CarListItem.checked" checked-color="#ee0a24" />
      <van-card
        :num="CarListItem.Count"
        :price="CarListItem.price"
        :desc="CarListItem.desc"
        :title="CarListItem.title"
        :thumb="CarListItem.image"
        :origin-price="CarListItem.oldprice"
      >
        <van-checkbox v-model="checked" checked-color="#ee0a24" />
      </van-card>
    </div>
    <template #right>
      <van-button
        square
        type="danger"
        text="删除"
        class="delete-button"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
      />
    </template>
  </van-swipe-cell>
</template>

<script>
import { Dialog } from 'vant'

export default {
  name: "CartList",
  data() {
    return {
      checked: this.CarListItem.checked,
    };
  },
  props: {
    CarListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case "outside":
          instance.close();
          break;
        case "right":
          Dialog.confirm({
            message: "确定删除你的宝贝吗？",
            cancelButtonText: "我再想想",
            confirmButtonText: "狠心删除",
          }).then(() => {
            //删除商品
            this.$emit("deleteItem", this.CarListItem.iid);
            instance.close();
          });
          break;
      }
    },
  },
  components: {},
  watch: {
    //监听checked的值
    checked(now, old) {
      this.CarListItem.checked = !this.CarListItem.checked;
      this.$emit("statechange");
    },
  },
};
</script>

<style scoped>
.Cart-Item {
  position: relative;
}
.van-checkbox {
  position: absolute;
  left: 5px;
  top: 36%;
  z-index: 10;
}
.van-card {
  padding-left: 30px;
}
.delete-button {
  height: 100%;
}
</style>
