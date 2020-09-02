import { mapMutations } from 'vuex';
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
  methods: {
    add() {
      this.isLoading = true;
      setTimeout(() => {
        this.addMessage(this.message);
        this.isLoading = false;
        this.message = '';
      }, 500);
    },
    ...mapMutations({
      addMessage: 'addMessage',
    }),
  },
};
