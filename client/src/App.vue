<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-img
      max-height="50"
      max-width="50"
      src="./assets/github_logo.png"
    ></v-img>
    <v-toolbar-title>Github repositories search by language</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
