<template>
  <div id="app" class="app">
    <div class="section">
      <h2 class="heading-secondary">Vue form with schemas</h2>
      <Form :model="fields" :schema="schema" @modelChange="handleModelChange" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
import { Form } from '@/components';

import schema from './schema';

export default {
  name: 'App',
  data() {
    return {
      fields: {},
      schema,
    };
  },
  components: {
    Form,
  },
  methods: {
    onSubmit() {
      alert('Submited!');
    },
    handleModelChange(model) {
      this.fields = model;
    },
  },
};
</script>
