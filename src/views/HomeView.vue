<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts=posts />
  </div>

</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

export default {
    setup() {
        const posts = ref([
            { title: "Title 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris est, blandit vel tincidunt eu, sollicitudin id eros. Vivamus sem nulla, rhoncus vel arcu id, rutrum pharetra nunc. Duis vitae dictum ex. Sed vehicula risus purus, quis rutrum augue malesuada sed.", id: 1 },
            { title: "Title 2", body: "Etiam gravida felis a nisi sollicitudin tempor. Quisque sagittis, ipsum quis lacinia molestie, orci lorem dapibus neque, ac venenatis massa lectus id lectus. Donec scelerisque, eros nec venenatis bibendum, sem sem lacinia est, maximus sollicitudin odio est vel leo.", id: 2 }
        ]);
        return {
            posts
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
