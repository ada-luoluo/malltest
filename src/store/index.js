
import { createStore } from 'vuex'

const store = createStore({
  state: {
    cartList:[]
  },
  mutations: {
    addCart(state,payload) {
     state.cartList.push(payload)
    }
  }
})


export default store
