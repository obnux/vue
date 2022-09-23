const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

let userSchema = new Schema( {
  title: {
    type: String
  },
  content: {
    type: String
  },
  tags: {
    type: Array
  },
}, {
  collection: 'posts'
} );

module.exports = mongoose.model( 'Post', userSchema );