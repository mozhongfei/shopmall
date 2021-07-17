import BackTop from "components/content/backTop/BackTop.vue";


export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
        isShow: false,
    }
  },
  methods: {
    backClick() {
        // console.log(this.$refs.scroll.scroll);
        this.$refs.scroll.scrollTo(0, 0, 500);
      },
  },
}


import {POP, NEW, SELL} from "./const";


export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {

  }
}