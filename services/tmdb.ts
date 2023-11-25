import { Movie } from "@/types/tmdb"
import { tmdbApi } from "./api";

const tmdbImageUrl = 'https://image.tmdb.org/t/p/';

export const getImageUrl = (filePath: string, size: string = 'w500'): string => {
    return `${tmdbImageUrl}${size}${filePath}`;
}

export const fetchTrendingMovies = async (): Promise<Movie[]> => {
    try {
        console.log(process.env.NEXT_PUBLIC_TMDB_API_KEY)
        const response = await tmdbApi.get('/trending/movie/week');
        const trendingMovies: Movie[] = response.data.results;
        
        return trendingMovies;
    } catch (error: any) {
        console.log(error);
        throw error;
    }
}