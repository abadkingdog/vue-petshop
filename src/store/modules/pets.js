import { petList } from './mock'

const GET_PETS = 'GET_PETS'
const GET_PET = 'GET_PET'

const actions = {
  getPets: ({ commit }) => {
    commit(GET_PETS, { products: petList })
  },

  getPetById: ({ commit }, { id }) => {
    const petIndex = petList.findIndex(o => o.id === parseInt(id))

    commit(GET_PET, { pet: petList[petIndex] })
  }
}

const mutations = {
  [GET_PETS] (state, { products }) {
    state.products = products
  },

  [GET_PET] (state, { pet }) {
    state.currentPet = pet
  }
}

const getters = {

}

export default {
  namespaced: true,

  state: {
    products: [],
    currentPet: {}
  },

  mutations,
  actions,
  getters
}
