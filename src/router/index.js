import Vue from 'vue'
import Router from 'vue-router'
import cinema from '../components/cinema'
import film from '../components/film'
import personal from '../components/personal'
import nowplaying from '../components/nowplaying'
import comingsoon from '../components/comingsoon'
import detail from '../components/detail'
Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/personal',
      component: personal
    },
    {
      path: '/detail',
      component: detail
    },
    {
    	path:"*",
    	redirect:"/film/nowplaying" 
    }
    
  ]
})
