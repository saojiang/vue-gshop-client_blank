import Vue from 'vue'
import App from '@/App'
import router from './router'




Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App),
  router //所有的组件都可以通过this.$router获取路由器对象
})