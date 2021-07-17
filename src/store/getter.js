const getters = {
  carLength(state) {
    return state.cartList.length;
  },
  carList(state) {
    return state.cartList;
  },
  getProfileInfo(state) {
    return state.profileInfo
  }
}

export default getters
