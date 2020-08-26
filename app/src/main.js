import request from 'request'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@fortawesome/fontawesome-free/css/all.min.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar, faAngleRight, faAngleLeft, faAngleDoubleLeft, faAngleDoubleRight, faTh, faList, faArrowsAlt, faUser, faPencilAlt, faThList, faCog, faPaw, faBolt, faCloudMoonRain } from "@fortawesome/free-solid-svg-icons"
library.add(faStar, faAngleRight, faAngleLeft, faAngleDoubleLeft, faAngleDoubleRight, faTh, faList, faArrowsAlt, faUser, faPencilAlt, faThList, faCog, faPaw, faBolt, faCloudMoonRain)
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

import "./assets/main.css"
import "./assets/themes/dark.css"

Vue.config.productionTip = false
Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

console.log(typeof request)