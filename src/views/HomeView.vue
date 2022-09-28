<template>
  <div class="home">
    <h1>Home</h1>
    
    <button @click="showPosts = !showPosts">Toggel Posts</button>
    <button @click="posts.pop()">Delete a Post</button>

    <div v-if="error">
      {{error}}
    </div>
    <div class="" v-if="!posts.length">
      Loading ...
    </div>
    <div v-else>
      <PostList v-if="showPosts" :posts=posts />
    </div>

  </div>

</template>

<script>
/* eslint-disable */

import PostList from '../components/PostList.vue';
import getPosts from '../composables/getPosts';

export default {
  setup ()
  {

    const { posts, showPosts, error, load } = getPosts();
    load();

    return {
      posts,
      showPosts,
      error
    };
  },
  components: { PostList }
}

</script>
<style>
body {
  max-width: 600px;
  margin: 50px auto;
}
</style>
