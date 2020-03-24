<template>
  <Button :label="label" :loading="loading" class="button submit-field" color="red" type="submit" />
</template>

<script>
import abstractField from './mixins/abstractField';
import Button from '../Button.vue';

export default {
  name: 'SubmitField',
  mixins: [abstractField],
  components: {
    Button,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
