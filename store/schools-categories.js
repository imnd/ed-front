import axios from '~/plugins/axios'

export default {
  namespaced: true,
  state() {
    return {
      categories: [],
    };
  },
  mutations: {
    setState(state, {key, value}) {
      state[key] = value;
    },
  },
  actions: {
    async getCategories({commit}) {
      const { data: { data: categories } } = await axios.get('schools-categories');
      commit('setState', {
        key: 'categories',
        value: categories
      });
    },
  }
};
