'use client';

import React, { useState, useEffect } from 'react';
import { Movie, MoviesResponse } from '@/types/tmdb';
import { fetchTrendingMovies } from '@/services/tmdb';

import { Skeleton } from '../ui/skeleton';
import Banner from '../shared/Banner';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[] | undefined>(undefined);
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data: MoviesResponse = await fetchTrendingMovies();
        setTrendingMovies(data.results.slice(0,10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTrending();
  }, []);

  if (!trendingMovies)
    return <Skeleton className='mb-10 h-[300px] w-full rounded-xl' />;

  return (
    <>
      <Banner movies={trendingMovies} />
    </>
  );
};

export default Trending;
