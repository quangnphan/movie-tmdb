'use client';

import React, { useState, useEffect } from 'react';
import { Movie } from '@/types/tmdb';
import { fetchTrendingMovies } from '@/services/tmdb';

import { Skeleton } from '../ui/skeleton';
import Banner from '../shared/Banner';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[] | null>(null);
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendingData = await fetchTrendingMovies();
        setTrendingMovies(trendingData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTrending();
  }, []);

  if (!trendingMovies)
    return <Skeleton className='h-[20px] w-full rounded-full' />;

  return (
    <div>
      <Banner movies={trendingMovies} />
    </div>
  );
};

export default Trending;
