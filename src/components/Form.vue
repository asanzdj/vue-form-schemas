<template>
  <form class="form" @submit="onSubmit" ref="form">
    <component
      v-for="comp in schema"
      :is-dirty="isDirty"
      :is="comp.type"
      :key="comp.name"
      :value="getValue(comp.name)"
      @change="onChange"
      v-bind="comp"
    />
  </form>
</template>

<script>
import isEqual from 'lodash/isEqual';

import { TextField, SubmitField } from './Fields';

export default {
  name: 'Form',
  components: {
    TextField,
    SubmitField,
  },
  data() {
    return {
      isDirty: false, // Is form submitted yet
    };
  },
  methods: {
    getValue(name) {
      return this.model[name];
    },
    onChange(name, value) {
      this.$emit('modelChange', { ...this.model, [name]: value });
    },
    onSubmit(e) {
      e.preventDefault();

      this.$children.map(child => {
        if (child.validate) {
          child.validate();
        }
      });

      this.isDirty = true;

      if (this.$children.every(child => !child.hasErrors)) {
        this.$emit('submit', e);
      }

      return false;
    },
  },
  watch: {
    schema(newVal, oldVal) {
      if (!isEqual(newVal, oldVal)) {
        this.isDirty = false;
      }
    },
  },
  destroyed() {
    this.isDirty = false;
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    schema: {
      type: Array,
      required: true,
    },
  },
};
</script>
