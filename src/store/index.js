import Vue from 'vue';
import Vuex from 'vuex';
import testData from '@/assets/data/test-data.json';
import DatetimeUtil from '@/assets/helpers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messageData: null,
    selectedDialog: null,
    isLoading: false,
  },
  getters: {
    getSelectedDialog(state) {
      const parts = state.selectedDialog?.parts;

      let right = true;
      let prevAuthor = parts[0].author;

      return parts.map((message) => {
        if (message.author !== prevAuthor) {
          prevAuthor = message.author;
          right = !right;
        }

        const date = new Date(message.created);

        return {
          ...message,
          side: right ? 'right' : 'left',
          time:
              `${DatetimeUtil.formatDate(date.getHours())}:
              ${DatetimeUtil.formatDate(date.getMinutes())}`,
          date:
              `${DatetimeUtil.formatDate(date.getDate())}.
              ${DatetimeUtil.formatDate(date.getMonth())}.${date.getFullYear()}`,
        };
      });
    },
  },
  mutations: {
    selectDialog(state, dialog) {
      if (dialog != null) {
        state.selectedDialog = dialog;
      }
    },

    setMessageData(state, data) {
      state.messageData = data;
    },

    addMessage(state, { author, message }) {
      const value = {
        id: state.selectedDialog.parts.length + 1,
        author,
        created: new Date(),
        text: message,
      };

      state.selectedDialog.parts.push(value);
    },
  },
  actions: {
    loadData({ commit, state }) {
      state.isLoading = true;

      setTimeout(() => {
        commit('setMessageData', testData);
        commit('selectDialog', testData[0]);

        state.isLoading = false;
      }, 1);
    },
  },
  modules: {
  },
});
