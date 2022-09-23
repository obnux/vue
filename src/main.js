require( 'dotenv' ).config();

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


// console.log( "process.env VueJs main", process.env.VUE_APP_ROOT_API );

createApp( App ).use( router ).mount( '#app' );
