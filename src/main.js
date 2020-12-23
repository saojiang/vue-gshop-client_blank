import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import TypeNav from './components/TypeNav'

//创造全局组件 
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  router
})