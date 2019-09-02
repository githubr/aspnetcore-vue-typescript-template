import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import counterModule from './modules/counter-module'

Vue.use(Vuex)
Vue.use(Vuetify)

export default new Vuex.Store({
    state: {
        version: '1.0.0'
    },
    modules: {
        counterModule: counterModule
    }
})
