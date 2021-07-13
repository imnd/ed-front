import axios from '~/plugins/axios'

export default {
  state() {
    return {
      lastReviews: [],
    };
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async getLastReviews({ commit }) {
      const { data: { data: reviews } } = await axios.get('reviews/last?entity=school');
      commit('setState', { key: 'lastReviews', value: reviews });
    },
  },
};
