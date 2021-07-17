import {ADD_COUNT,ADD_TO_CART} from "./mutation-types"

const actions = {
  addCart(context, payload) {
    let Product = null;
    for (let item of context.state.cartList) {
      if (item.iid === payload.iid) {
        Product = item;
      }
    }
    if (Product) {
      //提交到mutation
      context.commit(ADD_COUNT, Product);
    } else {
      payload.Count = 1;
      context.commit(ADD_TO_CART, payload)
    }
  }
}

export default actions
