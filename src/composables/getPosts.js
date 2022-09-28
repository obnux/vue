const { ref } = require( "vue" );

const getPosts = () =>
{
  const posts = ref( [] );
  const error = ref( null );
  const showPosts = ref( true );
  
  const load = async () =>
  {
    try
    {
      let data = await fetch( 'https://jsonplaceholder.typicode.com/posts/?id=1&id=50&id=20&id=2&id=5&id=8&id=10&id=45' );

      if ( !data.ok )
      {
        throw Error( 'no data available' );
      }

      posts.value = await data.json();

    } catch ( err )
    {
      error.value = err.message;
    }
  };


  return {
    posts,
    error,
    showPosts,
    load
  };
};

export default getPosts;