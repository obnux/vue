<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.ico"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SForm/>
  </div> 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SForm from '@/components/SignupForm'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SForm
  }
}
</script>
