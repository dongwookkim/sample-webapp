import ApiService from '@/common/api.service'

const state = {
  samples: []
}

// Getters
const getters = {}

// Actions
const actions = {
  async fetchData({ commit }) {
    const response = await ApiService.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    commit('FETCH_DATA_SUCCESS', response.data)
  }
}

// Mutations
const mutations = {
  FETCH_DATA_SUCCESS(state, data) {
    state.samples = data
  }
  // other mutations
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
