/* 
包含应用的所有接口的接口请求函数
  函数内部调用ajax请求函数发送请求
  函数返回的时promis对象

*/

import ajax from './ajax'


// 首页三级分类
export function reqCategoryList() {
    // return ajax.get('/product/getBaseCategoryList') 
    // 发送不带参数的get请求
    // return ajax('/product/getBaseCategoryList')

    return ajax({
        url: '/product/getBaseCategoryList',
        // method : 'get'
    })
}