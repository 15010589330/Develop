import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import plugins from './base'
import "@/assets/iconfont/iconfont.css"; 
import "@/assets/symbol/iconfont.js"; 

plugins.init(Vue);
require('./mock')
require('./mock/hotal')
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
