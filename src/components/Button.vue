<template>
  <button :class="`button button--${color} ${loading && 'button--loading'}`" @click="onClick">
    <span v-if="!loading" v-text="label" />
  </button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
  props: {
    color: {
      type: String,
      required: false,
      default: 'red',
      validator(value) {
        return ['red', 'transparent'].includes(value);
      },
    },
    label: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
