'use client';

import { fetchTopRatedMovies } from '@/services/tmdb';
import { Movie, MoviesResponse } from '@/types/tmdb';
import React, { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import HeadingText from '../shared/HeadingText';
import MoviesGrid from '../shared/MoviesGrid';

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data: MoviesResponse = await fetchTopRatedMovies();
        setTopRatedMovies(data.results.slice(0, 12));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  if (!topRatedMovies)
    return <Skeleton className='mb-10 h-[300px] w-full rounded-xl' />;

  return (
    <>
      <HeadingText text='Top Rated Movies' />
      <MoviesGrid movies={topRatedMovies} />
    </>
  );
};

export default TopRated;
