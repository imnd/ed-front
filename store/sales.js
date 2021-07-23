import axios from '~/plugins/axios'

export default {
  state () {
    return {
      sales: [],
    }
  },
  mutations: {
    setState (state, { key, value }) {
      state[key] = value
    },
  },
  actions: {
    async getSales ({ commit }) {
      try {
        const { data: { data: sales } } = await axios.get(`promotions`)

        commit('setState', { key: 'sales', value: sales })
      } catch (error) {
        console.error(error)
      }
    },
  },
}
