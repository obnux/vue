<template>

  <h2>Result</h2>
  <p v-if="showResults">Reaction Time : {{this.score ? this.score + "ms" : "- ms" }} </p>
  <p class="rank"> {{rank}} </p>
</template>

<script>
export default {
  props: {
    showResults: {
      type: Boolean,
      default: false
    },
    score: {
      type: Number,
      default: null
    }
  },
  data ()
  {
    return {
      rank: null
    };
  },
  mounted ()
  {
    if ( this.score < 250 )
    {
      this.rank = "Very Fast";
    } else if ( this.score < 400 )
    {
      this.rank = "Rapid reflexes";
    } else
    {
      this.rank = "Snail pace ...";

    }
  },
};
</script>

<style scoped>
.rank {
  font-size: 1.4rem;
  color: #0faf87;
  font-weight: bold;
}
</style>