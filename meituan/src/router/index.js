import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import FindMt from '../components/FindMt'
import FormMt from '../components/FormMt'
import MyMt from '../components/MyMt'
import Login from '../components/login'

Vue.use(Router)

export default new Router({
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
      component: FormMt
    },
    {
      path: '/MyMt',
      name: 'MyMt',
      component: MyMt
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }

  ]
})
