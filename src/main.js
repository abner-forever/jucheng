import Vue from 'vue'
import App from './App.vue'

import router from './router'

import store from './store'

Vue.config.productionTip = false  //设置为 false 以阻止 vue 在启动时生成生产提示。

//引入flexble
import '@libs/flexible'

//引入插件
import '@libs'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

