// require( 'dotenv' ).config();

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/HomeView.vue' )
  },

  {
    path: '/posts/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Details' ),
    props: true
  },
  // redirect
  {
    path: "/all-jobs",
    redirect: '/jobs'
  },

  // Catch all Error pages
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue' )

  }
];

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes
} );

export default router;
