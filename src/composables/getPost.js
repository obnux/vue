const { ref } = require( "vue" );

const getPost = ( id ) =>
{
  // const postId = ref( id );
  const post = ref( null );
  const error = ref( null );

  // postId.value = props.post.Id;

  const load = async () =>
  {
    try
    {
      let data = await fetch( 'https://jsonplaceholder.typicode.com/posts/' + id );

      if ( !data.ok )
      {
        throw Error( 'Post does not exist' );
      }

      post.value = await data.json();

    } catch ( err )
    {
      error.value = err.message;
    }
  };


  return {
    post,
    error,
    load
  };
};

export default getPost;