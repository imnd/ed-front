import axios from 'axios';
const $http = axios.create({
  baseURL: process.env.baseApiUrl,
});

export default {
  namespaced: true,
  state() {
    return {
      school: {},
      schools: [],
      schoolsList: [],
      schoolsListElementsCount: 0,
    };
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    },
  },
  getters: {
    getSchoolById: state => schoolId => state.schools.find(s => parseInt(s.ID) === parseInt(schoolId)) || null,
  },
  actions: {
    async getSchool({ commit }, schoolSlug) {
      try {
        const { data: { data: school } } = await $http.get(`schools/${schoolSlug}`);

        commit('setState', { key: 'school', value: school });
      } catch (error) {
        console.error(error);
      }
    },

    async getSchools({ commit }) {
      const { data: { data: schools } } = await $http.get('schools');

      commit('setState', { key: 'schools', value: schools });
    },

    async getSchoolsList({ commit }, filters = {}) {
      const { data: { count, data: schoolsList } } = await $http.get('schools', {
        params: {
          ...filters,
        },
      });

      commit('setState', {
        key: 'schoolsList',
        value: schoolsList
      });
      commit('setState', {
        key: 'schoolsListElementsCount',
        value: count
      });
    },

    async loadMore({ commit, state }, filters = {}) {
      const { data: { data: schoolsList } } = await $http.get('schools', {
        params: {
          ...filters,
        },
      });

      commit('setState', { key: 'schoolsList', value: [...state.schoolsList, ...schoolsList] });
    },
  }
};
