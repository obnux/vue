const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

let userSchema = new Schema( {
  password: {
    type: String
  },
  email: {
    type: String
  },
  role: {
    type: String
  },
  skills: {
    type: Array
  },
}, {
  collection: 'users'
} );

module.exports = mongoose.model( 'User', userSchema );