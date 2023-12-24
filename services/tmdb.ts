import { MoviesResponse, Genre } from '@/types/tmdb';
import { tmdbApi } from './api';
import { tmdbImageUrl } from '@/helper/constants';

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
    console.log("Failed to fetch genre list")
  }
}

export const fetchTrendingMovies = async (param: string): Promise<MoviesResponse> => {
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
