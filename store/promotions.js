import axios from '~/plugins/axios'

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
        const { data: { data: promotions } } = await axios.get(`promotions`);

        commit('setState', { key: 'promotions', value: promotions });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
