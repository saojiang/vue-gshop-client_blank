// vue核心地管理对象store ==?仓库

import Vue from 'vue'
import Vuex from 'vuex'

import home from './moudles/home'
import user from './moudles/user'


Vue.use(Vuex)


const mutations = {
    
  }
  
  const actions = {
   
  }
  
  const getters = {
   
  }


// 向外暴露store对象
export default new Vuex.Store({
  
    mutations,
    actions,
    getters,
    modules: {
        home,
        user
    }
})


/* 
vuex多模块编程地总状态结构
{
    home:{
    categoryList:[],
    xxx:123,
    yyy:"acv"
    }
}

*/