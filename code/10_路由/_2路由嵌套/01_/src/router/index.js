/*路由器模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*路由*/
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Messages from '../views/Messages.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {path:'/home/news',component:News},
        {path:'messages',component:Messages},
        {path:'/home/',redirect:'/home/news'}
      ]
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
