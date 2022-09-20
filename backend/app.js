require( 'dotenv' ).config( { path: './.env' } );

let express = require( 'express' ),
  cors = require( 'cors' ),
  mongoose = require( 'mongoose' ),
  database = require( './database' ),
  bodyParser = require( 'body-parser' );

// console.log( process.env.DB_URL );


// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect( database.db, {
  useNewUrlParser: true,
  // useFindAndModify: true,
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

const userAPI = require( '../backend/routes/user.route' );
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