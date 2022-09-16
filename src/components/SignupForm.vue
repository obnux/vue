<template>
  <div>
    <form @submit.prevent="submit" autocomplete="off">
      <label>Email : </label>
      <input autocomplete="chrome-off" v-model="email" type="email" name="email" id="email">


      <label>Password : </label>
      <input autocomplete="chrome-off" v-model="password" type="Password" name="Password" id="Password">
      <p v-if="passwordError.length" class="error">{{this.passwordError}}</p>

      <label>Role : </label>
      <select v-model="role">
        <option disabled value="">Please select one</option>
        <option value="developer">Web Developer</option>
        <option value="designer">Designer</option>
      </select>


      <label>Skills:</label>
      <input type="text" v-model="tempSkill" @keyup="addToSkills">
      <ul>
        <li class="tag" v-for="item in skills" :key="item">
          <span @click="deleteSkill(item)">
            {{item}}
          </span>

        </li>
      </ul>


      <div class="terms">
        <input v-model="terms" id="temrs" type="checkbox" required>
        <label for="temrs">Accept terms and conditions.</label>
      </div>

      <div class="submit">
        <button type="submit">Create an Account</button>
      </div>
    </form>

  </div>
</template>

<script>

export default {
  /* setup ()
  {


    return {};
  } */

  data ()
  {
    return {
      tempSkill: null,
      email: null,
      password: null,
      role: null,
      terms: true,
      skills: [],
      passwordError: ""
    };
  },
  methods: {
    addToSkills ( e )
    {

      if ( e.target.value && e.key == "Enter" )
      {
        if ( !this.skills.includes( this.tempSkill.toLowerCase() ) && !this.skills.includes( this.tempSkill.toUpperCase() ) )
        {
          this.skills.push( this.tempSkill );

          this.skills.sort( function ( a, b )
          {
            if ( a.toLowerCase() < b.toLowerCase() ) return -1;
            if ( a.toLowerCase() > b.toLowerCase() ) return 1;
            return 0;
          } );
        }
        this.tempSkill = '';
      }
    },
    deleteSkill ( skill )
    {
      this.skills = this.skills.filter( ( item ) => skill.toUpperCase() !== item.toUpperCase() );
    },
    submit ()
    {
      // validate Password
      this.passwordError = this.password.length > 5 ? "" : "Password must be at least 6 chars long !!";

      console.log(this.skills);

      return true;
    }
  },
};
</script>

<style  scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background-color: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input.error {
  border-bottom-color: #ff0062;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 0;
}

ul {
  padding: 0;
}

.pill,
.tag {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background-color: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
  font-style: italic;
  text-decoration: wavy;
}
</style>