import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import  store from '@/store'
import TypeNav from './components/TypeNav'

//创造全局组件 
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})