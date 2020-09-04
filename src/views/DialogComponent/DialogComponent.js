import ListDialogsComponent from '@/components/ListDialogsComponent/ListDialogsComponent.vue';
import MessagesComponent from '@/components/MessagesComponent/MessagesComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent/SpinnerComponent.vue';
import TypeFieldComponent from '@/components/TypeFieldComponent/TypeFieldComponent.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'dialog-component',
  components: {
    ListDialogsComponent,
    MessagesComponent,
    SpinnerComponent,
    TypeFieldComponent,
  },
  computed: {
    ...mapState({
      messageData: (state) => state.messageData,
      isLoading: (state) => state.isLoading,
      selectedDialog: (state) => state.selectedDialog,
    }),
  },
  methods: {
    ...mapMutations({
      select: 'selectDialog',
    }),
    ...mapActions({
      load: 'loadData',
    }),
  },

  created() {
    this.load();
  },
};
