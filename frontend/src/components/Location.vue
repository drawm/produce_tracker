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
            <v-list two-line dark>
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
        <v-card dark>
          <v-card-title>
            <span class="headline">New Location</span>
          </v-card-title>
          <v-form ref="addLocationForm" v-model="valid" lazy-validation>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Location name" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Street Number" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    label="Street Name"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    :items="['Canada', 'USA', 'Others...']"
                    label="Country"
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Email" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                    chips
                  ></v-autocomplete>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="addLocation = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="addLocation = false">Save</v-btn>
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
      locationAddress: '',
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
  }
}
</script>

<style scoped>
</style>
