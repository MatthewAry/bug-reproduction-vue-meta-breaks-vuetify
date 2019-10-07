import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// https://github.com/declandewet/vue-meta
import VueMeta from 'vue-meta'

Vue.use(Router)
Vue.use(VueMeta, {
  // The component option name that vue-meta looks for meta info on.
  keyName: 'metaInfo'
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
