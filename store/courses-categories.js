import axios from 'axios';

const $http = axios.create({
  baseURL: process.env.baseApiUrl,
});

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
      const { data: { data: categories } } = await $http.get('courses-categories');
      commit('setState', {
        key: 'categories',
        value: categories
      });
    },
  }
};
