import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

import routes from '@/router'


const router = new VueRouter({
  routes
})

import store from '@/store'

Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
