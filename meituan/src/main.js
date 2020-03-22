import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import plugins from './base'
import "@/assets/iconfont/iconfont.css"; 
import "@/assets/symbol/iconfont.js";
import "@/assets/fontmy/iconfont.js";
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {//第三方的图片懒加载
  preLoad: .6,
  error: './static/img/default.jpeg',//当图片没有成功加载的默认图片
  loading: './static/img/timg.gif', //加载图片的默认的图片
  attempt: 1
})
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
