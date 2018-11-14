import Vue from 'vue'
import Vuex from 'vuex'

import city from './city'
import category from './category'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        city,
        category
    }
})

export default store