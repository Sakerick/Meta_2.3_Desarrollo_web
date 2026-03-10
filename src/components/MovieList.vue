<template>
  <v-row>
    <v-col
      v-for="movie in movies"
      :key="movie.imdbID"
      cols="12"
      sm="6"
      lg="4"
    >
      <v-card 
        hover 
        class="movie-card"
        @click="$emit('select-movie', movie.imdbID)"
      >
        <v-img
          :src="movie.Poster"
          height="350"
          cover
          class="align-end"
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height bg-grey-lighten-4">
              <v-progress-circular
                indeterminate
                color="grey-lighten-1"
              ></v-progress-circular>
            </div>
          </template>

          <template v-slot:error>
            <div class="d-flex flex-column align-center justify-center fill-height bg-grey-lighten-2 text-grey-darken-1">
              <v-icon size="x-large">mdi-image-off</v-icon>
              <span class="text-caption mt-2">Sin Poster</span>
            </div>
          </template>
        </v-img>

        <v-card-title class="text-subtitle-1 pb-0 text-truncate">
          {{ movie.Title }}
        </v-card-title>
        
        <v-card-subtitle class="pb-3">
          {{ movie.Year }} • {{ formatType(movie.Type) }}
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Definición de las props y los eventos que este componente recibe/emite
defineProps({
  movies: {
    type: Array,
    required: true,
    default: () => []
  }
});

defineEmits(['select-movie']);

// Una pequeña función helper opcional para formatear el tipo
const formatType = (type) => {
  if (!type) return '';
  return type.charAt(0).toUpperCase() + type.slice(1);
};
</script>

<style scoped>
/* Un pequeño estilo extra para mejorar la experiencia de usuario */
.movie-card {
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}
.movie-card:hover {
  transform: translateY(-5px);
}
.text-truncate {
  /* Asegura que títulos muy largos no rompan el diseño */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>