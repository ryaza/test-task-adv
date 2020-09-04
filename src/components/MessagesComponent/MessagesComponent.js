import MessageComponent from '@/components/MessageComponent/MessageComponent.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'messages-component',
  components: {
    MessageComponent,
  },
  computed: {
    ...mapGetters({
      messageArray: 'getSelectedDialog',
    }),
  },
};
