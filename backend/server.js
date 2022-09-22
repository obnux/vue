const http = require( 'http' );

// console.log("process.env", process.env);
const server = http.createServer( ( req, res ) =>
{
  res.end( 'Voilà la réponse du serveur !' );
} );

server.listen( process.env.PORT || 3000 );