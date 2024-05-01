<template>
  <form @submit.prevent="submitHandler">
    <div class="form-group">
      <label for="username">Username</label>
      <input id="username" v-model="username"/>
      <div v-if="$v.username.$error">Error</div>
    </div>
    <button>Register</button>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: ''
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(5)
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if(this.$v.$invalid) return;
      console.log('Form was submitted!');
    }
  }
}
</script>
