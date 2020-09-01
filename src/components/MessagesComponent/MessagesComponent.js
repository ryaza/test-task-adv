import MessageComponent from '@/components/MessageComponent/MessageComponent.vue';
import { mapState } from 'vuex';

export default {
  name: 'messages-component',
  components: {
    MessageComponent,
  },
  computed: {
    messageArray() {
      return this.selectedDialog?.parts;
    },
    ...mapState({
      selectedDialog: (state) => state.selectedDialog,
    }),
  },
};
