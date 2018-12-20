import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

//axios
import {ajax , request} from '@util/axios'

//引入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

//引入bus
import bus from '@util/bus'

//引入touch
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})


 //全局注册
// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(Mint);
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.prototype.$http = ajax
Vue.prototype.$request = request
Vue.prototype.$bus = bus