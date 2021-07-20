import axios from '~/plugins/axios'

export default {
  state () {
    return {
      post: [],
      posts: [],
    }
  },
  mutations: {
    setState (state, { key, value }) {
      state[key] = value
    },
  },
  actions: {
    async getPost ({ commit }, slug) {
      try {
        const { data: { data: post } } = await axios.get(`posts/${slug}`)

        commit('setState', { key: 'post', value: post })
      } catch (error) {
        console.error(error)
      }
    },
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
