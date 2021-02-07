import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jquery from 'jquery'
import Popper from 'popper.js'
import bootstrap from  'bootstrap'
import element from 'element-ui'

Vue.config.productionTip = false

Vue.use(element);

new Vue({
  router,
  store,
  jquery,
  Popper,
  bootstrap,
  element,
  render: h => h(App)
}).$mount('#app')


import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
