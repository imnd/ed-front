import axios from '~/plugins/axios'

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
      const { data: { data: duration } } = await axios.get('duration');

      commit('setState', { key: 'duration', value: duration });
    },
  },
};
