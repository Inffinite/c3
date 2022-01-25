export default {
    state: {
        contactsMenu: false
    },

    getters: {
        getContactsMenu(state){
            return state.contactsMenu;
        },
    },

    mutations: {
        SET_CONTACTSMENU(state, menustate){
            state.contactsMenu = menustate
        },
    },

    actions: {
        changeContactState({ commit }, state){
            commit('SET_CONTACTSMENU', state)
        },
    }
}