import axios from '~/plugins/axios'

export default {
  namespaced: true,
  state () {
    return {
      categories: [],
    }
  },
  mutations: {
    setState (state, { key, value }) {
      state[key] = value
    },
  },
  getters: {
    getCategoryById: state => catId => state.categories.find(s => parseInt(s.id) === parseInt(catId)) || null,
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
        key: 'categories',
        value: categories
      })
    },
  }
}
