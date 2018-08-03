import Vue from 'vue'
import Router from 'vue-router'
import cinema from '../components/cinema'
import film from '../components/film'
import personal from '../components/personal'
import nowplaying from '../components/nowplaying'
import comingsoon from '../components/comingsoon'
import detail from '../components/detail'
import meituan from '../components/meituan'
import cellphone from '../components/cellphone'


 
Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/personal',
      component: personal,
      children:[
      {
        path:"meituan",
      component:meituan

      },
      {
        path:"cellphone",
        component:cellphone
      }]
    },
    {
      path: '/cinema',
      component: cinema
    },
    {
      path: '/film',
      component: film,
      children:[
      {
      	path:"nowplaying",
      component:nowplaying

      },
      {
      	path:"comingsoon",
      	component:comingsoon
      }]
    },
   
    {
      path: '/detail/:Tibbersid',
      component: detail
    },
    {
    	path:"*",
    	redirect:"/film/nowplaying" 
    }
    
  ]
})
