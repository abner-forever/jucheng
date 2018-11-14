import Vue from 'vue'
import App from './App.vue'

import router from './router'

import store from './store'

Vue.config.productionTip = false

import '@libs/flexible'

//引入插件
import '@libs'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
