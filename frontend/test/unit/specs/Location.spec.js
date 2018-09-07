import { mount, createLocalVue } from 'vue-test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Location from '@/components/Location'

describe('Location.vue', () => {

  const localVue = createLocalVue()
  localVue.use(Vuetify)

  const wrp = mount(Location, {
      localVue: localVue
  })

  it('should render correct contents', () => {
    expect(wrp.find('div.v-toolbar__title').text()).toEqual('Locations')
  })
})
