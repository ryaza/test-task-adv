export default {
  name: 'message-component',
  props: {
    message: {
      type: Object,
      required: true,
    },
    side: {
      type: String,
      default: 'right',
    },
  },
};
