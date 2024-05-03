<template>
  <div class="container d-flex pt-5">	
		<form class="flex-fill">
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<h1>Registration</h1>
					<hr>
					<div class="form-group">
						<label for="email">Email</label> 
            <input type="text" id="email" class="form-control" v-model="email">
					</div>
					<div class="form-group">
						<label for="password">Password</label> 
            <input type="password" id="password" class="form-control" v-model="password">
					</div>
					<div class="form-group">
            <label for="age">Age</label> 
            <input type="number" id="age" class="form-control" v-model.number="age">
          </div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
					<label for="description">Description</label> <br>
					<textarea id="description" rows="5" class="form-control" v-model="description"></textarea>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<div class="form-group">
						<h3>Skill Set</h3>
						<label for="js"><input type="checkbox" id="js" value="JavaScript" v-model="skillSet"> JavaScript
						</label> <label for="csharp"><input type="checkbox" id="csharp" value="C#" v-model="skillSet"> C#
						</label> <label for="java"><input type="checkbox" id="java" value="Java" v-model="skillSet"> Java
						</label> <label for="php"><input type="checkbox" id="php" value="PHP" v-model="skillSet"> PHP
						</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"><label
						for="male">
            <input type="radio" id="male" value="Male" v-model="gender"> Male
					</label> <label for="female">
            <input type="radio" id="female" value="Female" v-model="gender"> Female
					</label>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
					<label for="country">Country</label>
					<select id="country" class="form-control" v-model="country">
						<option value="bg">Bulgaria</option>
						<option value="de">Germany</option>
						<option value="gb">England</option>
					</select>
				</div>
			</div>
			<hr>
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<button :disabled="disabled" class="btn btn-primary">Submit!</button>
				</div>
			</div>
		</form>
		<form class="flex-fill">
			<div class="row">
				<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-heading">Your Data</h4>
						</div>
						<div class="panel-body">
							<p>Mail: </p>
							<p>Password: </p>
							<p>Age: </p>
							<p>Description: </p>
							<p><strong>Skill Set?</strong></p>
							<ul>
								<li>C#</li>
								<li>JavaScript</li>
							</ul>
							<p>Gender: </p>
							<p>Country: </p>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
  
<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, sameAs } from 'vuelidate/lib/validators';


export default {
  mixins: [validationMixin],
   data() {
    return {
      email: '',
      password: '',
      age: null,
      description: '',
      skillSet: [(new Array(4)).fill(false)],
      gender: null,
      country: null
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
