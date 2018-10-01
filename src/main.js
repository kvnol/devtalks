import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import { routes } from './router-config'

Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({
  routes,
  mode: 'history',
  saveScrollPosition: true
})

/* eslint-disable no-unused-vars */
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');