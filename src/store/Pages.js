export default {
    state: {
        dashboardPage: false,
        projectsPage: true
    },

    getters: {
        getDashboardState(state) {
            return state.dashboardPage;
        },

        getProjectsPageState(state) {
            return state.projectsPage;
        },
    },

    mutations: {
        SET_DASHBOARD_PAGE_STATE(state, dashboardstate) {
            state.dashboardPage = dashboardstate
        },

        SET_PROJECTS_PAGE_STATE(state, projectstate) {
            state.projectsPage = projectstate
        },
    },

    actions: {
        // enabling one page disables the rest

        changeDashboardState({ commit }, state) {
            switch (state) {
                case true:
                    commit('SET_DASHBOARD_PAGE_STATE', state)
                    commit('SET_PROJECTS_PAGE_STATE', false)
                    break;

                case false:
                    commit('SET_DASHBOARD_PAGE_STATE', state)
                    commit('SET_PROJECTS_PAGE_STATE', true)
                    break;

                default:
                    break;
            }
        },

        changeProjectsPageState({ commit }, state) {
            switch (state) {
                case true:
                    commit('SET_DASHBOARD_PAGE_STATE', false)
                    commit('SET_PROJECTS_PAGE_STATE', state)
                    break;

                case false:
                    commit('SET_DASHBOARD_PAGE_STATE', true)
                    commit('SET_PROJECTS_PAGE_STATE', state)
                    break;

                default:
                    break;
            }
        },
    }
}