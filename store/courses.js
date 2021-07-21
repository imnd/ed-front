import qs from 'qs'

import axios from '~/plugins/axios'

export default {
  namespaced: true,
  state () {
    return {
      courses: [],
      coursesCount: 0,
    }
  },
  mutations: {
    setState (state, { key, value }) {
      state[key] = value
    },
  },
  getters: {
    getFilters: (state) => {
      return state.filters
    }
  },
  setters: {
    setFilters: (state) => {
      return state.filters
    }
  },
  actions: {
    async getCourses ({ commit }, filters = {}) {
      const { data: { data: courses, meta: { total } } } = await axios.get('courses', {
        params: {
          ...filters,
        },
        paramsSerializer (params) {
          return qs.stringify(params, {
            arrayFormat: 'brackets',
            encode: false,
          })
        },
      })

      commit('setState', { key: 'courses', value: courses })
      commit('setState', { key: 'coursesCount', value: total })
    },

    async loadMore ({ commit, state }, filters = {}) {
      const { data: { data: courses } } = await axios.get('courses', {
        params: {
          ...filters,
        },
        paramsSerializer (params) {
          return qs.stringify(params, {
            arrayFormat: 'brackets',
            encode: false,
          })
        },
      })

      commit('setState', { key: 'courses', value: [...state.courses, ...courses] })
    },
  }
}
