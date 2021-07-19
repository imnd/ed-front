import axios from '~/plugins/axios'

export default {
  state () {
    return {
      posts: [],
    }
  },
  mutations: {
    setState (state, { key, value }) {
      state[key] = value
    },
  },
  actions: {
    async getPosts ({ commit }) {
      try {
        const { data: { data: posts } } = await axios.get(`posts`)

        commit('setState', { key: 'posts', value: posts })
      } catch (error) {
        console.error(error)
      }
    },
  },
}
