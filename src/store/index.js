import { createStore } from 'vuex';

const store = createStore({
    actions: {
        // setAuth({ commit }, payload) {
        //     commit('setAuth', payload);
        // },
    },
    mutations: {
        // setAuth(state, payload) {
        //     state.auth = payload;
        // },
    },
    state: {
        // auth: '',
    },
    getters: {
        // auth(state) {
        //     return state.auth;
        // },
    },
})

export default store;