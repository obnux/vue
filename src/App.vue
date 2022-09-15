<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="delay" :delay="delay" @end="endGame" />
  <Results v-if="showResults" :score="score" :showResults="showResults" />
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: {
    Block,
    Results
  },
  data ()
  {
    return {
      isPlaying: false,
      delay: 0,
      score: null,
      showResults: false
    };
  },
  methods: {
    start ()
    {
      this.delay = 2000 * Math.random() + 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame ( endTime )
    {
      this.score = endTime;
      this.isPlaying = false;
      this.showResults = true;
      this.delay = 0;
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
