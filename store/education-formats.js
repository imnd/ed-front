import axios from '~/plugins/axios'

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
      const { data: educationFormats } = await axios.get('education-formats');

      commit('setState', { key: 'educationFormats', value: educationFormats });
    },
  },
};
