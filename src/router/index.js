import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
    },
    {
      path: '/person',
      name: 'Person',
      component: () => import(/* webpackChunkName: "about" */ '../views/Person.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
    },
    {
      path: '/scan',
      name: 'Scan',
      component: () => import(/* webpackChunkName: "about" */ '../views/Scan.vue')
    },
    {
      path: '/notice',
      name: 'Notice',
      component: () => import(/* webpackChunkName: "about" */ '../views/Notice.vue')
    },
    {
      path: '/pay',
      name: 'Pay',
      component: () => import(/* webpackChunkName: "about" */ '../views/Pay.vue')
    },
    {
      path: '/map',
      name: 'Map',
      component: () => import(/* webpackChunkName: "about" */ '../views/Map/Map.vue')
    },
    {
      path: '/map/second',
      name: 'MapSecond',
      component: () => import(/* webpackChunkName: "about" */ '../views/Map/MapSecond.vue')
    },
    {
      path: '/map/third',
      name: 'MapThird',
      component: () => import(/* webpackChunkName: "about" */ '../views/Map/MapThird.vue')
    },
    {
      path: '/station',
      name: 'Station',
      component: () => import(/* webpackChunkName: "about" */ '../views/Map/Station.vue')
    },
    {
      path: '/record',
      name: 'Record',
      component: () => import(/* webpackChunkName: "about" */ '../views/Record.vue')
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
