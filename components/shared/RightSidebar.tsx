'use client';

import { useGenres } from '@/context/genres-provider';
import React, { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import { fetchTrendingMovies, getImageUrl } from '@/services/tmdb';
import { Movie, MoviesResponse } from '@/types/tmdb';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const RightSidebar = () => {
  const { genres, loading } = useGenres();
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchMovies = async () => {
      const res: MoviesResponse = await fetchTrendingMovies('day');
      setMovies(res.results.slice(0, 4));
    };

    fetchMovies();
  }, []);

  if (loading || !movies)
    return (
      <>
        <Skeleton className='mt-6 h-[400px] rounded-xl' />
        <Skeleton className='mt-6 h-[400px] rounded-xl' />
      </>
    );

  return (
    <section className='flex h-full flex-col space-y-4 border-l-2 border-slate-600 pt-6 text-white'>
      <div className='fixed px-[15px] overflow-y-auto max-h-screen custom-scrollbar'>
        <div className='mb-6'>
          <h2 className='mb-2 font-bold text-orange-600'>Genres</h2>
          <div className='flex flex-wrap items-center justify-start gap-2'>
            {genres?.map((genre) => {
              return (
                <div
                  key={genre.id}
                  className='cursor-pointer rounded-lg bg-white/10 p-2 text-[0.7rem] uppercase text-zinc-400 transition hover:bg-white/20 hover:text-white'
                >
                  <span>{genre.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className='pb-[100px]'>
          <h2 className='mb-2 font-bold text-orange-600'>Trending</h2>
          <div className='flex flex-col gap-3'>
            {movies.map((movie: Movie, index) => {
              return (
                <Link
                  href={`/movie/${movie.id}`}
                  key={index}
                  className='flex flex-row gap-3 hover:opacity-90'
                >
                  <Image
                    src={getImageUrl(movie.poster_path, 'w500')}
                    alt={movie.title}
                    height={200}
                    width={100}
                  />

                  <div className='flex flex-col text-sm'>
                    <h2 className='font-medium text-gray-300'>{movie.title}</h2>
                    <p className='text-gray-500'>{movie.release_date}</p>
                  </div>
                </Link>
              );
            })}
          </div>
         {/* <div className='mt-6 flex justify-center'>
        <Link href="/explore">
        <Button className='text-black'>See more</Button>
        </Link>
         </div> */}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
