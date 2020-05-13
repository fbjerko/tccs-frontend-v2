<template>
  <v-container fluid class="fill-height">
    <v-row class="flex-column">
      <v-col class="text-center headline">
        This app is gonna help save the world by training a bunch of promising young developers.
      </v-col>
      <v-col class="d-flex justify-center">
        <v-btn :to="{name: 'Feed'}">
          Take me to the feed
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-card max-width="400px">
          <v-card-text class="title">
            "This app changed my life."
          </v-card-text>
          <v-card-actions class="float-right">
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  :src="require('@/assets/isa1.png')"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Isa</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-card max-width="400px">
          <v-card-text class="title">
            "After taking this Vue course I immediately removed PHP from my CV."
          </v-card-text>
          <v-card-actions class="float-right">
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  :src="require('@/assets/isa2.png')"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Isa Salem</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-card max-width="400px">
          <v-card-text class="title">
            "This course made me buy a turtleneck and glasses without strength."
          </v-card-text>
          <v-card-actions class="float-right">
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  :src="require('@/assets/isa3.png')"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>Isa S. Hame</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
