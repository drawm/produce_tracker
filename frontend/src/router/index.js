import Vue from 'vue'
import Router from 'vue-router'
import Location from '@/components/Location'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/locations',
      name: 'Locations',
      component: Location
    }
  ]
})
