<template>
  <div class="container">
<form action="" method="post">
  <fieldset>
    <h1>Registration Form</h1>

    <p class="field field-icon">
      <label for="username"><span><i class="fas fa-user"></i></span></label>
      <input type="text" name="username" id="username" class="error" placeholder="Mark Ulrich" v-model="username" @blur="$v.username.$touch">
    </p>

    <!-- if error -->
    <template v-if="$v.username.$error && $v.username.$dirty">
      <p class="error" v-if="!$v.username.required">Full name field is required!</p>
      <p class="error" v-else-if="!$v.username.custom">Full name field is invalid!</p>
    </template>
    <!-- end if error -->
    
    <p class="field field-icon">
      <label for="email"><span><i class="fas fa-envelope"></i></span></label>
      <input type="text" name="email" id="email" placeholder="marg@gmial.com">
    </p>

    <p class="field field-icon">
      <label for="tel"><span><i class="fas fa-phone"></i></span></label>
      <select name="tel" id="tel" class="tel">
        <option value="1">+359</option>
      </select>
      <input type="text" name="tel" id="tel" placeholder="888 888">
    </p>

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
      <input type="password" name="password" id="password" placeholder="******">
    </p>

    <p class="field field-icon">
      <label for="re-password"><span><i class="fas fa-lock"></i></span></label>
      <input type="re-password" name="re-password" id="re-password" placeholder="******">
    </p>

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
import { required, minLength, sameAs } from 'vuelidate/lib/validators';

const usernamePattern = /[A-Z]{1}[a-z]{2,10} [A-Z]{1}[a-z]{2,10}/s;

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
