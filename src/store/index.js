import { createStore } from 'vuex';

// 新しいストアインスタンスを作成します
const store = createStore({
    actions: {
        setHoge({ commit }, payload) {
            commit('setHoge', payload);
        },
        setPageType({ commit }, payload) {
            commit('setPageType', payload);
        }
    },
    mutations: {
        setHoge(state, payload) {
            state.count = payload;
        },
        setPageType(state, payload) {
            state.pagetype = payload;
        }
    },
    state: {
        count: 0,
        pagetype: 'LOGIN',
    },
    getters: {
        count(state) {
            return state.count;
        },
        pagetype(state) {
            return state.pagetype;
        },
    },
})

export default store;