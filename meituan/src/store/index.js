import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const store= new Vuex.Store({
    // modules:{//引入子模块,在核心模块中只放首页的状态逻辑
        
    //   },
     strict:true,//开启严格模式，唯一改变状态的方式只有mutations，否则报错
     state:{//存状态
     },
     mutations:{//唯一改变状态的方式,不支持异步操作
     },
     getters:{//相当于计算属性，二次包装了state的状态
     },
     actions:{//异步行为来改变状态的，改变状态触发的也是mutations
     }
})

export default store
