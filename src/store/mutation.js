import {ADD_COUNT,ADD_TO_CART} from "./mutation-types"

const mutations = {
  //不适合做复杂操作(适合做跟踪数据),异步操作或者复杂操作放到actions
  [ADD_COUNT](state, payload) {
    payload.Count += 1;
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  }
}


export default mutations
