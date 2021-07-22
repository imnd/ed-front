import axios from '~/plugins/axios'

export default {
  namespaced: true,
  state () {
    return {
      categories: [],
      topCategories: [],
    }
  },
  mutations: {
    setState (state, { key, value }) {
      state[key] = value
    },
  },
  actions: {
    async getCategories ({ commit }) {
      const { data: { data: categories } } = await axios.get('courses-categories')
      commit('setState', {
        key: 'categories',
        value: categories
      })
    },
    async getTopCategories ({ commit }, limit) {
      let url = 'courses-top-categories'
      if (undefined !== limit) {
        url += '/' + limit
      }
      const { data: { data: categories } } = await axios.get(url)
      commit('setState', {
        key: 'topCategories',
        value: categories
      })
    },
  }
}
