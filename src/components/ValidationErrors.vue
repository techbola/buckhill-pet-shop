<template>
  <div>
    <div v-if="validationErrors">
      <ul class="error-list">
        <li v-for="(value, key) in validationErrors" :key="key">{{ value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errors: Object,
  },
  computed: {
    validationErrors() {
      let errors = Object.values(this.errors);
      errors = errors.flat();
      return errors;
    },
  },
};
</script>

<style scoped>
.error-list {
  list-style: none;
}
.error-list li {
  color: red;
}
</style>
