<template>
  <v-card >
    <v-img :src="image" height="200px"/>
    <v-card-text>{{ text }}</v-card-text>
    <v-card-subtitle class="text-right">{{ dateString }}</v-card-subtitle>
    <!-- Bonus 4.2 solution: -->
    <!--<v-card-subtitle class="text-right">{{ $d(timestamp * 1000, 'long') }}</v-card-subtitle>-->
  </v-card>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    image: String,
    text: String,
    timestamp: Number,
  },
  computed: {
    dateString() {
      return this.$d(this.timestamp * 1000, 'long');
    },
  },
};
</script>

<style scoped>

</style>
