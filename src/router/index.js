require( 'dotenv' ).config();

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/HomeView.vue' )
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue' )
  },
  {
    path: '/jobs',
    name: 'Jobs',

    component: () => import(/* webpackChunkName: "about" */ '../views/jobs/Jobs.vue' )
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/jobs/JobDetails.vue' )
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
