import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Aircraft from '@/components/Aircraft'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/aircraftInfo',
      name: 'Aircraft',
      component: Aircraft
    }
  ],
  mode: 'history'
})
