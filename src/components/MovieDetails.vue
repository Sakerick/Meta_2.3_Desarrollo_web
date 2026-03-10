<template>
  <v-dialog v-model="dialog" persistent max-width="800">
    <v-card v-if="movie">
      <v-row no-gutters>
        <v-col cols="12" md="5">
          <v-img :src="movie.Poster" height="100%" cover></v-img>
        </v-col>
        <v-col cols="12" md="7">
          <v-card-title class="text-h4">{{ movie.Title }}</v-card-title>
          <v-card-text>
            <div class="mb-2">
              <v-chip color="primary" class="mr-2">{{ movie.Year }}</v-chip>
              <v-chip color="secondary" class="mr-2">{{ movie.Genre }}</v-chip>
              <v-chip color="secondary">{{ movie.Runtime }}</v-chip>
            </div>
            <p class="text-body-1">{{ movie.Plot }}</p>
            <v-divider class="my-4"></v-divider>
            <p><strong>Director:</strong> {{ movie.Director }}</p>
            <p><strong>Actores:</strong> {{ movie.Actors }}</p>
            <p><strong>Rating:</strong> ⭐ {{ movie.imdbRating }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" variant="text" @click="$emit('close-details')">Cerrar</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  movie: Object
});
const emit = defineEmits(['close-details']);

// Sincronizar el estado del diálogo con la existencia del objeto movie
const dialog = computed(() => !!props.movie);
</script>