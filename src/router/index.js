import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Show from '../views/Show.vue'
import Mine from '../views/Mine.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
import City from '../views/Cities.vue'

import auth from '@util/auth'

Vue.use(Router)


const routes = [
  {
    path: '/',
    redirect:'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/city',
    name: 'city',
    component: City,
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    props: true
  },
  {
    path: '/show',
    name: 'show',
    component: Show,
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    beforeEnter:  (to, from ,next) => {
      let result = auth.authLogin()
      next(result.id ? true : {name: 'login'})
  }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
   
]

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
