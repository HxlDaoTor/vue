// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import VueResource from 'vue-resource'
import '../../assets/iconfont/iconfont.css'
import '../../assets/iconfont/iconfont.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Tip from '../../assets/js/Popup.js'
Vue.use(Tip)  
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  components: { App },
  template: '<App/>'
})
