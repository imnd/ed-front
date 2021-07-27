import qs from 'qs'
import axios from '~/plugins/axios'

export default {
  namespaced: true,
  state() {
    return {
      school: {},
      schools: [],
      schoolsCount: 0,
    }
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value
    },
  },
  getters: {
    getSchoolById: state => schoolId =>
      state.schools.find(s => parseInt(s.id) === parseInt(schoolId)) || null,
  },
  actions: {
    async getSchool({ commit }, schoolSlug) {
      try {
        const {
          data: { data: school },
        } = await axios.get(`schools/${schoolSlug}`)

        commit('setState', { key: 'school', value: school })
      } catch (error) {
        console.error(error)
      }
    },

    async getSchools({ commit }, filters = {}) {
      const {
        data: { count, data: schools },
      } = await axios.get('schools', {
        params: { ...filters },
        paramsSerializer(params) {
          return qs.stringify(params, {
            arrayFormat: 'brackets',
            encode: false,
          })
        },
      })

      commit('setState', { key: 'schools', value: schools })
      commit('setState', { key: 'schoolsCount', value: count })
    },

    async loadMore({ commit, state }, filters = {}) {
      const {
        data: { data: schools },
      } = await axios.get('schools', {
        params: {
          ...filters,
        },
      })

      commit('setState', {
        key: 'schools',
        value: [...state.schools, ...schools],
      })
    },
  },
}
