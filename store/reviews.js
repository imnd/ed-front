import axios from 'axios';
const $http = axios.create({
  baseURL: process.env.baseApiUrl,
});

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
      const { data: lastReviews } = await $http.get('/reviews/last');
      commit('setState', { key: 'lastReviews', value: lastReviews });
    },
  },
};
