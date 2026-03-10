const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (params) => {
  const url = new URL(BASE_URL);
  url.searchParams.append('apikey', API_KEY);
  url.searchParams.append('s', params.query);
  url.searchParams.append('type', params.type || 'movie');
  
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error en la red');
  return await response.json();
};

export const getMovieDetails = async (imdbID) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`);
  if (!response.ok) throw new Error('Error al obtener detalles');
  return await response.json();
};