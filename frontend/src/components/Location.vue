<template>
  <v-app id="location">
    <v-container fluid fill-height>
      <v-layout row justify-center>
        <v-flex xs12 sm8 md4>
          <v-card>
            <v-toolbar color="yellow">
              <v-toolbar-title>Locations</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
              <v-btn icon @click.native.stop="addLocation=true">
                <v-icon>library_add</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list two-line>
              <template v-for="(item, index) in locations">
                <v-list-tile :key="index">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="addLocation" persistent max-width="500px">
      <v-container fluid>
        <v-card>
          <v-card-title>
            <span class="headline">New Location</span>
          </v-card-title>
          <v-form ref="addLocationForm" v-model="valid" lazy-validation>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                  v-model="locationName"
                  label="Location name"
                  :rules="locationNameRule"
                  required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                  v-model="streetNumber"
                  label="Street Number"
                  :rules="streetNumberRule"
                  required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="streetName"
                    label="Street Name"
                    :rules="streetNameRule"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    v-model="country"
                    :rules="countryRule"
                    :items="['Canada', 'United States of America', 'Other']"
                    label="Country"
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                  v-model="province"
                  :rules="provinceRule"
                  label="Province/State"
                  required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                  v-model="city"
                  :rules="cityRule"
                  label="City"
                  required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                  v-model="postalcode"
                  :rules="postalcodeRule"
                  label="Postal/Zip code"
                  required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Latitude"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Longitude"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="addLocation = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="submit">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: 'Location',
  data () {
    return {
      locationName: '',
      locationNameRule: [
        v => !!v || 'Location name required!'
      ],
      streetNumber: '',
      streetNumberRule: [
        v => !!v || 'Street number is required!'
      ],
      streetName: '',
      streetNameRule: [
        v => !!v || 'Street name is required!'
      ],
      country: '',
      countryRule: [
        v => !!v || 'Country name is required!'
      ],
      province: '',
      provinceRule: [
        v => !!v || 'Province/State name is required!'
      ],
      city: '',
      cityRule: [
        v => !!v || 'City name is required!'
      ],
      postalcode: '',
      postalcodeRule: [
        v => !!v || 'Postal/Zip Code is required!'
      ],
      valid: false,
      addLocation: false,
      locations: [
        {
          title: 'Some Title One',
          description: 'Description of some location. blag blah blah'
        },
        {
          title: 'Some Title One',
          description: 'Description of some location. blag blah blah'
        },
        {
          title: 'Some Title One',
          description: 'Description of some location. blag blah blah'
        },
        {
          title: 'Some Title One',
          description: 'Description of some location. blag blah blah'
        }
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.addLocationForm.validate()) {
        let title = this.locationName
        let description = this.streeNumber + ' ' +
                          this.streetName + ' ' +
                          this.city + ' ' +
                          this.province + ' ' +
                          this.country + ' ' +
                          this.postalcode
        this.locations.push({
          title,
          description
        })

        this.addLocation = false
      }
    }
  }
}
</script>

<style scoped>
</style>
