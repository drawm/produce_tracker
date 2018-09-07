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

  it('does not display element if there are no items', () => {
    wrp.setData({ locations: [] })
    expect(wrp.find('ul.v-expansion-panel').isEmpty()).toBe(true)
  })

  it('displays element when there are items', () => {
    wrp.setData({ 
      locations: [
        {
          name: 'Super Market One',
          streetNumber: 1234,
          streetName: 'The Street',
          city: 'Montreal',
          province: 'Quebec',
          country: 'Canada',
          postalcode: 'H0H0H0'
        },
        {
          name: 'Super Market One',
          streetNumber: 1234,
          streetName: 'The Street',
          city: 'Montreal',
          province: 'Quebec',
          country: 'Canada',
          postalcode: 'H0H0H0'
        },
        {
          name: 'Super Market One',
          streetNumber: 1234,
          streetName: 'The Street',
          city: 'Montreal',
          province: 'Quebec',
          country: 'Canada',
          postalcode: 'H0H0H0'
        }
      ] 
    })
    expect(wrp.findAll('li.v-expansion-panel__container').length).toBe(3)
  })
})
