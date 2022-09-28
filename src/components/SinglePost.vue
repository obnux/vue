<template>
  <div class="post">
    
    <router-link :to="{name:'Details', params: {id: post.id}}">
      <h3> {{post.title}} </h3>
    </router-link>
    <p> {{snippet}} </p>

    <span v-for="tag in post.tags" :key="tag + post.id">
      #{{tag}}
    </span>
    <br>
    <br>
    <hr>
    <br>
    <br>
  </div>
</template>

<script>
/* eslint-disable */
import { computed } from '@vue/reactivity';
import { toRefs } from 'vue';

export default {
  setup ( props )
  {
    const randomnos = Math.ceil( Math.random() + 3 - Math.random() );

    const snippet = computed( () =>
    {
      return props.post.body.substring( 0, 50 ) + "...";
    } );

    const addTagsToPost = () =>
    {
      return props.post.tags = [ "data", "webDev", "css", "HTMl", "news" ].sort( ( a, b ) => ( a + randomnos + 1 ) - ( b * randomnos - 2 ) ).slice( 0, randomnos );
    };
    addTagsToPost();

    return {
      snippet,
      ...toRefs( props )
    };
  },
  props: {
    post: {
      type: Object,
      default: () =>
      {
        return {};
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>