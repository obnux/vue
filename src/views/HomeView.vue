<template>
  <div class="home">
    <h1>Home Page</h1>
    <button @click="handelClick">Click me</button>
    {{count}}
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs } from 'vue';

export default {
  setup ()
  {
    // Drowback
    const state = reactive( {
      count: 0,
      array: Array( 10 ).fill( {} )
    } );

    const handelClick = () =>
    {
      state.count++;
     
      console.log( 'clicked', state.array.toString() );
    };

    return {
      handelClick,
      ...toRefs( state ),
    };
  }
}

</script>
