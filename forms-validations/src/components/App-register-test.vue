<template>
  <form @submit.prevent="submitHandler">
    <div class="form-group">
      <label for="username">Username</label>
      <input id="username" v-model="username" @blur="$v.username.$touch" />
      <template v-if="$v.username.$error">
        <div v-if="!$v.username.required">Username is required</div>
        <div v-else-if="!$v.username.minLength">Username should be atleast 5 characters long</div>
      </template>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" v-model="password" @blur="$v.password.$touch" />
      <template v-if="$v.password.$error">
        <div v-if="!$v.password.required">Password is required</div>
        <div v-else-if="!$v.password.minLength">Password should be atleast 8 characters long</div>
      </template>
    </div>
    <div class="form-group">
      <label for="cPassword">Confirm password</label>
      <input id="cPassword" v-model="cPassword" @blur="$v.cPassword.$touch" />
      <template v-if="$v.cPassword.$error">
        <div v-if="!$v.cPassword.sameAs">Passwords don't match</div>
      </template>
    </div>
    <button>Register</button>
  </form>
</template>
 
<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

function sameAs(field) {
  return function (value) {
    return this[field] === value;
  }
}

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: '',
      password: '',
      cPassword: ''
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    cPassword: {
      sameAs: sameAs('password')
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if(this.$v.$invalid) {return;}
      console.log('Form was submitted!');
    }
  }
}
</script>
