import axios from 'axios';
const $http = axios.create({
  baseURL: process.env.baseApiUrl,
});

export default {
  state() {
    return {
      promotions: [],
    };
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async getPromotions({ commit }) {
      try {
        const { data: { data: promotions } } = await $http.get(`promotions`);

        commit('setState', { key: 'promotions', value: promotions });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
