import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Show from '../views/Show.vue'
import Mine from '../views/Mine.vue'

Vue.use(Router)


const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias:'/'
  },
  {
    path: '/show',
    name: 'show',
    component: Show
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  }
]

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
