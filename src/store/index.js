import Vue from 'vue'
import Vuex from 'vuex'

import pets from './modules/pets'

// import createPersist from 'vuex-localstorage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pets
  },
  strict: false,
  // plugins: [createPersist({
  //   namespace: 'namespace-for-state',
  //   initialState: {},
  //   expires: 24 * 60 * 60 * 1e3  // ONE_DAY
  // })]
})
