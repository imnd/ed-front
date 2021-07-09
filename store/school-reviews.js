import axios from 'axios';

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
      const $http = axios.create({
        baseURL: process.env.baseApiUrl,
      });
      const { data: { data: reviews } } = await $http.get('reviews/last?entity=school');
      commit('setState', { key: 'lastReviews', value: reviews });
    },
  },
};
