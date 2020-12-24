/* 此文件是前后台交互   axios二次分装
  1.先配置通用的基础路经和超时
  2.显示进度条 (nprogress)
  3.成功返回数据不在时response,而是直接响应式数据 response.data
  4.统一处理请求错误


  此文件代码在发送.get 或serve请求时使用
*/
import axios from 'axios'
import Nprogress from 'nprogress'
// 还要引入css样式
import 'nprogress/nprogress'

// 1配置通用的基础路径和超时
const service = axios.create({
    baseURL: '/api', //路径
    timeout:30000    //超出时间
})


// 添加请求拦截器
service.interceptors.request.use((config) => { 
    //2 显示请求进度条
    Nprogress.start()

    // 必须返回config
    return config // 根据返回的config,使用xhr对象发送ajax请求
})

// 添加响应拦截器
service.interceptors.response.use(
    response => { 
        // 隐藏请求进去条
        Nprogress.done()
        // reutrn response 
        //3成功的回调不在时reponse 而是response.data

        return response.data
    },
    error => {
        // 隐藏请求进度条:在响应拦截器失败的回调中
        Nprogress.done()
        // 4.统一处理请求错误,具体请求也可以选择处理或不处理
        return Promise.reject(error)
    }
)


// 向外暴露
export default  service