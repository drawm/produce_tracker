<template>
  <div id="app">
    <v-app id="location">
      <v-content>
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
                  <v-btn icon>
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
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Location',
  data () {
    return {
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
