<template lang="">
  <div class="block" >
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
  data() {
    return {
     
    }
  },
}
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