'use client';

import { fetchUpcomingMovies } from '@/services/tmdb';
import { Movie, MoviesResponse } from '@/types/tmdb';
import React, { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import HeadingText from '../shared/HeadingText';
import MoviesGrid from '../shared/MoviesGrid';

const Upcoming = () => {
  const [movies, setMovies] = useState<Movie[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data: MoviesResponse = await fetchUpcomingMovies();
        setMovies(data.results.slice(0, 12));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  if (!movies)
    return <Skeleton className='mb-10 h-[300px] w-full rounded-xl' />;

  return (
    <>
      <HeadingText text='Upcoming Movies' />
      <MoviesGrid movies={movies} />
    </>
  );
};

export default Upcoming;
