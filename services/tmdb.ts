import { MoviesResponse, Genre } from '@/types/tmdb';
import { tmdbApi } from './api';

const tmdbImageUrl = 'https://image.tmdb.org/t/p/';

export const getImageUrl = (
  filePath: string,
  size: string = 'w500'
): string => {
  return `${tmdbImageUrl}${size}${filePath}`;
};

export async function fetchGenreList() {
  const response = await tmdbApi.get('/genre/movie/list');
  return response.data.genres;
}

export async function fetchTrendingMovies(param: string) {
  const response = await tmdbApi.get(`/trending/movie/${param}`);
  return response.data;
}

export async function fetchTopRatedMovies() {
  const response = await tmdbApi.get('/movie/top_rated');
  return response.data;
}

export async function fetchUpcomingMovies() {
  const response = await tmdbApi.get('/movie/upcoming');
  return response.data;
}

export async function fetchDiscoverMovies({ genres = [], sortOrder = 'desc' }) {
  const response = await tmdbApi.get('/discover/movie', {
    params: {
      with_genres: genres.join(','),
      sort_by: `popularity.${sortOrder}`,
    },
  });
  return response.data;
}

export async function fetchMovieDetails(movieId: string) {
  const response = await tmdbApi.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&append_to_response=credits,videos`
  );
  return response.data;
}
