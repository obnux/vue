require( 'dotenv' ).config( { path: './.env' } );
console.log( process.env.DB_URL );

module.exports = {
   db: process.env.DB_URL
};