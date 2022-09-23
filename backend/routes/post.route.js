const express = require( 'express' );
const postRoute = express.Router();

// User model
let UserModel = require( '../models/Post' );

postRoute.route( '/' ).get( ( req, res ) =>
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
postRoute.route( '/create-user' ).post( ( req, res, next ) =>
{
  // console.log( "req.body", req.body );

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
postRoute.route( '/edit-user/:id' ).get( ( req, res ) =>
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
postRoute.route( '/update-user/:id' ).post( ( req, res, next ) =>
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
postRoute.route( '/delete-user/:id' ).delete( ( req, res, next ) =>
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

module.exports = postRoute;