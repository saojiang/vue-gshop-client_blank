// 管理首页相关数据vuex子模块

import { reqCategoryList } from '@/api'

const state = {
    categoryList: [],
    xxx: 123,
    yyy:"qwe"
}

const mutations = {
    // 接收保存分类列表
    RECEIVE_CATEGORY_LIST(state, categoryList) { 
        state.categoryList = categoryList.splice(0,15)
    }
}
const actions = {
    // 获取三级分类列表地异步action
                
 async   getCategoryList({ commit }) { 
    //    发异步ajax请求(请求接口函数)
        const result = await reqCategoryList()
        if (result.code === 200) {
             // 如果请求成gong
        const categoryList = result.data
        commit ('RECEIVE_CATEGORY_LIST',categoryList)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    getters,
    actions

}