<template>
  <v-app>
    <v-app-bar color="surface-variant">
      <v-toolbar-title>CineApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" variant="text">Inicio</v-btn>
      <v-btn to="/about" variant="text">Acerca de</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>