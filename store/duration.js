import axios from 'axios';
const $http = axios.create({
  baseURL: process.env.baseApiUrl,
});

export default {
  namespaced: true,
  state() {
    return {
      duration: [],
    };
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async getDuration({ commit }) {
      const { data: duration } = await $http.get('duration');

      commit('setState', { key: 'duration', value: duration });
    },
  },
};
