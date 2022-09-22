/* var dotenv = require( 'dotenv' );
var dotenvExpand = require( 'dotenv-expand' );

var myEnv = dotenv.config({ path: '/.env' } );
dotenvExpand.expand( myEnv ); */

import * as dotenv from 'dotenv'
dotenv.config()
// import express from 'express'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


console.log( "process.env VueJs main", process.env );

createApp( App ).use( router ).mount( '#app' );
