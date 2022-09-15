<template lang="">
  <div class="block" v-if="showBlock" @click="stopTimer" >
    Click Me
  </div>
</template>
<script>
export default {
  props: {
    delay: {
      type: Number,
      default: 0
    },
  },
  data ()
  {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    };
  },
  mounted ()
  {

    setTimeout( () =>
    {
      this.showBlock = true;
      this.startTimer();
    }, this.delay );
  },
  methods: {
    startTimer ()
    {
      this.timer = setInterval( () =>
      {
        this.reactionTime += 10;
      }, 10 );
    },
    stopTimer ()
    {
      console.log(this.reactionTime);
      clearInterval( this.timer );
      this.showBlock = false;
    }
  },
  updated ()
  {
    console.log( "updated" );
  },
  unmounted ()
  {
    console.log( "unmounted" );
  }
};
</script>
<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>