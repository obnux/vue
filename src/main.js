require( 'dotenv' ).config({ path: './.env' }); 
import { createApp } from 'vue';
import App from './App.vue';

console.log( " => ", process.env );
createApp( App ).mount( '#app' );
