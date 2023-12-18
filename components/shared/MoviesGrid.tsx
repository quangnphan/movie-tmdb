import React from 'react';
import { Movie } from '@/types/tmdb';
import Image from 'next/image';
import { getImageUrl } from '@/services/tmdb';
import { PlayCircle } from 'lucide-react';

interface MoviesProps {
  movies: Movie[];
}

const MoviesGrid = ({ movies }: MoviesProps) => {
  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`relative bg-gray-800 p-4 group ${
            index === 0 ? 'md:col-span-2 md:row-span-2' : ''
          }`}
        >
          <div className='h-24'>
            <Image
              src={getImageUrl(movie.poster_path, 'w500')}
              alt={movie.title}
              className='object-cover group-hover:!opacity-60 duration-500'
              layout='fill'
            />
          </div>
          <div>
            <div className='absolute inset-0 z-10 flex items-center justify-center text-slate-100 transition duration-500 opacity-0 group-hover:opacity-100 cursor-pointer'>
              <PlayCircle height={40} width={40} />
            </div>
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
