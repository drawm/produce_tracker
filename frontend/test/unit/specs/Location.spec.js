import { mount, createLocalVue } from 'vue-test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Location from '@/components/Location'

describe('Location.vue', () => {

  const localVue = createLocalVue()
  localVue.use(Vuetify)

  mount(Location, {
      localVue: localVue
  })

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Location)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('v-toolbar-title').textContent).toEqual('Locations')
    //expect(vm.$el.querySelector('.hello h1').textContent).toEqual('Welcome to Your Vue.js App')
  })
})
