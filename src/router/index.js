import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

// 暴露路由器对象
export default new VueRouter({
    mode: 'history',   //没有#的模式
    routes   //所有的路由组件
})