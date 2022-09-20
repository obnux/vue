import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
require( 'dotenv' ).config( { path: './.env' } );

createApp( App ).use( router ).mount( '#app' );
