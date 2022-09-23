<template>
  <div class="home">
    <h1>Home Page</h1>  
    <SForm />
  </div>
</template>

<script>
// @ is an alias to /src
import SForm from '@/components/SignupForm';

export default {
  name: 'HomeView',
  components: {
    SForm
  },
  mounted ()
  {
  },
};
</script>
