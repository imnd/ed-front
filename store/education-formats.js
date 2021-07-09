import axios from "axios";
const $http = axios.create({
  baseURL: process.env.baseApiUrl,
});

export default {
  namespaced: true,
  state() {
    return {
      educationFormats: [],
    };
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async getEducationFormats({ commit }) {
      const { data: educationFormats } = await $http.get('/education-formats');

      commit('setState', { key: 'educationFormats', value: educationFormats });
    },
  },
};
