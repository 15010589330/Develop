import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import FindMt from '../components/FindMt'
import FormMt from '../components/FormMt'
import MyMt from '../components/MyMt'
import Login from '../components/login'
import store from '../store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/FindMt',
      name: 'FindMt',
      component: FindMt
    },
    {
      path: '/FormMt',
      name: 'FormMt',
      component: FormMt,
      meta:{
        needLogin:true
      }
    },
    {
      path: '/MyMt',
      name: 'MyMt',
      component: MyMt,
      meta: {
        needLogin:true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ]
})
export default router;
router.beforeEach((to,from,next)=>{
  if (to.meta.needLogin) {
    let name=store.state.myName||localStorage.getItem('myName')
    if (name == 'undefined' || name == "" || name == null) {
      next({path:'/Login',query:{f:to.path}})
    }else {
      next()
    }
  }else {
    next()
  }
})
