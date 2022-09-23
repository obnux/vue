require( 'dotenv' ).config( { path: './.env' } );

let express = require( 'express' ),
  cors = require( 'cors' ),
  mongoose = require( 'mongoose' ),
  bodyParser = require( 'body-parser' );


// Connect mongoDB
mongoose.Promise = global.Promise;
const conn = mongoose.connect( process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} ).then( () =>
{
  console.log( "Database connected" );
},
  error =>
  {
    console.log( "Database could't be connected to: " + error );
  }
);
// const db = conn.db('blog-dojo');
const userAPI = require( './routes/post.route' );

const app = express();
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );
app.use( cors() );

// API
app.use( '/api', userAPI );

// Create port
const port = process.env.PORT || 3000;
const server = app.listen( port, () =>
{
  console.log( 'Connected to port ' + port );
} );

// Find 404
app.use( ( req, res, next ) =>
{
  next( createError( 404 ) );
} );

// error handler
app.use( function ( err, req, res, next )
{
  console.error( err.message );
  if ( !err.statusCode ) err.statusCode = 500;
  res.status( err.statusCode ).send( err.message );
} );