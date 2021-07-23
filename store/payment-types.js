import axios from '~/plugins/axios'

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
      const { data: { data: paymentTypes } } = await axios.get('/payment-types');

      commit('setState', { key: 'paymentTypes', value: paymentTypes });
    },
  },
};
