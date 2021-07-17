import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutation"
import actions from './action'
import getters from './getter'


Vue.use(Vuex);

const state = {
  cartList: [],
  profileInfo: [
    {
      title: '我的余额',
      num: '0.00',
      unit: '元'
    },
    {
      title: '我的优惠券',
      num: '0',
      unit: '张'
    },
    {
      title: '我的积分',
      num: '0',
      unit: '分'
    }
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {},
});
