import { mapState } from 'vuex';

export default {
  name: 'list-dialogs-component',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      selectedDialog: (state) => state.selectedDialog,
    }),
  },
};
