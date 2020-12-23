/* 
所有路由匹配的数组
*/
import Home from '../view/Home'
import Search from '../view/Search'
import Register from '../view/Register'
import Login from '@/view/Login'

export default [
  {
    path: '/',
    component: Home
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: Search,
    // props: true, // 只映射params参数
    props: (route) => ({keyword3: route.params.keyword, keyword4: route.query.keyword2}) 
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
    meta: {
      isHideFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHideFooter: true
    }
  }
]