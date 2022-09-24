<template>
  <router-view />
</template>


<script>
export default {
  methods: {
    redirect ()
    {
      this.$router.push( { name: "home" } );
    },
    back ()
    {
      this.$router.go( -1 );
    },
    forward ()
    {
      this.$router.go( 1 );
    }
  },
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
