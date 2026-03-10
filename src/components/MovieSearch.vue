<template>
  <v-container>
    <v-card class="text-center ma-auto pa-5" elevation="2">
      <v-card-title class="ma-5 text-h5">
        Buscar películas
      </v-card-title>

      <v-text-field 
        v-model="searchQuery" 
        label="Título de la película"
        variant="outlined"
        clearable
      ></v-text-field>

      <v-autocomplete
        v-model="selectedType"
        :items="movieTypeOptions"
        label="Tipo"
        placeholder="Selecciona"
        variant="outlined"
        required
      ></v-autocomplete>

      <v-text-field 
        v-model="searchYear" 
        label="Año"
        variant="outlined"
      ></v-text-field>

      <v-btn 
        class="ma-auto w-100" 
        prepend-icon="mdi-magnify" 
        color="primary"
        :disabled="!searchQuery"
        @click="submitSearch"
      > 
        Buscar 
      </v-btn>

      <v-btn 
        class="mt-5 w-100" 
        prepend-icon="mdi-close" 
        color="secondary" 
        variant="outlined"
        @click="clearForm"
      > 
        Limpiar 
      </v-btn>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

// Definición de los eventos que este componente puede emitir
const emit = defineEmits(['search-movies', 'clear-results']);

// Estado local de los campos del formulario
const searchQuery = ref('');
const searchYear = ref('');
const selectedType = ref('movie');

// Opciones para el v-autocomplete
const movieTypeOptions = [
  { title: 'Película', value: 'movie' },
  { title: 'Serie', value: 'series' },
  { title: 'Episodio', value: 'episode' }
];

// Método para emitir la búsqueda al padre
const submitSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search-movies', {
      query: searchQuery.value,
      type: selectedType.value,
      year: searchYear.value
    });
  }
};

// Método para limpiar el formulario y resetear resultados en el padre
const clearForm = () => {
  searchQuery.value = '';
  searchYear.value = '';
  selectedType.value = 'movie';
  emit('clear-results');
};
</script>