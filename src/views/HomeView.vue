<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>
      Var One - REF
      {{varOne.name}} - {{varOne.age}}
    </p>
    <p>
      Var Tow - Reactiv
      {{varTow.name}} - {{varTow.age}}
    </p>
    <button @click="updateVarOne">Update updateVarOne</button>
    <button @click="updateVarTow">Update updateVarTow</button>
    <br>
    <br>
    <button @click="handelClick">Click me</button> {{count}}

    <br>
    <br>
    <hr>
    <hr>

    <h2> Computed </h2>
    <input type="text" v-model="search">

    <p>search term : {{search}} </p>

    <p v-for="name in matchingNames" :key="name">
      {{name}}
    </p>
    <button @click="handelWatchClick">Stop Watching</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed } from '@vue/reactivity';
import { reactive, toRefs, ref, watch, watchEffect } from 'vue';

export default {
  setup ()
  {
    /* Drowbacks of Reactive are : 
    * 1) We can't use premitive types (string/number/boolean) and they cannot be REACTIVE 
         &  we can't change/Update its value
      2) 
    */
    // Using REF
    const varOne = ref( { name: "Ob", age: "30" } );
    const updateVarOne = () =>
    {
      varOne.value.age = 40;
    };
    // Using Reactive
    const varTow = reactive( { name: "Ob 2", age: "33" } );
    const updateVarTow = () =>
    {
      varTow.age = 42;
    };
    const state = reactive( {
      count: 0,
      array: Array( 10 ).fill( {} )
    } );
    const handelClick = () =>
    {
      state.count++;

      console.log( 'clicked', state.array.toString() );
    };


    /**
     * Using Computed Values 
     */
    const search = ref( '' );
    const names = ref( [ "mario", "obeydi", "browser", "toad" ] );

    const stopWatch = watch( search, () =>
    {
      console.log( "watch is running" );
    } );

    // RUNs when the componenet is LOADED => with the SetUp first run
    // it run's when the SEARCH change it's value
    const stopEffect = watchEffect( () =>
    {
      console.log( "watchEffect is running", search.value );
    } );

    const matchingNames = computed( () =>
    {
      return names.value.filter( ( name ) => name.includes( search.value ) );
    } );


    const handelWatchClick = () =>
    {
      stopWatch();
      stopEffect();
    };
    return {
      handelClick,
      varOne,
      varTow,
      updateVarTow,
      updateVarOne,
      ...toRefs( state ),
      matchingNames,
      search,
      names,
      stopWatch,
      stopEffect,
      handelWatchClick
    };
  }
}

</script>
<style>
body {
  max-width: 600px;
  margin: 50px auto;
}
</style>
