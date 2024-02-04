import { MoviesResponse, Genre } from '@/types/tmdb';
import { tmdbApi } from './api';

const tmdbImageUrl = 'https://image.tmdb.org/t/p/';

export const getImageUrl = (
  filePath: string,
  size: string = 'w500'
): string => {
  return `${tmdbImageUrl}${size}${filePath}`;
};

export const fetchGenreList = async () => {
  try {
    const response = await tmdbApi.get('/genre/movie/list');
    const genres: Genre[] = response.data.genres;
    return genres;
  } catch (error) {
    console.log('Failed to fetch genre list');
  }
};

export const fetchTrendingMovies = async (
  param: string
): Promise<MoviesResponse> => {
  try {
    const response = await tmdbApi.get(`/trending/movie/${param}`);
    const trendingMovies: MoviesResponse = response.data;

    return trendingMovies;
  } catch (error: any) {
    console.log('Error fetching trending movies:', error.message);
    throw error;
  }
};

export const fetchTopRatedMovies = async (): Promise<MoviesResponse> => {
  try {
    const response = await tmdbApi.get('/movie/top_rated');
    const topRatedMovies: MoviesResponse = response.data;
    return topRatedMovies;
  } catch (error: any) {
    console.error('Error fetching top-rated movies:', error.message);
    throw error;
  }
};

export const fetchUpcomingMovies = async (): Promise<MoviesResponse> => {
  try {
    const response = await tmdbApi.get('/movie/upcoming');
    const upcomingMovies: MoviesResponse = response.data;
    return upcomingMovies;
  } catch (error: any) {
    console.error('Error fetching upcoming movies:', error.message);
    throw error;
  }
};

export const fetchDiscoverMovies = async ({
  genres = [],
  sortOrder = 'desc',
}) => {
  try {
    const response = await tmdbApi.get('/discover/movie', {
      params: {
        with_genres: genres.join(','),
        sort_by: `popularity.${sortOrder}`,
      },
    });
    const discover: MoviesResponse = response.data;
    return discover;
  } catch (error: any) {
    console.error('Error fetching top-rated movies:', error.message);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await tmdbApi.get(`https://api.themoviedb.org/3/movie/${movieId}`);

    return response.data;
  } catch (error: any) {
    console.log('Error fetching movie details:', error.message)
    throw error;
  }
}
