import { mapMutations, mapGetters } from 'vuex';
import SpinnerComponent from '@/components/SpinnerComponent/SpinnerComponent.vue';

export default {
  name: 'type-field-component',
  components: {
    SpinnerComponent,
  },
  data() {
    return {
      message: '',
      isLoading: false,
    };
  },
  computed: {
    author() {
      return this.messageArray.find((v) => v.side === 'left')?.author ?? 'me';
    },
    ...mapGetters({
      messageArray: 'getSelectedDialog',
    }),
  },
  methods: {
    add() {
      this.isLoading = true;

      setTimeout(() => {
        this.addMessage({ author: this.author, message: this.message });
        this.isLoading = false;
        this.message = '';
        this.$nextTick(() => {
          if ('field' in this.$refs) {
            this.$refs.field.click();
            this.$refs.field.focus();
          }
        });
      }, 500);
    },
    ...mapMutations({
      addMessage: 'addMessage',
    }),
  },
};
