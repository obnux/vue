<template>
  <h1>Reaction Timer</h1>
  <button @click="start">Play</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data ()
  {
    return {
      isPlaying: false,
      delay: null
    };
  },
  methods: {
    start ()
    {
      this.delay = 2000 * Math.random() + 5000;
      this.isPlaying = true;
      console.log("delay", this.delay);
    }
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
</style>
