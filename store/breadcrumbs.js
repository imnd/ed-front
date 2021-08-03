export default {
  namespaced: true,
  state() {
    return {
      breadcrumbs: [],
    }
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value
    },
  },
  actions: {
    setBreadcrumbs({ commit }, value) {
      let breadcrumbs = [
        {
          title: 'Главная',
          href: '/',
        },
      ]
      commit('setState', {
        key: 'breadcrumbs',
        value: [...breadcrumbs, ...value],
      })
    },
  },
  getters: {
    getBreadcrumbs: state => () => {
      for (let breadcrumb of state.breadcrumbs) {
        breadcrumb = process.env.baseUrl + breadcrumb
      }
      return state.breadcrumbs
    },
  },
}
