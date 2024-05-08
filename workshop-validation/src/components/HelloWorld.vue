<template>
  <div class="container">
<form action="" method="post">
  <fieldset>
    <h1>Registration Form</h1>

    <p class="field field-icon">
      <label for="username"><span><i class="fas fa-user"></i></span></label>
      <input type="text" name="username" id="username" class="error" placeholder="Mark Ulrich" v-model="username" @blur="$v.username.$touch">
    </p>
    <template v-if="$v.username.$error && $v.username.$dirty">
      <p class="error" v-if="!$v.username.required">Full name is required!</p>
      <p class="error" v-else-if="!$v.username.custom">Full name is invalid!</p>
    </template>
    
    <p class="field field-icon">
      <label for="email"><span><i class="fas fa-envelope"></i></span></label>
      <input type="text" name="email" id="email" placeholder="marg@gmial.com" v-model="email" @blur="$v.email.$touch">
    </p>
    <template v-if="$v.email.$error && $v.email.$dirty">
      <p class="error" v-if="!$v.email.required">Email is required!</p>
      <p class="error" v-else-if="!$v.email.custom">Email is invalid!</p>
    </template>

    <p class="field field-icon">
      <label for="tel"><span><i class="fas fa-phone"></i></span></label>
      <select name="tel" id="tel" class="tel">
        <option value="1">+359</option>
      </select>
      <input type="text" name="tel" id="tel" placeholder="8888 8888" v-model="telephone" @blur="$v.telephone.$touch">
    </p>
    <template v-if="$v.telephone.$error && $v.telephone.$dirty">
      <p class="error" v-if="!$v.telephone.required">Telephone is required!</p>
      <p class="error" v-else-if="!$v.telephone.custom">Telephone is invalid!</p>
      <p class="error" v-else-if="!$v.telephone.maxLength">Telephone is too long!</p>
    </template>

    <p class="field field-icon">
      <label for="building"><span><i class="fas fa-building"></i></span></label>
      <select name="building" id="building" class="building">
        <option value="1">Designer</option>
        <option value="2">Software Engineer</option>
        <option value="3">Accountant</option>
        <option value="4">Manager</option>
        <option value="5">Other</option>
      </select>
    </p>

    <p class="field field-icon">
      <label for="password"><span><i class="fas fa-lock"></i></span></label>
      <input type="password" name="password" id="password" placeholder="******"  v-model="password" @blur="$v.password.$touch">
    </p>
    <template v-if="$v.password.$error && $v.password.$dirty">
      <p class="error" v-if="!$v.password.required">Password is required!</p>
      <p class="error" v-else-if="!$v.password.minLength">Password is invalid!</p>
    </template>

    <p class="field field-icon">
      <label for="re-password"><span><i class="fas fa-lock"></i></span></label>
      <input type="re-password" name="re-password" id="re-password" placeholder="******"  v-model="cPassword" @blur="$v.cPassword.$touch">
    </p>
    <template v-if="$v.cPassword.$error && $v.cPassword.$dirty">
      <p class="error" v-if="!$v.cPassword.required">Password is required!</p>
      <p class="error" v-else-if="!$v.cPassword.sameAs">Passwords don't match!</p>
    </template>

    <p>
      <button :disabled="$v.$invalid" v-on="submitHandler()">Create Account</button>
    </p>
    
    <p class="text-center">
      Have an account?
      <a href="">Log In</a>
    </p>
    
  </fieldset>
</form>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { maxLength } from 'vuelidate/lib/validators';
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators';

const usernamePattern = /[A-Z]{1}[a-z]{2,10} [A-Z]{1}[a-z]{2,10}/s;
const telephonePattern = /\d{8}/s;

export default {
  mixins: [validationMixin],
  name: 'HelloWorld',
  data() {
    return {
      username: '',
      email: '',
      telephone: '',
      password: '',
      cPassword: '',
    }
  },
  validations: {
    username: {
      required,
      custom: value => usernamePattern.test(value)
    },
    email : {
      required,
      email
    },
    telephone: {
      required,
      custom: value => telephonePattern.test(value),
      maxLength: maxLength(8)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    cPassword: {
      required,
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

<style scoped>
form {
    margin-top: 20px;
    width: 40%;
}

fieldset {
    border-radius: 10px;
    padding: 20px;
}

input {
    flex: 0 1 100%;
    border: 1px solid;
    padding: 5px;
    border-left: 3px solid #42a948;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

select {
    border-color: black;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 0.8em 1.2em;
    width: 100%;
}

i {
    border: 1px solid;
    border-right: none;
    padding: 10px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #e9ecef;
}

a {
    color:  #007bff;
}

.container {
    font-family: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.tel {
    padding-right: 20px;
}

.building {
    flex: 1 1 100%;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

form .field {
    display: flex;
}

p.error {
    text-align: left;
    background-color: #f8d7da;
    padding: 8px;
    border-radius: 3px;
}

input.error {
    border-left-color:#a8413f;
}
</style>
