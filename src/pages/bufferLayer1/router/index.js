import Vue from 'vue'
import Router from 'vue-router'
import Read from './../components/Read.vue'
import UpLoad from './../components/UpLoad.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/read',
      name: 'Read',
      component: Read
    },
    {
      path:'/upload',
      name:'UpLoad',
      component:UpLoad
    }
  ]
})
