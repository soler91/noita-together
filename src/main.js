import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@fortawesome/fontawesome-free/css/all.min.css"
Vue.config.productionTip = false

import "./assets/normalize.css"

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')