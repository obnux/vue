<template>
  <div class="post-list">
    <button @click="go(-1)">Back</button>

    <div v-for="post in posts" :key="post.id">
      <SinglePost :post=post />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";

export default {
  setup ( props )
  {
    onMounted( () => console.log( 'on mounted' ) );
    onUnmounted( () => console.log( 'on Unmounted' ) );
    onUpdated( () => console.log( 'on updted' ) );

    return { props };
  },
  props: {
    posts: {
      type: Array,
      default: () =>
      {
        return [];
      }
    },
  },
  components: { SinglePost }
};
</script>

<style lang="scss" scoped>

</style>