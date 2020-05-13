<template>
  <v-app-bar app>
    <v-toolbar-items>
      <v-btn icon @click="onClick">
        <v-icon>
          mdi-home
        </v-icon>
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-title>
      {{ pageTitle }}
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheToolbar',
  methods: {
    onClick() {
      this.$router.push({ name: 'Home' });
    },
  },
  computed: {
    pageTitle() {
      return this.$route.meta.pageTitle;
    },
  },
};
</script>

<style scoped>

</style>
