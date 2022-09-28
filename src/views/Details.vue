<template>
  <div>
    <button @click="$router.go(-1)">Back</button>
    <br>
    <p v-if="error">{{error }}</p>
    <h1> {{post.title}} </h1>
    <p> {{post.body}} </p>
  </div>
</template>

<script>
/* eslint-disable */

import { ref } from 'vue';
import getPost from '../composables/getPost';

export default {
  setup ( props )
  {
    const { post, error, load } = getPost( props.id );
    load();

    return {
      post,
      error
    };
  },

  props: {
    id: {
      type: Number,
      default: null
    },
  },
};
</script>

<style lang="scss" scoped>

</style>