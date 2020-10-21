import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/home/HelloWorld'
import Business from "@/components/home/Business";
import Api from "@/components/home/Api"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/api',
      name: 'Api',
      component: Api
    }
  ],
  mode:'history'
})
