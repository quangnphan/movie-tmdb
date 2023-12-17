import React from 'react';
import { Movie } from '@/types/tmdb';
import Image from 'next/image';
import { getImageUrl } from '@/services/tmdb';

interface MoviesProps {
  movies: Movie[];
}

const MoviesGrid = ({ movies }: MoviesProps) => {
  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`relative rounded-lg bg-gray-800 p-4 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
        >
         <div className='h-24'>
         <Image
            src={getImageUrl(movie.poster_path, 'w500')}
            alt={movie.title}
            className=' object-cover'
            layout='fill'
          />
         </div>
          <div className='bg-black'>
            <p className='absolute bottom-2 left-2 font-semibold text-white'>
              {movie.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesGrid;
