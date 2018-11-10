import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

//axios
import ajax from '@util/axios'

//引入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

//引入bus
import bus from '@util/bus'


 //全局注册
// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(Mint);

Vue.prototype.$http = ajax
Vue.prototype.$bus = bus