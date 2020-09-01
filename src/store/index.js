import Vue from 'vue';
import Vuex from 'vuex';
import testData from '@/assets/data/test-data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messageData: null,
    selectedDialog: null,
    isLoading: false,
  },
  mutations: {
    selectDialog(state, { dialog }) {
      if (dialog != null) {
        state.selectedDialog = dialog;
      }
    },

    setMessageData(state, data) {
      state.messageData = data;
    },
  },
  actions: {
    loadData({ commit, state }) {
      state.isLoading = true;

      setTimeout(() => {
        commit('setMessageData', testData);
        commit('selectDialog', { dialog: testData[0] });

        state.isLoading = false;
      }, 1);
    },
  },
  modules: {
  },
});
