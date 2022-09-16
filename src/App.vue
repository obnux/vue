<template>

  <SignupForm />
</template>

<script>

import SignupForm from './components/SignupForm';


export default {
  name: 'App',
  components: {
    SignupForm
  },
  data ()
  {

  },
  methods: {

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background-color: #eee;

}

button {
  background-color: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: .2;
  cursor: not-allowed;
}
</style>
