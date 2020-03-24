export default {
  data() {
    return {
      errors: [],
    };
  },
  computed: {
    hasErrors() {
      return this.errors.length !== 0;
    },
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('change', this.name, val);
      },
    },
  },
  methods: {
    onBlur(e) {
      if (this.isDirty) {
        this.validate();
      }
      this.$emit('blur', e);
    },
    onFocus(e) {
      this.$emit('focus', e);
    },
    validate() {
      if (!this.validator) return;

      this.errors = this.validator.reduce((carry, func) => {
        const error = func(this.value);

        if (!error) return [...carry];

        if (Array.isArray(error)) {
          return [...carry, ...error];
        }

        return [...carry, error];
      }, []);
    },
  },
  props: {
    gtmSection: {
      type: String,
      required: false,
    },
    gtmField: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    isDirty: {
      type: Boolean,
      required: false,
    },
    value: {
      type: [String, Object, Number, Boolean],
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    validator: {
      type: Array,
      required: false,
    },
  },
};
