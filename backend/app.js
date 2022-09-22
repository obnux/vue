<<<<<<< HEAD
require( 'dotenv' ).config();
process.env[ 'DB_URL' ] = 'mongodb+srv://obeydi:ObeydiMongo@cluster-tp-amin.picvl.mongodb.net/?retryWrites=true&w=majority';
=======
require( 'dotenv' ).config( { path: './.env' } );
>>>>>>> cfe51d9de68379b3119990d4ea47b4de8c31ba64

let express = require( 'express' ),
  cors = require( 'cors' ),
  mongoose = require( 'mongoose' ),
  bodyParser = require( 'body-parser' );


<<<<<<< HEAD
const uri = "mongodb+srv://obeydi:ObeydiMongo@cluster-tp-amin.picvl.mongodb.net/?retryWrites=true&w=majority";


// Connect mongoDB
mongoose.Promise = global.Promise;

mongoose.connect( uri, {
=======
// Connect mongoDB
mongoose.Promise = global.Promise;
const conn = mongoose.connect( process.env.DB_URL, {
>>>>>>> cfe51d9de68379b3119990d4ea47b4de8c31ba64
  useNewUrlParser: true,
  // useFindAndModify: false,
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
// const db = conn.db('UsersVueExpres');
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