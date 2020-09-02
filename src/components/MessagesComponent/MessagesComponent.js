import MessageComponent from '@/components/MessageComponent/MessageComponent.vue';
import { mapState } from 'vuex';
import DatetimeUtil from '@/assets/helpers';

export default {
  name: 'messages-component',
  components: {
    MessageComponent,
  },
  computed: {
    messageArray() {
      const parts = this.selectedDialog?.parts;

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
          time: `${DatetimeUtil.formatDate(date.getHours())}:${DatetimeUtil.formatDate(date.getMinutes())}`,
          date: `${DatetimeUtil.formatDate(date.getDate())}.${DatetimeUtil.formatDate(date.getMonth())}.${date.getFullYear()}`,
        };
      });
    },
    ...mapState({
      selectedDialog: (state) => state.selectedDialog,
    }),
  },
};
