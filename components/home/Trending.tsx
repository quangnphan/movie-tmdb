'use client';

import React, { useState, useEffect } from 'react';
import { Movie, WeeklyMoviesResponse } from '@/types/tmdb';
import { fetchTrendingMovies } from '@/services/tmdb';

import { Skeleton } from '../ui/skeleton';
import Banner from '../shared/Banner';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[] | undefined>(undefined);
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data: WeeklyMoviesResponse = await fetchTrendingMovies();
        setTrendingMovies(data.results.slice(0,10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTrending();
  }, []);

  if (!trendingMovies)
    return <Skeleton className='h-[20px] w-full rounded-full' />;

  return (
    <>
      <Banner movies={trendingMovies} />
    </>
  );
};

export default Trending;
