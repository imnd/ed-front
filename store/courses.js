import qs from 'qs';

import axios from '~/plugins/axios'

export default {
  namespaced: true,
  state() {
    return {
      courses: [],
      coursesCount: 0,
    };
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async getCourses({ commit }, filters = {}) {
      const { data: { count, data: courses } } = await axios.get('courses', {
        params: {
          ...filters,
        },
        paramsSerializer(params) {
          return qs.stringify(params, {
            arrayFormat: 'brackets',
            encode: false,
          });
        },
      });

      commit('setState', { key: 'courses', value: courses });
      commit('setState', { key: 'coursesCount', value: count });
    },

    async loadMore({ commit, state }, filters = {}) {
      const { data: { data: courses } } = await axios.get('courses', {
        params: {
          ...filters,
        },
        paramsSerializer(params) {
          return qs.stringify(params, {
            arrayFormat: 'brackets',
            encode: false,
          });
        },
      });

      commit('setState', { key: 'courses', value: [...state.courses, ...courses] });
    },
  }
};
