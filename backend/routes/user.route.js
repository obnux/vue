const express = require( 'express' );
const userRoute = express.Router();

// User model
let UserModel = require( '../models/User' );

userRoute.route( '/' ).get( ( req, res ) =>
{
  UserModel.find( ( error, data ) =>
  {
    if ( error )
    {
      return next( error );
    } else
    {
      res.json( data );
    }
  } );
} );

// Create User
userRoute.route( '/create-user' ).post( ( req, res, next ) =>
{
  console.log( "req.body", req.body );
  
  UserModel.create( req.body, ( error, data ) =>
  {
    if ( error )
    {
      return next( error );
    } else
    {
      res.json( data );
    }
  } );
} );

// Edit User
userRoute.route( '/edit-user/:id' ).get( ( req, res ) =>
{
  UserModel.findById( req.params.id, ( error, data ) =>
  {
    if ( error )
    {
      return next( error );
    } else
    {
      res.json( data );
    }
  } );
} );

// Update user
userRoute.route( '/update-user/:id' ).post( ( req, res, next ) =>
{
  UserModel.findByIdAndUpdate( req.params.id, {
    $set: req.body
  }, ( error, data ) =>
  {
    if ( error )
    {
      return next( error );
    } else
    {
      res.json( data );
      console.log( 'User successfully updated!' );
    }
  } );
} );

// Delete user
userRoute.route( '/delete-user/:id' ).delete( ( req, res, next ) =>
{
  UserModel.findByIdAndRemove( req.params.id, ( error, data ) =>
  {
    if ( error )
    {
      return next( error );
    } else
    {
      res.status( 200 ).json( {
        msg: data
      } );
    }
  } );
} );

module.exports = userRoute;