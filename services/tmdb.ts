import { TopRatedMoviesResponse, WeeklyMoviesResponse } from "@/types/tmdb"
import { tmdbApi } from "./api";
import { tmdbImageUrl } from "@/helper/constants";

export const getImageUrl = (filePath: string, size: string = 'w500'): string => {
    return `${tmdbImageUrl}${size}${filePath}`;
}

export const fetchTrendingMovies = async (): Promise<WeeklyMoviesResponse> => {
    try {
        const response = await tmdbApi.get('/trending/movie/week');
        const trendingMovies: WeeklyMoviesResponse = response.data;
        
        return trendingMovies;
    } catch (error: any) {
        console.log('Error fetching trending movies:', error.message);
        throw error;
    }
}

export const fetchTopRatedMovies = async (): Promise<TopRatedMoviesResponse> => {
    try {
      const response = await tmdbApi.get('/movie/top_rated');
      const topRatedMovies: TopRatedMoviesResponse = response.data;
      return topRatedMovies;
    } catch (error: any) {
      console.error('Error fetching top-rated movies:', error.message);
      throw error;
    }
  };