// import Vue from 'vue';
import Vuex from 'vuex';
import {getUserInfo} from './api';

// Vue.use(Vuex);

const state = {
    userInfo: {
        user_name: '',
        avatar: '',
    }
};
const mutations = {
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    }
};
const actions = {
    async getUserInfo({commit}) {
        return getUserInfo().then(res => {
            commit('setUserInfo', res.data.userInfo);
        });
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
});
