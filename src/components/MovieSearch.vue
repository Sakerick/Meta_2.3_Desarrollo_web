<template>

    <v-container>
        <v-card class="text-center ma-auto pa-5">
            <v-card-title class="ma-5" >
                Buscar peliculas
            </v-card-title>
            <v-text-field label="Titulo de la pelicula"></v-text-field>
            <v-autocomplete
            ref="country"
            v-model="movie"
            :items="movieType"
            :rules="[() => !!movieType || 'This field is required']"
            label="Tipo"
            placeholder="Selecciona"
            required
          ></v-autocomplete>
            <v-text-field label="Año"></v-text-field>
                <v-btn class="ma-auto w-100" prepend-icon="mdi-magnify" color="primary" > Buscar </v-btn>
                <v-btn class="mt-5 w-100" prepend-icon="mdi-close" color="dark" variant="outlined" > Limpiar </v-btn>
        </v-card>

    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const handleSearch = () => {

}


const handleClear = () => {
    
}
</script>

<script lang="ts">
export default {
    data: () => ({
        movieType: ['Pelicula','Serie', 'Documental'],
        movie: null
})
}
</script>
