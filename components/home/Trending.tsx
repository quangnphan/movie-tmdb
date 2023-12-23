'use client';

import React, { useState, useEffect } from 'react';
import { Movie, MoviesResponse } from '@/types/tmdb';
import { fetchTrendingMovies } from '@/services/tmdb';

import { Skeleton } from '../ui/skeleton';
import Banner from '../shared/Banner';
import { useGenres } from '@/context/genres-provider';

const Trending = () => {
  const {genres,loading} = useGenres();
  const [trendingMovies, setTrendingMovies] = useState<Movie[] | undefined>(undefined);

  useEffect(() => {
    const getGenreNames = (genreIds: number[]) => {
      return genreIds.map((genreId) => {
        const genre = genres?.find((g) => g.id === genreId);
        return genre ? genre.name : 'Unknown Genre';
      });
    };
  
    const fetchTrending = async () => {
      try {
        const data: MoviesResponse = await fetchTrendingMovies();
        if(data && !loading){
          const movies = data.results;
          const moviesWithGenres = movies.map((movie) => ({
            ...movie,
            genres: getGenreNames(movie.genre_ids)
          }))

          setTrendingMovies(moviesWithGenres.slice(0,10));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTrending();
  }, [genres, loading]);

  if (!trendingMovies)
    return <Skeleton className='mb-10 h-[300px] w-full rounded-xl' />;

  return (
    <>
      <Banner movies={trendingMovies} />
    </>
  );
};

export default Trending;
