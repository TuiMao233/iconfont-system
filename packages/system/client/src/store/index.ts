import { createStore } from 'vuex'

declare module 'vuex' {
  export function useStore<S = typeof store.state>(): Store<S>
}

const store = createStore({
  state: {
    groups: []
  },
  mutations: {},
  actions: {},
  getters: {}
})

export default store
