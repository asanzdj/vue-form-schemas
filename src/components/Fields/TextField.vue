<template>
  <div class="text-field u-margin-bottom-small">
    <label :for="name" class="form-label" v-text="label" />
    <div v-if="prependIcon" class="prepend-icon">
      <i :class="`icon icon-${prependIcon}`" />
    </div>
    <input
      :class="inputClass"
      :disabled="disabled"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :type="inputType"
      @blur="onBlur"
      @focus="onFocus"
      class="input"
      v-model="inputValue"
    />
    <ul class="error-box" v-if="hasErrors">
      <li v-for="error in errors" :key="error" v-text="error" />
    </ul>
  </div>
</template>

<script>
import abstractField from './mixins/abstractField';

export default {
  name: 'TextField',
  mixins: [abstractField],
  computed: {
    inputClass() {
      return {
        'input--spaced': !!this.prependIcon,
        'input--error': this.hasErrors,
      };
    },
  },
  props: {
    prependIcon: {
      type: String,
      required: false,
    },
    inputType: {
      type: String,
      required: false,
      default: 'text',
    },
  },
};
</script>
