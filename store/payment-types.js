import axios from 'axios';
const $http = axios.create({
  baseURL: process.env.baseApiUrl,
});

export default {
  namespaced: true,
  state() {
    return {
      paymentTypes: [],
    };
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async getPaymentTypes({ commit }) {
      const { data: paymentTypes } = await $http.get('/payment-types');

      commit('setState', { key: 'paymentTypes', value: paymentTypes });
    },
  },
};
